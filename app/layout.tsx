import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/react"
import Meteors from "@/components/magicui/meteors";
import { FloatDock } from "@/components/floatDock";
import Contact from "@/components/contact";

// Load Bricolage Grotesque font
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage-grotesque",
});

// Metadata configuration for Next.js
export const metadata: Metadata = {
  title: "Abhinav Gupta - Web Developer & Software Engineer",
  description:
    "Abhinav Gupta's personal portfolio website showcasing achievements in Hackathons, freelancing as a Full Stack Web Developer, and experiences in competitive programming and open-source contributions.",
  keywords:
    "Abhinav Gupta, Abhinav, Gupta, Abhinav Delhi, full stack developer, full stack web developer, freelance web developer, software engineer, React developer, Next.js developer, full stack AI developer, JavaScript developer, TypeScript developer, hackathon finalist, open-source contributor, software engineer portfolio, React portfolio, Maharaja Surajmal Institute of Technology & Management, web developer India",
  authors: [{ name: "Abhinav Gupta" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhinavgupta.com",
    siteName: "Abhinav Gupta Portfolio",
    title: "Abhinav Gupta - Web Developer & Software Engineer",
    description: "Explore Abhinav Gupta's portfolio featuring his achievements, hackathon experiences, open-source contributions, and more.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@abhinav_gupta",
    creator: "@abhinav_gupta",
    title: "Abhinav Gupta - Full Stack Developer & Software Engineer",
    description:
      "Explore the portfolio of Abhinav Gupta, a Full Stack Web Developer and Software Engineer with experience in AI development, hackathons, and freelance projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abhinav Gupta",
              url: "https://abhinavgupta.com",
              sameAs: [
                "https://linkedin.com/in/abhinav-gupta-9042002ab",
                "https://github.com/30Abhi",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance & Open Source Community",
              },
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "AI Development",
                "Competitive Programming",
                "Data Structures & Algorithms",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Maharaja Surajmal Institute of Technology & Management",
              },
              description:
                "I am a passionate Competitive Programmer and Software Engineer with expertise in problme solving , AI integration, and open-source contributions. With hands on experience in various tech stack thruough my previous intenships amd hackathorn experience, I have a strong foundation in software engineering. My competitive programming experience enhances my problem-solving abilities, and I actively contribute to open-source projects and hackathons.",
            }),
          }}
        />
        <link rel="canonical" href="https://abhinavgupta.com" />
      </head>
      <body
        className={`${bricolageGrotesque.className} bg-black antialiased z-50 overflow-x-hidden`}
      >
        <Meteors number={50} />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            {children}
          </TooltipProvider>
        </ThemeProvider>

        <FloatDock />
        <Contact />
        <Analytics />
      </body>
    </html>
  );
}