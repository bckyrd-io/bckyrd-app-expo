"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IconChevronLeft } from "@tabler/icons-react";


const SettingPage = () => {

    return (
        <section className="flex flex-col items-center justify-center h-screen w-[90%] mx-auto lg:w-[50%]">
            <div className="flex justify-left space-x-4 mb-10 w-full max-w-md">
                <Link href="/home">
                    <Button variant="ghost" className="text-primary">
                        <IconChevronLeft size={18} /> Back
                    </Button>
                </Link>
            </div>
            <Card className="w-full max-w-md p-0 shadow-sm ">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-center ">Set Your Profile!</h1>
                </CardHeader>
                <CardContent className=" w-full">
                    <form action="flex w-full" >
                        <Input
                            type="text" // Explicitly set type as text
                            placeholder="name..."
                            width={"100%"}
                            className="flex mb-5 w-full"
                        />
                        <Input
                            type="text" // Explicitly set type as text
                            placeholder="description..."
                            width={"100%"}
                            className="flex mb-5 w-full"
                        />
                        <Input
                            type="file" // Explicitly set type as text
                            width={"100%"}
                            className="flex mb-5 w-full"
                        />
                    </form>
                    <Button asChild className="flex space-x-1">
                        <Link href="/add-gear">
                            <span>continue</span>
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </section>

    );
};

export default SettingPage;
