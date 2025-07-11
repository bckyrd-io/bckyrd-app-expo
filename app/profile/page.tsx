"use client";

import { useState } from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AppHeader } from "@/components/app-header";

const ProfilePage = () => {
    const [name, setName] = useState('Bckyrd');
    const [email, setEmail] = useState('hello@bckyrd.io');
    const [bio] = useState('Building the future of energy management.');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedProfile = { name, email, bio };
        console.log("Profile Saved:", updatedProfile);
        // Here you would typically call an API to save the data
    };

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <AppHeader title="Profile" showBack={true} backHref="/home" maxWidth="md" />
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-md px-4">
                    <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-xl">Profile Information</CardTitle>
                        <CardDescription>Update your profile information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSave} className="space-y-4">
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Name</p>
                                <Input 
                                    id="name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    placeholder="Your Name" 
                                    required 
                                />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-muted-foreground">Email</p>
                                <Input 
                                    id="email" 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="your.email@example.com" 
                                    required 
                                />
                            </div>
                            <div className="pt-2">
                                <Button type="submit" className="w-full">Save Changes</Button>
                            </div>
                        </form>
                    </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default ProfilePage;
