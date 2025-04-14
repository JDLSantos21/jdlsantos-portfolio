// proyectos de ejemplo

interface Project {
  id: number;
  title: string;
  slug: string;
  shortDescription?: string;
  description: string;
  skills: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Pagina Web de Agua & Hielo Lily",
    slug: "agualily-web",
    shortDescription:
      "Página web de una empresa enfocada en la distribución de agua y hielo.",
    description:
      "Agua Lily es una empresa dedicada a la distribución de agua y hielo purificados, garantizando la frescura y pureza de sus productos mediante sistemas avanzados de tratamiento como la ósmosis inversa. El objetivo de la web es conectar a los clientes con servicios de agua de alta calidad, facilitando la consulta de detalles de entrega y servicio.",
    skills: ["React", "Tailwind"],
    url: "https://agualily.com",
  },
  {
    id: 2,
    title: "Lily App - Escritorio",
    slug: "agualily-app",
    shortDescription:
      "Aplicación de escritorio variada encargada de gestionar registros e inventario.",
    description:
      "Agua Lily App es una aplicacion de escritorio que gestiona el registro de varias acciones como control de combustible, pedidos, clientes y equipos. La aplicación permite a los usuarios llevar un control detallado de sus operaciones, facilitando la gestión de datos y la toma de decisiones.",
    skills: [
      "React",
      "NextJS",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "Express",
      "MySQL",
      "JWT",
      "Tauri",
      "ExcelJS",
      "Web Sockets",
      "Zod",
      "Tempo",
    ],
    url: "#",
  },
  {
    id: 3,
    title: "Tercera App - Test",
    slug: "agualily-web",
    shortDescription: "App de test para mostrar habilidades.",
    description:
      "Esta es una aplicación de test que muestra mis habilidades en desarrollo web y móvil. La aplicación incluye una variedad de características y funcionalidades que demuestran mi capacidad para crear aplicaciones interactivas y funcionales.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    url: "#",
  },
];
