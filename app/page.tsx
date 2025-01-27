"use client"; // Mark this as a Client Component

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IconBrandTwitch, IconBrandYoutube, IconBrandTiktok, IconBrandYoutubeFilled, IconSun, IconMoon } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { ThemeContext } from "./ThemeProvider"; // Import the ThemeContext

const updatesData = [
    {
        id: "1",
        title: "Smart Power Strip",
        description: "A next-gen power strip designed for creators. Monitor energy usage, control devices remotely, and optimize your setup with ease.",
        image: "/photo.jpg"
    },
    {
        id: "2",
        title: "Energy Monitoring",
        description: "Track how much energy your devices use in real-time. Get insights to save power and reduce costs.",
        image: "/photo.jpg"
    },
    {
        id: "3",
        title: "Portable Power",
        description: "Take your setup anywhere with our portable power solutions. Perfect for streamers on the go.",
        image: "/photo.jpg"
    },
    {
        id: "4",
        title: "Community Feedback",
        description: "Your ideas shape what we build. Join our community and help us create the ultimate energy tools for creators.",
        image: "/photo.jpg"
    },
    // Add more updates as needed
];

export default function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext); // Use the global theme context
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

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
            <section className="flex flex-col mb-60 w-[90%] mx-auto lg:w-[50%]">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mt-10 mb-5">
                    Unlock Your Potential With Backyard IO
                </h1>
                <p>We’re building the energy strip for electronics enthusiasts and streamers like you. And you Focus on staying live—building the future.</p>
                <div className="flex items-center space-x-4 mt-5">
                    <Link href="/auth">
                        <Button variant="default">⌗ Let’s Go</Button>
                    </Link>
                    <Button variant="outline" onClick={handleScrollToSection}>
                        Learn More
                    </Button>
                    {/* Theme Toggle Button */}
                    <Button
                        onClick={toggleTheme}
                        variant="outline"
                        className="p-3"
                    >
                        {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
                    </Button>
                </div>
            </section>

            {/* Video Section */}
            <section className="flex flex-col w-full mb-60">
                <div className="relative">
                    <Image src="/Studio-yt.jpg" alt="Studio" width={1920} height={1080} className="object-cover w-full h-[50vh] lg:h-[100vh]" priority />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button className="flex bg-black text-white p-4 rounded-full">
                            Watch Video <IconBrandYoutubeFilled className="ml-2" />
                        </button>
                    </div>
                </div>
                <p className="pt-10 w-[90%] mx-auto lg:w-[50%] text-2xl" id="learn">
                    &rdquo; We’re just like you—electronics enthusiasts who geek out over gadgets and setups. On mission To give you the power hack you need to focus on what really matters. Let’s supercharge your setup and make your energy problem a thing of the past &rdquo;
                </p>
            </section>

            {/* Updates Section */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto lg:w-[50%]">
                <Input
                    type="text"
                    placeholder="Search for updates..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4"
                />

                {currentUpdates.map((update) => (
                    <Link key={update.id} href={`/update/${update.id}`} className="mt-10">
                        <Card className="flex flex-col items-start">
                            <CardHeader>
                                <h2 className="font-bold">{update.title}</h2>
                            </CardHeader>
                            <CardContent className="mt-5">
                                <p>{update.description}</p>
                                <Badge variant="default" className="mt-5"></Badge>
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
                    Greater Stream of Energy
                </h1>
                <p className="mb-5">We’re all about building the future, and we’d love for you to be part of it. Hit us up on these platforms:</p>
                <div className="flex space-x-4">
                    <Link href="https://www.youtube.com/" className="text-primary"><IconBrandYoutube /></Link>
                    <Link href="https://www.tiktok.com/" className="text-primary"><IconBrandTiktok /></Link>
                    <Link href="https://www.twitch.tv/" className="text-primary"><IconBrandTwitch /></Link>
                </div>
            </section>
        </>
    );
}