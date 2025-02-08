import React, { useEffect, useState } from "react";
import { Menu, XIcon, Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
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

  const navLinks = [
    { href: "/", text: "Inicio" },
    { href: "/projects", text: "Trabajos" },
    { href: "/about", text: "Sobre mí" },
    { href: "/contact", text: "Contacto" },
  ];

  return (
    <header
      className={`${
        scroll ? "lg:fixed relative lg:p-2" : "lg:absolute max-lg:relative"
      } top-0 left-0 right-0 w-full lg:z-[2000] max-lg:overflow-hidden
      `}
    >
      {/* Desktop Navigation */}
      <nav
        className={`hidden lg:flex mx-auto transition-all duration-300  ${
          scroll
            ? "w-[500px] p-4 mt-2 bg-white/90 dark:bg-gray-800/90 dark:shadow-white/50 backdrop-blur-sm rounded-full shadow-sm hover:shadow-lg"
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
        <ThemeToggle />
      </nav>

      {/* Mobile Menu Button */}
      <button
        aria-label="Abrir menú"
        aria-expanded={menuOpen}
        className={`mobile-menu-button lg:hidden fixed top-5 right-5 z-[999] text-gray-800 p-2 rounded-full transition-transform ${
          menuOpen ? "rotate-90 mt-3" : "rotate-0"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XIcon className="text-red-500 w-6 h-6" />
        ) : (
          <Menu className="text-blue-500 dark:text-gray-200 w-7 h-7" />
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
        className="mobile-menu lg:hidden fixed top-0 right-0 bg-white h-screen w-screen z-[998] dark:bg-gray-800 shadow-lg"
      >
        <div className="flex justify-between items-center p-6 border-b-2 border-gray-100 dark:border-gray-700">
          <div className="p-1 rounded-full bg-transparent dark:bg-gray-700">
            <img
              className="h-8 w-auto rounded-full"
              src="/assets/profile.webp"
              alt="Profile photo"
              aria-hidden="true"
            />
          </div>

          <ThemeToggle />
        </div>

        <nav className="p-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.href}
                  className="block py-2 text-xl text-gray-800 dark:text-gray-200 hover:text-gray-600 transition-colors"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
