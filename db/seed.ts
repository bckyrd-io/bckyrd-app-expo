import { db } from "../db";
import { gear, usage, users, updates } from "../db/schema";

async function seed() {
    console.log("Seeding database...");

    // Insert users (responsible for gear)
    const [user1, user2] = await db.insert(users).values([
        { name: "Alice Johnson", email: "alice@example.com" },
        { name: "Bob Smith", email: "bob@example.com" },
    ]).returning();

    // Insert gear items
    const [gear1, gear2, gear3] = await db.insert(gear).values([
        {
            id: "1",
            title: "Streaming Camera",
            description: "High-definition camera for live streaming.",
            image: "camera.jpg",
            content: ["1080p", "60fps", "Wide-angle"],
        },
        {
            id: "2",
            title: "Microphone",
            description: "Crystal-clear audio with noise reduction.",
            image: "microphone.jpg",
            content: ["Noise-canceling", "USB"],
        },
        {
            id: "3",
            title: "Gaming PC",
            description: "High-performance PC for gaming and streaming.",
            image: "gaming_pc.jpg",
            content: ["RTX 4090", "32GB RAM", "1TB SSD"],
        },
    ]).returning();

    // Insert usage data (linking users and gear)
    await db.insert(usage).values([
        {
            gearId: gear1.id,
            userId: user1.id,
            status: "Available",
            energyConsumption: 15,
        },
        {
            gearId: gear2.id,
            userId: user2.id,
            status: "In Use",
            energyConsumption: 5,
        },
        {
            gearId: gear3.id,
            userId: user1.id,
            status: "Running",
            energyConsumption: 250,
        },
    ]);

    // Insert updates (announcements, new gear added)
    await db.insert(updates).values([
        {
            id: "update1",
            title: "New Gear Added",
            description: "We've added a new gaming PC to our collection!",
            image: "update1.jpg",
        },
    ]);

    console.log("Database seeded successfully!");
}

seed().catch((err) => {
    console.error("Error seeding database:", err);
});
