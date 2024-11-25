"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IconChevronLeft } from "@tabler/icons-react";


const SettingPage = () => {

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-white">
			<div className="flex justify-left space-x-4 mb-10 w-full max-w-md">
				<Link href="/home">
					<Button variant="ghost" className="text-primary">
						<IconChevronLeft size={18} /> Back
					</Button>
				</Link>
			</div>
			<Card className="w-full max-w-md p-0 shadow-sm rounded-lg bg-white border border-gray-300"> {/* Set background to white and border color */}
				<CardHeader>
					<h1 className="text-2xl font-bold text-center text-black">Set Your Profile!</h1> {/* Set text color to black */}
				</CardHeader>
				<CardContent className=" bg-dark bg['red'] w-full">
					<form action="flex w-full" >
						<Input
							type="text" // Explicitly set type as text
							placeholder="name..."
							width={"100%"}
							className="flex mb-5 w-full" // Adjust margin for better spacing
						/>
						<Input
							type="text" // Explicitly set type as text
							placeholder="description..."
							width={"100%"}
							className="flex mb-5 w-full" // Adjust margin for better spacing
						/>
						<Input
							type="file" // Explicitly set type as text
							width={"100%"}
							className="flex mb-0 w-full" // Adjust margin for better spacing
						/>
					</form>
					<Button asChild className="flex mt-10 mb-10 items-irght space-x-1">
						<Link href="/add-gear">
							<span>continue</span>
						</Link>
					</Button>
				</CardContent>
			</Card>
		</div>

	);
};

export default SettingPage;
