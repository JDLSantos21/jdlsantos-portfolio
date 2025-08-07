---
id: 2
title: "Agua Lily App - Escritorio"
shortDescription: "Aplicación de escritorio para gestión operativa empresarial"
image: "/assets/projects/agualily-app"
description: "Aplicación de escritorio creada con tauri y react."
skills: ["React", "Express", "Tauri", "MySQL", "Tailwind"]
---

## Descripción

Esta aplicación de escritorio es un Sistema de Gestión Operativa Empresarial para una empresa de purificación y distribución de agua, el sistema hasta el día de hoy incluye módulos para el control de combustible de los vehiculos, manejo de inventario de las materias primas, gestión de activos de la empresa (como los vehículos) y modulo para area de caja donde se registran los viajes y se generan etiquetas para el area de lavado y llenado de los botellones facturados. Además cuenta con autenticación de usuarios con roles personalizados, con apartado de configuración y actualización del sistema.

La app esta desarrollada con Tauri, TypeScript, Tailwind, entre otras bibliotecas. Se utiliza ExpressJS para el Servidor Web.

## Tecnologías Utilizadas

- Tauri
- TypeScript
- NextJS
- Tailwind
- ExpressJS (_JWT, bcrypt, TypeScript_)
- [**QikPos**](https://www.npmjs.com/package/qikpos?activeTab=readme) (Desarrollo Propio) Libreria para enviar comandos POS y Zebra a traves de HTTP con Javascript o Typescript. Utilizando el Plugin Qikpos - Plugin.
- Zod
- Zustand
- ExcelJS
- ReactPDF
- Sokect.io
- Tempo

## Modulos

### Login

![Banner del proyecto](/images/projects/agualily-app/screenshots/login.webp)

### Inventario

Control de inventario de materias primas utilizadas en la producción de la empresa.

![Banner del proyecto](/images/projects/agualily-app/screenshots/inventory.webp)

- Nuevo Material <br>
  <img alt='nuevo material' src='/images/projects/agualily-app/screenshots/new-material.webp'>

- Salida <br>
  <img alt='salida de inventario' src='/images/projects/agualily-app/screenshots/inventory-out.webp'>

- Ajuste <br>
  <img alt='ajuste de inventario' src='/images/projects/agualily-app/screenshots/adjust.webp'>

-Reportes <br>

<div class='grid md:grid-cols-2 grid-rows-2 md:gap-2'><img alt='generar reporte de inventario' src='/images/projects/agualily-app/screenshots/generate-report.webp'> <img class='md:row-span-2' alt='reporte de inventario' src='/images/projects/agualily-app/screenshots/generated-report.webp'> <img class="row-span-1 relative -top-15" alt='generando reporte de inventario de inventario' src='/images/projects/agualily-app/screenshots/generating-report.webp'>
</div>
