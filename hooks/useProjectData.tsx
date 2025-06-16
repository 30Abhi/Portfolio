// Define the props for the ProjectCard

interface ProjectProps {
    image: string ;
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
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfAIdyqLz9F5sewv8dxjlbWYaof6MQAJRUHGyB",
        video: "",
        name: "Leetcode",
        trending: true,
        techStack: [],
        shortDesc: "Contest Rating: 1777 ( Top 8.9% globally ) , Solved 358+ problems (85 Easy, 205 Medium, 68 Hard) with 901 submissions in the past year and an active streak of 11 days.",
        date: "CURRENT",
        Github: "",
        LiveLink: "https://leetcode.com/u/abhi_ji_ji/",
    },
    {
         image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfN44lDeZIq18P4dtWpMhBlymsrbKg7jiIO9Yf",
        video: "",
        name: "ProductAPI ,Advance AI Automation for Database",
        trending: true,
        techStack: [ "OpenAI","Node.js", "MongoDB", "Express.js"],
        shortDesc: "A lightweight, OpenAI‑powered Product API that takes product titles or basic details and returns rich marketing copy—including descriptions, FAQs, bullet points, pros & cons, and meta tags—in JSON format.",
        date: "June 2025",
        Github: "https://github.com/30Abhi/Product_API",
        LiveLink: "https://github.com/30Abhi/Product_API",
    },
    {
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfyMN1ud5nmXdbqUptaIjL6HKN9FzZhWAgwu5k",
        video: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyf9PciiXN28vk9xZ7KyDWpPeNq0fVgbzrn6RIt",
        name: "CODESANDBOX , remote collaborative coding platform",
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
    
 
];