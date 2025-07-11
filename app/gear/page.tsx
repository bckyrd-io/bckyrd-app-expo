"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const GearManagement = () => {
    const [gearData, setGearData] = useState([
        {
            id: 1,
            name: "Stream Deck",
            energyConsuption: 15,
            status: "Running",
            category: "Controller"
        },
        {
            id: 2,
            name: "Brio 4K Webcam",
            energyConsuption: 20,
            status: "Available",
            category: "Camera"
        },
        {
            id: 3,
            name: "Blue Yeti",
            energyConsuption: 10,
            status: "Running",
            category: "Audio"
        },
        {
            id: 4,
            name: "LED Lights",
            energyConsuption: 30,
            status: "Running",
            category: "Lighting"
        }
    ]);

    const handleStatusChange = (gearId: number, newStatus: string) => {
        setGearData(gearData.map(gear => 
            gear.id === gearId ? { ...gear, status: newStatus } : gear
        ));
    };

    return (
        <div className="flex flex-col h-full w-full p-4">
            <div className="flex items-center mb-6">
                <Link href="/home" className="flex items-center text-gray-500 hover:text-gray-700">
                    <ChevronLeft className="h-5 w-5" />
                    <span className="ml-1">Back</span>
                </Link>
            </div>
            <h1 className="text-2xl font-bold mb-4">Gear Management</h1>

            <div className="flex flex-col gap-4">
                {gearData.map(gear => (
                    <Card key={gear.id}>
                        <CardContent>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold">{gear.name}</h3>
                                <Badge variant={gear.status === "Running" ? "default" : "outline"}>
                                    {gear.status}
                                </Badge>
                            </div>
                            <p className="text-sm text-gray-600">{gear.category}</p>
                            <div className="mt-4 flex justify-between items-center">
                                <div className="text-sm text-gray-600">Energy Usage</div>
                                <div className="text-xl font-bold">{gear.energyConsuption}W</div>
                            </div>
                            <div className="mt-4 space-y-2">
                                <Button
                                    variant={gear.status === "Running" ? "default" : "outline"}
                                    onClick={() => handleStatusChange(gear.id, gear.status === "Running" ? "Available" : "Running")}
                                >
                                    {gear.status === "Running" ? "Stop" : "Start"}
                                </Button>

                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default GearManagement;
