import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Md. Hasan | Full-Stack Web Developer",
  description:
    "Portfolio of Md. Hasan, a Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web tech.",
  icons: {
    icon: "/logo.svg", // <-- এখানে 'public/' কেটে শুধুমাত্র '/logo.svg' হবে
  },
  keywords: [
    "Md Hasan",
    "Web Developer",
    "Next.js Portfolio",
    "Full Stack Developer",
    "React Developer",
  ],
  openGraph: {
    title: "Md. Hasan | Full-Stack Web Developer",
    description:
      "Explore my latest projects, technical skills, and web development journey.",
    url: "https://my-portfolio-hasanasiabd.vercel.app/",
    siteName: "Md. Hasan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md. Hasan Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-slate-50 dark:bg-gray-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Toaster position="bottom-right" reverseOrder={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}