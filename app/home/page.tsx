"use client"; // Mark this as a Client Component

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const gearData = [
    {
        name: "Streaming Camera",
        description: "High-definition camera for live streaming.",
        status: "Charged",
        link: "/gear/camera",
        energyConsumption: 10,
    },
    {
        name: "Microphone",
        description: "Crystal-clear audio with noise reduction.",
        status: "Ready",
        link: "/gear/microphone",
        energyConsumption: 5,
    },
    {
        name: "Gaming PC",
        description: "High-performance PC for streaming and gaming.",
        status: "Running",
        link: "/gear/pc",
        energyConsumption: 50,
    },
    {
        name: "Battery Backup",
        description: "Energy backup to ensure uninterrupted streaming.",
        status: "Charged",
        link: "/gear/battery",
        energyConsumption: 20,
    },
    {
        name: "Power Adapter",
        description: "Adapter for multiple tech devices.",
        status: "Connected",
        link: "/gear/adapter",
        energyConsumption: 15,
    },
];

const HomePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isClient, setIsClient] = useState(false); // Track client-side rendering

    const itemsPerPage = 3;
    const totalPages = Math.ceil(gearData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGear = gearData.slice(indexOfFirstItem, indexOfLastItem);

    // Chart data
    const chartData = gearData.map((gear) => ({
        name: gear.name,
        energyConsumption: gear.energyConsumption,
    }));

    // Ensure the chart is only rendered on the client side
    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="flex flex-col items-center h-auto w-full">
            {/* Gear Management Section */}
            <section className="flex flex-col w-[90%] mx-auto lg:w-[50%] mb-10 mt-10">
                <div className="flex justify-left space-x-4 mb-10">
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger className="text-primary">⌗ Menu</MenubarTrigger>
                            <MenubarContent>
                                <Link href="/Usage">
                                    <MenubarItem>
                                        Usage <MenubarShortcut>⌘T</MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                                <MenubarSeparator />
                                <Link href="/Setting">
                                    <MenubarItem>
                                        Setting <MenubarShortcut>⌘L</MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                                <MenubarSeparator />
                                <Link href="/auth">
                                    <MenubarItem>
                                        Logout <MenubarShortcut>⌘H</MenubarShortcut>
                                    </MenubarItem>
                                </Link>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                {/* Chart component can be added here */}
                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-semibold">Energy Consuption</h2>
                </div>

                {/* Chart Section */}
                {isClient && ( // Render the chart only on the client side
                    <Card className="flex flex-col space-y-4 mb-10 pt-4 pb-4">
                        <LineChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 0,
                                left: 0,
                                bottom: 20,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line
                                type="monotone"
                                dataKey="energyConsumption"
                                stroke="#00BFA6"
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </Card>
                )}

                {/* Gear List Section */}
                <div className="flex justify-between items-center mb-0">
                    <h2 className="text-xl font-semibold">Gear List</h2>
                    <Button asChild className="flex items-center space-x-1">
                        <Link href="/gear/gear-add">
                            <span>Add New Gear</span>
                        </Link>
                    </Button>
                </div>

                <div className="flex flex-col space-y-4 mt-5">
                    {currentGear.map((gear, index) => (
                        <Card key={index} className="flex flex-col items-start">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">{gear.name}</h2>
                            </CardHeader>

                            <div className="w-full">
                                <Image
                                    src="/drone.webp"
                                    alt={gear.name}
                                    width={1080}
                                    height={768}
                                    className="cursor-pointer w-full h-auto"
                                />
                            </div>
                            <CardContent className="mt-5">
                                <p>{gear.description}</p>
                                <Badge variant="default" className="mt-5">
                                    {gear.status}
                                </Badge>
                            </CardContent>
                        </Card>
                    ))}
                </div>

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
        </div>
    );
};

export default HomePage;