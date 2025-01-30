import { useEffect, useState } from "react";
import { applyTheme, toggleTheme } from "../utils/theme";
import { Moon, Sun } from "lucide-react";

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
      className={`p-2 rounded-full max-lg:mx-auto ${
        isDark ? "rotate-90" : ""
      } bg-gray-600 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-all`}
    >
      {isDark ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-transparent" fill="yellow" />
      )}
    </button>
  );
}
