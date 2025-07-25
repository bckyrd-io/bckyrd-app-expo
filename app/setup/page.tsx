"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { AppHeader } from "@/components/app-header";

const AuthPage = () => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground">
            <AppHeader title="Setup " showBack={true} backHref="/" maxWidth="sm" />
            <main className="flex-grow flex items-center justify-center">
                <div className="w-full max-w-sm px-4">
                    <Card className="w-full">
                    <CardHeader className="text-center">
                        <p className="text-muted-foreground">Be one of the first to leverage this platform</p>
                    </CardHeader>
                    <CardContent>
                        <Link href="/home">
                            <Button className="w-full text-black">
                                Sign In
                            </Button>
                        </Link>
                    </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default AuthPage;
