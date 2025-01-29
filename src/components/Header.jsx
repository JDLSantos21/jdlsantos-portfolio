import React, { useEffect, useState } from "react";
import { Menu, XIcon, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { getTheme, setTheme } from "@/lib/utils";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [theme, setThemeState] = useState(getTheme());

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");

    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setThemeState(newTheme);
  };

  const navLinks = [
    { href: "/", text: "Inicio" },
    { href: "/projects", text: "Trabajos" },
    { href: "/about", text: "Sobre mí" },
    { href: "/contact", text: "Contacto" },
  ];

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      transition={{ duration: 0.3 }}
      className={`${
        scroll ? "lg:fixed relative lg:p-2" : "lg:absolute max-lg:relative"
      } top-0 left-0 right-0 w-full lg:z-[2000] max-lg:overflow-hidden
        ${menuOpen ? "h-auto" : "h-20 right-0 "}  
      `}
    >
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex mx-auto transition-all duration-300  ${
          scroll
            ? "w-[500px] p-4 mt-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl"
            : "w-3/4 justify-between rounded-none p-6"
        }`}
      >
        <a href="/">
          <div
            className={`flex items-center space-x-4 ${
              scroll ? "hidden" : "block"
            }`}
          >
            <img
              className="h-8 w-auto rounded-full"
              src="/assets/profile.webp"
              alt="Profile"
              aria-hidden="true"
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              JDLSantos
            </h2>
          </div>
        </a>

        <ul
          className={`flex justify-evenly items-center ${
            scroll ? "w-full" : "w-1/2"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="text-gray-700 dark:text-white hover:text-gray-900 transition-colors font-medium"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`${scroll ? "hidden" : ""} flex items-center space-x-4`}
        >
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200"
          >
            {theme === "light" ? (
              <Moon className="text-gray-800" />
            ) : (
              <Sun className="text-yellow-400" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        className={`mobile-menu-button lg:hidden fixed top-5 right-5 z-[999] text-gray-800 p-2 rounded-full transition-transform ${
          menuOpen ? "rotate-90" : "rotate-0"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XIcon className="text-red-500 w-6 h-6" />
        ) : (
          <Menu className="text-blue-500 w-7 h-7" />
        )}
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
        }}
        transition={{ duration: 0.3 }}
        className="mobile-menu sticky lg:hidden"
      >
        <div className="flex justify-between items-center p-6 bg-white border-b-2 border-gray-100">
          <img
            className="h-8 w-auto rounded-full"
            src="/assets/profile.webp"
            alt="Profile"
            aria-hidden="true"
          />
          <div className={`flex mx-auto items-center space-x-4`}>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200"
            >
              {theme === "light" ? (
                <Moon className="text-gray-800" />
              ) : (
                <Sun className="text-yellow-400" />
              )}
            </button>
          </div>
        </div>

        <nav className="p-6 bg-white">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="block py-2 text-xl text-gray-800 hover:text-gray-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
