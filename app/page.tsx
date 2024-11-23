"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IconSun, IconBrandTwitch, IconBrandYoutube, IconBrandTiktok, IconBrandYoutubeFilled } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";

const updatesData = [
    { id: "1", title: "Backyard App", description: "Explore our app tailored for electronics enthusiasts.", image: "/photo.jpg" },
    { id: "2", title: "Energy Mod", description: "Discover our energy-efficient solutions for your setup.", image: "/photo.jpg" },
    { id: "3", title: "New Features Release", description: "We've added new features to enhance user experience.", image: "/photo.jpg" },
    { id: "4", title: "Community Feedback", description: "Learn about how community input shapes our updates.", image: "/photo.jpg" },
    // Add more updates as needed
];

export default function Home() {
    const [theme, setTheme] = useState("dark");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleScrollToSection = () => {
        const element = document.getElementById("learn");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    const filteredUpdates = updatesData.filter((update) =>
        update.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUpdates.length / itemsPerPage);
    const currentUpdates = filteredUpdates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto lg:w-[50%]">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mt-10 mb-5 leading-tight tracking-tight text-justify">
                    Backyard App Unlocks Your Productivity Setup Potential
                </h1>
                <p>Electronics enthusiasts which leverages the next industrial revolutions.</p>
                <div className="flex justify-left space-x-4 mt-5">
                    <Link href="/auth">
                        <Button variant="default">⌗ Get Started</Button>
                    </Link>
                    <Button variant="outline" onClick={handleScrollToSection}>
                        Learn More
                    </Button>
                    <Button variant="outline">
                        <IconSun />
                    </Button>
                </div>
            </section>

            {/* Video Section */}
            <section className="flex flex-col w-full mb-60">
                <div className="relative">
                    <Image src="/Studio-YT.jpg" alt="Studio" width={1920} height={1080} className="object-cover w-full h-[50vh] lg:h-[100vh]" priority />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="flex bg-black text-white p-4 rounded-full">
                            Watch Video <IconBrandYoutubeFilled className="ml-2" />
                        </button>
                    </div>
                </div>
                <p className="pt-10 w-[90%] mx-auto lg:w-[50%]" id="learn">
                    We share a passion for tech. Whether you are a budding tech creator or an established pro,{" "}
                    <Link href="#" className="text-primary">join us</Link> in building groundbreaking projects that enhance your setup.
                </p>
            </section>

            {/* Updates Section */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto lg:w-[50%]">
                <Input
                    type="text"
                    placeholder="Search updates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4"
                />

                {currentUpdates.map((update) => (
                    <Link key={update.id} href={`/update/${update.id}`}>
                        <Card className="flex flex-col items-start mt-10">
                            <CardHeader>
                                <h1 className="text-2xl font-bold">{update.title}</h1>
                            </CardHeader>
                            <div className="w-full">
                                <Image src={update.image} alt={update.title} width={1080} height={768} className="w-full h-auto" />
                            </div>
                            <CardContent className="mt-5">
                                <p>{update.description}</p>
                                <Badge variant="default" className="mt-5">ready</Badge>
                            </CardContent>
                        </Card>
                    </Link>
                ))}

                {/* Pagination */}
                <Pagination className="mt-5 justify-start">
                    <PaginationContent>
                        {currentPage > 1 && (
                            <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                        )}
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
                <p className="mb-5">We were Mosolo Now we are Lomoso, Connect with us on these platforms.</p>
                <div className="flex space-x-4">
                    <Link href="https://www.youtube.com/" className="text-primary"><IconBrandYoutube /></Link>
                    <Link href="https://www.tiktok.com/" className="text-primary"><IconBrandTiktok /></Link>
                    <Link href="https://www.twitch.tv/" className="text-primary"><IconBrandTwitch /></Link>
                </div>
            </section>
        </>
    );
}
