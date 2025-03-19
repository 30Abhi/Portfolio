// Define the props for the ProjectCard
interface ProjectProps {
    image: string;
    video: string;
    name: string;
    trending: boolean;
    techStack: string[];
    shortDesc: string;
    date: string;
    Github: string;
    LiveLink: string;
}

export const useProjectData: ProjectProps[] = [
    {
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfyMN1ud5nmXdbqUptaIjL6HKN9FzZhWAgwu5k",
        video: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyf9PciiXN28vk9xZ7KyDWpPeNq0fVgbzrn6RIt",
        name: "CODESANDBOX inspired by projectIDX",
        trending: true,
        techStack: ["React.js", "Node.js", "Docker", "Web socket", "Express.js"],
        shortDesc: "Integrated file system and WebSocket-based socket rooms for real-time editor collaboration, efficiently managing tree structures. Code execution is containerized using Docker.",
        date: "FEB 2025",
        Github: "https://github.com/30Abhi/CodeSandbox",
        LiveLink: "TO BE SHARED",
    },
     {
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyftSEmGfuXJSVoKfE48Y5Q2TZpsNhDcAa9MI1t",
        video: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfN1fAfLIq18P4dtWpMhBlymsrbKg7jiIO9Yf5",
        name: "RupeeCryptoXXhange",
        trending: true,
        techStack: ["React","JS","API"],
        shortDesc: "A webpage dedicated to real time updates of over 100 crypto currencies . Charts , graphs , of trade volumes , pricing defining a proper crypto webpage.",
        date: "September 2024",
        Github: "https://github.com/30Abhi/RupeeCryptoXXhange",
        LiveLink: "https://rupee-crypto-x-xhange.vercel.app/",
    },
    {
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfTvQNU8VnEMNeuT4hcSi27CGyWPHw0DYtORdU",
        video: "",
        name: "Leetcode",
        trending: false,
        techStack: [],
        shortDesc: "Contest Rating: 1724 ( Top 11.10% globally ) , Problems Solved: 334+ (75 Easy, 195 Medium, 64 Hard) . 901 submissions in the past year with an active streak of 11 days .",
        date: "CURRENT",
        Github: "",
        LiveLink: "https://leetcode.com/u/abhi_ji_ji/",
    },
 
];