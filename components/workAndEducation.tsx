/* eslint-disable @typescript-eslint/no-unused-vars */
import { Bot, GraduationCap } from "lucide-react";
import React from "react";

const workExperiences = [
    {
        title: "Software Developer Intern",
        company: "Kerrsor",
        companyUrl: "https://www.kerrsor.com/",
        date: "August- 2025 , November-2025",
description: [
    "Engineered a new skin analysis platform from scratch, managing the full cycle integration of AI models from development with data science team to final hosting and deployment.",
    "Acted as the primary technical consultant for clients, defining project scope, proposing scalable architectures, and designing intuitive user flows to meet business objectives",
    "Optimized the end to end application, achieving a 60% reduction in system wide response time and significantly improving software performance.",
],        isLatest: true,
    },
    {
        title: "Full Stack Developer Intern",
        company: "Aapkabazar",
        companyUrl: "https://aapkabazar.co/",
        date: "May- 2025 , July-2025",
description: [
    "Automated content generation using DeepSeek AI, producing product descriptions, usage guidelines, FAQs, and benefit summaries with 4× increased throughput, reducing manual effort by 60 hours/month.",
    "Designed RESTful API architecture with Redis caching layer, reducing redundant endpoints by 35% and improving average response time to 220ms (from 450ms).",
    "Led full‑stack development of Manager Approval System: Built React interface with role‑based access control, engineered MongoDB aggregation pipelines for real‑time order updates, and reduced approval processing time by 40%.",
    "Built a statistical dashboard page, designing database pipelines to compute daily averages and totals, and visualizing key metrics with interactive charts—enhancing data‑driven decision making."
],        isLatest: false,
    },
    {
        title: "Teaching Assistant for Data Structures in Java",
        company: "Coding Ninjas",
        companyUrl: "https://www.codingninjas.com/",
        date: "Feb- 2024 , May-2024",
        description:
            "Facilitated interactive learning sessions for a Data Structures in Java course, clarifying complex concepts and guiding students to overcome programming challenges; contributed to a 20% increase in course completion rate.",
        isLatest: true,
    },
    {
        title: "Member of Microsoft Student Chapter",
        company: "MSC",
        companyUrl: "",
        date: "September, 2024 - Present",
        description:
            "I am a member of the MSC. Solved over 200+ DSA and CP problems along with contribute to various tech stacks for development projects and innovation . We help each other with doubts and engage in competitive programming.",
        isLatest: true,
    }

];

const educationExperiences = [
    {
        title: "Bachelor of technology 🎓",
        institution: "Maharaja Surajmal Institute of Technology",
        institutionUrl: "https://www.msit.in/",
        date: "2023 - 2027",
        description:
            "CGPA-9.26  , I am currently enrolled in the Bachelor of technology (B.Tech) Computer Science and Engineering program at  Maharaja Surajmal Institute of Technology, focusing on core areas like software development, Problem solving, Core fundamentals and Cyber Security. This enhances both my theoretical understanding and practical skills. This program is equipping me with the expertise needed to excel in the tech industry.",
        isLatest: false,
    },
];

interface Experience {
    title: string;
    company?: string | null;
    companyUrl?: string | null;
    institution?: string;
    institutionUrl?: string;
    date: string;
    description: string | string[];
    isLatest: boolean;
}

const ExperienceItem = ({
    experience,
    icon,
}: {
    experience: Experience;
    icon: React.ReactNode;
}) => (
    <li className="mb-8 sm:mb-10 ms-4 sm:ms-6">
        <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full -start-2.5 sm:-start-3 ring-4 sm:ring-8 ring-secondary dark:ring-secondary dark:bg-secondary">
            {icon}
        </span>
        <h3 className="flex flex-wrap ml-1 items-center mb-1 text-base sm:text-lg font-semibold text-primary dark:text-primary">
            {experience.title}
            {(experience.company || experience.institution) && (
                <>
                    <span className="mx-1">@</span>
                    <a
                        href={experience.companyUrl || experience.institutionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-600 mx-1"
                    >
                        {experience.company || experience.institution}
                    </a>
                </>
            )}
            {experience.isLatest && (
                <span className="bg-secondary text-xs sm:text-sm font-medium me-2 px-2 py-0.5 rounded dark:bg-secondary dark:text-primary ms-0 sm:ms-3 mt-1 sm:mt-0">
                    Latest
                </span>
            )}
        </h3>
        <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-primary/80">
            {experience.date}
        </time>
        <p className="mb-4 text-sm sm:text-base font-normal text-primary/70">
    {Array.isArray(experience.description) ? (
        <ul className="list-disc ml-5">
            {experience.description.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    ) : (
        experience.description
    )}

</p>
    </li>
);

const ExperienceSection = ({
    title,
    experiences,
    icon,
}: {
    title: string;
    experiences: Experience[];
    icon: React.ReactNode;
}) => (
    <div className="flex flex-col gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">{title}</h2>
        <div className="px-2 sm:px-6">
            <ol className="relative border-s border-primary/50 dark:border-primary/70">
                {experiences.map((experience, index) => (
                    <ExperienceItem key={index} experience={experience} icon={icon} />
                ))}
            </ol>
        </div>
    </div>
);

const WorkAndEducation = () => {
    return (
        <div className="flex flex-col gap-8">
            <ExperienceSection
                title="Work Experience"
                experiences={workExperiences}
                icon={<Bot size={14} className="sm:w-4 sm:h-4" />}
            />
            <ExperienceSection
                title="Education"
                experiences={educationExperiences}
                icon={<GraduationCap size={14} className="sm:w-4 sm:h-4" />}
            />
        </div>
    );
};

export default WorkAndEducation;