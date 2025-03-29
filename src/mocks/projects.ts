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
    title: "Agua & Hielo Lily",
    slug: "agualily-web",
    shortDescription: "Plataforma de distribución de agua y hielo purificados",
    description:
      "Agua Lily es una plataforma digital dedicada a la distribución de agua y hielo purificados, garantizando la frescura y pureza de sus productos mediante sistemas avanzados de tratamiento como la ósmosis inversa. El objetivo de la web es conectar a los clientes con servicios de agua de alta calidad, facilitando tanto pedidos en línea como la consulta de detalles de entrega y servicio.",
    skills: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
  {
    id: 2,
    title: "Agua Lily App - Escritorio",
    slug: "agualily-app",
    shortDescription:
      "Agua Lily App - Aplicación de escritorio creada con tauri y react",
    description:
      "Agua Lily App es una aplicacion de escritorio que gestiona el registro de varias acciones como control de combustible, pedidos, clientes y equipos. La aplicación permite a los usuarios llevar un control detallado de sus operaciones, facilitando la gestión de datos y la toma de decisiones.",
    skills: ["React", "Express", "Tauri", "MySQL", "Tailwind"],
    url: "#",
  },
  {
    id: 3,
    title: "Agua & Hielo Lily",
    slug: "agualily-web-3",
    shortDescription: "Plataforma de distribución de agua y hielo purificados",
    description:
      "Agua Lily es una plataforma digital dedicada a la distribución de agua y hielo purificados, garantizando la frescura y pureza de sus productos mediante sistemas avanzados de tratamiento como la ósmosis inversa. El objetivo de la web es conectar a los clientes con servicios de agua de alta calidad, facilitando tanto pedidos en línea como la consulta de detalles de entrega y servicio.",
    skills: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
  {
    id: 4,
    title: "Test 1",
    slug: "agualily-web-4",
    shortDescription: "Plataforma de distribución de agua y hielo purificados",
    description:
      "Agua Lily es una plataforma digital dedicada a la distribución de agua y hielo purificados, garantizando la frescura y pureza de sus productos mediante sistemas avanzados de tratamiento como la ósmosis inversa. El objetivo de la web es conectar a los clientes con servicios de agua de alta calidad, facilitando tanto pedidos en línea como la consulta de detalles de entrega y servicio.",
    skills: ["HTML", "CSS", "JavaScript"],
    url: "#",
  },
];
