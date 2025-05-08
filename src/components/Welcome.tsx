import React, { useEffect, useRef } from "react";
import { BriefcaseBusiness, ChevronsDown } from "lucide-react";
import { gsap } from "gsap";

const Welcome = () => {
  // Referencias para los elementos que queremos animar
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const badgeRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  // Configurar las animaciones cuando el componente se monte
  useEffect(() => {
    // Crear un timeline - nos permite encadenar animaciones
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Configuración inicial - elementos invisibles
    gsap.set(
      [
        imageRef.current,
        titleRef.current,
        descriptionRef.current,
        badgeRef.current,
        buttonsRef.current,
        scrollIndicatorRef.current,
      ],
      {
        autoAlpha: 0,
        y: 20,
      }
    );

    // Iniciar la secuencia de animaciones
    tl
      // Animar la imagen de perfil
      .to(imageRef.current, {
        duration: 1,
        autoAlpha: 1,
        y: 0,
        scale: 1.05,
      })
      // Animar el badge de disponibilidad
      .to(
        badgeRef.current,
        {
          duration: 0.6,
          autoAlpha: 1,
          y: 0,
          scale: 1.1,
          yoyo: true,
        },
        "-=0.5"
      ) // Comenzar 0.5s antes de que termine la animación anterior
      // Animar el título
      .to(
        titleRef.current,
        {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
          stagger: 0.2, // Si hay múltiples elementos, se animan con un retraso entre ellos
        },
        "-=0.3"
      )
      // Animar la descripción
      .to(
        descriptionRef.current,
        {
          duration: 0.8,
          autoAlpha: 1,
          y: 0,
        },
        "-=0.5"
      )
      // Animar los botones
      .to(
        buttonsRef.current,
        {
          duration: 0.6,
          autoAlpha: 1,
          y: 0,
          stagger: 0.2,
        },
        "-=0.5"
      )
      // Animar el indicador de desplazamiento
      .to(
        scrollIndicatorRef.current,
        {
          duration: 0.6,
          autoAlpha: 1,
          y: 0,
          // Agregar una animación de rebote continua para el indicador de desplazamiento
          onComplete: () => {
            gsap.to(scrollIndicatorRef.current, {
              y: 10,
              duration: 1,
              repeat: -1, // Repetir infinitamente
              yoyo: true, // Ir y venir
              ease: "power1.inOut",
            });
          },
        },
        "-=0.3"
      );

    // Limpieza cuando el componente se desmonte
    return () => {
      tl.kill(); // Detener todas las animaciones
    };
  }, []); // Array vacío significa que se ejecuta solo una vez cuando el componente se monta

  return (
    <section
      ref={sectionRef}
      className="section w-full h-[calc(100vh-50px)] flex flex-col justify-center items-center relative"
    >
      <div className="relative flex items-center justify-center w-96">
        <img
          ref={imageRef}
          src="/assets/profile.webp"
          alt="profile photo"
          className="relative mb-5 border-2 border-green-400 rounded-full w-36 h-36"
        />

        {/* Aviso de disponibilidad justo debajo de la imagen */}
        <div
          ref={badgeRef}
          className="absolute z-50 bottom-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs px-4 py-1.5 rounded-full shadow-lg"
        >
          Disponible para trabajar ✅
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-8 welcome-text">
        <h1
          ref={titleRef}
          className="mb-5 text-2xl text-center text-transparent uppercase lg:text-6xl text-balance font-Bowlby-one bg-clip-text bg-linear-to-b from-black dark:from-white via-gray-400 dark:via-gray-400 to-black dark:to-white drop-shadow-md"
        >
          Bienvenido A
          <br /> mi rinconcito digital
        </h1>
        <div className="w-4/5">
          <p
            ref={descriptionRef}
            className="mb-10 text-center text-black/50 dark:text-white/80 text-md lg:text-xl text-pretty"
          >
            Soy un desarrollador de aplicaciones web. Aquí encontrarás
            información sobre mi, mis trabajos y como contactarme.
          </p>
        </div>
      </div>

      <div
        ref={buttonsRef}
        className="flex items-center justify-center gap-10 lg:w-1/2"
      >
        <a
          href="/projects"
          className="inline-flex items-center px-6 py-3 text-white transition-all duration-300 bg-blue-500 rounded-full shadow-md btn lg:text-md lg:px-7 hover:bg-blue-400 dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-white dark:shadow-blue-300/30 hover:shadow-lg hover:text-white"
        >
          <BriefcaseBusiness className="mr-1 w-5 h-5" />
          Trabajos
        </a>
        <a
          href="/contact"
          className="inline-flex px-6 transition-colors duration-300 rounded-full btn lg:text-md hover:text-blue-500 dark:text-white dark:hover:text-blue-600"
        >
          Contácto
        </a>
      </div>

      <ChevronsDown
        ref={scrollIndicatorRef}
        className="w-10 h-10 text-blue-500 dark:text-white/80 absolute bottom-10"
      />
    </section>
  );
};

export default Welcome;
