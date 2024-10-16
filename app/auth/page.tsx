"use client";

import { Button } from "../../components/ui/button"; // Adjust the path as necessary
import { signIn } from "next-auth/react"; // Assuming you're using NextAuth for authentication
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { IconBrandGoogle } from "@tabler/icons-react";

const AuthPage = () => {


    return (
        <div className={`flex items-center justify-center h-screen bg-white`}>
            <Card className="w-full max-w-md p-6 shadow-sm rounded-lg bg-white border border-gray-300"> {/* Set background to white and border color */}
                <CardHeader>
                    <h1 className="text-2xl font-bold text-center text-black">Welcome Back!</h1> {/* Set text color to black */}
                </CardHeader>
                <CardContent className="text-center">
                    <p className="mt-5 text-black">Be one of the first to leverage this platform</p> {/* Set text color to black */}
                    <Button onClick={() => signIn("google")} className="mt-5 w-full flex items-center justify-center space-x-2">
                        <IconBrandGoogle size={20} />
                        <span>Sign with Google</span>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;
