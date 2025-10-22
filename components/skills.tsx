import React from "react";
import { Badge } from "./ui/badge";

const Skills = () => {
    return (
        <section id="skills">
            <div className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-2xl font-bold">Skills</h2>
                <div className="flex flex-wrap gap-2">
                    {DATA.skills.map((skill) => (
                        <Badge
                            key={skill}
                            className="bg-primary-foreground text-primary hover:bg-secondary hover:shadow-sm
                                       text-base md:text-lg px-3 py-1.5 rounded-md"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
const DATA = {
    skills: [
        "Competitive Programming",
        "Data Structures & Algorithms",
        "Java",
        "JavaScript",
        "TypeScript",
        "DevOps",
        "React",
        "Next.js",
        "Node.js",
        "React Native",
        "Express",
        "REST APIs",
        "WebSocket",
        "PostgreSQL",
        "MongoDB",
        "Database Management Systems (DBMS)",
        "Operating Systems",
        "Object Oriented Programming (OOPS)",
        "Computer Networks",
        "Docker",
        "Git",
        "GitHub",
        
            
    ]

};