// src/utils/header.ts

export function setupHeader(): () => void {
  // Elementos del DOM
  const header = document.querySelector("[data-header]");
  const desktopNav = document.querySelector("[data-desktop-nav]");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
  const closeMenuButton = document.getElementById("close-menu-button");

  // Estado del menú
  let menuOpen = false;

  if (
    !header ||
    !desktopNav ||
    !mobileMenuButton ||
    !mobileMenu ||
    !menuIcon ||
    !closeMenuButton
  ) {
    console.warn("Algunos elementos del header no fueron encontrados");
    return () => {};
  }

  // Función para alternar el menú móvil
  function toggleMenu() {
    menuOpen = !menuOpen;

    // Actualizar botón
    mobileMenuButton?.setAttribute("aria-expanded", menuOpen.toString());
    mobileMenuButton?.classList.toggle("rotate-90", menuOpen);

    // Cambiar iconos
    menuIcon?.classList.toggle("hidden", menuOpen);

    // Mostrar/ocultar menú
    mobileMenu?.classList.toggle("opacity-0", !menuOpen);
    mobileMenu?.classList.toggle("pointer-events-none", !menuOpen);
    mobileMenu?.classList.toggle("translate-x-full", !menuOpen);
  }

  // Función para manejar el scroll
  function handleScroll() {
    const scrolled = window.scrollY > 0;

    if (!header || !desktopNav) return;
    // Clases para el header en scroll
    header.classList.toggle("lg:absolute", !scrolled);
    header.classList.toggle("lg:fixed", scrolled);

    // Clases para la navegación de escritorio en scroll
    desktopNav.classList.toggle("bg-white/90", scrolled);
    desktopNav.classList.toggle("dark:bg-gray-800/90", scrolled);
    desktopNav.classList.toggle("hover:shadow-2xl", scrolled);
    desktopNav.classList.toggle("dark:shadow-white/20", scrolled);
    desktopNav.classList.toggle("backdrop-blur-xs", scrolled);
    desktopNav.classList.toggle("shadow-sm", scrolled);
    desktopNav.classList.toggle("p-5", scrolled);
    desktopNav.classList.toggle("rounded-b-lg", scrolled);
  }

  // Función para manejar el resize
  function handleResize() {
    if (window.innerWidth >= 1024 && menuOpen) {
      toggleMenu();
    }
  }

  // Event Listeners
  mobileMenuButton.addEventListener("click", toggleMenu);
  closeMenuButton.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);

  // También añadir links del menú para cerrar al hacer click
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuOpen) toggleMenu();
    });
  });

  // Inicializar estado correcto
  handleScroll();

  // Devolver función de limpieza
  return function cleanup() {
    mobileMenuButton.removeEventListener("click", toggleMenu);
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("resize", handleResize);
    mobileMenuLinks.forEach((link) => {
      link.removeEventListener("click", toggleMenu);
    });
  };
}

/**
 * Actualiza el estado visual del header basado en la posición de scroll
 */
export function updateHeaderScrollState(): void {
  const header = document.querySelector("[data-header]");
  const desktopNav = document.querySelector("[data-desktop-nav]");

  if (header && desktopNav) {
    const scrolled = window.scrollY > 0;

    header.classList.toggle("lg:absolute", !scrolled);
    header.classList.toggle("lg:fixed", scrolled);

    desktopNav.classList.toggle("bg-white/90", scrolled);
    desktopNav.classList.toggle("dark:bg-gray-800/90", scrolled);
    desktopNav.classList.toggle("hover:shadow-2xl", scrolled);
    desktopNav.classList.toggle("dark:shadow-white/20", scrolled);
    desktopNav.classList.toggle("backdrop-blur-xs", scrolled);
    desktopNav.classList.toggle("shadow-sm", scrolled);
    desktopNav.classList.toggle("p-5", scrolled);
    desktopNav.classList.toggle("rounded-b-lg", scrolled);
  }
}
