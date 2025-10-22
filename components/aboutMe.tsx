import Image from "next/image";
import React from "react";

const AboutMe = () => {
    return (
        <div className="flex z-50 flex-col-reverse md:flex-row items-center md:items-start gap-4">
            <div className="w-full md:w-2/3 lg:w-10/12 flex flex-col gap-4">
                <h1 className="text-3xl lg:flex lg:flex-wrap lg:gap-x-3 block sm:text-4xl font-bold mb-2 md:mb-4 text-center md:text-left">
                    <div>Abhinav Gupta</div>
                    <div className="text-sm md:text-base text-md text-primary/80 text-center sm:text-left">
                        <div>• Software Engineer</div>
                        <div>• Competitive Programmer</div>
                        <div>• Tech Enthusiast</div>
                    </div>
                </h1>
                <div className="text-md md:text-base text-primary/80 text-center sm:text-left">
                    <div>• LeetCode Knight 1906 (Top 4% Globally)</div>
                    <div>• Passionate problem solver experienced with cutting edge technologies</div>
                    <div>• Collaborative and results oriented delivers scalable, production ready solutions</div>
                </div>

            </div>
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 relative">
                <Image
                    src="/Abhi_image.jpg"
                    alt="Profile Picture"
                    fill
                    className="rounded-full border border-secondary object-cover"
                />
            </div>
        </div>
    );
};

export default AboutMe;