import Image from "next/image";
import React from "react";

const AboutMe = () => {
    return (
        <div className="flex z-50 flex-col-reverse md:flex-row items-center md:items-start gap-4">
            <div className="w-full md:w-2/3 lg:w-10/12 flex flex-col gap-4">
                <h1 className="text-3xl lg:flex lg:flex-wrap lg:gap-x-3 block sm:text-4xl font-bold mb-2 md:mb-4 text-center md:text-left">
                    <div>Abhinav Gupta</div>
                    <div className="text-sm md:text-base text-md text-primary/80 text-center sm:text-left">• Fullstack Web Developer • Competitive Programmer  • Tech Enthusiast</div>
                </h1>
                <p className="text-md md:text-base text-primary/80 text-center sm:text-left">
                    Fullstack Developer and Competitive Programmer with a passion for creating impactful and user-centric applications. With expertise across frontend and backend development, I specialize in building robust, scalable web apps from concept to deployment. I excel in crafting seamless user experiences and ensuring accessibility, with a strong focus on optimizing both performance and security.
                </p>

            </div>
            <div className="w-full sm:w-1/3 lg:w-4/12 flex justify-center sm:justify-center">
                <Image
                    src="/Abhi_image.jpg"
                    alt="Profile Picture"
                    width={500}
                    height={500}
                    className="rounded-full border border-secondary h-full w-full "
                />
            </div>
        </div>
    );
};

export default AboutMe;