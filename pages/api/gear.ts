import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db";
import { gear, usage } from "../../db/schema"; // Import the relevant tables
import { eq } from "drizzle-orm";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        try {
            // QUERY GEAR DATA WITH USAGE , ENERGY CONSUPTION)
            const data = await db
                .select({
                    id: gear.id,
                    title: gear.title,
                    description: gear.description,
                    image: gear.image,
                    content: gear.content,
                    status: usage.status,
                    energyConsumption: usage.energyConsumption
                })
                .from(gear)
                .leftJoin(usage, eq(usage.gearId, gear.id));

            // Map the data to match the expected format for your frontend
            const gearData = data.map((item) => ({
                id: item.id,
                name: item.title,
                description: item.description,
                status: item.status || "Unavailable", // Default status if not found
                energyConsuption: item.energyConsumption || 0, // Assuming energyConsumption is wattage
            }));

            res.status(200).json(gearData); // Return the formatted data
        } catch (error) {
            console.error("Error fetching gear data:", error);
            res.status(500).json({ error: "Error fetching gear data" });
        }
    } else {
        res.setHeader("Allow", ["GET"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    //Post
}
