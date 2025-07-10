"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconChevronLeft } from "@tabler/icons-react";

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
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto">
                <Button
                    className="mt-5 mb-5 w-fit text-sm text-primary"
                    variant="outline"
                    onClick={() => window.history.back()}
                >
                    <IconChevronLeft size={18} />
                    Back
                </Button>
                <h1 className="text-3xl font-bold">
                    Energy Interface Compatible Gear
                </h1>
                <p className="mb-5">Curated streaming equipment designed to work seamlessly with our energy interface system. Every product is tested and optimized for peak performance.</p>

                <div className="flex flex-wrap gap-4 ">
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
            </section>

            {/* Products List - Responsive Card Layout */}
            <section className="flex flex-col mb-12 w-[90%] mx-auto">
                <div className="flex flex-col gap-10">
                    {filteredGear.map((gear) => (
                        <Card key={gear.id} className="w-full overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="flex flex-col md:flex-row min-h-80">
                                {/* Product Image - Responsive */}
                                <div className="relative w-full md:w-80 h-64 md:h-80 bg-muted flex-shrink-0">
                                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                                        <Image
                                            src={gear.image}
                                            alt={gear.name}
                                            width={1920}
                                            height={1080}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                </div>

                                {/* Product Details - Responsive Layout */}
                                <div className="flex-1 flex flex-col p-6 justify-between">
                                    {/* Top Section - Title, Partner, Price */}
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-lg md:text-xl mb-2 leading-tight">{gear.name}</h3>
                                        <p className="text-sm text-muted-foreground mb-3">by {gear.partner}</p>
                                        <div className="text-xl md:text-2xl font-bold text-primary mb-4">{gear.price}</div>
                                        {/* Description */}
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{gear.description}</p>
                                    </div>

                                    {/* Bottom Section - Badges and Buttons Stacked */}
                                    <div className="flex flex-col gap-4">
                                        {/* Badges Row */}
                                        <div className="flex items-center gap-2">
                                            <Badge
                                                variant={gear.compatibility === "Full Integration" ? "default" : "secondary"}
                                                className="text-xs"
                                            >
                                                {gear.compatibility}
                                            </Badge>
                                        </div>

                                        {/* Buttons Row - Responsive */}
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full sm:w-auto"
                                                onClick={() => window.open(`https://amazon.com/s?k=${encodeURIComponent(gear.name)}`, '_blank')}
                                            >
                                                View on Amazon
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
}