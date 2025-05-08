import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/mocks/topProjects";

const FeaturedProjects = () => {
  return (
    <section className="py-16 px-4 md:py-20">
      {/* Encabezado de sección */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-transparent uppercase md:text-5xl font-Bowlby-one bg-clip-text bg-linear-to-b from-gray-800 dark:from-white via-gray-400 dark:via-gray-400 to-slate-900 dark:to-white">
          Proyectos{" "}
          <span className="text-blue-600 dark:text-blue-400">Destacados</span>
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Una selección de mis mejores trabajos y creaciones en el mundo del
          desarrollo.
        </p>
      </div>

      {/* Carrusel usando el componente pre-existente */}
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-6xl mx-auto"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-full p-2">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur rounded-2xl shadow-xl overflow-hidden h-full flex flex-col md:flex-row">
                {/* Imagen del proyecto */}
                <div className="md:w-1/2 overflow-hidden">
                  <img
                    src={`/images/projects/${project.slug}.webp`}
                    alt={project.title}
                    className="w-full h-[250px] md:h-[350px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Contenido/detalles del proyecto */}
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-300 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      {project.description}
                    </p>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                        Tecnologías
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 6).map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 6 && (
                          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                            +{project.skills.length - 6} más
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-md transition-colors shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visitar sitio
                      </a>
                    )}
                    <a
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md transition-colors shadow-sm"
                    >
                      Ver detalles
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* Indicador de posición */}
      <div className="flex justify-center mt-6 gap-1">
        {projects.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
