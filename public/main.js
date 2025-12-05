// ====== Word banks ======
const MAJOR_WORD_BANK = [
    "Medical Laboratory Science",
    "Clinical Laboratory Science",
    "Biology",
    "Biotechnology",
    "Chemistry",
    "Health Science",
    "Public Health",
    "Nursing",
    "Biochemistry",
    "Neuroscience",
    "Epidemiology",
    "Microbiology",
    "Nutrition",
    "Dietetics",
    "Food Science",
    "Environmental Health",
    "Health Education",
    "Health Administration",
    "Nursing Informatics",
    "Occupational Therapy Assistant",
    "Rehabilitation Science",
    "Computer Science",
    "Information Systems",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Computer Engineering",
    "Data Science",
    "Mechanical Engineering Technology",
    "Industrial Technology",
    "Manufacturing",
    "Materials Engineering",
    "Chemical Engineering",
    "Petroleum Engineering",
    "Mechanical Technology",
    "Industrial Engineering",
    "Business",
    "Finance",
    "Accounting",
    "Business Administration",
    "Management",
    "Human Resources",
    "Marketing",
    "Advertising",
    "Business Analytics",
    "Economics",
    "Logistics",
    "Supply Chain Management",
    "Operations Management",
    "Transportation",
    "Horticulture",
    "Agronomy",
    "Plant Science",
    "Agricultural Science",
    "Soil Science",
    "Agricultural Economics",
    "Genetics",
    "Environmental Science",
    "Environmental Studies",
    "Urban Planning",
    "Urban Studies",
    "Geography",
    "Civil Engineering",
    "Public Policy",
    "Public Administration",
    "Political Science",
    "Sociology",
    "Anthropology",
    "Criminal Justice",
    "Psychology",
    "Social Work",
    "English",
    "Journalism",
    "Communications",
    "Media Studies",
    "Film Production",
    "Media Arts",
    "Visual Communication",
    "Graphic Design",
    "Fine Arts",
    "Digital Arts",
    "Design and Technology",
    "Mathematics",
    "Applied Mathematics",
    "Statistics",
    "Analytical Science",
    "Hospitality",
    "Tourism",
    "None required",
    "Quality Control",
    "Library Science",
    "Education"
];

const TECH_SKILL_BANK = [
    // Original Base
    "Lab instrumentation",
    "PCR wet lab",
    "EHR systems Epic Cerner",
    "EMR documentation",
    "Data Cleaning",
    "GCP Good Clinical Practice",
    "Research methods",
    "EMR documentation (EHR/HIS)",
    "Microbial plating",
    "Sterile technique",
    "Sample analysis",
    "Food safety auditing",
    "HACCP protocols",
    "Shelf-life testing",
    "Product formulation",
    "Inspection procedures",
    "Field sampling",
    "Soil testing",
    "GIS",
    "GIS data entry",
    "Survey design",
    "Policy analysis",
    "Healthcare systems",
    "HTML CSS",
    "Python",
    "SQL",
    "Tableau",
    "Power BI",
    "R",
    "Statistics and Regression",
    "Cloud deployment",
    "ETL",
    "Data modeling",
    "CNC programming",
    "Blueprint reading",
    "Assembly procedures",
    "Troubleshooting",
    "Equipment maintenance",
    "Machine operation",
    "Inspection tools",
    "Oil/Gas production software",
    "Calibration",
    "Financial modeling",
    "Forecasting",
    "Excel advanced",
    "HRIS",
    "Vendor coordination",
    "CRM tools HubSpot Salesforce",
    "SEO and SEM",
    "Google Ads",
    "Google Analytics",
    "Social media management tools",
    "CMS tools",
    "Email automation",
    "ERP tools",
    "Inventory management",
    "Warehouse Management Systems",
    "Forklift operation",
    "Shipment tracking",
    "Routing tools",
    "Customs procedures",
    "Logistics tools",
    "Route optimization software",
    "GPS tracking systems",
    "Inventory systems",
    "Tracking tools",
    "Customer service systems",
    "Data documentation",
    "R and D experimentation",
    "Crop monitoring",
    "Seed harvesting",
    "Seed sorting",
    "Packaging equipment operation",
    "Sanitation procedures",
    "Packaging systems",
    "Quality checks",
    "Equipment operation",
    "Material handling",
    "Production monitoring",
    "Safety procedures",
    "Regulation compliance",
    "Process mapping",
    "Lifecycle analysis",
    "Civil 3D",
    "Writing and editing",
    "Report writing",
    "Public speaking platforms",
    "Basic HTML",
    "CMS",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Figma",
    "Adobe Premiere Pro",
    "Project management tools Asana Jira",
    "MS Project",
    "Cloud basics",
    "ERP",
    "Amazon Seller Central",
    "CRM systems",
    "Scheduling software",
    "Inventory movement",
    "Inventory planning",
    "Logistics systems",
    "Routing algorithms",
    "Safety compliance",
    "Temperature monitoring",
    "Complaint handling",
    "Quality control",
    "Copywriting",
    "Tracking software",
    "Guest satisfaction tracking",
    "Cataloging Systems",
    "Research Databases",
    "Activity Planning",
    "Classroom Management",

    // --- EXPANDED TECH SKILLS (Programming, AI, Frameworks, DBs) ---
    
    // Programming Languages
    "JavaScript", "TypeScript", "Java", "C++", "C#", "Go", "Ruby", "Swift", "Kotlin", "Rust", "PHP", "Matlab", "Scala", "Perl",
    
    // Web Frameworks & Libraries
    "React", "Angular", "Vue.js", "Next.js", "Svelte", "Node.js", "Express.js", "Django", "Flask", "FastAPI", "Spring Boot", "ASP.NET", "Ruby on Rails", "Laravel", "jQuery", "Bootstrap", "Tailwind CSS",
    
    // AI / ML / Data Science
    "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "OpenCV", "NLTK", "Spacy", "Hugging Face Transformers", "LLMs (Large Language Models)", "Generative AI", "Computer Vision", "Natural Language Processing", "Reinforcement Learning", "Jupyter Notebooks",
    
    // Databases
    "MySQL", "PostgreSQL", "MongoDB", "Oracle Database", "Microsoft SQL Server", "SQLite", "Redis", "Cassandra", "Firebase", "DynamoDB", "Elasticsearch", "Neo4j",
    
    // DevOps & Cloud
    "Docker", "Kubernetes", "AWS (Amazon Web Services)", "Azure", "Google Cloud Platform (GCP)", "Jenkins", "Git", "GitHub", "GitLab", "CI/CD", "Terraform", "Ansible", "Linux", "Bash Scripting", "Nginx", "Apache",
    
    // Mobile Development
    "React Native", "Flutter", "iOS Development", "Android Development", "Xamarin", "Ionic",
    
    // Testing
    "Jest", "Mocha", "Selenium", "Cypress", "JUnit", "PyTest",
    
    // Other Tech
    "GraphQL", "REST APIs", "Microservices", "WebSockets", "Blockchain", "Smart Contracts", "Solidity", "Unity", "Unreal Engine", "Game Development", "AR/VR Development"
];

const SOFT_SKILL_BANK = [
    "Attention to detail",
    "Teamwork",
    "Time management",
    "Communication",
    "Collaboration",
    "Critical thinking",
    "Empathy",
    "Patience",
    "Initiative",
    "Problem solving",
    "Accuracy",
    "Professionalism",
    "Organization",
    "Coordination",
    "Responsibility",
    "Client communication",
    "Analytical thinking",
    "Logical thinking",
    "Leadership",
    "Strategic thinking",
    "Negotiation",
    "Relationship-building",
    "Customer service",
    "Adaptability",
    "Analytical mindset",
    "Presentation",
    "Conflict resolution",
    "Presentation skills",
    "Research ability",
    "Cultural competence",
    "Stakeholder management",
    "Creativity",
    "Writing and editing",
    "Curiosity",
    "Energy",
    "Emotional Intelligence",
    "Active Listening",
    "Flexibility",
    "Resilience",
    "Work Ethic",
    "Interpersonal Skills",
    "Decision Making",
    "Mentoring",
    "Public Speaking",
    "Storytelling",
    "Design Thinking",
    "Self-motivation"
];

let selectedMajors = [];
let selectedTechSkills = [];
let selectedSoftSkills = [];


// Bootstrapping
document.addEventListener("DOMContentLoaded", () => {
    const surveyForm = document.getElementById("surveyForm");
    const resultsContainer = document.getElementById("results");
    const loginForm = document.getElementById("loginForm");
    const profileName = document.getElementById("profileName");
    const contactForm = document.getElementById("contactForm");
    const startSurveyBtn = document.getElementById("startSurveyBtn"); // NEW

    if (surveyForm) {
        setupSurveyForm(surveyForm);
        setupMajorAutocomplete();
        setupSkillAutocomplete("techSkillInput", "techSkillSuggestions", TECH_SKILL_BANK, "technical_skills");
        setupSkillAutocomplete("softSkillInput", "softSkillSuggestions", SOFT_SKILL_BANK, "soft_skills");
    }

    if (resultsContainer) {
        loadResults(resultsContainer);
    }

    if (loginForm) {
        setupAuth(loginForm);
    }

    if (profileName) {
        loadProfile();
    }

    if (contactForm) {
        setupContactForm(contactForm);
    }
    
    // Survey Access Logic
    if (startSurveyBtn) {
        startSurveyBtn.addEventListener("click", (e) => {
            e.preventDefault();
            const userId = localStorage.getItem("userId");
            if (userId) {
                window.location.href = "survey.html";
            } else {
                alert("Please sign in to take the career test.");
                window.location.href = "signin.html";
            }
        });
    }
    
    updateNavigation();
});


// AUTH LOGIC
function setupAuth(form) {
    const toggleBtn = document.getElementById("toggleAuth");
    const authTitle = document.getElementById("authTitle");
    const authSubmitBtn = document.getElementById("authSubmitBtn");
    const nameGroup = document.getElementById("nameGroup");
    const nameInput = nameGroup.querySelector("input");
    
    let isSignUp = false;

    toggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        isSignUp = !isSignUp;

        if (isSignUp) {
            authTitle.textContent = "Create an account";
            authSubmitBtn.textContent = "Sign Up";
            toggleBtn.textContent = "Sign in";
            // Safer text replacement
            const parent = toggleBtn.parentElement;
            parent.childNodes[0].textContent = "Already have an account? ";
            nameGroup.classList.remove("hidden");
            nameInput.required = true;
        } else {
            authTitle.textContent = "Sign into your account";
            authSubmitBtn.textContent = "Sign In";
            toggleBtn.textContent = "Sign up";
            const parent = toggleBtn.parentElement;
            parent.childNodes[0].textContent = "Don't have an account? ";
            nameGroup.classList.add("hidden");
            nameInput.required = false;
        }
    });

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");
        const name = formData.get("name");

        const endpoint = isSignUp ? "/register" : "/login";
        const payload = isSignUp ? { email, password, name } : { email, password };

        try {
            console.log(`Attempting ${isSignUp ? 'Register' : 'Login'} to ${endpoint}...`);
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (res.ok) {
                console.log("Auth success:", data);
                // Login/Register Success
                localStorage.setItem("userId", data.userId);
                if (data.name) localStorage.setItem("userName", data.name);
                
                alert(isSignUp ? "Account created! Logging in..." : "Login Successful!");
                window.location.href = "index.html";
            } else {
                console.warn("Auth failed:", data);
                alert(data.error || "Authentication failed");
            }
        } catch (err) {
            console.error("Network Error Details:", err);
            alert("Network error: " + err.message + ". Ensure server is running at http://localhost:3001");
        }
    });
}

function updateNavigation() {
    const userId = localStorage.getItem("userId");
    
    // Select ALL instances (Header and Footer)
    const profileLinks = document.querySelectorAll('a[href="profile.html"]');
    const signinLinks = document.querySelectorAll('a[href="signin.html"]');

    if (userId) {
        // === LOGGED IN ===
        
        // 1. Profile Links: Ensure visible
        profileLinks.forEach(link => {
            link.style.display = "inline-block";
        });

        // 2. Sign In Links -> Turn into "Log Out"
        signinLinks.forEach(link => {
            link.textContent = "Log Out";
            link.href = "#";
            link.style.display = "inline-block";
            
            // Clone to strip existing listeners, then add Logout listener
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);
            
            newLink.addEventListener("click", (e) => {
                e.preventDefault();
                localStorage.removeItem("userId");
                localStorage.removeItem("userName");
                alert("Logged out successfully.");
                window.location.href = "index.html";
            });
        });

    } else {
        // === LOGGED OUT ===
        profileLinks.forEach(link => {
             link.style.display = "inline-block"; 
        });
    }
}

// PROFILE LOGIC (NEW)
async function loadProfile() {
    const userId = localStorage.getItem("userId");
    
    if (!userId) {
        // Redirect if not logged in
        window.location.href = "signin.html";
        return;
    }

    try {
        const res = await fetch(`/user/${userId}`);
        if (!res.ok) throw new Error("Failed to fetch profile");
        
        const user = await res.json();
        
        // Populate Header
        document.getElementById("profileName").textContent = user.name || "User";

        // Populate Personal Overview
        setText("pEducation", user.education);
        setText("pIndustry", user.industry);
        
        // Work Mode: Join array if multiple, else show single or placeholder
        const workMode = Array.isArray(user.work_type) ? user.work_type.join(", ") : user.work_type;
        setText("pWorkMode", workMode);
        
        setText("pMbti", user.mbti);

        // Populate Skills
        const skillsContainer = document.getElementById("pSkills");
        const allSkills = [...(user.technical_skills || []), ...(user.soft_skills || [])];
        
        if (allSkills.length > 0) {
            skillsContainer.innerHTML = allSkills.map(s => `<span class="skill-tag">${s}</span>`).join("");
        }

        // Populate Interests (Using Major for now as proxy, or industry)
        const interestsContainer = document.getElementById("pInterests");
        const majors = Array.isArray(user.major) ? user.major : (user.major ? [user.major] : []);
        
        if (majors.length > 0) {
            interestsContainer.innerHTML = majors.map(m => `<span class="skill-tag" style="background:#f3f4f6; color:#374151;">${m}</span>`).join("");
        } else if (user.industry) {
             interestsContainer.innerHTML = `<span class="skill-tag" style="background:#f3f4f6; color:#374151;">${user.industry}</span>`;
        }

        // BUTTON LOGIC
        const btnView = document.getElementById("btnViewReport");
        const btnDownload = document.getElementById("btnDownloadReport");
        const btnEdit = document.getElementById("btnEditProfile");

        if (btnView) {
            btnView.onclick = () => window.location.href = `results.html?userId=${userId}`;
        }
        
        if (btnDownload) {
            btnDownload.onclick = () => {
                window.open(`results.html?userId=${userId}&print=true`, '_blank');
            };
        }

        if (btnEdit) {
            btnEdit.onclick = () => window.location.href = "survey.html";
        }

    } catch (err) {
        console.error(err);
        document.getElementById("profileName").textContent = "Error loading profile";
    }
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el) {
        el.textContent = value || "-";
    }
}


// Survey submit

function prepareTagsBeforeSubmit() {
    const form = document.getElementById("surveyForm");

    // Remove old hidden inputs
    ["major", "technical_skills", "soft_skills"].forEach(name => {
        const old = form.querySelector(`input[name="${name}"]`);
        if (old) old.remove();
    });

    // Insert fresh ones populated with the current selected[] arrays
    insertHidden("major", selectedMajors);
    insertHidden("technical_skills", selectedTechSkills);
    insertHidden("soft_skills", selectedSoftSkills);
}

function insertHidden(name, array) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = JSON.stringify(array);
    document.getElementById("surveyForm").appendChild(input);
}

function setupSurveyForm(form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        prepareTagsBeforeSubmit();

        const fd = new FormData(form);
        const data = {};

        data.education = fd.get("education") || "";
        data.industry  = fd.get("industry") || "";
        data.mbti      = fd.get("mbti") || "";

        const wt = fd.get("workType");
        data.work_type = wt ? [wt] : [];

        // SAFELY PARSE TAG ARRAYS
        data.major = fd.get("major") ? JSON.parse(fd.get("major")) : [];
        data.technical_skills = fd.get("technical_skills") ? JSON.parse(fd.get("technical_skills")) : [];
        data.soft_skills = fd.get("soft_skills") ? JSON.parse(fd.get("soft_skills")) : [];

        // ATTACH USER ID IF LOGGED IN
        const userId = localStorage.getItem("userId");
        if (userId) {
            data.userId = userId;
        }

        try {
            const res  = await fetch("/survey", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const json = await res.json();
            window.location.href = `results.html?userId=${json.userId}`;

        } catch (err) {
            console.error(err);
            alert("Error submitting survey.");
        }
    });
}

// CONTACT FORM LOGIC (NEW)
function setupContactForm(form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = formData.get("name");
        const message = formData.get("message");

        try {
            const res = await fetch("/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, message })
            });

            const data = await res.json();

            if (res.ok) {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert(data.error || "Failed to send message");
            }
        } catch (err) {
            console.error(err);
            alert("Network error sending message");
        }
    });
}


// Results page logic
async function loadResults(container) {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get("userId");
    if (!userId) {
        container.innerHTML = "<p>No user id. Please take the survey first.</p>";
        return;
    }

    container.innerHTML = "<p>Loading recommendations...</p>";

    try {
        const [careerRes, userRes] = await Promise.all([
            fetch(`/recommendations/${userId}`),
            fetch(`/user/${userId}`)
        ]);

        const careers = await careerRes.json();
        const user    = await userRes.json();

        if (!careers.length) {
            container.innerHTML = "<p>No matches found.</p>";
            return;
        }

        // Redesign Results UI (Column-Based Card View)
        container.innerHTML = "";
        
        // REMOVED DYNAMIC HEADER to avoid duplication with static HTML
        // const header = document.createElement("div"); ...

        const resultsContainer = document.createElement("div");
        resultsContainer.className = "results-container";

        // 1. Labels Column
        const labelsCol = document.createElement("div");
        labelsCol.className = "result-column labels-column";
        labelsCol.innerHTML = `
            <div class="label-cell">Match Score</div>
            <div class="label-cell">Industry</div>
            <div class="label-cell">Starting Salary</div>
            <div class="label-cell">Avg Working Hours</div>
            <div class="label-cell">Salary Growth</div>
            <div class="label-cell">Market Demand</div>
            <div class="label-cell">Key Skills<br>(Have)</div>
            <div class="label-cell">Skills to Improve</div>
            <div class="label-cell">Job Description</div>
        `;
        resultsContainer.appendChild(labelsCol);

        // 2. Job Columns
        careers.forEach(c => {
            const match = getSkillAnalysis(user, c);
            const col = document.createElement("div");
            col.className = "result-column job-card-column";
            
            col.innerHTML = `
                <div class="job-header">${c.job_title}</div>
                <div class="data-cell match-score">${c.score}%</div>
                <div class="data-cell">${c.industry}</div>
                <div class="data-cell">$${c.starting_salary.toLocaleString()}/yr</div>
                <div class="data-cell">${c.avg_working_hours} hrs/week</div>
                <div class="data-cell">${(c.salary_growth_rate * 100).toFixed(1)}%</div>
                <div class="data-cell">${c.market_demand}</div>
                <div class="data-cell small-text">${match.have.length ? match.have.slice(0,3).join(", ") : "-"}</div>
                <div class="data-cell small-text">${match.need.length ? match.need.slice(0,3).join(", ") : "None"}</div>
                <div class="data-cell small-text description-cell">${generateJobDescription(c)}</div>
            `;
            resultsContainer.appendChild(col);
        });

        container.appendChild(resultsContainer);

        // AUTO PRINT LOGIC
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('print') === 'true') {
            setTimeout(() => {
                window.print();
            }, 500);
        }

    } catch (err) {
        console.error(err);
        container.innerHTML = "<p>Error loading recommendations.</p>";
    }
}

// Helper functions (results)
function getSkillAnalysis(user, career) {
    const userTech = new Set((user.technical_skills || []).map(s => s.toLowerCase()));
    const userSoft = new Set((user.soft_skills || []).map(s => s.toLowerCase()));

    const have = [];
    const need = [];

    (career.technical_skills || []).forEach(skill => {
        if (userTech.has(skill.toLowerCase())) have.push(skill);
        else need.push(skill);
    });

    (career.soft_skills || []).forEach(skill => {
        if (userSoft.has(skill.toLowerCase())) have.push(skill);
        else need.push(skill);
    });

    return { have, need };
}

function generateJobDescription(career) {
    // Simplified description for table view
    return `Your profile aligns with ${career.job_title} due to shared skills in ${career.industry}. Focus on improving technical gaps to increase match potential.`;
}

// ====== Autocomplete for majors & skills ======
function setupMajorAutocomplete() {
    const input = document.getElementById("majorInput");
    const box   = document.getElementById("majorSuggestions");
    const tagBox = document.getElementById("majorBox");
    if (!input || !box || !tagBox) return;

    let selected = selectedMajors;

    input.addEventListener("input", () => {
        const q = input.value.toLowerCase().trim();
        box.innerHTML = "";
        if (!q) {
            box.style.display = "none";
            return;
        }
        const matches = MAJOR_WORD_BANK.filter(m =>
            m.toLowerCase().includes(q) && !selected.includes(m)
        );
        if (!matches.length) {
            box.style.display = "none";
            return;
        }
        matches.forEach(m => {
            const div = document.createElement("div");
            div.textContent = m;
            div.onclick = () => addTag(m);
            box.appendChild(div);
        });
        box.style.display = "block";
    });

    function addTag(value) {
        selected.push(value);
        const tag = document.createElement("div");
        tag.className = "tag";
        tag.innerHTML = `${value} <span class="remove">×</span>`;
        tag.querySelector(".remove").onclick = () => removeTag(value, tag);
        tagBox.insertBefore(tag, input);
        input.value = "";
        box.style.display = "none";
    }

    function removeTag(value, el) {
        selected = selected.filter(v => v !== value);
        el.remove();
    }

    document.getElementById("surveyForm").addEventListener("submit", () => {
        const hidden = document.createElement("input");
        hidden.type  = "hidden";
        hidden.name  = "major";
        hidden.value = JSON.stringify(selected);
        document.getElementById("surveyForm").appendChild(hidden);
    });
}

function setupSkillAutocomplete(inputId, suggestionsId, bank, fieldName) {
    const input = document.getElementById(inputId);
    const box   = document.getElementById(suggestionsId);
    if (!input || !box) return;

    const tagBox = input.parentElement;
    let selected =
        fieldName === "technical_skills"
            ? selectedTechSkills
            : selectedSoftSkills;

    input.addEventListener("input", () => {
        const q = input.value.toLowerCase().trim();
        box.innerHTML = "";
        if (!q) {
            box.style.display = "none";
            return;
        }
        const matches = bank.filter(s =>
            s.toLowerCase().includes(q) && !selected.includes(s)
        );
        if (!matches.length) {
            box.style.display = "none";
            return;
        }
        matches.forEach(s => {
            const div = document.createElement("div");
            div.textContent = s;
            div.onclick = () => addTag(s);
            box.appendChild(div);
        });
        box.style.display = "block";
    });

    function addTag(value) {
        selected.push(value);
        const tag = document.createElement("div");
        tag.className = "tag";
        tag.innerHTML = `${value} <span class="remove">×</span>`;
        tag.querySelector(".remove").onclick = () => removeTag(value, tag);
        tagBox.insertBefore(tag, input);
        input.value = "";
        box.style.display = "none";
    }

    function removeTag(value, el) {
        selected = selected.filter(v => v !== value);
        el.remove();
    }

    document.addEventListener("click", (e) => {
        if (!tagBox.contains(e.target)) box.style.display = "none";
    });

    document.getElementById("surveyForm").addEventListener("submit", () => {
        const hidden = document.createElement("input");
        hidden.type  = "hidden";
        hidden.name  = fieldName;
        hidden.value = JSON.stringify(selected);
        document.getElementById("surveyForm").appendChild(hidden);
    });
}
