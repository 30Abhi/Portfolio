"use client"
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconBrandLinkedin,
    IconFileInfo,
    IconCode,
} from "@tabler/icons-react";

export function FloatDock() {
    const links = [
        {
            title: "RESUME",
            icon: (
                <IconFileInfo stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://drive.google.com/file/d/1oM7yU9_-_Zw4dPr8ipr7zYGMulbn_euS/view?usp=drive_link",
            target: "_blank",
        },

        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/30Abhi",
            target: "_blank",
        },

        // LeetCode link added
        {
            title: "LeetCode",
            icon: (
                <IconCode stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://leetcode.com/u/abhi_ji_ji/",
            target: "_blank",
        },

        {
            title: "Linkedin",
            icon: (
                <IconBrandLinkedin stroke={2} className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/abhinav-gupta-9042002ab/",
            target: "_blank",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/AbhinavGupta_05",
            target: "_blank",
        },

    ];
    return (
        <div className="flex items-center justify-center h-[10rem] fixed bottom-0 left-0 w-full">
            <FloatingDock
                items={links}
            />
        </div>

    );
}
