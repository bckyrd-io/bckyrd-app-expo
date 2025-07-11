"use client";

import { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

const ProfilePage = () => {
    const [name, setName] = useState('Bckyrd');
    const [email, setEmail] = useState('hello@bckyrd.io');
    const [bio, setBio] = useState('Building the future of energy management.');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedProfile = { name, email, bio };
        console.log("Profile Saved:", updatedProfile);
        // Here you would typically call an API to save the data
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen w-[90%] mx-auto py-8">
            <div className="flex justify-start w-full max-w-md mb-6">
                <Button variant="ghost" asChild>
                    <Link href="/home" className="flex items-center text-muted-foreground">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back
                    </Link>
                </Button>
            </div>
            <Card className="w-full max-w-md shadow-sm">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Edit Profile</CardTitle>
                    <CardDescription className="text-center pt-1">Update your personal information.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSave} className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Name</p>
                            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Email</p>
                            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your.email@example.com" required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Bio</p>
                            <Input id="bio" value={bio} onChange={(e) => setBio(e.target.value)} placeholder="A short bio about yourself." />
                        </div>
                        <Button type="submit" className="w-full mt-6">Save Changes</Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default ProfilePage;
