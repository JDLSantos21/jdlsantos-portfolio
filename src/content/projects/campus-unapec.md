---
id: 5
title: "Campus UNAPEC"
shortDescription: "App móvil no oficial para estudiantes de UNAPEC con experiencia nativa y moderna"
image: "/assets/projects/campus-unapec"
description: "Aplicación móvil desarrollada con React Native y Expo para mejorar drásticamente la experiencia de usuario de los estudiantes de la Universidad APEC."
skills:
  [
    "Android",
    "React Native",
    "Expo",
    "TypeScript",
    "Nativewind",
    "Zustand",
    "TanStack (RQ)",
  ]
type: "mobile"
status: "in-progress"
playstore_url: "https://play.google.com/store/apps/details?id=com.jdlsantos.campusunapec"
featured: true
---

## Introducción

**Campus UNAPEC** es una iniciativa personal para transformar la manera en que los estudiantes de la Universidad APEC interactúan con sus servicios académicos. Desarrollada como una aplicación nativa moderna, ofrece una alternativa rápida, intuitiva y estéticamente agradable a la plataforma web oficial.

Actualmente en fase **Beta Cerrada**, la aplicación ya cuenta con más de **125 usuarios** activos que validan diariamente la utilidad de esta solución.

---

## El Problema

Los estudiantes enfrentan desafíos diarios al usar la plataforma web oficial ("Banner"):

- **Experiencia móvil deficiente:** Aunque es semi-responsive, la navegación es complicada y difícil de manipular desde un teléfono.
- **Sesiones expiradas:** Necesidad constante de volver a iniciar sesión.
- **Lentitud:** Tiempos de carga elevados para consultas frecuentes.
- **Falta de funcionalidades offline:** Imposibilidad de ver datos básicos sin conexión constante.

---

## La Solución

**Campus UNAPEC** resuelve estos problemas con una experiencia **offline-first**:

- **Persistencia de sesión:** Los datos de sesión se almacenan localmente de forma segura, eliminando la fricción del login repetitivo.
- **Funcionamiento sin conexión:** Todos los datos obtenidos se almacenan en caché local, permitiendo consultar horario, notas y pensum sin internet.
- **Interfaz Nativa:** Diseño limpio adaptado a los patrones de navegación móvil modernos.
- **Actualizaciones OTA:** Implementación de correcciones y mejoras instantáneas gracias a Expo Updates.

---

## Funcionalidades Principales

### Horario y Asistencia

La pantalla principal se centra en lo más importante: el horario del cuatrimestre actual.

- Visualización clara de materias, horarios, profesor y aula asignada.
- **Puntaje acumulado:** Visualización rápida del progreso en cada materia.
- **Botón flotante de Asistencia:** Acceso directo para consultar el récord de asistencia del cuatrimestre en curso.

<div class="grid grid-cols-1 gap-8 my-10 md:grid-cols-2">
  <img src="/images/projects/campus-unapec/screens/horario.webp" alt="Pantalla de Horario" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
  <img src="/images/projects/campus-unapec/screens/asistencia.webp" alt="Pantalla de Asistencia" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
</div>

### Calificaciones Detalladas

Consulta histórica de calificaciones por cuatrimestre con cálculo de índice académico.

- **Desglose completo:** Al tocar una asignatura, se abre un panel (bottomsheet) con el detalle: Primer parcial, Segundo parcial, Acumulado, Examen final, etc.

<div class="grid grid-cols-1 gap-8 my-10 md:grid-cols-2">
  <img src="/images/projects/campus-unapec/screens/calificaciones.webp" alt="Lista de Calificaciones" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
  <img src="/images/projects/campus-unapec/screens/desglose-calificacion.webp" alt="Desglose de Calificación" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
</div>

### Pensum Interactivo

Herramienta potente para el seguimiento de la carrera:

- **Resumen académico:** Créditos faltantes/completados, índice general y conteo de asignaturas (pendientes, en curso y completadas).
- **Control de prerrequisitos:** El sistema valida lógicamente el pensum; no permite marcar una materia como "en curso" si sus prerrequisitos no están completados.

<div class="flex justify-center my-10">
  <div class="w-full md:w-2/3">
    <img src="/images/projects/campus-unapec/screens/pensum.webp" alt="Pensum Interactivo" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
  </div>
</div>

### Gestión de Notificaciones

Sistema inteligente de alertas sincronizado con el horario académico.

- **Sincronización automática:** Crea recordatorios basados en tu horario de clases.
- **Anticipación personalizable:** El usuario decide cuándo recibir la alerta (15 min, 30 min, 1 hora antes, etc.).

<div class="flex justify-center my-10">
  <div class="w-full md:w-2/3">
    <img src="/images/projects/campus-unapec/screens/notificaciones.webp" alt="Configuración de Notificaciones" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
  </div>
</div>

### Herramientas y Perfil

En la sección de perfil se centralizan utilidades extra:

- **Calendario Académico:** Lista de fechas importantes con scroll automático al día actual.
- **Directorio:** Acceso rápido a teléfonos, correos y extensiones de la universidad.
- **Matriculación:** Consulta de fechas y horas específicas para la selección de materias del próximo periodo.
- **Temas:** Soporte completo para modo Claro, Oscuro y Automático (Sistema).

<div class="grid grid-cols-1 gap-6 my-10 md:grid-cols-3">
  <img src="/images/projects/campus-unapec/screens/calendario.webp" alt="Calendario Académico" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
  <img src="/images/projects/campus-unapec/screens/directorio.webp" alt="Directorio Telefónico" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
  <img src="/images/projects/campus-unapec/screens/matriculacion.webp" alt="Consulta de Matriculación" class="w-full h-auto rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] dark:shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)] border-[6px] border-white dark:border-gray-800" />
</div>

---

## Stack Tecnológico

El proyecto utiliza las últimas tecnologías del ecosistema React Native para garantizar rendimiento y experiencia de usuario:

| Tecnología             | Uso en el proyecto                               |
| ---------------------- | ------------------------------------------------ |
| **Expo SDK**           | Framework base y actualizaciones OTA             |
| **Expo Router**        | Navegación nativa basada en archivos             |
| **NativeWind**         | Estilizado eficiente con Tailwind CSS            |
| **Zustand**            | Gestión de estado global ligero                  |
| **React Query**        | Caché, sincronización y estado offline           |
| **TypeScript**         | Robustez y seguridad de tipos                    |
| **Async Storage**      | Almacenamiento local de datos                    |
| **MMKV**               | Almacenamiento sincrono local de datos           |
| **Expo Notifications** | Notificaciones push para recordatorios de clases |
