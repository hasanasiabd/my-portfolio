// data/blogData.js

export const blogCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: "🚀",
    description: "Start here to understand how this knowledge base works.",

    topics: [
      {
        slug: "overview",
        title: "Overview",

        articles: [
          {
            slug: "welcome",
            title: "Welcome to Knowledge Hub",
          },
          {
            slug: "how-to-use",
            title: "How to Use This Docs",
          },
        ],
      },

      {
        slug: "roadmap",
        title: "Learning Path",

        articles: [
          {
            slug: "tech-stack",
            title: "Tech Stack & Ecosystem",
          },
        ],
      },
    ],
  },

  // ==============WHAT I KNOW================================
  // WHAT I KNOW
  // =========================================================

  {
    id: "what-i-know",
    title: "What I Know",
    icon: "📘",
    description:
      "Core concepts of Web Development, JS, React & Modern Web.",

    topics: [

      // -----------------------------------------------------
      // JAVASCRIPT
      // -----------------------------------------------------

      {
        slug: "javascript",
        title: "JavaScript Fundamentals",

        articles: [
          {
            slug: "variables",
            title: "What Are Variables?",
          },
          {
            slug: "functions",
            title: "What Is a Function?",
          },
          {
            slug: "arrays",
            title: "What Is an Array?",
          },
          {
            slug: "map",
            title: "How Does map() Work?",
          },
          {
            slug: "filter",
            title: "How Does filter() Work?",
          },
          {
            slug: "async-await",
            title: "Async/Await Explained",
          },
          {
            slug: "fetch",
            title: "What Is fetch()?",
          },
        ],
      },

      // -----------------------------------------------------
      // REACT
      // -----------------------------------------------------

      {
        slug: "react",
        title: "React Deep Dive",

        articles: [
          {
            slug: "components",
            title: "What Is a React Component?",
          },
          {
            slug: "props",
            title: "What Are Props?",
          },
          {
            slug: "state",
            title: "What Is State?",
          },
          {
            slug: "usestate",
            title: "How Does useState() Work?",
          },
          {
            slug: "use-effect",
            title: "What Is useEffect()?",
          },
          {
            slug: "api-fetch",
            title: "How to Fetch Data in React",
          },
        ],
      },

      // -----------------------------------------------------
      // NEXT.JS
      // -----------------------------------------------------

      {
        slug: "nextjs",
        title: "Next.js Deep Dive",

        articles: [
          {
            slug: "introduction",
            title: "What Is Next.js?",
          },
          {
            slug: "page",
            title: "What Is a Page in Next.js?",
          },
          {
            slug: "layout",
            title: "What Is a Layout in Next.js?",
          },
          {
            slug: "routing",
            title: "How Does Routing Work in Next.js?",
          },
          {
            slug: "dynamic-routes",
            title: "What Are Dynamic Routes?",
          },
          {
            slug: "server-component",
            title: "What Is a Server Component?",
          },
          {
            slug: "client-component",
            title: "What Is a Client Component?",
          },
          {
            slug: "data-fetching",
            title: "How Does Data Fetching Work in Next.js?",
          },
          {
            slug: "api-routes",
            title: "What Are API Routes?",
          },
        ],
      },

      // -----------------------------------------------------
      // NODE.JS
      // -----------------------------------------------------

      {
        slug: "nodejs",
        title: "Node.js",

        articles: [
          {
            slug: "introduction",
            title:
              "What Is Node.js? The Story of Using JavaScript on the Server",
          },
          {
            slug: "server",
            title:
              "How Does a Node.js Server Work? Understanding Client and Server Communication",
          },
          {
            slug: "modules",
            title:
              "What Are Node.js Modules? Breaking Large Code into Smaller Pieces",
          },
          {
            slug: "http",
            title: "What Is HTTP? How Browsers and Servers Communicate",
          },
        ],
      },

      // -----------------------------------------------------
      // EXPRESS.JS
      // -----------------------------------------------------

      {
        slug: "express",
        title: "Express.js",

        articles: [
          {
            slug: "introduction",
            title:
              "What Is Express.js? A Simple Way to Build Servers with Node.js",
          },
          {
            slug: "routes",
            title:
              "What Are Express Routes? Deciding What Happens at Each URL",
          },
          {
            slug: "middleware",
            title:
              "What Is Middleware? The Guard Standing Between a Request and a Response",
          },
          {
            slug: "api",
            title: "How to Build a REST API with Express.js",
          },
        ],
      },

      // -----------------------------------------------------
      // POSTGRESQL
      // -----------------------------------------------------

      {
        slug: "postgresql",
        title: "PostgreSQL",

        articles: [
          {
            slug: "introduction",
            title:
              "What Is PostgreSQL? A Simple Story of Storing Application Data",
          },
          {
            slug: "database",
            title:
              "What Is a Database? Understanding How Thousands of Records Are Organized",
          },
          {
            slug: "table",
            title:
              "What Is a Database Table? Understanding Rows and Columns",
          },
          {
            slug: "select",
            title:
              "What Does SELECT Do? Finding the Data You Need from a Database",
          },
          {
            slug: "insert",
            title:
              "What Does INSERT Do? Adding New Data to a Database",
          },
          {
            slug: "update",
            title:
              "What Does UPDATE Do? Changing Existing Data in a Database",
          },
          {
            slug: "delete",
            title:
              "What Does DELETE Do? Removing Data from a Database",
          },
          {
            slug: "joins",
            title:
              "What Is a SQL JOIN? Bringing Data Together from Multiple Tables",
          },
          {
            slug: "raw-sql",
            title:
              "What Is Raw SQL? Understanding SELECT * FROM products",
          },
          {
            slug: "orm",
            title:
              "What Is an ORM? Working with Databases Without Writing Every SQL Query",
          },
        ],
      },

      // -----------------------------------------------------
      // MongoDB
      // -----------------------------------------------------

      {
        slug: "mongodb",
        title: "MongoDB",
        articles: [
          {
            slug: "introduction",
            title: "What Is MongoDB? Understanding Document-Based Data Storage"
          },
          {
            slug: "database",
            title: "How Does a MongoDB Database Work?"
          },
          {
            slug: "collection",
            title: "What Is a Collection? Organizing Data in MongoDB"
          },
          {
            slug: "document",
            title: "What Is a MongoDB Document? Understanding JSON-Like Data"
          },
          {
            slug: "crud",
            title: "What Is CRUD in MongoDB? Creating, Reading, Updating, and Deleting Data"
          }
        ]
      },

      // -----------------------------------------------------
      // MySQL
      // -----------------------------------------------------

      {
        slug: "mysql",
        title: "MySQL",
        articles: [
          {
            slug: "introduction",
            title: "What Is MySQL? Understanding Relational Databases"
          },
          {
            slug: "database",
            title: "How Does a MySQL Database Store Data?"
          },
          {
            slug: "table",
            title: "What Is a MySQL Table? Organizing Data with Rows and Columns"
          },
          {
            slug: "query",
            title: "What Is a MySQL Query? Learning How to Ask a Database for Data"
          },
          {
            slug: "crud",
            title: "What Is CRUD in MySQL? The Four Basic Operations on Data"
          }
        ]
      },

      // -----------------------------------------------------
      // Prisma ORM
      // -----------------------------------------------------

      {
        slug: "prisma",
        title: "Prisma ORM",
        articles: [
          {
            slug: "introduction",
            title: "What Is Prisma? The Translator Between Your App and Database"
          },
          {
            slug: "schema",
            title: "What Is a Prisma Schema? Designing the Blueprint of Your Database"
          },
          {
            slug: "models",
            title: "What Are Prisma Models? Turning Database Tables into Application Objects"
          },
          {
            slug: "migrations",
            title: "What Are Prisma Migrations? Safely Changing Your Database Structure"
          },
          {
            slug: "queries",
            title: "How Do Prisma Queries Work? Talking to Your Database with JavaScript"
          }
        ]
      },

      // -----------------------------------------------------
      // Tailwind CSS
      // -----------------------------------------------------
      {
        slug: "tailwind",
        title: "Tailwind CSS",
        articles: [
          {
            slug: "introduction",
            title: "What Is Tailwind CSS? Building Interfaces with Utility Classes"
          },
          {
            slug: "responsive",
            title: "How Does Responsive Design Work in Tailwind CSS?"
          },
          {
            slug: "flex",
            title: "What Is Flexbox? A Simple Story of Arranging UI Elements"
          },
          {
            slug: "grid",
            title: "What Is CSS Grid? Building a Clean Product Card Layout"
          },
          {
            slug: "dark-mode",
            title: "How Does Dark Mode Work in Tailwind CSS?"
          }
        ]
      },
      // -----------------------------------------------------
      // Bootstrap
      // -----------------------------------------------------
      {
        slug: "bootstrap",
        title: "Bootstrap",
        articles: [
          {
            slug: "introduction",
            title: "What Is Bootstrap? Building Interfaces with Ready-to-Use Components"
          },
          {
            slug: "grid",
            title: "What Is the Bootstrap Grid? Building Responsive Layouts"
          },
          {
            slug: "components",
            title: "What Are Bootstrap Components? Working with Cards, Buttons, and Navbars"
          },
          {
            slug: "responsive",
            title: "How Does Responsive Design Work with Bootstrap?"
          }
        ]
      },
    ],
  },

  // =========================================================
  // PROBLEM SOLVING
  // =========================================================

  {
    id: "problem-solving",
    title: "Problem Solving",
    icon: "🧩",
    description:
      "Real-world debugging, algorithmic thinking, and bugs fixed.",

    topics: [

      // -----------------------------------------------------
      // BUGS
      // -----------------------------------------------------

      {
        slug: "bugs",
        title: "Common Bugs and How I Fixed",

        articles: [
          {
            slug: "react-rerender",
            title: "My React Component Kept Re-rendering — What Was Actually Causing It?"
          },
          {
            slug: "map-not-working",
            title: "Why Was map() Not Working Even Though My Data Was Correct?"
          }
        ],
      },

      // -----------------------------------------------------
      // ERRORS
      // -----------------------------------------------------

      {
      slug: "errors",
      title: "Common Errors",
      articles: [
        {
          slug: "next-api-500-error",
          title: "My Next.js API Was Returning a 500 Error — How I Found and Fixed It"
        },
        {
          slug: "module-not-found",
          title: "Module Not Found Error — The File Was There, So What Went Wrong?"
        },
        {
          slug: "build-error",
          title: "My Next.js Project Wouldn't Build — How I Tracked Down the Error"
        }
      ]
    },

    // -----------------------------------------------------
    // DATABASE PROBLEMS
    // -----------------------------------------------------
    {
      slug: "database-problems",
      title: "Database Problems",
      articles: [
        {
          slug: "postgres-connection-error",
          title: "PostgreSQL Wouldn't Connect — Finding the Real Cause of the Connection Error"
        },
        {
          slug: "wrong-database-url",
          title: "My DATABASE_URL Was Wrong — How I Found and Fixed the Connection Problem"
        },
        {
          slug: "slow-query",
          title: "My Database Query Was Too Slow — How I Improved Its Performance"
        }
      ]
    },

    // -----------------------------------------------------
    // API PROBLEMS
    // -----------------------------------------------------

    {
      slug: "api-problems",
      title: "API Problems",
      articles: [
        {
          slug: "fetch-failed",
          title: "fetch() Failed Even Though the API Was Working — What Went Wrong?"
        },
        {
          slug: "api-not-found",
          title: "My API Was Returning 404 — How I Found the Wrong Route"
        },
        {
          slug: "api-500-error",
          title: "My API Was Returning a 500 Error — How I Found the Backend Problem"
        }
      ]
    },

    // -----------------------------------------------------
    // AUTHENTICATION PROBLEMS
    // -----------------------------------------------------

    {
      slug: "authentication",
      title: "Authentication Problems",
      articles: [
        {
          slug: "login-not-working",
          title: "My Login Wasn't Working — Finding the Mistake Step by Step"
        },
        {
          slug: "jwt-error",
          title: "I Kept Getting a JWT Error — How I Fixed the Token Problem"
        },
        {
          slug: "session-error",
          title: "The User Session Kept Disappearing — How I Solved It"
        }
      ]
    },

    // -----------------------------------------------------
    // DEPLOYMENT PROBLEMS
    // -----------------------------------------------------
    
    {
      slug: "deployment",
      title: "Deployment Problems",
      articles: [
        {
          slug: "vercel-build-error",
          title: "It Worked Locally but Failed on Vercel — What Was Different?"
        },
        {
          slug: "env-not-working",
          title: "My Environment Variables Worked Locally but Not After Deployment"
        },
        {
          slug: "deployment-failed",
          title: "My Project Wouldn't Deploy — How I Found and Fixed the Problem"
        }
      ]
    }
    ],
  },

  // =========================================================
  // PROJECT CASE STUDIES
  // =========================================================

  {
    id: "project-case-studies",
    title: "Project Case Studies",
    icon: "💼",
    description: "Real projects, architecture decisions, development journeys, and lessons learned.",
    topics: [

      // -----------------------------------------------------
      // E-COMMERCE
      // -----------------------------------------------------

      {
        slug: "e-commerce",
        title: "E-Commerce Platform",
        articles: [
          {
            slug: "overview",
            title: "How I Planned and Built an E-Commerce Platform from Scratch"
          },
          {
            slug: "database",
            title: "How I Designed the Database for Products, Users, and Orders"
          },
          {
            slug: "authentication",
            title: "How I Built Authentication for My E-Commerce Platform"
          },
          {
            slug: "api",
            title: "How I Connected the E-Commerce Frontend, API, and Database"
          },
          {
            slug: "problems",
            title: "The Problems I Faced While Building My E-Commerce Platform"
          }
        ]
      },

      // -----------------------------------------------------
      // TASK MANAGEMENT
      // -----------------------------------------------------

      {
        slug: "task-management",
        title: "Task Management App",
        articles: [
          {
            slug: "overview",
            title: "How I Built a Task Management Application from Scratch"
          },
          {
            slug: "database",
            title: "How I Designed the Database for My Task Management App"
          },
          {
            slug: "api",
            title: "How I Built APIs for Creating, Updating, and Deleting Tasks"
          },
          {
            slug: "problems",
            title: "The Problems I Faced While Building My Task Management App"
          }
        ]
      },

      // -----------------------------------------------------
      // ADMIN DASHBOARD
      // -----------------------------------------------------

      {
        slug: "admin-dashboard",
        title: "Admin Dashboard",
        articles: [
          {
            slug: "overview",
            title: "How I Built an Admin Dashboard for Managing Application Data"
          },
          {
            slug: "database",
            title: "How I Designed the Database Behind My Admin Dashboard"
          },
          {
            slug: "problems",
            title: "The Problems I Faced While Building My Admin Dashboard"
          }
        ]
      },

      
      // -----------------------------------------------------
      // OTHER PROJECTS
      // -----------------------------------------------------

      {
      slug: "other-projects",
      title: "Other Projects",
      articles: [
        {
          slug: "overview",
          title: "My Other Projects: From Ideas to Real-World Applications"
        }
      ]
      }
    ]
  }
];