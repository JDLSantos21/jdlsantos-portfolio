# SkillBadge Component

Un componente reutilizable para mostrar badges de habilidades/tecnologías con iconos y colores personalizados.

## Uso

```astro
---
import SkillBadge from "@/components/ui/SkillBadge.astro";
---

<!-- Uso básico -->
<SkillBadge skill="React" />

<!-- Con diferentes tamaños -->
<SkillBadge skill="TypeScript" size="sm" />
<SkillBadge skill="Node.js" size="md" />
<SkillBadge skill="TailwindCSS" size="lg" />

<!-- Sin icono -->
<SkillBadge skill="JavaScript" showIcon={false} />

<!-- Con clases adicionales -->
<SkillBadge skill="Next.js" className="mx-2" />
```

## Props

- `skill` (SkillName): Nombre de la habilidad (debe existir en skillsData)
- `size` (opcional): "sm" | "md" | "lg" - Default: "md"
- `showIcon` (opcional): boolean - Default: true
- `className` (opcional): string - Clases CSS adicionales

## Ejemplo en listas

```astro
---
const skills = ["React", "TypeScript", "TailwindCSS", "Node.js"];
---

<div class="flex flex-wrap gap-2">
  {skills.map(skill => (
    <SkillBadge skill={skill} />
  ))}
</div>
```

## Agregar nuevas skills

Para agregar una nueva skill, edita el archivo `src/data/skills.ts`:

```typescript
export const skillsData = {
  // ...otras skills
  "Nueva Skill": {
    icon: "logos:nueva-skill-icon",
    color:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-800",
  },
};
```

El componente automáticamente manejará skills desconocidas con un estilo de fallback.
