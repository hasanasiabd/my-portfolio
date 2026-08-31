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
          { slug: "welcome", title: "Welcome to Knowledge Hub" },
          { slug: "how-to-use", title: "How to Use This Docs" }
        ]
      },
      {
        slug: "roadmap",
        title: "Learning Path",
        articles: [
          { slug: "tech-stack", title: "Tech Stack & Ecosystem" }
        ]
      }
    ]
  },
  {
    id: "what-i-know",
    title: "What I Know",
    icon: "📘",
    description: "Core concepts of Web Development, JS, React & Modern Web.",
    topics: [
      {
        slug: "javascript",
        title: "JavaScript Fundamentals",
        articles: [
          { slug: "variables", title: "What Are Variables?" },
          { slug: "functions", title: "What Is a Function?" },
          { slug: "arrays", title: "What Is an Array?" },
          { slug: "map-method", title: "How Does map() Work?" },
          { slug: "filter-method", title: "How Does filter() Work?" },
          { slug: "async-await", title: "Async/Await Explained" },
          { slug: "fetch-api", title: "What Is fetch()?" }
        ]
      },
      {
        slug: "react",
        title: "React Deep Dive",
        articles: [
          { slug: "components", title: "What Is a React Component?" },
          { slug: "props", title: "What Are Props?" },
          { slug: "state", title: "What Is State?" },
          { slug: "usestate", title: "How Does useState() Work?" },
          { slug: "useeffect", title: "What Is useEffect()?" },
          { slug: "fetch-data", title: "How to Fetch Data in React" }
        ]
      }
    ]
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    icon: "🧩",
    description: "Real-world debugging, algorithmic thinking, and bugs fixed.",
    topics: [
      {
        slug: "debugging",
        title: "Common Fixes",
        articles: [
          { slug: "hydration-error", title: "Fixing Next.js Hydration Error" }
        ]
      }
    ]
  },
  {
    id: "case-studies",
    title: "Project Case Studies",
    icon: "💼",
    description: "Architecture breakdown of practical full-stack projects.",
    topics: [
      {
        slug: "ecommerce",
        title: "E-Commerce Architecture",
        articles: [
          { slug: "auth-flow", title: "JWT & Dynamic Cart State" }
        ]
      }
    ]
  }
];