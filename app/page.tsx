// Marking the component as a Client Component
"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // ShadCN Card components
import {
    IconMoon, IconSun, IconSearch, IconBrandGithub, IconBrandLinkedin,
    IconBrandYoutube, IconBrandTiktok, IconBrandThreads, IconChevronRight
} from "@tabler/icons-react";

export default function Home() {
    const [theme, setTheme] = useState("dark"); // Default theme set to dark

    // Apply the theme whenever it changes
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    // Function to toggle between dark and light themes
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="w-[94%] mx-auto">
            {/* Section with heading and buttons */}
            <section className="flex flex-col w-full mb-[30vh]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mt-10 leading-tight tracking-tight text-justify">
                    Leverage The Next Industrial Revolution To Extract Your Setup Potential
                </h1>

                <div className="flex justify-start space-x-4 mt-20">
                    <Button variant="default" id="start" size="lg">
                        Get Started
                    </Button>
                    <Button variant="outline" id="search" size="lg">
                        <IconSearch className="" />
                    </Button>
                    <Button variant="outline" id="theme" size="lg" onClick={toggleTheme}>
                        {theme === "light" ? <IconMoon className="" /> : <IconSun className="" />}
                    </Button>


                </div>
            </section>

            {/* Section with image and description */}
            <section className="flex flex-col w-full mb-[30vh]">
                <Image
                    className="dark:invert w-full h-auto"
                    src="/electronics.jpg"
                    alt="local photo"
                    width={180} // Width will be overridden by w-full
                    height={180} // Height will be auto
                    priority
                />
                <p className="max-w-prose text-justify mt-20">
                    Bckyrd, the thriving world of electronics enthusiasts. Our squad—a sui generis ensemble of electric wizards from fields of electrical engineering, systems engineering, computing, physics, and mechanical engineering. Our shared obsession? Fiddling with diodes, resistors, capacitors, and metals. Unshackling the massive potential of minuscule atoms. You build—we fuel ...
                    <Link href="#" id="threads" className="text-primary"> Learn More</Link>
                </p>
            </section>

            {/* Section with Card components */}
            <section className="flex flex-col w-full mb-[30vh]">
                <Link href={"/app"}>
                    <Card className="flex justify-between items-center p-4 hover:shadow-sm">
                        <div>
                            <CardHeader>
                                <h2 className="text-xl font-semibold">Bckyrd App</h2>
                            </CardHeader>
                            <CardContent>
                                <p>Explore our app built for electronics enthusiasts.</p>
                            </CardContent>
                        </div>
                        <div className="text-gray-500">
                            <IconChevronRight size={24} /> {/* Chevron right arrow */}
                        </div>
                    </Card>
                </Link>

                <Link href={"/energy"}>
                    <Card className="flex justify-between items-center p-4 mt-20 hover:shadow-sm">
                        <div>
                            <CardHeader>
                                <h2 className="text-xl font-semibold">Bckyrd Energy Mod</h2>
                            </CardHeader>
                            <CardContent>
                                <p>Learn more about our energy-efficient modifications for your projects.</p>
                            </CardContent>
                        </div>
                        <div className="text-gray-500">
                            <IconChevronRight size={24} /> {/* Chevron right arrow */}
                        </div>
                    </Card>
                </Link>
            </section>

            {/* Section with social links */}
            <section className="flex justify-start space-x-4 w-full mb-[10vh]">
                <Link href="#" id="youtube" className="text-primary">
                    <IconBrandYoutube className="mr-4" />
                </Link>
                <Link href="#" id="linkedin" className="text-primary">
                    <IconBrandLinkedin className="mr-4" />
                </Link>
                <Link href="#" id="threads" className="text-primary">
                    <IconBrandThreads className="mr-4" />
                </Link>
                <Link href="#" id="tiktok" className="text-primary">
                    <IconBrandTiktok className="mr-4" />
                </Link>
                <Link href="#" id="github" className="text-primary">
                    <IconBrandGithub className="mr-4" />
                </Link>
            </section>
        </div>
    );
}
