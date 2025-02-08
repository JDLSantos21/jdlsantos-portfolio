"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, toggleTheme } from "@/utils/theme";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    applyTheme();
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleToggle = () => {
    toggleTheme();
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        p-2 rounded-full transition-all duration-300 ease-in-out max-lg:mx-auto
        ${isDark ? "bg-gray-800 text-yellow-300" : "bg-gray-100 text-gray-800"}
        hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${isDark ? "focus:ring-yellow-300" : "focus:ring-gray-800"}
      `}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`absolute inset-0 transition-all duration-300 ease-in-out ${
            isDark ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
          }`}
        />
        <Moon
          className={`absolute inset-0 transition-all duration-300 ease-in-out ${
            isDark ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
          }`}
        />
      </div>
    </button>
  );
}
