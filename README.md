# 🚀 Personal Developer Portfolio

An interactive, responsive, and modern full-stack web developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**. Designed for fast performance, custom theme toggling, clean aesthetic graphics, and direct email dispatching.

---

## 🌐 Live Demo

👉 **[View Portfolio Website](https://my-portfolio-hasanasiabd.vercel.app/)**

---

## ✨ Features

- **⚡ Modern Stack:** Powered by Next.js 16 (App Router) & React 19.
- **🎨 Sleek UI/UX:** Styled using Tailwind CSS v4 with custom dark/light theme switching (`next-themes`).
- **🎬 Dynamic Animations:** Smooth transitions and interactions using `framer-motion`.
- **📩 Functional Contact Form:** Direct email delivery integration via **EmailJS** without requiring a dedicated backend server.
- **📄 Resume Section & PDF Download:** Built-in qualifications visual layout with direct download links for offline CVs.
- **📱 Fully Responsive:** Clean layout tailored for mobile, tablet, and desktop viewports.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16, React 19
- **Styling:** Tailwind CSS v4, Lucide Icons
- **Animations:** Framer Motion
- **Email Service:** EmailJS (`@emailjs/browser`)
- **Deployment:** Vercel

---

## 📂 Project Structure

```plaintext
my-portfolio/
├── app/                  # App Router pages and global layouts
│   ├── about/            # About page route (/about)
│   ├── contact/          # Contact page route (/contact)
│   ├── projects/         # Projects page route (/projects)
│   ├── skills/           # Skills page route (/skills)
│   ├── globals.css       # Tailwind CSS global styles
│   ├── layout.js         # Root layout configuration (Navbar & Footer)
│   └── page.js           # Main landing page
├── components/           # Reusable UI sections
│   ├── about/            # About me section component
│   ├── contact/          # Contact form component
│   ├── hero/             # Hero banner component
│   ├── navbar/           # Navigation bar component
│   ├── projects/         # Featured projects showcase
│   ├── skills/           # Tech stack skills component
│   └── ResumeSection.jsx # Qualifications & Resume timeline
├── public/               # Static assets & downloadable resume PDF
└── .env.local            # Local environment keys (ignored by git)
```
---

## 🚀 Getting Started

Follow these steps to run the project locally on your system:

### 1. Prerequisites
Make sure you have Node.js (v18 or higher) installed.

### 2. Installation
Clone the repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/hasanasiabd/my-portfolio.git

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install
```
```bash
# Run development server
npm run dev
```
```bash
# Build for production
npm run build
```