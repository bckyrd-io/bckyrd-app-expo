"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


const AddGearPage = () => {

	return (
		<div className="flex flex-col items-center justify-center h-auto w-full bg-white text-black">
			{/* Gear Management Section */}
			<section className="flex flex-col w-[90%] mx-auto lg:w-[50%] mb-60 mt-10">

				<div className="flex flex-col space-y-4 mt-10">

					<Card className="flex flex-col items-start w-full">
						<CardHeader>
							<h2 className="bold text-lg">Add New Gear</h2>
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


			</section>

		</div>
	);
};

export default AddGearPage;
