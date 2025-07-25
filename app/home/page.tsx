"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Settings, } from "lucide-react";
import { IconSettings, IconUser, IconLogout } from '@tabler/icons-react';
import { AppHeader } from '@/components/app-header';



// Define types for better safety and clarity
type EnergyMode = "Eco" | "Balanced" | "Performance";

interface Gear {
    id: number;
    name: string;
    energyConsumption: number;
    status: "Running" | "Available";
    category: "Controller" | "Camera" | "Audio" | "Lighting";
    image: string;
    description: string;
    modes: EnergyMode[];
}

// Mock data updated with energy modes
const mockGearData: Gear[] = [
    { id: 1, name: "Stream Deck", energyConsumption: 5, status: "Running", category: "Controller", image: "/photo.jpg", description: "Customizable LCD keys for streaming.", modes: ["Eco", "Balanced", "Performance"] },
    { id: 2, name: "Brio 4K Webcam", energyConsumption: 8, status: "Available", category: "Camera", image: "/photo.jpg", description: "Ultra HD 4K streaming webcam.", modes: ["Balanced", "Performance"] },
    { id: 3, name: "Blue Yeti", energyConsumption: 2, status: "Running", category: "Audio", image: "/photo.jpg", description: "Professional USB microphone.", modes: ["Eco", "Balanced"] },
    { id: 4, name: "LED Lights", energyConsumption: 15, status: "Running", category: "Lighting", image: "/photo.jpg", description: "Smart LED light bars for ambiance.", modes: ["Performance"] },
    { id: 5, name: "GoXLR Mini", energyConsumption: 4, status: "Available", category: "Audio", image: "/photo.jpg", description: "Online broadcast mixer with USB.", modes: ["Balanced", "Performance"] },
];

const HomePage = () => {
    const [gearData, setGearData] = useState<Gear[]>(mockGearData);
    const [selectedMode, setSelectedMode] = useState<EnergyMode>("Balanced");

    const modes = useMemo<EnergyMode[]>(() => ["Eco", "Balanced", "Performance"], []);

    // Filter gear based on the selected energy mode
    const filteredGear = useMemo(() =>
        gearData.filter(gear => gear.modes.includes(selectedMode)),
        [gearData, selectedMode]
    );

    // Calculate statistics for each energy mode card
    const modeStats = useMemo(() => {
        return modes.map(mode => {
            const modeGears = gearData.filter(g => g.modes.includes(mode));
            const runningGears = modeGears.filter(g => g.status === 'Running');
            const totalEnergy = runningGears.reduce((acc, gear) => acc + gear.energyConsumption, 0);
            return {
                name: mode,
                totalEnergy,
                activeDevices: runningGears.length,
                totalDevices: modeGears.length,
            };
        });
    }, [gearData, modes]);

    const toggleGearStatus = (id: number) => {
        setGearData(currentGearData =>
            currentGearData.map(gear =>
                gear.id === id
                    ? { ...gear, status: gear.status === "Running" ? "Available" : "Running" }
                    : gear
            )
        );
    };

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AppHeader 
                title="Home" 
                maxWidth="7xl"
                leftContent={
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-10 w-10 -ml-2">
                                <Settings className="h-5 w-5 text-primary" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">Username</p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        user@example.com
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <Link href="/profile">
                                <DropdownMenuItem>
                                    <IconUser className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                            </Link>
                            <Link href="/setting">
                                <DropdownMenuItem>
                                    <IconSettings className="mr-2 h-4 w-4" />
                                    <span>Settings</span>
                                </DropdownMenuItem>
                            </Link>
                            <DropdownMenuSeparator />
                            <Link href="/auth">
                                <DropdownMenuItem className="text-red-500 focus:text-red-500 focus:bg-red-50 dark:focus:bg-red-900/50">
                                    <IconLogout className="mr-2 h-4 w-4" />
                                    <span>Log out</span>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
            />

            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Energy Mode Selection Cards */}
                <section aria-labelledby="energy-modes-heading" className="mb-12">
                    <h2 id="energy-modes-heading" className="sr-only">Energy Modes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {modeStats.map(stat => (
                            <Card
                                key={stat.name}
                                onClick={() => setSelectedMode(stat.name)}
                                className={`cursor-pointer transition-all duration-200 ${selectedMode === stat.name ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'}`}>
                                <CardHeader>
                                    <h3 className="text-lg font-semibold">{stat.name} Mode</h3>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div>
                                        <div className="text-3xl font-bold">{stat.totalEnergy}W</div>
                                        <p className="text-sm text-muted-foreground">Current Draw</p>
                                    </div>
                                    <div>
                                        <div className="text-xl font-bold">{stat.activeDevices}/{stat.totalDevices}</div>
                                        <p className="text-sm text-muted-foreground">Active Devices</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Gear List */}
                <section aria-labelledby="gear-heading">
                    <div className="flex justify-start items-center mb-12 space-x-4">
                        <Button asChild variant="secondary" className="text-primary">
                            <Link href="/gear/gear-add">
                                Add {selectedMode} Gear
                            </Link>
                        </Button>
                        <Button asChild variant="secondary" className="text-primary">
                            <Link href="/usage">
                                ✨ Usage
                            </Link>
                        </Button>
                    </div>

                    <div className="flex flex-col">
                        {filteredGear.map((gear) => (
                            <Card key={gear.id} className="w-full mb-12 overflow-hidden hover:shadow-lg transition-shadow">
                                <div className="flex flex-col md:flex-row min-h-[280px]">
                                    <div className="relative w-full md:w-64 h-48 md:h-auto bg-muted flex-shrink-0">
                                        <Image src={gear.image} alt={gear.name} layout="fill" objectFit="cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col p-6 justify-between">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg md:text-xl mb-1">{gear.name}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{gear.category}</p>
                                            <p className="text-sm leading-relaxed mb-4">{gear.description}</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                            <div className="flex items-center gap-3">
                                                <Badge variant={gear.status === "Running" ? "default" : "secondary"}>{gear.status}</Badge>
                                                <span className="text-lg font-bold">{gear.energyConsumption}W</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button size="sm" variant={gear.status === "Running" ? "destructive" : "default"} onClick={() => toggleGearStatus(gear.id)}>
                                                    {gear.status === "Running" ? "Power Off" : "Power On"}
                                                </Button>
                                                <Button size="sm" variant="outline" asChild>
                                                    <Link href={`/gear/${gear.id}`}>Edit</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default HomePage;