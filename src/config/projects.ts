export const projectsConfig = {
  title: "Projects",
  description:
    "Explore my projects in data, analytics, and technology. Click a project to see the work behind it.",
  backButton: "Back to Home",
  noProjects: "No projects found.",
  items: [
    {
      title: "HR Tableau Dashboard",
      description:
        "An interactive HR Analytics dashboard built in Tableau to explore employee demographics, performance, satisfaction, and attrition. It transforms HR data into clear visual insights to help identify workforce trends and support data-driven decision-making.",
      href: "https://github.com/AmirHSoukhteh/Tableau-Works",
      imageUrl: "/assets/images/projects/thumbnail-HR.jpg",
      categories: ["Tableau", "Data Analytics"],
    },
    {
      title: "Sales Tableau Dashboard",
      description:
        "An interactive sales dashboard built to analyze revenue, sales performance, product trends, and regional performance. It turns sales data into actionable insights, helping identify growth opportunities and support data-driven business decisions.",
      href: "https://github.com/AmirHSoukhteh/Tableau-Works",
      imageUrl: "/assets/images/projects/thumbnail-sales.jpg",
      categories: ["Tableau", "Data Analytics"],
    },
    {
      title: "Medallion Data Warehouse Pipeline",
      description:
        "Built a multi-stage ETL data pipeline using SQL Server Management Studio (SSMS), organizing raw data into Bronze, Silver, and Gold layers to deliver structured, business-ready analytics.",
      href: "https://github.com/AmirHSoukhteh/sql-data-warehouse",
      imageUrl: "/assets/images/projects/thumbnail-datawarehouse.jpg",
      categories: ["SQL", "Data Engineering"],
    },
    {
      title: "SQL Data Exploration & Analytics",
      description:
        "A practical SQL analytics toolkit for exploring relational data, uncovering trends, building metrics, segmenting customers, and generating actionable insights through well-structured SQL queries.",
      href: "https://github.com/AmirHSoukhteh/sql-data-analytics",
      imageUrl: "/assets/images/projects/data-analytics.jpeg",
      categories: ["SQL", "Data Analytics"],
    },
    {
      title: "SQL BikeStore Inventory Durability",
      description:
        "SQL-based inventory management system to calculate product durability (days until stock depletion) for a bike retail business.",
      href: "https://github.com/AmirHSoukhteh/BikeSale-Inventory-Analysis-SQL",
      imageUrl: "/assets/images/projects/BikeStore SQL Analytics Workspace.png",
      categories: ["SQL", "Data Analytics"],
    },
    {
      title: "Advertising Analyst",
      description:
        "Analysis of advertising spending and sales data using statistical and mathematical methods.",
      href: "https://github.com/AmirHSoukhteh/advertising-analysis",
      imageUrl: "/assets/images/projects/Cinematic Data Analytics Workspace.png",
      categories: ["Python", "Data Analytics", "Statistics", 'Machine Learning'],
    },
    {
      title: "Car Insurance Claim",
      description:
        "This project uses machine learning to predict whether a car insurance customer will file a claim based on their demographic information, driving history, and vehicle details. We compare Decision Tree and SVM classifiers, optimize their performance, and identify the most important features for prediction.",
      href: "https://github.com/AmirHSoukhteh/Car-Insurance-Claim",
      imageUrl: "/assets/images/projects/Car Insurance Prediction Workspace.png",
      categories: ["Python", "Data Analytics", "Machine Learning"],
    },
    {
      title: "Image Compression with K-Means",
      description:
        "An implementation of the K-Means Clustering algorithm from scratch, applied to color quantization and image compression. This project reduces the storage footprint of an image by limiting its visual spectrum to a fixed number of representative colors (centroids) without destroying its structural integrity.",
      href: "https://github.com/AmirHSoukhteh/ImageCompression",
      imageUrl: "/assets/images/projects/Image Compression with K-Means Clustering.png",
      categories: ["Python", "Machine Learning"],
    }
  ],
} as const;
