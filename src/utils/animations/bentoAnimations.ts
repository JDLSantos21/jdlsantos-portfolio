// Importaciones de GSAP y sus plugins
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

// Registrar los plugins
gsap.registerPlugin(ScrollTrigger, Flip, MotionPathPlugin, TextPlugin);

/**
 * Configura las animaciones iniciales de todos los elementos
 */
function setupInitialStates() {
  // Seleccionar elementos
  const bentoCards = document.querySelectorAll(".bento-card");
  const cardTitles = document.querySelectorAll(".card-title");
  const cardContents = document.querySelectorAll(".card-content");
  const cardActions = document.querySelectorAll(".card-action");
  const projectItems = document.querySelectorAll(".project-item");
  const projectAvatar = document.querySelector(".project-avatar");
  const contactItems = document.querySelectorAll(".contact-item");
  const cardIcons = document.querySelectorAll(".text-card-icon");

  // Configurar estados iniciales
  gsap.set(bentoCards, {
    opacity: 0,
    y: 50,
    scale: 0.95,
  });

  gsap.set(cardTitles, {
    opacity: 0,
    y: -20,
  });

  gsap.set(cardContents, {
    opacity: 0,
    y: 20,
  });

  gsap.set(cardActions, {
    opacity: 0,
    y: 15,
  });

  gsap.set(projectItems, {
    opacity: 0,
    x: -20,
    scale: 0.95,
  });

  gsap.set(contactItems, {
    opacity: 0,
    scale: 0.9,
  });

  gsap.set(projectAvatar, {
    opacity: 0,
    x: -25,
    y: 25,
    scale: 0.9,
  });

  gsap.set(cardIcons, {
    scale: 0,
    opacity: 0,
    transformOrigin: "center center",
  });
}

/**
 * Anima la entrada de las tarjetas con ScrollTrigger
 */
function animateCards() {
  const bentoCards = document.querySelectorAll(".bento-card");

  bentoCards.forEach((card, index) => {
    const cardElement = card;
    const delay = index * 0.15;

    // Timeline para esta tarjeta
    const cardTL = gsap.timeline({
      scrollTrigger: {
        trigger: cardElement,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none none",
      },
    });

    // Añadir animaciones a esta timeline de tarjeta
    cardTL.to(cardElement, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
      delay: delay,
    });

    // Animar el título de la tarjeta
    const cardTitle = cardElement.querySelector(".card-title");
    const cardIcon = cardTitle?.querySelector(".text-card-icon");
    if (cardTitle) {
      cardTL.to(
        cardTitle,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.6"
      );

      // Animación especial para el icono
      if (cardIcon) {
        cardTL.to(
          cardIcon,
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            rotate: "360deg",
          },
          "-=0.4"
        );
      }
    }

    // Animar el contenido de la tarjeta
    const cardContent = cardElement.querySelector(".card-content");
    if (cardContent) {
      cardTL.to(
        cardContent,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }

    // Animar el botón/acción de la tarjeta
    const cardAction = cardElement.querySelector(".card-action");
    if (cardAction) {
      cardTL.to(
        cardAction,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }
  });
}

/**
 * Anima los elementos específicos dentro de las tarjetas
 */
function animateSpecificElements() {
  // Foto de perfil
  const profileImg = document.querySelector(".profile-photo");
  if (profileImg) {
    const profileTL = gsap.timeline({
      scrollTrigger: {
        trigger: profileImg,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    profileTL.fromTo(
      profileImg,
      { scale: 0, rotation: -15 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2,
      }
    );
  }

  // Proyectos
  const projectItems = document.querySelectorAll(".project-item");
  projectItems.forEach((item, index) => {
    const delay = index * 0.12 + 0.3;

    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
      delay: delay,
    });
  });

  const projectAvatar = document.querySelector(".project-avatar");
  if (projectAvatar) {
    gsap.to(projectAvatar, {
      scrollTrigger: {
        trigger: projectAvatar,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "expo.out",
      delay: 0.8,
    });
  }

  // Contactos
  const contactItems = document.querySelectorAll(".contact-item");
  contactItems.forEach((item, index) => {
    const directions = [
      { x: -30, y: 0 },
      { x: 0, y: 30 },
      { x: 30, y: 0 },
    ];
    const dir = directions[index % directions.length];

    gsap.fromTo(
      item,
      {
        opacity: 0,
        x: dir.x,
        y: dir.y,
        scale: 0.8,
      },
      {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "back.out(1.7)",
        delay: index * 0.15 + 0.5,
      }
    );
  });

  // Flechas
  const arrows = document.querySelectorAll(".arrow-icon");
  gsap.to(arrows, {
    x: 5,
    duration: 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true,
  });
}

/**
 * Función principal que inicia todas las animaciones
 */
function animateBentoSection() {
  // Limpiar animaciones existentes para evitar conflictos
  const bentoCards = document.querySelectorAll(".bento-card");
  const cardTitles = document.querySelectorAll(".card-title");
  const cardContents = document.querySelectorAll(".card-content");
  const cardActions = document.querySelectorAll(".card-action");
  const projectItems = document.querySelectorAll(".project-item");
  const contactItems = document.querySelectorAll(".contact-item");

  gsap.killTweensOf([
    ...Array.from(bentoCards),
    ...Array.from(cardTitles),
    ...Array.from(cardContents),
    ...Array.from(cardActions),
    ...Array.from(projectItems),
    ...Array.from(contactItems),
  ]);

  setupInitialStates();
  animateCards();
  animateSpecificElements();
}

// Iniciar animaciones en la carga inicial
document.addEventListener("DOMContentLoaded", animateBentoSection);

// Para View Transitions de Astro
// document.addEventListener("astro:page-load", animateBentoSection);

// Respaldo adicional para navegación y cambios en DOM
// document.addEventListener("astro:after-swap", animateBentoSection);
