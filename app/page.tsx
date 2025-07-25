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

const updatesData = [
    {
        id: "6",
        title: "Modular hardware expansion",
        description: "Developing a library of modular hardware components—each with its own PCB, firmware, and 3D-printed case. Designed for hacking, remixing, and scaling.",
        image: "/control.webp" // Array of PCBs, modular hardware
    },
    {
        id: "1",
        title: "ESP32 energy interface prototype",
        description: "Our first working prototype: ESP32-based smart energy interface with power monitoring ICs, relays, and custom PCB. Real circuits, real control for real creators.",
        image: "/fusion.jpg" // ESP32, breadboard, wires
    },
    {
        id: "4",
        title: "Studio gear integration",
        description: "Direct integration of studio gear—cameras, RGB lighting, audio—wired into our energy interface. See the inside: relays, wiring, and real PCB traces.",
        image: "/setup.jpeg" // Gear, RGB, camera, setup
    },
    {
        id: "2",
        title: "Tech stack: ESP32, React Native, sensors",
        description: "Our stack: ESP32 microcontrollers, React Native (Expo), Android native sensors, and a mobile-first approach. Designed for real-time control, hardware hacking, and seamless integration for creators.",
        image: "/sensors.jpg" // Microcontroller, code, mobile
    },
    {
        id: "3",
        title: "Power stream app demo",
        description: "React Native app with live power graphs, device toggles, and direct hardware control. Built for tinkerers and streamers who want to see the data and the circuits.",
        image: "/oscilloscope.jpg" // Technical UI with graphs, code, and hardware
    },
    {
        id: "5",
        title: "R&D: circuits, physics, 3D models",
        description: "We share our process: circuit design, physics experiments, and 3D modeling. Real breadboards, oscilloscope traces, and 3D-printed enclosures.",
        image: "/schematic.jpeg" // Flat lay: circuit, oscilloscope, hands-on
    },
    {
        id: "7",
        title: "Open source firmware & dev process",
        description: "We open-sourced our firmware and dev process. See the code, the commits, and the hardware it runs on. Community-driven, transparent, and hackable.",
        image: "/firmware.png" // Code on screen, hardware visible
    },
];

// Animation variants for reusable animations
// fadeInUp: Elements slide up into view
const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeInOut" }
};

// scaleIn: Elements scale up into view (expanding effect)
const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeInOut" }
};

// viewportSettings: Configuration for when animations trigger
// amount: 0.2 means animation starts when 20% of the element is in view
// once: false means animation can re-trigger if element leaves and re-enters viewport
// margin: "0px 0px -100px 0px" adjusts the trigger point (100px from bottom of viewport)
const viewportSettings = { 
    amount: 0.2, 
    once: false, 
    margin: "0px 0px -100px 0px" 
};

export default function Home() {
    const { theme: _theme, toggleTheme: _toggleTheme } = useContext(ThemeContext); // Use the global theme context
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showSearch, setShowSearch] = useState(false);
    const itemsPerPage = 4;

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

    const _handleDocsClick = () => {
        window.open("https://github.com/bckyrd-io", "_blank");
    };

    const filteredUpdates = updatesData.filter((update) =>
        update.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUpdates.length / itemsPerPage);
    const currentUpdates = filteredUpdates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <>
            {/* Hero Section */}
            <section className="flex flex-col mb-60">
                <div className="flex flex-col mb-10 w-[90%] mx-auto">
                    {/* Hero Title - Changed to scaleIn animation */}
                    <h1
                        className="text-4xl sm:text-4xl md:text-8xl lg:text-8xl font-extrabold mt-10 mb-10"
                     
                    >
                        Energy Interface For Streamers Workflow
                    </h1>
                    {/* Hero Description - Changed to fadeInUp animation */}
                    <motion.p
                        className="mb-10 text-lg"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Reimagining how streamers setup gear—augmented in streaming workflow—interfaces with energy to give you more leverage. We&apos;re building a smart energy-strip-like device—think Stream Deck, but for energy...
                    </motion.p>
                    {/* Hero Buttons - Changed to fadeInUp animation */}
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

                {/* Hero Image Container - Morphing animation (untouched as requested) */}
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
                        {/* Studio Image */}
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

                        {/* Circuit Board Overlay - Fixed dimming issue */}
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

            {/* About Section */}
            <section className="flex flex-col mb-60">
                <div className="w-[90%] mx-auto" id="more">
                    {/* About Paragraph 1 - Changed to fadeInUp */}
                    <motion.p
                        className="text-3xl"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        &ldquo;<Link href="#learn" className="text-primary">Backyard i/o</Link> represents interface to highest potential—which enthusiasts can leverage from next industrial revolutions in an age of augmented machines. We&apos;re working on hardtech infrastructure that starts with streamers but scales to next level energy interfacing.
                        <Link href="#learn" className="text-primary"> 👇 Lets Work</Link>&rdquo;
                    </motion.p>
                    {/* About Paragraph 2 - Changed to fadeInUp */}
                    <motion.p 
                        className="pt-10 pb-10 text-3xl text-muted-foreground"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Here is our journey, component feature at a time— r&d for real progress.
                    </motion.p>
                    {/* About Buttons - Changed to fadeInUp */}
                    <motion.div 
                        className="flex flex-wrap gap-4"
                        {...fadeInUp}
                        viewport={viewportSettings}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.2 }}>
                            <Button variant="secondary" onClick={handleSearchToggle}>
                                <span>flipping</span>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.2 }}>
                            <Button variant="secondary" onClick={handleShopClick}>
                                <span>gear</span>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.2 }}>
                            <Button variant="secondary" onClick={handleSearchToggle}>
                                <span>marketplace</span>
                            </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.2 }}>
                            <Button variant="secondary" onClick={handleShopClick}>
                                <span>integration</span>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Updates Section */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto">
                {/* Search Input - Changed to fadeInUp animation */}
                <motion.div 
                    className="flex items-center space-x-2 w-full mb-10"
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6 }}
                >
                    <Input
                        id="search-input"
                        type="text"
                        placeholder="🔍 Search our products and feature updates..."
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

                {/* Updates Cards - each card animates in with fadeInUp and staggered delay */}
                {currentUpdates.map((update, index) => (
                    <Link key={update.id} href={`/update/${update.id}`} passHref legacyBehavior>
                        <motion.a
                            {...fadeInUp}
                            viewport={viewportSettings}
                            transition={{ 
                                duration: 0.8, 
                                delay: index * 0.1, // Staggered delay for each card
                                ease: "easeInOut"
                            }}
                            className="block mt-20"
                            whileHover={{ 
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                        >
                            <Card className="flex flex-col md:flex-row items-center overflow-hidden hover:shadow-2xl transition-all duration-500">
                                {/* Image - responsive sizing */}
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

                                {/* Content - responsive layout. No animation on inner content elements for smoother block-level UX */}
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
                                            <Badge variant="default" className="w-fit">Read More</Badge>
                                        </motion.div>
                                    </div>
                                </div>
                            </Card>
                        </motion.a>
                    </Link>
                ))}

                {/* Pagination - Changed to fadeInUp */}
                <motion.div
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6 }}
                >
                    <Pagination className="mt-10 justify-start">
                        <PaginationContent>
                            {currentPage > 1 && (
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                    <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                                </motion.div>
                            )}
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
                            {currentPage < totalPages && (
                                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                                    <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                                </motion.div>
                            )}
                        </PaginationContent>
                    </Pagination>
                </motion.div>
            </section>

            {/* Brand Partnership Section */}
            <section className="flex flex-col items-start mb-20 w-[90%] mx-auto" id="learn">
                {/* Container for Brand Partnership text block - Changed to fadeInUp animation */}
                <motion.div
                    {...fadeInUp}
                    viewport={viewportSettings}
                    transition={{ duration: 0.8 }}
                    className="w-full"
                >
                    {/* Brand Partnerships Title - Changed to fadeInUp animation */}
                    <h2 
                        className="text-3xl font-bold mb-2"
                    >
                        Brand Partnerships
                    </h2>
                    {/* Brand Partnerships Paragraph 1 - Changed to fadeInUp animation */}
                    <p 
                        className="mb-10 lg:w-[50%]"
                    >
                        We are open to hands-on partnerships, gear integrations, and R&D collaborations. If you are a streamer, engineer, or tech brand who wants to push the boundaries of workflow and energy, lets build the future together. Bring your project ideas—we will prototype, test, and iterate with you.
                    </p>
                    {/* Brand Partnerships Paragraph 2 - Changed to fadeInUp animation */}
                    <p 
                        className="mb-10 text-muted-foreground"
                    >
                        Reach out via your preferred streaming or social platform below:
                    </p>
                </motion.div>
                {/* Social Icons - Changed to scaleIn animation */}
                <motion.div 
                    className="flex space-x-10"
                    {...scaleIn}
                    viewport={viewportSettings}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <motion.div 
                        whileHover={{ scale: 1.2, y: -5, rotate: 5 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Link href="https://www.youtube.com/bckyrd-io" className="text-primary">
                            <IconBrandYoutube size={32} />
                        </Link>
                    </motion.div>
                    <motion.div 
                
                        whileHover={{ scale: 1.2, y: -5, rotate: -5 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Link href="https://www.tiktok.com/bckyrd-io" className="text-primary">
                            <IconBrandTiktok size={32} />
                        </Link>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.2, y: -5, rotate: 5 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Link href="https://www.twitch.tv/backyard_io" className="text-primary">
                            <IconBrandTwitch size={32} />
                        </Link>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.2, y: -5, rotate: -5 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Link href="https://www.instagram.com/bckyrd.io" className="text-primary">
                            <IconBrandInstagram size={32} />
                        </Link>
                    </motion.div>
                    <motion.div 
                        whileHover={{ scale: 1.2, y: -5, rotate: 5 }} 
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Link href="https://www.kick.com/backyard_io" className="text-primary">
                            <IconBrandKick size={32} />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
}
