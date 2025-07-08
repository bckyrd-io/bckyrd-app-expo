"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
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
    const router = useRouter();

    const filteredGear = partnerGear.filter(gear => {
        return selectedCategory === "All" || gear.category === selectedCategory;
    });

    return (
        <>

            {/* Hero Section */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto">
                <Button
                    className="mt-5 mb-5 w-fit text-sm text-primary"
                    variant="outline"
                    onClick={() => router.push("/")}
                >
                    <IconChevronLeft size={18} />
                    Back
                </Button>
                <h1 className="text-3xl font-bold">
                    Energy Interface Compatible Gear
                </h1>
                <p className="mb-5">Curated streaming equipment designed to work seamlessly with our energy interface system. Every product is tested and optimized for peak performance.</p>

                <div className="flex flex-wrap gap-4 mb-8">
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

            {/* Products Grid */}
            <section className="flex flex-col mb-60 w-[90%] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredGear.map((gear) => (
                        <Card key={gear.id} className="overflow-hidden">
                            <div className="relative h-48 bg-muted">
                                <Image
                                    src={gear.image}
                                    alt={gear.name}
                                    fill
                                    className="object-cover"
                                />
                                <Badge
                                    variant={gear.compatibility === "Full Integration" ? "default" : "secondary"}
                                    className="absolute top-2 right-2"
                                >
                                    {gear.compatibility}
                                </Badge>
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-lg">{gear.name}</h3>
                                        <p className="text-sm text-muted-foreground">{gear.partner}</p>
                                    </div>
                                    <span className="text-xl font-bold text-primary">{gear.price}</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground mb-4">{gear.description}</p>
                                <div className="flex justify-between items-center">
                                    <Badge variant="outline">{gear.category}</Badge>
                                    <Button
                                        variant="outline"
                                        onClick={() => window.open(`https://amazon.com/s?k=${encodeURIComponent(gear.name)}`, '_blank')}
                                    >
                                        View on Amazon
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>
        </>
    );
} 