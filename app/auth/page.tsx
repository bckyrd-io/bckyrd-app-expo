"use client";

import { Button } from "../../components/ui/button"; // Adjust the path as necessary
import { signIn } from "next-auth/react"; // Assuming you're using NextAuth for authentication
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { IconBrandGoogle, IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

const AuthPage = () => {


    return (
        <div className="flex flex-col items-center justify-center h-screen ">
            <div className="flex justify-left space-x-4 mb-10 w-full max-w-md">
                <Link href="/">
                    <Button variant="ghost" className="text-primary">
                        <IconChevronLeft size={18} /> Back
                    </Button>
                </Link>
            </div>
            <Card className="w-full max-w-md p-0 shadow-sm"> 
                <CardHeader>
                    <h1 className="text-2xl font-bold text-center ">Welcome Back!</h1> 
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mt-5 ">Be one of the first to leverage this platform</p> 
                    <Button onClick={() => signIn("google")} className="mt-5 w-full flex items-center justify-center ">
                        <IconBrandGoogle size={18} />
                        <span>Sign with Google</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;
