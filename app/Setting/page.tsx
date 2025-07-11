"use client";

import { useState, useContext } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { ThemeContext } from "../ThemeProvider";

const SettingsPage = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [notifications, setNotifications] = useState(true);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const settings = { notifications };
        console.log("Settings Saved:", settings);
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
                    <CardTitle className="text-2xl font-bold text-center">Settings</CardTitle>
                    <CardDescription className="text-center pt-1">Manage your application preferences.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSave} className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border p-3">
                                <div>
                                    <p className="text-sm font-medium">Theme</p>
                                    <p className="text-xs text-muted-foreground">Toggle between light and dark mode.</p>
                                </div>
                                <Button variant="outline" onClick={toggleTheme} type="button">
                                    Toggle to {theme === 'dark' ? 'Light' : 'Dark'}
                                </Button>
                            </div>
                            <div className="flex items-center justify-between rounded-lg border p-3">
                                 <div>
                                    <p className="text-sm font-medium">Push Notifications</p>
                                    <p className="text-xs text-muted-foreground">Enable or disable push notifications.</p>
                                </div>
                                <Button variant={notifications ? 'default' : 'outline'} onClick={() => setNotifications(!notifications)} type="button">
                                    {notifications ? 'Enabled' : 'Disabled'}
                                </Button>
                            </div>
                        </div>
                        <Button type="submit" className="w-full mt-6">Save Preferences</Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default SettingsPage;
