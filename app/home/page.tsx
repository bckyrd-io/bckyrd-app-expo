"use client";

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

import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LabelList } from "recharts";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, Settings, LogOut } from "lucide-react";


const HomePage = () => {

    // Define a function or object to map status to colors
    const statusColors = {
        Running: "bg-yellow-500",   // Green for running
        Available: "bg-green-500",     // Blue for ready
        stopped: "bg-danger-500",   // Gray for stopped or inactive, as an example
    };

    type Gear = {
        id: number;
        name: string;
        energyConsuption: number;
        description: string;
        status: "Running" | "Available" | "stopped";
    }

    const [gearData, setGearData] = useState<Gear[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isClient, setIsClient] = useState(false);
    const itemsPerPage = 3;

    useEffect(() => {
        setIsClient(true);
        fetch("/api/gear")
            .then((res) => res.json())
            .then((data) => setGearData(data))
            .catch((error) => console.error("Error fetching gear data:", error));
    }, []);

    const totalPages = Math.ceil(gearData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentGear = gearData.slice(indexOfFirstItem, indexOfLastItem);

    const chartData = gearData.map((gear) => ({
        name: gear.name,
        wattage: gear.energyConsuption,
    }));

    return (
        <div className="flex flex-col items-center h-auto w-full">
            <section className="flex flex-col w-[90%] mx-auto lg:w-[50%] mb-10 mt-5">
                <div className="flex items-center mb-10">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="flex items-center rounded-lg cursor-pointer transition-colors">
                                <Image
                                    src="/photo.jpg"
                                    alt="Profile Avatar"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 rounded-full"
                                />
                                <div className="flex flex-col items-start p-2">
                                    <span className="font-semibold text-sm">John Doe</span>
                                    <span className="text-xs text-gray-500">View Profile</span>
                                </div>
                            </div>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-48" align="start">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />

                            <Link href="/profile">
                                <DropdownMenuItem className="cursor-pointer">
                                    <User className="mr-2 h-4 w-4" />
                                    Profile
                                </DropdownMenuItem>
                            </Link>

                            <Link href="/settings">
                                <DropdownMenuItem className="cursor-pointer">
                                    <Settings className="mr-2 h-4 w-4" />
                                    Settings
                                </DropdownMenuItem>
                            </Link>

                            <DropdownMenuSeparator />

                            <DropdownMenuItem
                                className="cursor-pointer text-red-600 focus:text-red-700"
                                onClick={() => {
                                    /* Add logout logic */
                                    window.location.href = "/";
                                }}
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-semibold">Energy Consumption</h2>
                    <Button variant={"outline"} asChild>
                        <Link href="/Usage">Usage</Link>
                    </Button>
                </div>

                {isClient && (
                    <Card className="mb-10 pt-4 pb-4">
                        <ResponsiveContainer width="100%" aspect={10.5}>
                            <LineChart height={350} width={350} data={chartData} margin={{ left: 12, right: 12 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis/>
                                <YAxis dataKey="wattage"/>
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="wattage" stroke="#00BFA6" activeDot={{ r: 8 }} >
                                    <LabelList
                                        position="top"
                                        offset={12}
                                        className="fill-foreground"
                                        fontSize={14}
                                        dataKey="name"
                                        formatter={(value: string) => value}
                                    />
                                </Line>
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                )}

                <div className="flex justify-between items-center mb-0">
                    <h2 className="text-xl font-semibold">Gear List</h2>
                    <Button variant={"outline"} asChild>
                        <Link href="/gear/gear-add">Add New Gear</Link>
                    </Button>
                </div>

                <div className="flex flex-col space-y-4 mt-5">
                    {currentGear.map((gear) => (
                        <Card key={gear.id} className="flex flex-col items-start">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">{gear.name}</h2>
                            </CardHeader>
                            <div className="w-full">
                                <Image src="/drone.webp" alt={gear.name} width={1080} height={768} className="cursor-pointer w-full h-auto" />
                            </div>
                            <CardContent className="mt-5">
                                <p>{gear.description}</p>
                                <Link href={`/gear/${gear.id}`} className="mt-10">
                                    {/* Use the dynamic class name based on gear.status */}
                                    <Badge className={`${statusColors[gear.status]} text-white mt-5`}>
                                        {gear.status}
                                    </Badge>
                                </Link>

                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Pagination className="mt-5 justify-start">
                    <PaginationContent>
                        {currentPage > 1 && <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />}
                        {Array.from({ length: totalPages }, (_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink isActive={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {currentPage < totalPages && <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />}
                    </PaginationContent>
                </Pagination>
            </section>
        </div>
    );
};

export default HomePage;
