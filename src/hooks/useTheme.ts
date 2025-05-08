// src/hooks/useTheme.ts
import { useState, useEffect } from "react";

export type Theme = "light" | "dark";

export function useTheme() {
  // Inicializamos con un valor null para no hacer suposiciones
  const [theme, setTheme] = useState<Theme | null>(null);

  // Efecto para cargar el tema desde localStorage al montar el componente
  useEffect(() => {
    // Obtenemos el tema actual
    const currentTheme = localStorage.getItem("theme") as Theme;
    setTheme(currentTheme || "light");

    // Establecemos un listener para cambios en preferencias del sistema
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      // Solo actualizamos si no hay preferencia explícita del usuario
      if (!localStorage.getItem("theme")) {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.documentElement.style.colorScheme = newTheme;
      }
    };

    // Agregar listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      // Para compatibilidad con navegadores antiguos
      mediaQuery.addListener(handleChange);
    }

    // Limpieza
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  // Función para alternar el tema
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    document.documentElement.style.colorScheme = newTheme;
  };

  return { theme, toggleTheme };
}
