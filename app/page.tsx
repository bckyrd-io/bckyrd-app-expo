"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
    IconMoon,
    IconSun,
    IconBrandTwitch,
    IconBrandInstagram,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandYoutube,
    IconBrandTiktok,
    IconBrandThreads,
    IconChevronRight,
    IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"; // Adjust your import

const updatesData = [
    { title: "Backyard App", description: "Explore our app tailored for electronics enthusiasts.", link: "/app" },
    { title: "Energy Mod", description: "Discover our energy-efficient solutions for your setup.", link: "/energy" },
    { title: "New Features Release", description: "We've added new features to enhance user experience.", link: "/features" },
    { title: "Community Feedback", description: "Learn about how community input shapes our updates.", link: "/feedback" },
    { title: "Collaboration with Creators", description: "Exciting new collaborations are underway!", link: "/collaborations" },
    { title: "Hardware Update", description: "Updates on our latest hardware projects.", link: "/hardware" },
    { title: "Upcoming Events", description: "Join us for our upcoming events and webinars.", link: "/events" },
    { title: "Product Launch", description: "Get ready for our new product launch next month!", link: "/launch" },
    { title: "Beta Testing Program", description: "Sign up for our beta testing program to try new features early.", link: "/beta" },
    { title: "User Tutorials", description: "Check out our new tutorials to help you get started.", link: "/tutorials" },
    { title: "Bug Fixes and Improvements", description: "Learn about our latest bug fixes and performance improvements.", link: "/updates" },
    { title: "Roadmap 2024", description: "Get a sneak peek at our roadmap for the upcoming year.", link: "/roadmap" },
];

export default function Home() {
    const [theme, setTheme] = useState("dark");
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;


    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);


    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    const handleScrollToSection = () => {
        const element = document.getElementById("learn");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Filter updates based on search term
    const filteredUpdates = updatesData.filter(update =>
        update.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Calculate pagination
    const totalPages = Math.ceil(filteredUpdates.length / itemsPerPage);
    const indexOfLastUpdate = currentPage * itemsPerPage;
    const indexOfFirstUpdate = indexOfLastUpdate - itemsPerPage;
    const currentUpdates = filteredUpdates.slice(indexOfFirstUpdate, indexOfLastUpdate);

    return (
        <>
            <section className="flex flex-col mb-60 w-[90%] mx-auto lg:w-[50%]">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mt-10 mb-5 leading-tight tracking-tight text-justify">
                    Backyard App Unlocks Your Productivity Setup Potential
                </h1>
                <p id="explore">
                    Electronics enthusiasts which leverages the next industrial revolution.
                </p>
                <div className="flex justify-left space-x-4 mt-5">
                    <Link href="/auth">
                        <Button variant="default" id="login">
                            Get Started
                        </Button>
                    </Link>
                    <Button variant="outline" onClick={handleScrollToSection}>
                        Learn More
                    </Button>
                    <Button variant="outline" id="theme" onClick={toggleTheme}>
                        {theme === "light" ? <IconMoon /> : <IconSun />}
                    </Button>
                </div>
            </section>

            <section className="flex flex-col w-full mb-60 w-[100%] mx-auto">
                <div className="relative w-full h-auto">
                    {!isVideoPlaying ? (
                        <div onClick={handlePlayVideo} className="cursor-pointer">
                            <Image
                                className="object-cover w-full h-[50vh] lg:h-[100vh]"
                                src="/open.webp"
                                alt="local photo"
                                width={1920}
                                height={1080}
                                priority
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="flex bg-[black] text-white p-4 rounded-full">
                                    Watch Video <IconBrandYoutubeFilled className="ml-2" />
                                </button>
                            </div>
                        </div>
                    ) : (
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

                <p className="mt-10 w-[90%] mx-auto lg:w-[50%]" id="learn">
                    We share a passion for tech. Whether you are a budding tech creator or an established pro,{" "}
                    <Link href="#" className="text-primary">join us</Link> in building groundbreaking project that enhance your setup.
                    Explore our latest features and <Link href="#" className="text-primary">discover</Link> how we can elevate your gear setup experience.
                </p>
            </section>

            {/* Updates Component */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto lg:w-[50%]">
                {/* Search Input */}
                <Input
                    type="text" // Explicitly set type as text
                    placeholder="Search updates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Ensure this is handled correctly
                    className="mb-4" // Adjust margin for better spacing
                // Add any other props you might need
                />


                {/* Updates List */}
                {currentUpdates.map((update, index) => (
                    <Link key={index} href={update.link}>
                        <Card className="flex justify-between items-center p-4 mt-10">
                            <div>
                                <CardHeader>
                                    <h2 className="text-xl font-semibold">{update.title}</h2>
                                </CardHeader>
                                <CardContent>
                                    <p>{update.description}</p>
                                </CardContent>
                            </div>
                            <div className="text-gray-500">
                                <IconChevronRight size={24} />
                            </div>
                        </Card>
                    </Link>
                ))}

                {/* Pagination Component */}
                <Pagination className="mt-5 justify-start">
                    <PaginationContent className="">
                        {/* Previous Button */}
                        {currentPage > 1 && (
                            <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                        )}

                        {/* Page Links */}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    isActive={index + 1 === currentPage}
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {/* Next Button */}
                        {currentPage < totalPages && (
                            <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                        )}
                    </PaginationContent>
                </Pagination>
            </section>

            {/* Social Media Section */}
            <section className="flex flex-col items-start mb-10 w-[90%] mx-auto lg:w-[50%]">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mt-10 mb-5 leading-tight tracking-tight text-justify">
                    Lets Work Together
                </h1>
                <p className="mb-5 text-left">
                    We Were Mosolo Now we are Lomoso Link With Us On These Platforms
                </p>
                <div className="flex justify-start space-x-4">
                    <Link href="https://www.youtube.com/channel/UCNfw3tdcG_4Jhz5KTJqF4mw" className="text-primary">
                        <IconBrandYoutube className="mr-4" />
                    </Link>
                    <Link href="https://www.tiktok.com/bckyrd-io" className="text-primary">
                        <IconBrandTiktok className="mr-4" />
                    </Link>
                    <Link href="https://www.instagram.com/bckyrd_io/" className="text-primary">
                        <IconBrandInstagram className="mr-4" />
                    </Link>
                    <Link href="https://github.com/bckyrd-io" className="text-primary">
                        <IconBrandGithub className="mr-4" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/bckyrd-io/" className="text-primary">
                        <IconBrandLinkedin className="mr-4" />
                    </Link>
                    <Link href="https://www.threads.net/@bckyrd_io" className="text-primary">
                        <IconBrandThreads className="mr-4" />
                    </Link>
                    <Link href="https://www.twitch.tv/bckyrd" className="text-primary">
                        <IconBrandTwitch className="mr-4" />
                    </Link>
                </div>
            </section>

        </>
    );
}
