// src/utils/theme.ts
export type Theme = "light" | "dark";

// Detecta el tema preferido del sistema
export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// Obtiene el tema actual (de localStorage o del sistema)
export function getTheme(): Theme {
  if (typeof window === "undefined") return "light"; // SSR fallback

  const savedTheme = localStorage.getItem("theme") as Theme;
  return savedTheme || getSystemTheme();
}

// Establece el tema en localStorage y en el DOM
export function setTheme(theme: Theme) {
  if (typeof window === "undefined") return; // SSR check

  localStorage.setItem("theme", theme);
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

// Alterna entre temas
export function toggleTheme() {
  const currentTheme = getTheme();
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
  return newTheme;
}
