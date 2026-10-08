export const projectsConfig = {
  title: "Projects",
  description: "Explore my projects in data, analytics, and technology. Click a project to see the work behind it.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "HR Tableau Dashboard",
      description: "An interactive HR Analytics dashboard built in Tableau to explore employee demographics, performance, satisfaction, and attrition. It transforms HR data into clear visual insights to help identify workforce trends and support data-driven decision-making.",
      href: "https://github.com/AmirHSoukhteh/Tableau-Works",
      imageUrl: "/assets/images/projects/thumbnail-HR.jpg"
    },
    {
      title: "Sales Tableau Dashboard",
      description: "An interactive sales dashboard built to analyze revenue, sales performance, product trends, and regional performance. It turns sales data into actionable insights, helping identify growth opportunities and support data-driven business decisions.",
      href: "https://github.com/AmirHSoukhteh/Tableau-Works",
      imageUrl: "/assets/images/projects/thumbnail-sales.jpg"
    },
    {
      title: "Medallion Data Warehouse Pipeline",
      description: "Built a multi-stage ETL data pipline using SQL Server Management Studio(SSMS), organizing raw data into Bronze, Silver, and Gold layers to deliver structured, business-ready analytics.",
      href: "https://github.com/AmirHSoukhteh/sql-data-warehouse",
      imageUrl: "/assets/images/projects/thumbnail-datawarehouse.jpg"
    },
    {
      title: "SQL Data Exploration & Analytics",
      description: "A practical SQL analytics toolkit for exploring relational data, uncovering trends, building metrics, segmenting customers, and generating actionable insights through well-structured SQL queries.",
      href: "https://github.com/AmirHSoukhteh/sql-data-analytics",
      imageUrl: "/assets/images/projects/data-analytics.jpeg"
    }
  ]
} as const; 