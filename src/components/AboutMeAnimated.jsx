import React, { useState, useEffect, useRef } from "react";
import { User, Mail, Github, Linkedin, Coffee, Copy, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { toast, Toaster } from "sonner";
import { gsap } from "gsap";

const funFacts = [
  "Amo las peliculas tanto como el código",
  "Mi lenguaje favorito es TypeScript",
  "Contribuyo a proyectos open source",
];

// Este componente de emojis flotantes ahora usará GSAP en lugar de Framer Motion
const FloatingEmojis = () => {
  const emojisRef = useRef([]);
  const emojis = ["😊", "🚀", "💻", "🌈", "🎉", "🔥", "💎", "✨"];

  useEffect(() => {
    // Crear un entorno animado de emojis flotantes con GSAP
    emojisRef.current.forEach((emoji, index) => {
      // Posición inicial aleatoria
      gsap.set(emoji, {
        x: `random(-50, 50, 1)vw`,
        y: `random(-30, 30, 1)vh`,
        rotation: `random(-40, 40, 1)`,
      });

      // Animación continua
      gsap.to(emoji, {
        x: `random(-70, 70, 10)vw`,
        y: `random(-40, 40, 10)vh`,
        rotation: `random(-60, 60, 10)`,
        scale: `random(0.8, 1.5, 0.1)`,
        duration: `random(5, 10, 0.5)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });

    // Limpieza
    return () => {
      emojisRef.current.forEach((emoji) => {
        gsap.killTweensOf(emoji);
      });
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {emojis.map((emoji, index) => (
        <span
          key={index}
          className="absolute text-4xl"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            opacity: 0.7,
          }}
          ref={(el) => (emojisRef.current[index] = el)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default function AboutMeAnimated() {
  const [currentFact, setCurrentFact] = useState(0);
  const [coffeeCount, setCoffeeCount] = useState(0);

  // Referencias para animaciones GSAP
  const cardRef = useRef(null);
  const avatarRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const funFactRef = useRef(null);
  const contactRef = useRef(null);
  const coffeeButtonRef = useRef(null);
  const coffeeThanksRef = useRef(null);

  const [text] = useTypewriter({
    words: ["Desarrollador", "Innovador", "Aprendiz Eterno"],
    loop: 0,
  });

  useEffect(() => {
    // Timeline principal para la secuencia de entrada
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Configuración inicial
    gsap.set(
      [
        avatarRef.current,
        titleRef.current,
        bioRef.current,
        funFactRef.current,
        contactRef.current,
        coffeeButtonRef.current,
      ],
      {
        autoAlpha: 0,
        y: 30,
      }
    );

    // Secuencia de animación
    tl.to(cardRef.current, {
      duration: 0.7,
      boxShadow: "0 10px 25px rgba(0, 0, 150, 0.1)",
      ease: "power2.inOut",
    })
      // Avatar con efecto de giro
      .to(avatarRef.current, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        rotationY: 360,
        ease: "back.out(1.7)",
      })
      // Título
      .to(
        titleRef.current,
        {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
        },
        "-=0.4"
      )
      // Biografía con efecto de entrada por letra
      .to(
        bioRef.current,
        {
          duration: 1.2,
          autoAlpha: 1,
          y: 0,
          onStart: () => {
            // Animación de texto por letra (opcional)
            const bioText = bioRef.current.querySelectorAll("p");
            bioText.forEach((paragraph) => {
              const text = paragraph.textContent;
              paragraph.textContent = "";
              paragraph.style.opacity = 1;

              for (let i = 0; i < text.length; i++) {
                const charSpan = document.createElement("span");
                charSpan.textContent = text[i];
                charSpan.style.opacity = 0;
                paragraph.appendChild(charSpan);

                gsap.to(charSpan, {
                  opacity: 1,
                  duration: 0.03,
                  delay: 0.8 + i * 0.01, // Efecto de máquina de escribir rápido
                });
              }
            });
          },
        },
        "-=0.6"
      )
      // Datos curiosos
      .to(
        funFactRef.current,
        {
          duration: 0.7,
          autoAlpha: 1,
          y: 0,
          scale: 1.05,
          yoyo: true,
          repeat: 1,
          repeatDelay: 0.2,
        },
        "-=0.4"
      )
      // Información de contacto
      .to(
        contactRef.current,
        {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
          stagger: 0.15, // Cada elemento de contacto aparece con un retraso
        },
        "-=0.3"
      )
      // Botón de café con animación de rebote
      .to(
        coffeeButtonRef.current,
        {
          duration: 0.6,
          autoAlpha: 1,
          y: 0,
          scale: 1.2,
          yoyo: true,
          repeat: 1,
          ease: "back.out(2.5)",
        },
        "-=0.2"
      );

    // Limpieza cuando el componente se desmonta
    return () => {
      tl.kill();
    };
  }, []);

  // Efecto para el mensaje de agradecimiento por el café
  useEffect(() => {
    if (coffeeCount > 0 && coffeeThanksRef.current) {
      gsap.fromTo(
        coffeeThanksRef.current,
        { scale: 0.5, autoAlpha: 0 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.4,
          ease: "back.out(1.7)",
        }
      );
    }
  }, [coffeeCount]);

  const nextFact = () => {
    // Animación al cambiar de dato curioso
    const factElement = funFactRef.current.querySelector("p");
    if (factElement) {
      gsap.to(factElement, {
        y: -20,
        autoAlpha: 0,
        duration: 0.3,
        onComplete: () => {
          setCurrentFact((prev) => (prev + 1) % funFacts.length);
          gsap.fromTo(
            factElement,
            { y: 20, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.3 }
          );
        },
      });
    } else {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("JDLSantos21@hotmail.com");

    // Animación para el botón de copiar
    const copyButton = document.querySelector("button:has(.lucide-copy)");
    if (copyButton) {
      gsap.to(copyButton, {
        scale: 1.1,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
      });
    }

    toast.success("Email copiado al portapapeles");
  };

  const sendEmail = () => {
    window.location.href = "mailto:JDLSantos21@hotmail.com";
  };

  return (
    <>
      <Toaster />
      {/* Emojis flotantes en el fondo */}
      <FloatingEmojis />

      <div ref={cardRef}>
        <Card className="bg-transparent shadow-none">
          <CardContent className="p-6">
            <div className="flex flex-col space-y-6">
              <h2
                ref={titleRef}
                className="text-2xl about-me-title font-bold text-blue-600 flex items-center justify-center sm:justify-start"
              >
                <User className="w-6 h-6 mr-2" />
                Sobre Mí
              </h2>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div ref={avatarRef}>
                  <Avatar className="w-32 h-32 border-2 border-blue-200">
                    <AvatarImage
                      src="/assets/avatar/greet.webp"
                      className="profile-photo"
                      alt="Profile photo"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
                    Jose A. De Los Santos
                  </h1>
                  <p className="mt-2 text-gray-600 dark:text-gray-200 text-lg">
                    23 años
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-200 text-lg">
                    Soy un{" "}
                    <span className="text-blue-600 font-semibold">{text}</span>
                    <Cursor cursorStyle="_" />
                  </p>
                </div>
              </div>

              <div ref={bioRef} className="text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  Soy un desarrollador web full-stack con un fuerte enfoque en
                  crear experiencias de usuario excepcionales. Mi pasión por la
                  tecnología y el aprendizaje continuo me impulsa a mantenerme
                  actualizado con las últimas tendencias y mejores prácticas en
                  el desarrollo de software.
                </p>
                <p>
                  Fuera del mundo del código, disfruto de la fotografía, la
                  lectura de ciencia ficción y la exploración de nuevos lugares.
                  Creo firmemente en el poder de la tecnología para hacer del
                  mundo un lugar mejor y estoy siempre buscando proyectos que
                  tengan un impacto positivo en la sociedad.
                </p>
              </div>

              <div
                ref={funFactRef}
                className="bg-blue-50 dark:bg-slate-600 p-4 rounded-lg"
              >
                <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-gray-200">
                  Dato Curioso:
                </h3>
                <p>{funFacts[currentFact]}</p>
                <Button
                  onClick={nextFact}
                  variant="outline"
                  className="mt-2 dark:bg-gray-200 dark:text-black"
                >
                  Siguiente dato
                </Button>
              </div>

              <div ref={contactRef} className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">
                  Contacto
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button
                    variant="outline"
                    className="flex items-center"
                    onClick={copyEmail}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    JDLSantos21@hotmail.com
                    <Copy className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center"
                    onClick={sendEmail}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Enviar email
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />
                    Github.com/JDLSantos21
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Linkedin.com/in/JDLSantos21
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div ref={coffeeButtonRef} className="absolute bottom-4 right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setCoffeeCount((prev) => prev + 1)}
            title="¿Me invitas un café?"
          >
            <Coffee className="h-4 w-4" />
          </Button>
        </div>
        {coffeeCount > 0 && (
          <div
            ref={coffeeThanksRef}
            className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            ¡Gracias por los {coffeeCount} cafés!
          </div>
        )}
      </div>
    </>
  );
}
