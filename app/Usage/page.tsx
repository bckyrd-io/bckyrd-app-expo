"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AppHeader } from "@/components/app-header";


const usageData = [
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


const UsagePage = () => {

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AppHeader title="Usage" showBack={true} backHref="/home" maxWidth="4xl" />
            <div className="w-full max-w-4xl mx-auto px-4 py-8">
                    <h2 className="text-xl font-semibold mb-6">Energy Usage</h2>
                    <div className="space-y-4">
                        {usageData.map((item, index) => (
                            <Card key={index} className="w-full">
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium">{item.energyConsumption}W</p>
                                            <p className="text-xs text-muted-foreground">{item.status}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default UsagePage;
