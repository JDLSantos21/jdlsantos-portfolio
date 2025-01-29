import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTheme(): "dark" | "light" {
  if (typeof localStorage !== "undefined") {
    return (localStorage.getItem("theme") as "dark" | "light") || "light";
  }
  return "light";
}

export function setTheme(theme: "dark" | "light") {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  }
  document.documentElement.classList.toggle("dark", theme === "dark");
}
