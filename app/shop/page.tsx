"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppHeader } from "@/components/app-header";

const partnerGear = [
    {
        id: "1",
        name: "Elgato Stream Deck MK.2",
        description: "Professional streaming controller with 15 LCD keys. Fully compatible with our energy interface system.",
        price: "$149.99",
        image: "/photo.jpg",
        partner: "Elgato",
        category: "Controllers",
        compatibility: "Full Integration"
    },
    {
        id: "2",
        name: "Logitech Brio 4K Webcam",
        description: "Ultra HD webcam with HDR and auto-focus. Optimized lighting control through our energy interface.",
        price: "$199.99",
        image: "/photo.jpg",
        partner: "Logitech",
        category: "Cameras",
        compatibility: "Full Integration"
    },
    {
        id: "3",
        name: "Philips Hue Play Light Bars",
        description: "Smart LED light bars for professional streaming setup. Direct energy interface control.",
        price: "$79.99",
        image: "/photo.jpg",
        partner: "Philips",
        category: "Lighting",
        compatibility: "Full Integration"
    },
    {
        id: "4",
        name: "Blue Yeti X Microphone",
        description: "Professional USB microphone with LED metering. Energy-efficient operation mode.",
        price: "$169.99",
        image: "/photo.jpg",
        partner: "Blue",
        category: "Audio",
        compatibility: "Compatible"
    },
    {
        id: "5",
        name: "Nanoleaf Canvas Smart Light Panels",
        description: "Modular smart light panels. Perfect for creating dynamic streaming environments.",
        price: "$299.99",
        image: "/photo.jpg",
        partner: "Nanoleaf",
        category: "Lighting",
        compatibility: "Full Integration"
    },
    {
        id: "6",
        name: "Razer Kiyo Pro Webcam",
        description: "Professional streaming webcam with adaptive light sensor. Energy optimization ready.",
        price: "$299.99",
        image: "/photo.jpg",
        partner: "Razer",
        category: "Cameras",
        compatibility: "Compatible"
    }
];

const categories = ["All", "Controllers", "Cameras", "Lighting", "Audio"];

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredGear = partnerGear.filter(gear => {
        return selectedCategory === "All" || gear.category === selectedCategory;
    });

    return (
        <div className="min-h-screen bg-background text-foreground">
            <AppHeader title="Partner Gear" showBack={true} backHref="/home" maxWidth="7xl" />
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <p className="text-muted-foreground">Discover energy-optimized equipment from our partners</p>
                </div>
                <div className="flex flex-wrap gap-4 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="flex flex-col gap-12">
                    {filteredGear.map((gear) => (
                        <Card key={gear.id} className="flex flex-col md:flex-row items-center overflow-hidden">
                            {/* Image - responsive sizing */}
                            <div className="relative w-full md:w-80 h-64 md:h-80 bg-muted flex-shrink-0">
                                <Image
                                    src={gear.image}
                                    alt={gear.name}
                                    width={1920}
                                    height={1080}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <div className="flex-1 flex flex-col p-8">
                                <div className="flex-1">

                                    <h3 className="text-xl font-bold mb-2">{gear.name}</h3>
                                    <p className="text-sm text-muted-foreground mb-4">by {gear.partner}</p>
                                    <p className="text-muted-foreground text-sm mb-6">{gear.description}</p>
                                    <div className="flex items-center gap-2 mb-4">
                                        <Badge
                                            variant={gear.compatibility === "Full Integration" ? "default" : "secondary"}
                                            className="text-xs"
                                        >
                                            {gear.compatibility}
                                        </Badge>
                                    </div>
                                    <p className="mb-4"><span className="text-lg font-bold ">{gear.price}</span></p>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => window.open(`https://amazon.com/s?k=${encodeURIComponent(gear.name)}`, '_blank')}
                                        className="whitespace-nowrap"
                                    >
                                        View on Amazon
                                    </Button>
                                </div>
                            </div>

                        </Card>
                    ))}
                </div>
            </div>
        </div >
    );
}