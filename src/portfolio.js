/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Akash Balaji",
  description:
    " Software Engineer with experience in Full-Stack engineering, machine learning and data engineering. Adept in backend development, model deployment and NLP using Python and Javascript. Proven ability to build end-to-end solutions.",
  og: {
    title: "Akash Balaji Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Akash Balaji",
  // logo_name: "AshutoshHathidara",
  subTitle:
    "Software Engineer with experience in Full-Stack engineering, machine learning and data engineering. Adept in backend development, model deployment and NLP using Python and Javascript. Proven ability to build end-to-end solutions",
  resumeLink:
    "https://drive.google.com/file/d/1nllRJgJNNdr2CBSO_9VCzM76YBhhkFCl/view?usp=sharing",
  portfolio_repository: "https://github.com/akash-2303/masterPortfolio",
  githubProfile: "https://github.com/akash-2303",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/akash-2303",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/akash-balaji-2658a89a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Email (UFL)",
    link: "mailto:akashbalaji@ufl.edu",
    fontAwesomeIcon: "fas fa-envelope", // Use envelope icon for general email
    backgroundColor: "#D14836",
  },
  {
    name: "Gmail",
    link: "mailto:akubala23@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Versatile in mutiple programming languages including C++, Python, JavaScript, and Go",
        "⚡ Building responsive web apps using modern frontend libraries like ReactJS",
        "⚡ Creating robust backend systems using frameworks like Flask, FastAPI, Django, and Gin",
        "⚡ Developing RESTful APIs and integrating services end-to-end",
        "⚡ Extensive experience with Git for version control and collaboration",
        "⚡ Writing backend unit tests using Pytest and frontend unit tests using Vitest",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: { color: "#339933" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "Gin",
          fontAwesomeClassname: "simple-icons:go",
          style: { color: "#00ADD8" }, // Using Go icon for Gin
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F1502F" },
        },
        {
          skillName: "Pytest",
          fontAwesomeClassname: "simple-icons:pytest",
          style: { color: "#0A9EDC" },
        },
        {
          skillName: "Vitest",
          fontAwesomeClassname: "simple-icons:vitest",
          style: { color: "#6E9F18" },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: { color: "#CB3837" },
        },
      ],
    },

    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for deep learning and statistical use cases",
        "⚡ Experience with Computer Vision tasks using OpenCV for real-time object detection and classification",
        "⚡ Expertise in NLP techniques for text cleaning, clustering, and toxicity evaluation using pre-trained language models (GPT-2, BERT)",
        "⚡ Building robust data pipelines and automated workflows for large-scale data extraction, processing, and analysis",
        "⚡ Scripting data processing tasks and automation using Bash and shell scripts for efficient pipeline orchestration",
        "⚡ Designing and deploying time-series and machine learning algorithms for contextual and temporal data mapping",
        "⚡ Visualizing pipelines and data flows using Plotly and Dash for better understanding and debugging",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { backgroundColor: "transparent", color: "#3776AB" },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#00758F" },
        },
        {
          skillName: "Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: { color: "#4EAA25" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: { color: "#5C3EE8" },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: { backgroundColor: "white", color: "#D00000" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: { backgroundColor: "transparent" },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Conda",
          fontAwesomeClassname: "simple-icons:anaconda",
          style: { color: "#4B8BBE" },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:matplotlib",
          style: { color: "#F9A03F" },
        },
        {
          skillName: "Seaborn",
          fontAwesomeClassname: "simple-icons:seaborn",
          style: { color: "#3E5A99" },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: { color: "#3F4B8E" },
        },
        {
          skillName: "Dash",
          fontAwesomeClassname: "simple-icons:dash",
          style: { color: "#3E5A99" },
        },
        {
          skillName: "spaCy",
          fontAwesomeClassname: "simple-icons:spacy",
          style: { color: "#00A3E0" },
        },
        {
          skillName: "HuggingFace",
          fontAwesomeClassname: "simple-icons:huggingface",
          style: { color: "#FF6F20" },
        },
      ],
    },

    {
      title: "Tools & Platforms",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced with cloud platforms and modern backend infrastructure",
        "⚡ Containerized full-stack applications using Docker for reproducible environments",
        "⚡ Hands-on with PostgreSQL and MongoDB for relational and NoSQL data management",
        "⚡ Developed and tested E2E flows using Cypress for production-level reliability",
        "⚡ Familiar with deploying machine learning models and managing CI/CD pipelines",
      ],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "Cypress",
          fontAwesomeClassname: "simple-icons:cypress",
          style: { color: "#17202C" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/akubala/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/akubala23",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Florida",
      subtitle: "M.S. in Computer Science",
      logo_path: "University-of-Florida-Logo.png", // Replace this with your logo file later
      alt_name: "University of Florida",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ GPA: 3.83/4.00",
        "⚡ Awarded the Academic Achievement Award Scholarship for the first three semesters.",
        "⚡ Completed foundational and advanced courses such as:",
        "  • Advanced Data Structures",
        "  • Analysis of Algorithms",
        "  • Computer Networks",
        "  • Distributed Operating System Principles",
        "  • Data Engineering",
        "  • Software Engineering",
        "  • Introduction to Data Science",
        "  • Applied Machine Learning",
        "  • Natural Language Processing",
      ],
      website_link: "https://www.ufl.edu/",
    },

    {
      title: "SRM Institute of Science and Technology",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "srmist.jpeg", // Replace with the correct logo file
      alt_name: "SRM Institute of Science and Technology",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ CGPA: 9.13 / 10",
        "⚡ Completed foundational courses including:",
        "  • Advanced Data Structures (ADS), Analysis of Algorithms (AOA), Computer Networks, Operating Systems, Calculus",
        "⚡ Also took advanced and domain-specific courses such as:",
        "  • Network Security, Compiler Design, Distributed Systems, Database Management Systems (DBMS)",
        "⚡ Participated in various hackathons and coding competitions, securing top positions and involved in organizations like Logicplay and NSS.",
      ],
      website_link: "https://www.srmist.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title:
        "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
      subtitle: "- Oracle",
      logo_path: "OCI-img.png",
      certificate_link:
        "https://catalog-education.oracle.com/ords/certview/sharebadge?id=B2A09F0740B4929CB0112705D6E0B649CDA8C9EE85E010D1AEEEB4C4E08BCBE6",
      alt_name: "Oracle",
      color_code: "#F80000",
    },
    {
      title: "The Complete Python Bootcamp: Zero to Hero in Python",
      subtitle: "- Udemy",
      logo_path: "udemy.png", // Replace with actual Udemy logo file
      certificate_link:
        "https://www.udemy.com/certificate/UC-1af665e4-bf39-4316-a98a-4e2e0d5ece72/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
    {
      title: "Coding for Everyone: C and C++",
      subtitle: "- University of California, Santa Cruz",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/26WF8KRA35HP",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Advanced Styling with Responsive Design",
      subtitle: "- University of London",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/URXPW58LCNXS",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Object-Oriented Data Structures in C++",
      subtitle: "- University of Illinois at Urbana-Champaign",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/BHBKRDVTB3P6",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: " Learn C++ Programming -Beginner to Advance- Deep Dive in C++",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-2a0282db-2185-4f45-b3fe-0ee7bab8f3c8/",
      alt_name: "Udemy",
      color_code: "#A435F0",
    },
  ],
};

//Experience page
const experience = {
  title: "Experience",
  subtitle: "Work and Research",
  description:
    "Here are two key experiences highlighting my work in full-stack development and NLP-based research during my time at the University of Florida.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Web Developer (Part - Time)",
          company: "UF/IFAS",
          company_url: "https://ifas.ufl.edu/",
          logo_path: "University-of-Florida-Logo.png",
          duration: "Aug 2024 - Jan 2025",
          location: "Gainesville, FL (Remote)",
          description:
            "Led development of the Spatial Metadata Investigator, a web app for validating IHO S-100 compliant metadata. Built with Tethys and Dockerized for deployment, it includes real-time XML validation, FAIR data integration, and PostgreSQL support for querying metadata discrepancies. Spearheaded app development using Django and Python, integrated FAIR principles, implemented two-stage XML validation with live feedback, designed PostgreSQL-backed metadata storage, and dockerized the application for cloud deployment. GitHub: https://github.com/akash-2303/tethysapp-metadata_investigator",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Research",
      experiences: [
        {
          title: "Independent Study - Data Science & NLP",
          company: "UF Data Studios",
          company_url: "https://cns.ufl.edu/",
          logo_path: "University-of-Florida-Logo.png",
          duration: "Aug 2024 – Dec 2024",
          location: "University of Florida",
          description:
            "Led an NLP-based political discourse analysis project using YouTube debate comment data. Built a data pipeline with YouTube API to extract comments from 2020 and 2024 debates. Used pyannote and Bash scripts to generate timestamped transcripts and diarize speakers. Applied spaCy and CUDA-accelerated KNN for sentiment mapping over time. Explored BERT, GPT-2, and MIL models for text detoxification. Visualized opinion trends with Plotly, Dash, Seaborn, and Matplotlib. GitHub: https://github.com/akash-2303/Vibe-Check-Blog",
          color: "#0021A5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "These projects span full-stack development, machine learning, and AI applications. They demonstrate my ability to build scalable systems, implement complex logic, and deploy robust applications using modern technologies.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Here is my publication.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ai-manufacturing-review",
      name:
        "Applications of Artificial Intelligence in Manufacturing: A Review",
      createdAt: "2022-11-01T00:00:00Z",
      description:
        "This review sheds light on AI’s transformative role in the manufacturing sector, its impact on metallurgy, and future research avenues.",
      url: "https://www.trendytechjournals.com/ijtret/volume7/issue1-5.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "grad_pic.jpg",
    description:
      "I am available through the below listed socials. You can message me, I will reply within 24 hours. I can help with Software Development and Data Engineering tasks.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Location",
    subtitle: "Florida, Gainesville",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
