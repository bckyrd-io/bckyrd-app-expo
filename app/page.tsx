'use client';
import { useContext, useState, useEffect } from "react";
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
        category: "R&D" // Category for filtering
    },
    {
        id: "1",
        title: "ESP32 energy interface prototype",
        description: "Our first working prototype: ESP32-based smart energy interface with power monitoring ICs, relays, and custom PCB. Real circuits, real control for real creators.",
        image: "/fusion.jpg",
        category: "R&D" // Category for filtering
    },
    {
        id: "4",
        title: "Studio gear integration",
        description: "Direct integration of studio gear—cameras, RGB lighting, audio—wired into our energy interface. See the inside: relays, wiring, and real PCB traces.",
        image: "/setup.jpeg",
        category: "Shop" // Category for filtering
    },
    {
        id: "2",
        title: "Tech stack: ESP32, React Native, sensors",
        description: "Our stack: ESP32 microcontrollers, React Native (Expo), Android native sensors, and a mobile-first approach. Designed for real-time control, hardware hacking, and seamless integration for creators.",
        image: "/sensors.jpg",
        category: "Remote Dev" // Category for filtering

    },
    {
        id: "3",
        title: "Power stream app demo",
        description: "React Native app with live power graphs, device toggles, and direct hardware control. Built for tinkerers and streamers who want to see the data and the circuits.",
        image: "/oscilloscope.jpg",
        category: "Download" // Category for filtering
    },
    {
        id: "5",
        title: "circuit design & 3D modeling",
        description: "We share our process: circuit design, physics experiments, and 3D modeling. Real breadboards, oscilloscope traces, and 3D-printed enclosures.",
        image: "/schematic.jpeg",
        category: "R&D" // Category for filtering
    },
    {
        id: "7",
        title: "Open source firmware & dev process",
        description: "We open-sourced our firmware and dev process. See the code, the commits, and the hardware it runs on. Community-driven, transparent, and hackable.",
        image: "/firmware.png",
        category: "Remote Dev" // Category for filtering
    },
];

// Animation variants for reusable animations
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut" }
};


const viewportSettings = {
    amount: 0.2,
    once: false,
    margin: "0px 0px -100px 0px"
};

export default function Home() {
    // Download App always opens Play Store
    const handleDownloadClick = () => {
        window.open('https://play.google.com/store/apps/', '_blank');
    };
    const { theme: _theme, toggleTheme: _toggleTheme } = useContext(ThemeContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [activeCategory, setActiveCategory] = useState<string | null>(null); // For filtering updates by category
    const itemsPerPage = 4; // Number of update cards to display per page.
    const [initialWidth, setInitialWidth] = useState("50%"); // New state for initial width

    // Use useEffect to set the initial width based on the window size on the client side
    useEffect(() => {
        if (typeof window !== "undefined") {
            const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint is 768px
            setInitialWidth(isMobile ? "90%" : "50%");
        }
    }, []);




    // Filters the updates based on the current search term and active category.
    const filteredUpdates = updatesData.filter((update) => {
        const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            update.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = !activeCategory || update.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const totalPages = Math.ceil(filteredUpdates.length / itemsPerPage);
    const currentUpdates = filteredUpdates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Handler for quick access category filter (e.g., Shop Gear)
    const handleQuickAccessCategory = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
        // Scroll to updates section
        const updatesSection = document.getElementById("updates-section");
        if (updatesSection) {
            updatesSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>

            {/* Hero Section: Introduces the core mission and initial product focus */}
            <section className="flex flex-col mb-40">
                {/* AppHeader is commented out in original file */}
                <div className="flex flex-col mb-10 w-[90%] mx-auto md:w-[50%]">
                    {/* Hero Title: Broadened to reflect the immediate value proposition */}
                    <h1
                        className="text-6xl font-extrabold mb-10"
                    >
                        Energy Interface For Streamers Workflow
                    </h1>
                    {/* Hero Description: Focuses on the immediate strategic mission */}
                    <motion.p
                        className="mb-10 text-lg text-left"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Think Stream Deck— but for energy...
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
                                <Button variant="outline" className="text-primary">About us</Button>
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Image Container: Features a morphing animation for visual interest */}
                <div className="relative overflow-hidden flex justify-center w-[100%]">
                    <motion.div
                        className="relative h-[50vh] md:h-[100vh] overflow-hidden"
                        initial={{
                            width: initialWidth, // Use the dynamically set initial width
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
                        {/* Studio Image: Fades out to reveal the YouTube video */}
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

                        {/* YouTube Video Overlay: Fades in to show the video content */}
                        <motion.div
                            className="absolute inset-0"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                            viewport={{ amount: 0.4, once: false, margin: "0px 0px -30% 0px" }}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/OzPuztbWoIY?autoplay=1&mute=1&loop=1&playlist=OzPuztbWoIY&controls=0&showinfo=0&rel=0&modestbranding=1"
                                title="YouTube video"
                                className="w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section: Details the company's mission and journey */}
            <section className="flex flex-col mb-40">
                <div className="w-[90%] mx-auto md:w-[50%]" id="more">
                    {/* Mission Statement - now contains the broader vision with external links */}
                    <motion.p
                        className="text-3xl"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        “<Link href="#learn" className="text-primary">Backyard i/o</Link> represents interface to highest potential—which enthusiasts can leverage from next industrial revolutions in an age of augmented machines. We&apos;re working on hardtech infrastructure that starts with streamers but scales to next level energy interfacing.
                        <Link href="#learn" className="text-primary"> 👇 Let&apos;s Work</Link>”
                    </motion.p>


                </div>
            </section>

            <section className="flex flex-col mb-40 w-[90%] mx-auto md:w-[50%]" id="quick-access">
                <motion.div {...fadeInUp} viewport={viewportSettings} transition={{ duration: 0.8, delay: 0.1 }}>
                    <p className="text-muted-foreground mb-10">
                        Get started with our energy interface app, explore our R&D roadmap, or shop for compatible gear.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                        {/* Download App (opens correct store based on device) */}
                        <button type="button" onClick={handleDownloadClick} className="focus:outline-none">
                            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="flex flex-col items-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-secondary hover:shadow-xl transition-all duration-300 cursor-pointer">
                                <motion.div className="mb-3 text-primary" whileHover={{ scale: 1.1 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                                </motion.div>
                                <span className="text-md font-semibold text-center">Download App</span>
                            </motion.div>
                        </button>

                        {/* Our Roadmap */}
                        <Link href="#updates-section">
                            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="flex flex-col items-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-secondary hover:shadow-xl transition-all duration-300 cursor-pointer">
                                <motion.div className="mb-3 text-primary" whileHover={{ scale: 1.1 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch"><line x1="6" x2="6" y1="3" y2="15" /><circle cx="18" cy="6" r="3" /><path d="M18 9a9 9 0 0 1-9 9" /><path d="M6 21v-3" /><circle cx="6" cy="18" r="3" /></svg>
                                </motion.div>
                                <span className="text-md font-semibold text-center">Our Roadmap</span>
                            </motion.div>
                        </Link>

                        {/* Shop Gear (filters updates by Shop category) */}
                        <button type="button" onClick={() => handleQuickAccessCategory('Shop')} className="focus:outline-none">
                            <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }} className="flex flex-col items-center p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-secondary hover:shadow-xl transition-all duration-300 cursor-pointer">
                                <motion.div className="mb-3 text-primary" whileHover={{ scale: 1.1 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                                </motion.div>
                                <span className="text-md font-semibold text-center">Shop Gear</span>
                            </motion.div>
                        </button>

                    </div>
                </motion.div>
            </section>

            {/* Updates Section: Displays recent developments and features */}
            <section className="flex flex-col mb-40 w-[90%] mx-auto md:w-[50%]" id="updates-section">


                <motion.p
                    className="pt-10 pb-10 text-3xl text-muted-foreground"
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Here is our journey, component feature at a time— r&d for real progress.
                </motion.p>
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
                                <div className="flex-1 flex flex-col p-4 md:p-6">
                                    <div className="flex-1">
                                        <h3
                                            className="font-bold mb-3 text-md md:text-md"
                                        >
                                            {update.title}
                                        </h3>
                                        <p className="mb-4 text-sm md:text-base text-muted-foreground">{update.description}</p>
                                        <Badge variant="default" className="w-fit">{update.category}</Badge>
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
            <section className="flex flex-col items-start mb-10 w-[90%] mx-auto md:w-[50%]" id="learn">
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