// Marking the component as a Client Component
"use client";

import { useState, useEffect } from "react"; // Import useState and useEffect
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // ShadCN Button component
import { Card, CardHeader, CardContent } from "@/components/ui/card"; // ShadCN Card components
import {
    IconMoon, IconSun, IconBrandTwitch, IconBrandInstagram, IconBrandGithub, IconBrandLinkedin,
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


    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    const handleScrollToSection = () => {
        const element = document.getElementById("learn");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
        <>
            {/* Section with heading and buttons */}
            <section className="flex flex-col w-full mb-60 w-[90%] mx-auto lg:w-[50%]">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mt-10 leading-tight tracking-tight text-justify  ">
                    Leverage The Next Industrial Revolution To Extract Your Setup Potential
                </h1>

                <div className="flex justify-left space-x-4 mt-20">
                    <Button variant="default" id="start" size="lg">
                        Get Started
                    </Button>
                    <Button variant="outline" size="lg" onClick={handleScrollToSection}>
                        Learn More
                    </Button>
                    <Button variant="outline" id="theme" size="lg" onClick={toggleTheme}>
                        {theme === "light" ? <IconMoon className="" /> : <IconSun className="" />}
                    </Button>
                </div>
            </section>

            {/* Section with image and description */}
            <section className="flex flex-col w-full mb-60 w-[100%] mx-auto">
                <div className="relative w-full h-auto">
                    {!isVideoPlaying ? (
                        // Thumbnail display before playing the video
                        <div onClick={handlePlayVideo} className="cursor-pointer">
                            <Image
                                className=" w-full h-700"
                                src="/download.png"
                                alt="local photo"
                                width={180}
                                height={700}
                                priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="bg-black bg-opacity-50 text-white p-4 rounded-full">
                                    ▶ Play Video
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Embedded YouTube video after clicking
                        <iframe
                            width="100%"
                            height="700"
                            src="https://www.youtube.com/embed/OzPuztbWoIY?autoplay=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
                <p className="mt-20  w-[90%] mx-auto lg:w-[50%]" id="learn">
                    ⌗Bckyrd, the thriving world of electronics enthusiasts. Our shared obsession? Fiddling with diodes, resistors, capacitors, and metals. Unshackling the. You build—we fuel ...
                    <Link href="#" id="threads" className="text-primary"> build </Link>
                    ⌗Bckyrd, the thriving world of electronics enthusiasts. Our shared obsession? Fiddling with diodes, resistors, capacitors, and metals. Unshackling the. You build—we fuel ...
                    <Link href="#" id="threads" className="text-primary"> Read</Link>
                </p>
            </section>

            {/* Section with Card components */}
            <section className="flex flex-col w-full mb-60 w-[90%] mx-auto lg:w-[50%]">
                <Link href={"/app"}>
                    <Card className="flex justify-between items-center p-4 ">
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
                    <Card className="flex justify-between items-center p-4 mt-20">
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
            <section className="flex justify-start space-x-4 w-full mb-10 w-[90%] mx-auto lg:w-[50%]">
                <Link href="#" id="github" className="text-primary">
                    <IconBrandGithub className="mr-4" />
                </Link>
                <Link href="#" id="youtube" className="text-primary">
                    <IconBrandYoutube className="mr-4" />
                </Link>
                <Link href="#" id="tiktok" className="text-primary">
                    <IconBrandTiktok className="mr-4" />
                </Link>
                <Link href="#" id="twitch" className="text-primary">
                    <IconBrandTwitch className="mr-4" />
                </Link>
                <Link href="#" id="instagram" className="text-primary">
                    <IconBrandInstagram className="mr-4" />
                </Link>
                <Link href="#" id="threads" className="text-primary">
                    <IconBrandThreads className="mr-4" />
                </Link>
                <Link href="#" id="linkedin" className="text-primary">
                    <IconBrandLinkedin className="mr-4" />
                </Link>
            </section>
        </>
    );
}
