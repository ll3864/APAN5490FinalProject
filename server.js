const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const careers = require("./careersData");

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/career_matching")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Models
const userSchema = new mongoose.Schema({
    education: String,
    major: [String],
    technical_skills: [String],
    soft_skills: [String],
    industry: String,
    work_type: [String],
    mbti: String
});

const careerSchema = new mongoose.Schema({
    job_title: String,
    industry: String,
    education: String,
    major: [String],
    technical_skills: [String],
    soft_skills: [String],
    work_type: String,
    starting_salary: Number,
    mbti_fit: [String],
    avg_working_hours: Number,
    key_responsibilities: [String],
    salary_growth_rate: Number,
    market_demand: String
});

const User = mongoose.model("User", userSchema);
const Career = mongoose.model("Career", careerSchema);


// SAFE ARRAY PARSER
function safeArray(value) {
    if (Array.isArray(value)) return value;
    if (!value) return [];
    try {
        const parsed = JSON.parse(value);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}


// Education Scoring
const educationRank = {
    "High School": 1,
    "Associate Degree": 2,
    "Bachelor’s Degree": 3,
    "Master’s Degree": 4,
    "PhD": 5
};

function educationScore(userEdu, jobEdu) {
    const u = educationRank[userEdu] || 0;
    const j = educationRank[jobEdu] || 0;

    if (u < j) return 0;
    return 1;
}


// Skill Similarity
function skillSimilarity(userSkills, jobSkills) {
    userSkills = safeArray(userSkills);
    jobSkills = safeArray(jobSkills);

    if (!userSkills.length || !jobSkills.length) return 0;

    const userSet = new Set(userSkills.map(s => s.toLowerCase()));
    let matches = 0;

    for (const skill of jobSkills) {
        if (userSet.has(skill.toLowerCase())) matches++;
    }

    return matches / jobSkills.length;
}


// ------------ Major Match (SAFE) ------------
function majorMatch(userMajors, jobMajors) {
    userMajors = safeArray(userMajors);
    jobMajors = safeArray(jobMajors);

    const userSet = new Set(userMajors.map(m => m.toLowerCase()));
    const jobSet = new Set(jobMajors.map(m => m.toLowerCase()));

    const intersection = [...userSet].filter(m => jobSet.has(m));
    return intersection.length > 0 ? 1 : 0;
}


// Work Type Match
function multiSelectMatch(userArray, jobValue) {
    userArray = safeArray(userArray);
    if (!jobValue) return 0;

    return userArray.map(v => v.toLowerCase()).includes(jobValue.toLowerCase()) ? 1 : 0;
}


// MBTI Match
function listMatch(value, list = []) {
    list = safeArray(list);
    return list.map(v => v.toLowerCase()).includes(value?.toLowerCase()) ? 1 : 0;
}


// Tech Weighting
function getDynamicWeights(career) {
    if ((career.work_type || "").toLowerCase() === "tech") {
        return { techWeight: 40, softWeight: 20 };
    }
    return { techWeight: 20, softWeight: 40 };
}


// Total Score
function calculateCareerScore(career, user) {
    const { techWeight, softWeight } = getDynamicWeights(career);

    const score =
        skillSimilarity(user.technical_skills, career.technical_skills) * techWeight +
        skillSimilarity(user.soft_skills, career.soft_skills) * softWeight +
        educationScore(user.education, career.education) * 10 +
        majorMatch(user.major, career.major) * 10 +
        (user.industry?.toLowerCase() === career.industry?.toLowerCase() ? 10 : 0) +
        multiSelectMatch(user.work_type, career.work_type) * 5 +
        listMatch(user.mbti, career.mbti_fit) * 5;

    return Math.round(score);
}


// Insert MongoDB
(async () => {
    if (await Career.countDocuments() === 0) {
        await Career.insertMany(careers);
        console.log("Careers inserted!");
    }
})();


// Save User Survey
app.post("/survey", async (req, res) => {
    const clean = {
        education: req.body.education,
        major: safeArray(req.body.major),
        technical_skills: safeArray(req.body.technical_skills),
        soft_skills: safeArray(req.body.soft_skills),
        industry: req.body.industry,
        work_type: safeArray(req.body.work_type),
        mbti: req.body.mbti
    };

    const newUser = await User.create(clean);
    res.json({ userId: newUser._id });
});



// Fetch User
app.get("/user/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
});


// Recommendations
app.get("/recommendations/:userId", async (req, res) => {
    const user = await User.findById(req.params.userId);
    const careersList = await Career.find();

    // Normalize incoming user data
    user.major = safeArray(user.major);
    user.technical_skills = safeArray(user.technical_skills);
    user.soft_skills = safeArray(user.soft_skills);
    user.work_type = safeArray(user.work_type);

    const scored = careersList.map(career => ({
        ...career.toObject(),
        score: calculateCareerScore(career, user)
    }));

    scored.sort((a, b) => b.score - a.score);
    res.json(scored.slice(0, 3));
});


app.listen(3001, () => console.log("Server running at http://localhost:3001"));
