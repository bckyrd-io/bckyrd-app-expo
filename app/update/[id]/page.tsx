"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconChevronLeft } from "@tabler/icons-react";
import { AppHeader } from "@/components/app-header";

const updatesData = [
    {
        id: "1",
        title: "Backyard App",
        description: "Explore the full details of the Backyard App and how it can revolutionize your tech setup.",
        image: "/photo.jpg",
        content: [
            "The Backyard App is designed for tech enthusiasts who want to optimize their productivity and streamline their workflows.",
            "With intuitive features and a user-friendly interface, the Backyard App allows you to manage your tasks, organize your projects, and collaborate seamlessly.",
            "Whether you're working solo or with a team, the Backyard App provides the tools you need to stay on top of your game.",
        ],
    },
    {
        id: "2",
        title: "Energy Mod",
        description: "Learn about our energy-efficient modifications and how they can save you money.",
        image: "/photo.jpg",
        content: [
            "Energy Mod focuses on providing sustainable solutions for your tech setup.",
            "Our modifications reduce energy consumption without compromising performance.",
            "Join the movement toward a greener, more sustainable future with Energy Mod.",
        ],
    },
    {
        id: "3",
        title: "New Features Release",
        description: "Get an in-depth look at the latest features we've introduced to enhance user experience.",
        image: "/photo.jpg",
        content: [
            "We are excited to unveil new features designed to make your experience smoother and more enjoyable.",
            "From enhanced customization options to improved performance metrics, this update is packed with value.",
            "Stay tuned as we continue to innovate and bring you more updates.",
        ],
    },
    {
        id: "4",
        title: "Community Feedback",
        description: "Discover how feedback from our community has shaped our latest updates.",
        image: "/photo.jpg",
        content: [
            "Our community is at the heart of everything we do.",
            "We value your input and have used it to create updates that truly address your needs.",
            "Thank you for being an integral part of our journey. Together, we're building something amazing.",
        ],
    },
];

export default function UpdatePage({ params }: { params: Promise<{ id: string }> }) {
    const [id, setId] = React.useState<string | null>(null);
    const router = useRouter();

    React.useEffect(() => {
        async function fetchParams() {
            const resolvedParams = await params;
            setId(resolvedParams.id);
        }
        fetchParams();
    }, [params]);

    if (!id) {
        return <p>Loading...</p>;
    }

    const update = updatesData.find((u) => u.id === id);

    if (!update) {
        return (
            <section className="max-w-4xl mx-auto mb-10">
                <Button
                    className="mt-5 mb-5 text-primary"
                    variant="outline"
                    onClick={() => router.push("/home")}
                >
                    <IconChevronLeft size={18} />
                    Back
                </Button>
                <h1 className="text-3xl font-bold">Update Not Found</h1>
                <p className="mt-4">The update you are looking for does not exist. Please check the URL or return to the home page.</p>

            </section>
        );
    }

    return (
        <section className="w-[90%] mx-auto mb-10">
            <AppHeader title="More " showBack={true} backHref="/" maxWidth="7xl" />
            <h1 className="text-4xl font-bold mb-4">{update.description}</h1>
            <div className="relative w-full h-auto mb-8">
                <Image
                    src={update.image}
                    alt={update.title}
                    width={1080} height={768} className="w-full h-auto object-cover rounded-md "
                />
            </div>
            <div className="space-y-4">
                {update.content.map((para, index) => (
                    <p key={index}>
                        {para}
                    </p>
                ))}
            </div>
        </section>
    );
}
