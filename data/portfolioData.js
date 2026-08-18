// data/portfolioData.js

export const personalData = {
  name: "MD. HASAN",
  designation: "Web Developer Specialist",
  bio: "I build fast, responsive, and modern web applications that deliver seamless user experiences and exceptional performance.",
  
  about: {
    experienceYears: "2+",
    title: "Passionate Web Developer Crafting Modern Digital Experiences",
    description: "I have been working in web development for over 2 years. My primary goal is to build clean UI, high-performance, and scalable web applications that provide the ultimate user experience.",
    highlights: [
      "2+ Years of Web Development Experience",
      "Focus on Clean UI & High Performance",
      "Building Scalable & Secure Web Applications",
      "Modern Frontend & Robust Backend Integration"
    ]
  },

  skills: [
    {
      category: "Frontend Development",
      items: ["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Next.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend & Database",
      items: ["Node.js", "Express.js", "Next.js API", "MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "VS Code", "Vercel", "Figma"]
    }
  ],

  // Projects Section Data
  projects: [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce application built with Next.js, Tailwind CSS, and Stripe integration for seamless online shopping.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      techStack: ["Next.js", "Tailwind CSS", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "https://github.com/hasanasiabd"
    },
    {
      title: "Task Management Web App",
      description: "An interactive productivity tool featuring dynamic drag-and-drop boards, user authentication, and real-time updates.",
      image: "https://images.unsplash.com/photo-1540355383394-62d0efe5be04?auto=format&fit=crop&q=80&w=800",
      techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
      liveLink: "#",
      githubLink: "https://github.com/hasanasiabd"
    },
    {
      title: "Modern Agency Portfolio",
      description: "A fast, sleek, and high-converting agency portfolio site featuring Framer Motion smooth animations and responsive dark mode.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "https://github.com/hasanasiabd"
    }
  ],

  socialLinks: {
    github: "https://github.com/hasanasiabd",
    linkedin: "#",
    email: "mailto:litter-zoning-muck@duck.com",
    twitter: "#",
    facebook: "#"
  },

  resumeLink: "/MD_HASAN_Resume.pdf",

  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ]
};