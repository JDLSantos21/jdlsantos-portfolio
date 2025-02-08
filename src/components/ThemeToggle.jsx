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
      } bg-gradient-to-tl from-black  to-blue-900  transition-all`}
    >
      {isDark ? (
        <Sun className="text-yellow-400 drop-shadow" />
      ) : (
        <Moon className="text-transparent" fill="yellow" />
      )}
    </button>
  );
}
