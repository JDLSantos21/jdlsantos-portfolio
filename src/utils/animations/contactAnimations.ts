// src/utils/animations/contactAnimations.ts
import { gsap } from "gsap";

export function setupContactAnimations(): void {
  // Asegurarnos de que los elementos existan antes de animarlos
  const header = document.getElementById("contact-header");
  const formContainer = document.getElementById("contact-form-container");
  const infoCard = document.getElementById("contact-info-card");
  const socialCard = document.getElementById("contact-social-card");

  if (!header || !formContainer || !infoCard || !socialCard) {
    console.warn("Algunos elementos de animación no fueron encontrados");
    return;
  }

  // Detener cualquier animación previa en estos elementos
  gsap.killTweensOf([header, formContainer, infoCard, socialCard]);

  // Timeline principal
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Configurar animaciones
  tl.fromTo(header, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    .fromTo(
      socialCard,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.6"
    )
    .fromTo(
      infoCard,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4" // Comenzar un poco antes de que termine la animación anterior
    )
    .fromTo(
      formContainer,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
      },
      "-=0.3"
    );
}
