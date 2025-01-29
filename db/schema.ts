import { pgTable, serial, varchar, text, integer, json, foreignKey } from "drizzle-orm/pg-core";

// Users table (who is responsible for which gear)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
});

// Gear table
export const gear = pgTable("gear", {
  id: varchar("id", { length: 255 }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  image: varchar("image", { length: 255 }).notNull(),
  content: json("content").notNull(),
});

// Usage table (Tracks status, energy consumption, and user assignment)
export const usage = pgTable("usage", {
  id: serial("id").primaryKey(),
  gearId: varchar("gear_id", { length: 255 })
    .notNull()
    .references(() => gear.id, { onDelete: "cascade" }), // Link to gear
  userId: integer("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }), // Link to users
  status: varchar("status", { length: 50 }).notNull(),
  energyConsumption: integer("energy_consumption").notNull(),
});

// Updates table (tracks announcements or new gear added)
export const updates = pgTable("updates", {
    id: varchar("id", { length: 255 }).primaryKey(), // Unique identifier for the update
    title: varchar("title", { length: 255 }).notNull(), // Title of the update
    description: text("description").notNull(), // Detailed description of the update
    image: varchar("image", { length: 255 }).notNull(), // Image associated with the update
  });
  