"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { IconChevronLeft } from "@tabler/icons-react";


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
        <div className="flex flex-col items-center h-auto w-full bg-white text-black">

            {/* Gear Management Section */}
            <section className="flex flex-col w-[90%] mx-auto lg:w-[50%] mb-10 mt-10">
                <div className="flex justify-left space-x-4 mb-10">

                    <Link href="/home">
                        <Button variant="outline" className="text-primary">
                            <IconChevronLeft size={18} /> Back
                        </Button>
                    </Link>

                </div>
                {/* Chart component can be added here */}
                <div className="flex justify-between items-center mb-0">
                    <h2 className="text-xl font-semibold">Insights Notes</h2>
                </div>

                <div className="flex flex-col space-y-4 mt-10">
                    {usageData.map((item, index) => (
                        <Card key={index} className="flex flex-col items-start ">
                            <CardHeader>
                                <h2 className="text-xl font-semibold">{item.name}</h2>
                            </CardHeader>
                            <CardContent className="mt-5">
                                <p>{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>


            </section>


        </div>
    );
};

export default UsagePage;
