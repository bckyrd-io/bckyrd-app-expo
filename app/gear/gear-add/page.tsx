"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AppHeader } from "@/components/app-header";

const AddGearPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [energyConsumption, setEnergyConsumption] = useState('');
    const [description, setDescription] = useState('');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const newGear = { name, category, energyConsumption, description };
        console.log("New Gear Saved:", newGear);
        // In a real app, you would send this to your API and update the global state
        router.push('/home');
    };

        return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <AppHeader title="Add New Gear" showBack={true} backHref="/home" maxWidth="md" />
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-md px-4">
                    <Card className="w-full shadow-sm">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Add New Gear</CardTitle>
                    <CardDescription className="text-center pt-1">Enter the details for your new equipment.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSave} className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Gear Name</p>
                            <Input id="gear-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Brio 4K Webcam" required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Category</p>
                            <Input id="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g., Camera" required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Energy Consumption (W)</p>
                            <Input id="energy-consumption" type="number" value={energyConsumption} onChange={(e) => setEnergyConsumption(e.target.value)} placeholder="e.g., 8" required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Description</p>
                            <Input id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="A brief description of the gear." />
                        </div>
                        <Button type="submit" className="w-full mt-6">Save Gear</Button>
                    </form>
                </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default AddGearPage;
