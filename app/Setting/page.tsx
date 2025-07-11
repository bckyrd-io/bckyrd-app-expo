"use client";

import { useState, useContext } from 'react';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { AppHeader } from "@/components/app-header";
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
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <AppHeader title="Settings" showBack={true} backHref="/home" maxWidth="md" />
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-md px-4">
                    <Card className="w-full">
                    <CardHeader>
                        <CardTitle className="text-xl">App Settings</CardTitle>
                        <CardDescription>Manage your application preferences</CardDescription>
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
                            <Button type="submit" className="w-full">Save Preferences</Button>
                        </form>
                    </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;
