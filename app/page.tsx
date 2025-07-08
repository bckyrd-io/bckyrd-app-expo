"use client"; // Mark this as a Client Component

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { IconBrandTwitch, IconBrandYoutube, IconBrandTiktok, IconBrandInstagram } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { ThemeContext } from "./ThemeProvider"; // Import the ThemeContext

const updatesData = [
    {
        id: "1",
        title: "Smart Energy Interface Hardware",
        description: "Pre-order our flagship energy coordination device. Built for streamers, designed for the AI-augmented future. Partner with us to optimize your entire setup.",
        image: "/photo.jpg"
    },
    {
        id: "2",
        title: "Partner Gear Integration",
        description: "Curated streaming gear that works seamlessly with our energy interface. From cameras to lighting—everything optimized for performance.",
        image: "/photo.jpg"
    },
    {
        id: "3",
        title: "Hardtech Development",
        description: "Behind the scenes of building next-gen energy interfacing hardware. Follow our journey from prototype to production.",
        image: "/photo.jpg"
    },
    {
        id: "4",
        title: "Electronics Enthusiast Community",
        description: "Join fellow electronics enthusiasts building the future. Share setups, discuss optimization, and shape our roadmap together.",
        image: "/photo.jpg"
    },
    // Add more updates as needed
];

export default function Home() {
    const { theme: _theme, toggleTheme: _toggleTheme } = useContext(ThemeContext); // Use the global theme context
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showSearch, setShowSearch] = useState(false);
    const itemsPerPage = 3;

    const handleScrollToSection = () => {
        const element = document.getElementById("learn");
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    const handleSearchToggle = () => {
        setShowSearch(!showSearch);
        if (!showSearch) {
            setTimeout(() => {
                const searchInput = document.getElementById("search-input");
                if (searchInput) searchInput.focus();
            }, 100);
        }
    };

    const handleShopClick = () => {
        // Navigate to shop page
        window.location.href = "/shop";
    };

    const handleDocsClick = () => {
        window.open("https://github.com/bckyrd-io", "_blank");
    };

    const filteredUpdates = updatesData.filter((update) =>
        update.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUpdates.length / itemsPerPage);
    const currentUpdates = filteredUpdates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            <section className="flex flex-col mb-60 w-[90%] mx-auto">
                <motion.h1
                    className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mt-10 mb-5"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Energy Interface For Machines Augmentation And Leverage
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Reimagining how streamers setup gear—augmented into your streaming workflow—interfaces with energy to give you more control and leverage. We're building a smart energy-strip-like device—think Stream Deck, but for energy...
                </motion.p>
                <motion.div
                    className="flex items-center space-x-4 mt-5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link href="/auth" className="text-black">
                        <Button variant="default">🌀Get Started</Button>
                    </Link>
                    <Button variant="outline" onClick={_toggleTheme}>🎨</Button>
                </motion.div>
            </section>

            {/* Morphing Studio Section */}
            <section className="flex flex-col mb-60">
                <div className="relative overflow-hidden flex justify-center">
                    {/* Studio Image Container */}
                    <motion.div
                        className="relative h-[100vh] overflow-hidden"
                        initial={{
                            width: "90%",
                            borderRadius: "0.5rem"
                        }}
                        whileInView={{
                            width: "100vw",
                            borderRadius: "0rem"
                        }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ amount: 0.5, once: false, margin: "0px 0px -50% 0px" }}
                        style={{ transformOrigin: "center" }}
                    >
                        <Image
                            src="/Studio.jpg"
                            alt="Studio"
                            width={1920}
                            height={1080}
                            className="object-cover w-full h-full"
                            priority
                        />

                        {/* Circuit Board Overlay */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                            viewport={{ amount: 0.5, once: false, margin: "0px 0px -50% 0px" }}
                        >
                            <div className="w-full h-full bg-black/20">
                                <Image
                                    src="/circuit.webp" // Replace with your circuit board image path
                                    alt="Circuit Board Overlay"
                                    width={1920}
                                    height={1080}
                                    className="object-cover w-full h-full opacity-90 mix-blend-multiply"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Text stays at 90% width */}
                <div className="w-[90%] mx-auto">
                    <motion.p
                        className="pt-10 text-2xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ amount: 0.3 }}
                    >
                        &rdquo; Backyard I/O represents the space of highest potential—where enthusiasts leverages next industrial revolution to build the future. We&apos;re working on hardtech infrastructure that starts with streamers but scales to next-level energy interfacing. &rdquo;
                    </motion.p>
                </div>
            </section>

            {/* Updates Section */}
            <motion.section
                className="flex flex-col mb-60 w-[90%] mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                {!showSearch ? (
                    <div className="flex space-x-4">
                        <Button variant="secondary" onClick={handleSearchToggle}>
                            <span className="text-primary">🔍Search</span>
                        </Button>
                        <Button variant="secondary" onClick={handleScrollToSection}>
                            <span className="text-primary">✨Learn More</span>
                        </Button>
                        <Button variant="secondary" onClick={handleShopClick}>
                            <span className="text-primary">🎁Gear Store</span>
                        </Button>

                    </div>
                ) : (
                    <div className="flex items-center space-x-2 w-full">
                        <Input
                            id="search-input"
                            type="text"
                            placeholder="Search our products and updates..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1"
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    // Handle search submission here
                                    console.log('Search submitted:', searchTerm);
                                }
                            }}
                        />
                        <Button
                            variant="outline"
                            onClick={handleSearchToggle}
                            className="px-3"
                        >
                            ❌
                        </Button>
                    </div>
                )}

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
            </motion.section>

            {/* Social Media Section */}
            <section className="flex flex-col items-start mb-10 w-[90%] mx-auto" id="learn">
                <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold mt-10 mb-5 leading-tight tracking-tight text-justify">
                    Join the Energy Revolution
                </h1>
                <p className="mb-5" >Don&apos;t just stream—dominate. Our energy interfacing technology gives you the competitive edge that top streamers demand. From automatic lighting coordination to AI-powered performance optimization, we&apos;re building the infrastructure that will define the next generation of content creation.</p>
                <div className="flex space-x-4">
                    <Link href="https://www.youtube.com/" className="text-primary"><IconBrandYoutube /></Link>
                    <Link href="https://www.tiktok.com/" className="text-primary"><IconBrandTiktok /></Link>
                    <Link href="https://www.twitch.tv/" className="text-primary"><IconBrandTwitch /></Link>
                    <Link href="https://www.instagram.com/" className="text-primary"><IconBrandInstagram /></Link>
                </div>
            </section>
        </>
    );
}