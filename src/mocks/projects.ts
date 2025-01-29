// proyectos de ejemplo

interface Project {
  id: number;
  title: string;
  slug: string;
  shortDescription?: string;
  description: string;
  image: string;
  skills: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Agua & Hielo Lily",
    slug: "agualily-web",
    shortDescription: "Plataforma de distribución de agua y hielo purificados",
    description:
      "Agua Lily es una plataforma digital dedicada a la distribución de agua y hielo purificados, garantizando la frescura y pureza de sus productos mediante sistemas avanzados de tratamiento como la ósmosis inversa. El objetivo de la web es conectar a los clientes con servicios de agua de alta calidad, facilitando tanto pedidos en línea como la consulta de detalles de entrega y servicio.",
    image: "/assets/projects/project.webp",
    skills: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
  {
    id: 2,
    title: "Agua & Hielo Lily",
    slug: "agualily-web-2",
    shortDescription: "Plataforma de distribución de agua y hielo purificados",
    description:
      "Agua Lily es una plataforma digital dedicada a la distribución de agua y hielo purificados, garantizando la frescura y pureza de sus productos mediante sistemas avanzados de tratamiento como la ósmosis inversa. El objetivo de la web es conectar a los clientes con servicios de agua de alta calidad, facilitando tanto pedidos en línea como la consulta de detalles de entrega y servicio.",
    image: "/assets/projects/project.webp",
    skills: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
  {
    id: 3,
    title: "Agua & Hielo Lily",
    slug: "agualily-web-3",
    shortDescription: "Plataforma de distribución de agua y hielo purificados",
    description:
      "Agua Lily es una plataforma digital dedicada a la distribución de agua y hielo purificados, garantizando la frescura y pureza de sus productos mediante sistemas avanzados de tratamiento como la ósmosis inversa. El objetivo de la web es conectar a los clientes con servicios de agua de alta calidad, facilitando tanto pedidos en línea como la consulta de detalles de entrega y servicio.",
    image: "/assets/projects/project.webp",
    skills: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
];
