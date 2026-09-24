import { link } from "fs";

export const aboutConfig = {
  title: "About Me",

  description:
    "I’m a Data Science student with a strong background in mathematics and a growing interest in Data Analytics and Business Intelligence. I enjoy working with data across different fields and turning complex datasets into meaningful insights. My goal is to understand the data, tell its story, and help people make better, data-driven decisions. I also enjoy the creative side of analytics—designing clear and intuitive dashboards that make insights easier to understand and act on.",

  image: "/assets/images/about.jpg",

  stats: [
    {
      value: "16.88/20",
      label: "Final GPA",
    },
    {
      value: "Rank 3",
      label: "In My Major",
    },
    {
      value: "10+",
      label: "Data Projects",
    },
  ],

  skills: [
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Tableau",
    "Git",
    "MachineLearning",
    "CriticalThinking",
    "DataVisualization",
    "StoryTelling",
    
  ],

  experience: {
    title: "What I Work On",

    items: [
      {
        period: "Current",
        role: "Data Analytics & BI",
        company: "Independent Projects",
        description:
          "Building practical analytics projects using SQL, Excel, Power BI, Python, and real-world datasets, with a focus on data cleaning, modeling, analysis, visualization, and business insights.",
      },

      {
        period: "Academic",
        role: "Mathematics & Applications",
        company: "Shahid Beheshti University",
        description:
          "Developed a strong foundation in mathematics, statistics, analytical reasoning, and problem solving, graduating with a 16.88/20 GPA and ranking 3rd in my major.",
      },
    ],
  },
    academy: {
    title: "My Academic Background",

    items: [
      {
        period: "2026 - Current",
        role: "Data Science",
        company: "Shahid Beheshti University",
        companyUrl: "https://sbu.ac.ir/",
        description:
          "Recognized as an Exceptional Talented Student and admitted to a Master’s program without taking the national university entrance exam (Konkur).",
      },

      {
        period: "2022 - 2026",
        role: "Mathematics & Applications",
        company: "Shahid Beheshti University",
        companyUrl: "https://sbu.ac.ir/",
        description:
          "",
      },
    ],
  },

  connect: {
    title: "Let's Connect",

    description:
      "I’m interested in junior and internship opportunities in Data Analytics and Business Intelligence. If you’re working on a data-driven product, team, or project, feel free to get in touch.",

    links: {
      github: {
        text: "GitHub",
        url: "YOUR_GITHUB_URL",
      },

      telegram: {
        text: "Telegram",
        url: "YOUR_GITHUB_URL",
      },

      linkedin: {
        text: "LinkedIn",
        url: "YOUR_LINKEDIN_URL",
      },

      email: {
        text: "Email",
        url: "mailto:YOUR_EMAIL",
      },
    },
  },
};