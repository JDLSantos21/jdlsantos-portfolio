import React, { useEffect, useState } from "react";
import { Menu, XIcon } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [scroll, setScroll] = useState(false);

 useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);

  return (
    <motion.header 
    initial="hidden"
    animate="visible"
    variants={headerVariants}
    transition={{ duration: 0.5 }}
    className={`sticky top-0 left-0 right-0 lg:mx-auto w-full lg:flex lg:justify-center lg:items-center overflow-hidden z-50`}>
      <nav className={`hidden lg:block shadow-sm hover:shadow-lg transition-all duration-300 text-black backdrop-blur-xl rounded-full h-full ${scroll ? 'w-[500px] bg-white mt-2' : 'w-full rounded-none bg-transparent'} p-4`}>
        <ul className="flex justify-evenly">
          <li>
            <a href="/" className="hover:text-gray-500">Inicio</a>
          </li>
          <li>
            <a href="/projects" className="hover:text-gray-500">Trabajos</a>
          </li>
          <li>
            <a href="/about" className="hover:text-gray-500">Sobre mí</a>
          </li>
          <li>
            <a href="/" className="hover:text-gray-500">Contacto</a>
          </li>
        </ul>
      </nav>

      {/* Botón para abrir el menú en móviles */}
      <div className={`absolute top-5 right-5 flex items-center lg:hidden ${menuOpen && 'rotate-90'} transition-transform duration-300`}>
        <button
          type="button"
          className="text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-7 h-7"/>
        </button>
      </div>

      {/* Menú para móviles */}
      <div
        className={`fixed w-full h-full top-0 right-0 z-50 lg:hidden transition-all duration-400 text-white/70 bg-white/10 border-slate-500/20 border-2 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${
          menuOpen ? "translate-x-0" : "translate-x-full bg-black"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">JDLSantos</span>
            <img className="h-8 w-auto" src="/assets/profile.webp" alt="Profile" />
          </a>
          <button
            type="button"
            className={`rounded-md ${menuOpen && 'rotate-90'} transition-transform duration-300 text-white`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 bg-gray-500">
          <div className="-my-6 divide-gray-500/10">
            <div className="space-y-2 py-6">
              <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">Inicio</a>
              <a href="/projects" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">Trabajos</a>
              <a href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">Sobre mí</a>
              <a href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7">Contacto</a>
            </div>
            <div className="py-6">
              <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">✉️</a>
            </div>
          </div>
        </div>
      </div>

      {/* Menú lateral para pantallas medianas */}
      {/* <div
        className={`fixed top-0 right-0 z-50 hidden lg:block h-full w-64 bg-green-500/90 border-l border-slate-500/20 backdrop-blur-xl transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          type="button"
          className="p-4 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <XIcon className="w-6 h-6" />
        </button>
        <ul className="flex flex-col items-center space-y-4 p-4">
          <li><a href="/" className="hover:text-white">Inicio</a></li>
          <li><a href="/" className="hover:text-white">Trabajos</a></li>
          <li><a href="/about" className="hover:text-white">Sobre mí</a></li>
          <li><a href="/" className="hover:text-white">Contacto</a></li>
        </ul>
      </div> */}
    </motion.header>
  );
};

export default Header;
