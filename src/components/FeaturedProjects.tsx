import React, { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github, ChevronRight, Code } from "lucide-react";
import { projects } from "@/mocks/topProjects";
import { gsap } from "gsap";

const FeaturedProjects: React.FC = () => {
  // Referencias para animaciones
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Configurar animaciones cuando el componente se monte
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const carousel = carouselRef.current;

    if (!section || !title || !description || !carousel) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
      .fromTo(
        description,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(
        carousel,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1 },
        "-=0.3"
      );

    // Limpiar animación al desmontar
    return () => {
      tl.kill();
    };
  }, []);

  // Estado para el slide activo
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center py-16 md:px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Encabezado de sección con diseño minimalista */}
      <div className="mb-12 md:mb-16 max-w-3xl mx-auto">
        <h2
          ref={titleRef}
          className="p-4 mb-6 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600"
        >
          Proyectos Destacados
        </h2>
        <p
          ref={descriptionRef}
          className="text-base md:text-lg text-gray-600 dark:text-gray-300"
        >
          Una selección cuidadosa de mis mejores trabajos que demuestran mi
          experiencia y pasión por el desarrollo.
        </p>
      </div>

      {/* Carrusel rediseñado con enfoque minimalista */}
      <div ref={carouselRef} className="w-full md:max-w-4/5 mx-auto">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full bg-slate-200"
          onSelect={(index) => {
            if (typeof index === "number") {
              setActiveIndex(index);
            }
          }}
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-full p-5 max-w-5xl">
                <div className="h-full ml-4 rounded-xl overflow-hidden bg-white dark:bg-gray-800/50 shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700/50 flex flex-col lg:flex-row">
                  {/* Imagen del proyecto con overlay y efecto al hacer hover */}
                  <div className="lg:w-2/5 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={`/images/projects/${project.slug}.webp`}
                      alt={project.title}
                      className="w-full h-[280px] lg:h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Contenido del proyecto con diseño espaciado y min5imalista */}
                  <div className="lg:w-3/5 p-6 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <Code className="text-blue-500 w-5 h-5 mr-2" />
                        <h3 className="text-xl lg:text-3xl font-bold text-gray-800 dark:text-blue-300">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-8 lg:text-lg">
                        {project.description}
                      </p>

                      {/* Tecnologías con diseño minimalista */}
                      <div className="mb-8">
                        <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium">
                          Tecnologías
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs rounded-full border border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Botones de acción rediseñados */}
                    <div className="flex flex-wrap gap-4">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          <div className="mr-2 p-2 rounded-full bg-blue-50 dark:bg-blue-900/30">
                            <ExternalLink className="w-4 h-4" />
                          </div>
                          <span>Visitar sitio</span>
                          <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                      )}
                      <a
                        href={`/projects/${project.slug}`}
                        className="group flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <div className="mr-2 p-2 rounded-full bg-gray-50 dark:bg-gray-800">
                          <ChevronRight className="w-4 h-4" />
                        </div>
                        <span>Ver detalles</span>
                        <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                      <a
                        href="#"
                        className="group flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <div className="mr-2 p-2 rounded-full bg-gray-50 dark:bg-gray-800">
                          <Github className="w-4 h-4" />
                        </div>
                        <span>Ver código</span>
                        <ChevronRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controles del carrusel rediseñados */}
          <div className="hidden md:block">
            <CarouselPrevious className="left-6 lg:left-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 border-none shadow-md h-10 w-10" />
            <CarouselNext className="right-6 lg:right-10 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 border-none shadow-md h-10 w-10" />
          </div>
        </Carousel>

        {/* Indicadores de posición más elegantes */}
        <div className="flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "bg-blue-500 w-6"
                  : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
              }`}
              aria-label={`Ver proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
