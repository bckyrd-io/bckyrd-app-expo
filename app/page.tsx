"use client"; // Mark this as a Client Component

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IconBrandTwitch, IconBrandYoutube, IconBrandTiktok, IconBrandInstagram, IconBrandKick } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import { ThemeContext } from "./ThemeProvider"; // Import the ThemeContext
// import { AppHeader } from "@/components/app-header"; // AppHeader is not used, so it's commented out or can be removed

// Data for the 'Updates' section, representing milestones or product features.
// Titles and descriptions are styled to resemble YouTube video titles and shorts descriptions.
const updatesData = [
    {
        id: "6",
        title: "Modular hardware expansion",
        description: "Developing a library of modular hardware components—each with its own PCB, firmware, and 3D-printed case. Designed for hacking, remixing, and scaling.",
        image: "/control.webp",
        category: "DIY Builds" // Category for filtering
    },
    {
        id: "1",
        title: "ESP32 energy interface prototype",
        description: "Our first working prototype: ESP32-based smart energy interface with power monitoring ICs, relays, and custom PCB. Real circuits, real control for real creators.",
        image: "/fusion.jpg",
        category: "r&d" // Category for filtering
    },
    {
        id: "4",
        title: "Studio gear integration",
        description: "Direct integration of studio gear—cameras, RGB lighting, audio—wired into our energy interface. See the inside: relays, wiring, and real PCB traces.",
        image: "/setup.jpeg",
        category: "updates" // Category for filtering
    },
    {
        id: "2",
        title: "Tech stack: ESP32, React Native, sensors",
        description: "Our stack: ESP32 microcontrollers, React Native (Expo), Android native sensors, and a mobile-first approach. Designed for real-time control, hardware hacking, and seamless integration for creators.",
        image: "/sensors.jpg",
        category: "App Updates" // Category for filtering

    },
    {
        id: "3",
        title: "Power stream app demo",
        description: "React Native app with live power graphs, device toggles, and direct hardware control. Built for tinkerers and streamers who want to see the data and the circuits.",
        image: "/oscilloscope.jpg",
        category: "App Updates" // Category for filtering
    },
    {
        id: "5",
        title: "circuit design & 3D modeling",
        description: "We share our process: circuit design, physics experiments, and 3D modeling. Real breadboards, oscilloscope traces, and 3D-printed enclosures.",
        image: "/schematic.jpeg",
        category: "r&d" // Category for filtering
    },
    {
        id: "7",
        title: "Open source firmware & dev process",
        description: "We open-sourced our firmware and dev process. See the code, the commits, and the hardware it runs on. Community-driven, transparent, and hackable.",
        image: "/firmware.png",
        category: "Community" // Category for filtering
    },
];

// Animation variants for reusable animations
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut" }
};

// const scaleIn = { // scaleIn is not used, so it's commented out or can be removed
//     initial: { opacity: 0, scale: 0.8 },
//     whileInView: { opacity: 1, scale: 1 },
//     transition: { duration: 0.8, ease: "easeInOut" }
// };

const viewportSettings = {
    amount: 0.2,
    once: false,
    margin: "0px 0px -100px 0px"
};

export default function Home() {
    const { theme: _theme, toggleTheme: _toggleTheme } = useContext(ThemeContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [activeFilter, setActiveFilter] = useState("All"); // New state for active filter
    const itemsPerPage = 4; // Number of update cards to display per page.

    // const handleShopClick = () => { // handleShopClick is not used, so it's commented out or can be removed
    //     window.location.href = "/shop";
    // };

    // Filters the updates based on the current search term and active category filter.
    const filteredUpdates = updatesData.filter((update) => {
        const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            update.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory = activeFilter === "All" ||
            (Array.isArray(update.category) && update.category.includes(activeFilter)) ||
            (typeof update.category === 'string' && update.category === activeFilter);
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredUpdates.length / itemsPerPage);
    const currentUpdates = filteredUpdates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const filterCategories = ["All", "DIY Builds", "App Updates", "R&D", "Flipping", "Remote Dev", "Community", "Future Products", "Vision"];

    return (
        <>
            {/* Hero Section: Introduces the core mission and initial product focus */}
            <section className="flex flex-col mb-60">
                {/* <AppHeader title="Backyard i/o " showBack={false} backHref="/" maxWidth="7xl" /> */}
                <div className="flex flex-col mb-10 w-[90%] mx-auto">
                    {/* Hero Title: Broadened to reflect the immediate value proposition */}
                    <h1
                        className="text-4xl sm:text-4xl md:text-8xl lg:text-8xl font-extrabold mb-10"
                    >
                        Energy Interface For Streamers&apos; Machines
                    </h1>
                    {/* Hero Description: Focuses on the immediate strategic mission */}
                    <motion.p
                        className="mb-10 text-lg"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Reimagining how streamers set up gear—augmented in streaming workflow—interfaces with energy to give you more leverage. We&apos;re building a smart energy-strip-like device—think Stream Deck, but for energy...
                    </motion.p>
                    {/* Call to Action Buttons */}
                    <motion.div
                        className="flex items-center space-x-4 py-4"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Link href="/setup" className="text-black">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Button variant="default" className="text-black">Get Started</Button>
                            </motion.div>
                        </Link>
                        <Link href="#more" className="">
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Button variant="outline" className="text-primary">Learn More</Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Image Container: Features a morphing animation for visual interest */}
                <div className="relative overflow-hidden flex justify-center w-[100%]">
                    <motion.div
                        className="relative h-[50vh] md:h-[100vh] overflow-hidden"
                        initial={{
                            width: "90%",
                            borderRadius: "0.5rem",
                        }}
                        whileInView={{
                            width: "100vw",
                            borderRadius: "0rem",
                        }}
                        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{
                            amount: 0.3,
                            once: false,
                            margin: "0px 0px -30% 0px"
                        }}
                        style={{ transformOrigin: "center" }}
                    >
                        {/* Studio Image: Fades out to reveal the circuit board */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 1 }}
                            whileInView={{ opacity: 0 }}
                            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                            viewport={{ amount: 0.4, once: false, margin: "0px 0px -30% 0px" }}
                        >
                            <Image
                                src="/Studio.jpg"
                                alt="Studio"
                                width={1920}
                                height={1080}
                                className="object-cover w-full h-full"
                                priority
                            />
                        </motion.div>

                        {/* Circuit Board Overlay: Fades in to represent the underlying technology */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                            viewport={{ amount: 0.4, once: false, margin: "0px 0px -30% 0px" }}
                        >
                            <Image
                                src="/circuit.webp"
                                alt="Circuit Board Overlay"
                                width={1920}
                                height={1080}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section: Details the company's mission and journey */}
            <section className="flex flex-col mb-60">
                <div className="w-[90%] mx-auto" id="more">
                    {/* Mission Statement - now contains the broader vision with external links */}
                    <motion.p
                        className="text-3xl"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        “<Link href="#learn" className="text-primary">Backyard i/o</Link> represents interface to highest potential—which enthusiasts can leverage from next industrial revolutions in an age of augmented machines. We&apos;re working on hardtech infrastructure that starts with streamers but scales to next level energy interfacing.
                        <Link href="#learn" className="text-primary"> 👇 Lets Work</Link>”
                    </motion.p>
                    {/* Journey Overview */}

                    <motion.p
                        className="pt-10 pb-10 text-3xl text-muted-foreground"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Here is our journey, component feature at a time— r&d for real progress.
                    </motion.p>


                </div>
            </section>
            <section className="flex flex-col mb-60 w-[90%] mx-auto" id="quick_actions">

                {/* Related Action Buttons (now filter buttons for updates) */}
                <motion.div
                    className="flex flex-wrap gap-4"
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {filterCategories.map((category) => (
                        <motion.div key={category} whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.2 }}>
                            <Button
                                variant={activeFilter === category ? "default" : "secondary"}
                                onClick={() => {
                                    setActiveFilter(category);
                                    setCurrentPage(1); // Reset to first page on filter change
                                }}
                            >
                                <span>{category}</span>
                            </Button>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Search Input for filtering updates */}
                <motion.div
                    className="flex items-center space-x-2 w-full mt-10"
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6 }}
                >
                    <Input
                        id="search-input"
                        type="text"
                        placeholder="🔍 Search our roadmap and updates..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                console.log('Search submitted:', searchTerm);
                            }
                        }}
                    />
                </motion.div>


            </section>

            {/* Updates Section: Displays recent developments and features */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto">

                {/* Updates Cards: Each card represents a product or feature update */}
                {currentUpdates.map((update, index) => (
                    <Link key={update.id} href={`/update/${update.id}`} passHref legacyBehavior>
                        <motion.a
                            {...fadeInUp}
                            viewport={viewportSettings}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1, // Staggered animation for visual appeal
                                ease: "easeInOut"
                            }}
                            className="block mt-10 mb-10"
                            whileHover={{
                                y: -8, // Lift effect on hover
                                scale: 1.02,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <Card className="flex flex-col md:flex-row items-center overflow-hidden hover:shadow-2xl transition-all duration-500">
                                {/* Image for the update card */}
                                <motion.div
                                    className="relative w-full md:w-96 h-80 md:h-96 bg-muted flex-shrink-0 overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <Image
                                        src={update.image}
                                        alt={update.title}
                                        width={1920}
                                        height={1080}
                                        className="object-cover w-full h-full transition-transform duration-500"
                                    />
                                </motion.div>

                                {/* Content of the update card */}
                                <div className="flex-1 flex flex-col p-6 md:p-20">
                                    <div className="flex-1">
                                        <h3
                                            className="font-bold mb-3 text-md md:text-md"
                                        >
                                            {update.title}
                                        </h3>
                                        <p className="mb-4 text-sm md:text-base text-muted-foreground">{update.description}</p>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Badge variant="default" className="w-fit">{update.category}</Badge>
                                        </motion.div>
                                    </div>
                                </div>
                            </Card>
                        </motion.a>
                    </Link>
                ))}

                {/* Pagination controls for the updates section */}
                <motion.div
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6 }}
                >
                    <Pagination className="mt-10 justify-start">
                        <PaginationContent>
                            {/* Previous page button */}
                            {currentPage > 1 && (
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                    <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                                </motion.div>
                            )}
                            {/* Page number links */}
                            {Array.from({ length: totalPages }, (_, index) => (
                                <PaginationItem key={index}>
                                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                        <PaginationLink
                                            isActive={index + 1 === currentPage}
                                            onClick={() => setCurrentPage(index + 1)}
                                        >
                                            {index + 1}
                                        </PaginationLink>
                                    </motion.div>
                                </PaginationItem>
                            ))}
                            {/* Next page button */}
                            {currentPage < totalPages && (
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                    <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                                </motion.div>
                            )}
                        </PaginationContent>
                    </Pagination>
                </motion.div>
            </section>

            {/* Brand Partnership Section: Information on collaboration opportunities */}
            <section className="flex flex-col items-start mb-10 w-[90%] mx-auto" id="learn">
                {/* Container for Brand Partnership text block */}
                <motion.div
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    {/* Brand Partnerships Title */}
                    <h2
                        className="text-3xl font-bold mb-2"
                    >
                        Brand Partnerships
                    </h2>
                    {/* Partnership Description */}
                    <p
                        className="mb-10 lg:w-[50%]"
                    >
                        We&apos;re actively building with others — If you&apos;re a creator, engineer, or brand with tools streamers rely on, let&apos;s collaborate. We stream real dev work, test affiliate hardware, and improve your systems while developing our own.
                    </p>
                    {/* Call to Action for reaching out */}
                    <p
                        className="mb-10 text-muted-foreground"
                    >
                        Reach out directly on your preferred streaming or social platform below:
                    </p>
                    {/* Social Media Icons */}
                    <div
                        className="flex space-x-10 "
                    >
                        <motion.div
                            whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <Link href="https://www.youtube.com/bckyrd-io" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <IconBrandYoutube size={32} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <Link href="https://www.tiktok.com/bckyrd-io" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <IconBrandTiktok size={32} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <Link href="https://www.twitch.tv/backyard_io" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <IconBrandTwitch size={32} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, y: -5, rotate: -5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <Link href="https://www.instagram.com/bckyrd.io" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <IconBrandInstagram size={32} />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <Link href="https://www.kick.com/backyard_io" className="text-primary" target="_blank" rel="noopener noreferrer">
                                <IconBrandKick size={32} />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}