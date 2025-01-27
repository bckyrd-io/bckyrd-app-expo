"use client"; // This is a Client Component

import { useState, useEffect, createContext } from "react";

// Create a Theme Context
export const ThemeContext = createContext<{
    theme: string;
    toggleTheme: () => void;
}>({
    theme: "dark",
    toggleTheme: () => { },
});

export default function ThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [theme, setTheme] = useState("dark");

    // Load theme from localStorage on initial render
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
    }, []);

    // Apply theme to the document
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle between dark and light themes
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}