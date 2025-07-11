"use client";

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';

// Define types to match the home page
type EnergyMode = "Eco" | "Balanced" | "Performance";

interface Gear {
    id: number;
    name: string;
    energyConsumption: number;
    status: "Running" | "Available";
    category: "Controller" | "Camera" | "Audio" | "Lighting";
    image: string;
    description: string;
    modes: EnergyMode[];
}

// Mock Data - in a real app, this would come from a global state or API
const mockGearData: Gear[] = [
    { id: 1, name: "Stream Deck", energyConsumption: 5, status: "Running", category: "Controller", image: "/photo.jpg", description: "Customizable LCD keys for streaming.", modes: ["Eco", "Balanced", "Performance"] },
    { id: 2, name: "Brio 4K Webcam", energyConsumption: 8, status: "Available", category: "Camera", image: "/photo.jpg", description: "Ultra HD 4K streaming webcam.", modes: ["Balanced", "Performance"] },
    { id: 3, name: "Blue Yeti", energyConsumption: 2, status: "Running", category: "Audio", image: "/photo.jpg", description: "Professional USB microphone.", modes: ["Eco", "Balanced"] },
    { id: 4, name: "LED Lights", energyConsumption: 15, status: "Running", category: "Lighting", image: "/photo.jpg", description: "Smart LED light bars for ambiance.", modes: ["Performance"] },
    { id: 5, name: "GoXLR Mini", energyConsumption: 4, status: "Available", category: "Audio", image: "/photo.jpg", description: "Online broadcast mixer with USB.", modes: ["Balanced", "Performance"] },
];

// Mock function to simulate fetching data
const getGearById = async (id: number): Promise<Gear | undefined> => {
    return mockGearData.find(gear => gear.id === id);
};

const ManageGearPage = () => {
    const router = useRouter();
    const params = useParams();
    const gearId = params?.id ? parseInt(params.id as string, 10) : null;

    const [gear, setGear] = useState<Gear | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (gearId) {
            getGearById(gearId).then(data => {
                if (data) {
                    setGear(data);
                }
                setLoading(false);
            });
        }
    }, [gearId]);

    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Updated Gear:", gear);
        // In a real app, you would send this to your API
        router.push('/home');
    };

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (!gear) {
        return <div className="flex justify-center items-center h-screen">Gear not found.</div>;
    }

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
                    <CardTitle className="text-2xl font-bold text-center">Manage {gear.name}</CardTitle>
                    <CardDescription className="text-center pt-1">Edit the details for your equipment.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Gear Name</p>
                            <Input id="gear-name" value={gear.name} onChange={(e) => setGear({ ...gear, name: e.target.value })} required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Category</p>
                            <Input id="category" value={gear.category} onChange={(e) => setGear({ ...gear, category: e.target.value as Gear['category'] })} required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font-medium text-muted-foreground">Energy Consumption (W)</p>
                            <Input id="energy-consumption" type="number" value={gear.energyConsumption} onChange={(e) => setGear({ ...gear, energyConsumption: parseInt(e.target.value, 10) })} required />
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm font--medium text-muted-foreground">Description</p>
                            <Input id="description" value={gear.description} onChange={(e) => setGear({ ...gear, description: e.target.value })} />
                        </div>
                        <Button type="submit" className="w-full mt-6">Save Changes</Button>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
};

export default ManageGearPage;
