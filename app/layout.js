import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://my-portfolio-hasanasiabd.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md. Hasan | Full-Stack Web Developer",
  description:
    "Explore the professional portfolio of Md. Hasan, a Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web application development.",
  authors: [{ name: "Md. Hasan", url: siteUrl }],
  creator: "Md. Hasan",
  publisher: "Md. Hasan",
  icons: {
    icon: "/logo.svg",
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
      "Explore the professional portfolio of Md. Hasan, a Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web application development.",
    url: siteUrl,
    siteName: "Md. Hasan Portfolio",
    images: [
      {
        url: `${siteUrl}/og-image.png`, // Absolute URL যা LinkedIn শতভাগ রিড করতে পারবে
        width: 1200,
        height: 630,
        alt: "Md. Hasan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "profile", // পোর্টফোলিওর জন্য 'profile' বা 'website' পারফেক্ট
    publishedTime: new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Hasan | Full-Stack Web Developer",
    description:
      "Explore the professional portfolio of Md. Hasan, a Full-Stack Web Developer specializing in React, Next.js, Node.js, and modern web application development.",
    images: [`${siteUrl}/og-image.png`],
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