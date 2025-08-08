// Helper function to get project type icon and label
export function getProjectTypeInfo(type: string) {
  switch (type) {
    case "web":
      return { icon: "mdi:globe", label: "Sitio Web", color: "blue" };
    case "app":
      return { icon: "mdi:laptop", label: "Aplicación", color: "emerald" };
    case "api":
      return { icon: "mdi:code", label: "API", color: "purple" };
    case "library":
      return { icon: "mdi:archive", label: "Librería", color: "orange" };
    default:
      return { icon: "mdi:code", label: "Proyecto", color: "gray" };
  }
}

// Helper function to get status info
export function getStatusInfo(status: string) {
  switch (status) {
    case "completed":
      return {
        label: "Completado",
        color: "emerald",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
      };
    case "in-progress":
      return {
        label: "En Desarrollo",
        color: "blue",
        bg: "bg-blue-50 dark:bg-blue-950/30",
      };
    case "maintained":
      return {
        label: "Mantenido",
        color: "green",
        bg: "bg-green-50 dark:bg-green-950/30",
      };
    case "archived":
      return {
        label: "Archivado",
        color: "gray",
        bg: "bg-gray-50 dark:bg-gray-950/30",
      };
    default:
      return {
        label: "Completado",
        color: "emerald",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
      };
  }
}
