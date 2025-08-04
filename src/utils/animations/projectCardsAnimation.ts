import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Configura las animaciones iniciales de los elementos de las tarjetas de proyecto
 */

function setupInitialStates() {
  const projectCards = document.querySelectorAll(".project-card");
  const sectionTitle = document.querySelector(
    ".featured-projects-section .section-title"
  );
  const sectionDescription = document.querySelector(
    ".featured-projects-section .section-description"
  );

  gsap.set(projectCards, {
    opacity: 0,
    y: 50,
    scale: 0.95,
  });

  gsap.set(sectionTitle, {
    opacity: 0,
    y: -20,
  });

  gsap.set(sectionDescription, {
    opacity: 0,
    y: 20,
  });
}

/**
 * Configura las animaciones de entrada de los elementos de las tarjetas de proyecto
 */

function setupAnimations() {
  const projectCards = document.querySelectorAll(".project-card");
  const sectionTitle = document.querySelector(
    ".featured-projects-section .section-title"
  );
  const sectionDescription = document.querySelector(
    ".featured-projects-section .section-description"
  );

  gsap.to(sectionTitle, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: sectionTitle,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  gsap.to(sectionDescription, {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: sectionDescription,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });

  projectCards.forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: index * 0.1,
      scrollTrigger: {
        trigger: card,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });
  });
}

setupInitialStates();
setupAnimations();

document.addEventListener("astro:page-load", () => {
  setupInitialStates();
  setupAnimations();
});

// document.addEventListener("DOMContentLoaded", () => {
//   setupInitialStates();
//   setupAnimations();
// });
