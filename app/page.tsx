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
            {/* Morphing Studio Section */}
            <section className="flex flex-col mb-60">

                <div className="flex flex-col mb-20 w-[90%] mx-auto">
                    <motion.h1
                        className="text-10xl sm:text-10xl md:text-6xl lg:text-7xl font-extrabold mt-10 mb-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Energy Interface For <br /> Streamers Workflow
                    </motion.h1>
                    <motion.p
                        className="mb-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Reimagining how streamers setup gear—augmented in streaming workflow—interfaces with energy to give you more leverage. We&apos;re building a smart energy-strip-like device—think Stream Deck, but for energy...
                    </motion.p>
                    <motion.div
                        className="flex items-center space-x-4 py-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link href="/auth" className="text-black">
                            <Button variant="default" className="text-black">Get Started</Button>
                        </Link>
                        <Link href="#more" className="">
                            <Button variant="outline" className="text-primary">Learn More</Button>
                        </Link>

                    </motion.div>
                </div>


                <div className="relative overflow-hidden flex justify-center w-[100%]">

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
                        viewport={{ amount: 0.5, once: false, margin: "0px 0px -100% 0px" }}
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
                            viewport={{ amount: 0.5, once: false, margin: "0px 0px -100% 0px" }}
                        >
                            <div className="w-full h-full bg-black/20">
                                <Image
                                    src="/circuit.webp" // Replace with your circuit board image path
                                    alt="Circuit Board Overlay"
                                    width={1920}
                                    height={1080}
                                    className="object-cover w-full h-full opacity-200"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>


            </section>


            {/* Morphing Studio Section */}
            <section className="flex flex-col mb-60">

                {/* Text stays at 90% width */}
                <div className="w-[90%] mx-auto" id="more">
                    <motion.p
                        className="pt-20 text-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ amount: 0.3 }}
                    >
                        &rdquo;  <Link href="#learn" className="text-primary">Backyard i/o</Link> represents interface to highest potential—which enthusiasts can leverage from next industrial revolutions in an age of augmented machines. We&apos;re working on hardtech infrastructure that starts with streamers but scales to next level energy interfacing.
                        <Link href="#learn" className="text-primary"> 👇 Lets Work</Link> &rdquo;
                    </motion.p>
                    <motion.p className="pt-10 pb-10 text-3xl text-muted-foreground" initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ amount: 0.3 }}>Here’s our journey, component feature at a time— r&d for real progress.</motion.p>
                    <motion.div className="flex space-x-4" initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}>
                        <Button variant="secondary" onClick={handleSearchToggle}>
                            <span className="">flipping</span>
                        </Button>
                        <Button variant="secondary" onClick={handleShopClick}>
                            <span className="">gear</span>
                        </Button>
                        <Button variant="secondary" onClick={handleSearchToggle}>
                            <span className="">marketplace</span>
                        </Button>
                        <Button variant="secondary" onClick={handleShopClick}>
                            <span className="">intergration</span>
                        </Button>

                    </motion.div>
                </div>
            </section>

            {/* Updates Section */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto">
            <div className="flex items-center space-x-2 w-full">
                        <Input
                            id="search-input"
                            type="text"
                            placeholder="Search our products and feature updates..."
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
                    </div>

                {currentUpdates.map((update) => (
                    <Link key={update.id} href={`/update/${update.id}`} passHref legacyBehavior>
                        <motion.a
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="block mt-20"
                        >
                            <Card className="flex flex-col md:flex-row items-center overflow-hidden">
                                {/* Image - responsive sizing */}
                                <div className="relative w-full md:w-80 h-64 md:h-80 bg-muted flex-shrink-0">
                                    <Image
                                        src={update.image}
                                        alt={update.title}
                                        width={1920}
                                        height={1080}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* Content - responsive layout */}
                                <div className="flex-1 flex flex-col p-20">
                                    <div className="flex-1">
                                        <p className="font-bold mb-3">{update.title}</p>
                                        <p className="mb-4 text-sm md:text-base">{update.description}</p>
                                        <Badge variant="default" className="w-fit"></Badge>
                                    </div>
                                </div>
                            </Card>
                        </motion.a>
                    </Link>
                ))}

                {/* Pagination */}
                <Pagination className="mt-10 justify-start">
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
            </section >

            {/* Brand Partnership Section (rewritten) */}
            <section className="flex flex-col items-start mb-20 w-[90%] mx-auto" id="learn">
                <h1 className="text-3xl font-bold mb-2">Brand Partnerships</h1>
                <p className="mb-10 lg:w-[50%]">
                    We’re open to hands-on partnerships, gear integrations, and R&D collaborations. If you’re a streamer, engineer, or tech brand who wants to push the boundaries of workflow and energy, let’s build the future together. Bring your project ideas—we’ll prototype, test, and iterate with you.
                </p>
                <p className="mb-10 text-muted-foreground">
                    Reach out via your preferred streaming or social platform below:
                </p>
                <div className="flex space-x-10">
                    <Link href="https://www.youtube.com/bckyrd-io" className="text-primary"><IconBrandYoutube /></Link>
                    <Link href="https://www.tiktok.com/bckyrd-io" className="text-primary"><IconBrandTiktok /></Link>
                    <Link href="https://www.twitch.tv/backyard_io" className="text-primary"><IconBrandTwitch /></Link>
                    <Link href="https://www.instagram.com/bckyrd.io" className="text-primary"><IconBrandInstagram /></Link>
                    <Link href="https://www.kick.com/backyard_io" className="text-primary"><IconBrandKick /></Link>
                </div>
            </section>
        </>
    );
}