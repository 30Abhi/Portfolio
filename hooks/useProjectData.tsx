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
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfwxdmA1yx0Vts1nGq2m5yhCFjEAbepvfQcBwN",
        video: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfQr5PTVxnkR5WmsrapuFLxAOKiZUGDPwC2tdY",
        name: "Rezumi",
        trending: true,
        techStack: ["Next.js", "PostgreSQL", "Drizzle", "OpenAI", "TypeScript"],
        shortDesc: "Job specific AI powered resume builder that generates resumes based on job descriptions, ensuring ATS compatibility and tailored content.",
        date: "CURRENT",
        Github: "https://github.com/sahaniindrajit/Rezumi",
        LiveLink: "https://rezumi-sigma.vercel.app/",
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
        LiveLink: "https://github.com/30Abhi/CodeSandbox",
    },
    {
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfv3xRzjPZmnHZMQxLgu08PqERI1XK2dbOcYkh",
        video: "",
        name: "OrderAssure ,Intelligent Order Reconciliation System",
        trending: true,
        techStack: ["Node.js", "Express.js", "MongoDB", "Problem Solving"],
        shortDesc: "Real-time, human in the loop order reconciliation system that detects and resolves damaged, missing, or incorrect items before shipment.",
        date: "July 2025",
        Github: "https://github.com/30Abhi/OrderAssure",
        LiveLink: "https://github.com/30Abhi/OrderAssure",
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
        image: "https://jpdxhku9tu.ufs.sh/f/rzBzWaFjgJyfWSXfv2tkeViTskaQOt2YEM4P6Fubh1Z9zlgN",
        video: "",
        name: "Leetcode",
        trending: true,
        techStack: [],
        shortDesc: "Contest Rating: 1820 ( Top 6.5% globally ) , Solved 400+ problems (91 Easy, 230 Medium, 71 Hard) with 1100 submissions in the past year and an active streak of 11 days.",
        date: "CURRENT",
        Github: "",
        LiveLink: "https://leetcode.com/u/abhi_ji_ji/",
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