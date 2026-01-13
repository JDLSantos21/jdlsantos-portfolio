---
id: 4
title: "ERP Clean Architecture API"
shortDescription: "API REST empresarial con Clean Architecture, DDD y patrones avanzados"
image: "/assets/projects/erp-clean-architecture-api"
description: "Backend robusto y escalable siguiendo principios de Clean Architecture y Domain-Driven Design para un sistema ERP completo."
skills:
  [
    "TypeScript",
    "Node.js",
    "Express",
    "Prisma ORM",
    "PostgreSQL",
    "Redis",
    "JWT",
    "Socket.io",
    "Clean Architecture",
    "DDD",
    "Docker",
    "PostGIS",
  ]
type: "api"
repository: "https://github.com/JDLSantos21/erp-clean-architecture-api/"
status: "completed"
featured: true
---

## Descripción General

API REST empresarial construida desde cero aplicando **Clean Architecture** y principios de **Domain-Driven Design (DDD)**. Este proyecto demuestra mi dominio en el diseño de sistemas backend escalables, mantenibles y orientados al dominio de negocio.

La arquitectura está diseñada para separar responsabilidades, facilitar el testing y permitir cambios en la infraestructura sin afectar la lógica de negocio.

---

## Arquitectura del Proyecto

### Clean Architecture - Capas del Sistema

![Diagrama de flujo de la arquitectura](/images/projects/erp-clean-architecture-api/flow-architecture.webp)

Las capas del sistema siguen el principio de dependencia hacia adentro:

- **Presentation**: Controllers, Routes y Middlewares que manejan HTTP
- **Infrastructure**: Implementaciones de repositorios, DI Container, Mappers y Jobs
- **Domain**: Entidades, Use Cases, DTOs, Value Objects e interfaces de repositorios
- **Data**: Prisma ORM y conexión a PostgreSQL

### Estructura de Directorios

```
src/
├── app.ts                    // Entry point
├── config/                   // Configuración y adaptadores
├── data/                     // Conexión a base de datos
├── domain/                   // Núcleo del negocio
│   ├── entities/            // Entidades de dominio ricas
│   ├── use-cases/           // Casos de uso (lógica de aplicación)
│   ├── repositories/        // Interfaces de repositorios
│   ├── dtos/                // Data Transfer Objects
│   ├── value-objects/       // Objetos de valor inmutables
│   └── errors/              // Errores personalizados del dominio
├── infrastructure/           // Implementaciones técnicas
│   ├── di/                  // Dependency Injection Container
│   ├── repositories/        // Implementación de repositorios
│   ├── mappers/             // Transformadores Entity <-> Database
│   ├── services/            // Servicios de infraestructura
│   └── jobs/                // Cron Jobs programados
└── presentation/             // Capa de API REST
    ├── routes.ts            // Router principal
    ├── middlewares/         // Auth, validación, errores
    └── [modules]/           // Controllers por módulo
```

---

## Patrones de Diseño Implementados

### Dependency Injection Container

Implementé un contenedor de inyección de dependencias propio, siguiendo el patrón **Service Locator + Factory**, que permite:

- Registro de servicios como **singletons** o **factories**
- Resolución automática de dependencias
- Módulos organizados por dominio
- Facilidad para testing con mocks

```typescript
export class DIContainer implements IDIContainer {
  private services = new Map<string, any>();
  private factories = new Map<string, () => any>();

  registerSingleton<T>(key: string, factory: () => T): void {
    this.factories.set(key, () => {
      if (!this.services.has(key)) {
        this.services.set(key, factory());
      }
      return this.services.get(key);
    });
  }

  resolve<T>(key: string): T {
    const factory = this.factories.get(key);
    if (!factory) throw new Error(`Service ${key} not found`);
    return factory();
  }
}
```

**Módulos registrados:** AuthModule, VehicleModule, FuelModule, CustomerModule, EmployeeModule, InventoryModule, MaintenanceModule, OrderModule, EquipmentModule, TelemetryModule, CacheModule

### Value Objects

Objetos inmutables que encapsulan validación y reglas de negocio:

```typescript
export abstract class ValueObject<T extends Primitives> {
  readonly value: T;

  protected constructor(value: T) {
    this.value = value;
  }

  public equals(other: ValueObject<T>): boolean {
    return this.value === other.value;
  }
}
```

**Implementados:** `UUID`, `Email`, `Password`, `Cedula`, `RNC`, `PhoneNumber`, `EmployeeCode`, `Username`, `TrackingCode`, `IntegerId`, `FutureDate`

### Entidades de Dominio Ricas

Las entidades no son simples DTOs, contienen **lógica de negocio encapsulada**:

```typescript
export class Order extends Entity<Order> {
  public canBeAssigned(): boolean {
    return (
      (this.isPending() || this.isPreparing()) &&
      this.isActive &&
      !this.isAssigned()
    );
  }

  public isOverdue(): boolean {
    if (!this.isScheduled() || this.isDelivered()) return false;
    return new Date() > this.scheduledDate!;
  }

  public requiresUrgentAttention(): boolean {
    return (
      this.isOverdue() || (this.isPending() && this.getDaysSinceOrder() > 3)
    );
  }
}
```

### Casos de Uso

Cada operación de negocio está encapsulada en un **Use Case** independiente:

```typescript
export class LoginUser implements ILoginUserUseCase {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(loginUserDto: LoginUserDto): Promise<TokenResponse> {
    const user = await this.authRepository.login(loginUserDto);

    const accessToken = await JwtAdapter.generateAccessToken({ id: user.id });
    const refreshToken = await JwtAdapter.generateRefreshToken({ id: user.id });

    await this.authRepository.saveRefreshToken(
      user.id,
      refreshToken,
      JwtAdapter.getRefreshTokenExpirationDate()
    );

    return { user, accessToken, refreshToken };
  }
}
```

---

## Módulos del Sistema

| Módulo          | Descripción                                            | Endpoints        |
| --------------- | ------------------------------------------------------ | ---------------- |
| **Auth**        | Autenticación JWT con refresh tokens, roles y permisos | `/auth/*`        |
| **Vehicles**    | Gestión de flota vehicular, historial de placas        | `/vehicles/*`    |
| **Employees**   | Gestión de personal, códigos, cédulas                  | `/employees/*`   |
| **Fuel**        | Control de combustible, métricas y analytics           | `/fuel/*`        |
| **Inventory**   | Control de materiales, stock y movimientos             | `/inventory/*`   |
| **Maintenance** | Mantenimientos programados, alertas, procedimientos    | `/maintenance/*` |
| **Customers**   | Clientes B2B, sucursales, teléfonos                    | `/customers/*`   |
| **Orders**      | Pedidos con tracking, estados e historial              | `/orders/*`      |
| **Equipment**   | Gestión de equipos, asignaciones, reportes             | `/equipment/*`   |
| **Telemetry**   | Datos de telemetría y GPS                              | `/telemetry/*`   |

---

## Modelo de Datos

Diseño de base de datos PostgreSQL con **30+ modelos Prisma** que incluyen:

### Sistema de Autenticación

- `User`, `Role`, `UserRole` - Sistema RBAC completo
- `RefreshToken` - Tokens con expiración y revocación
- `PushToken` - Notificaciones push multiplataforma

### Sistema de Pedidos

- `Order`, `OrderItem`, `Product`
- `OrderStatusHistory` - Trazabilidad completa de estados
- Códigos de tracking únicos

### Sistema de Vehículos

- `Vehicle`, `VehicleTagHistory`
- `VehicleMaintenance`, `MaintenanceSchedule`
- `MaintenanceAlert` con prioridades

### Inventario y Combustible

- `Material`, `StockMove`, `Unit`, `MaterialCategories`
- `FuelTank`, `FuelConsumption`, `FuelRefill`

### Equipos y Geolocalización

- `Equipment`, `EquipmentModel`, `EquipmentLocation`
- **PostGIS** para consultas espaciales
- `EquipmentAssignment`, `EquipmentReport`

### Clientes B2B

- `Customer`, `CustomerPhone`, `CustomerAddress`
- Múltiples sucursales por cliente
- Historial de asignaciones de equipos

---

## Stack Tecnológico

| Categoría        | Tecnología           | Propósito                              |
| ---------------- | -------------------- | -------------------------------------- |
| Runtime          | Node.js + TypeScript | Type safety y desarrollo moderno       |
| Framework        | Express 5            | API REST robusta                       |
| ORM              | Prisma               | Type-safe database access              |
| Base de Datos    | PostgreSQL + PostGIS | Datos relacionales + geoespaciales     |
| Cache            | Redis / Upstash      | Cache distribuida y rate limiting      |
| Auth             | JWT (jsonwebtoken)   | Access + Refresh tokens                |
| Real-time        | Socket.io            | WebSockets para notificaciones         |
| Logging          | Winston              | Logs estructurados con niveles         |
| Cron             | node-cron            | Tareas programadas (alertas, limpieza) |
| Testing          | Jest + ts-jest       | Unit testing con coverage              |
| Containerización | Docker Compose       | Desarrollo y despliegue                |

---

## Funcionalidades Destacadas

### Autenticación Robusta

- JWT con **Access Token** (corta duración) + **Refresh Token** (larga duración)
- Revocación de tokens por dispositivo
- Sistema de roles jerárquico (Admin, Supervisor, Operador, etc.)

### Analytics de Combustible

- Métricas por vehículo y conductor
- Dashboard con consumo histórico
- Alertas de nivel de tanque

### Mantenimientos Inteligentes

- Programación por fecha o kilometraje
- Alertas automáticas con cron jobs
- Estados: Programado → En Progreso → Completado

### Geolocalización

- **PostGIS** para ubicaciones de equipos
- Consultas espaciales optimizadas
- Tracking de GPS desde apps móviles

### Real-time con WebSockets

- Notificaciones instantáneas
- Actualizaciones de estado de pedidos
- Integración con app móvil

---

## Conclusión

Este proyecto representa mi capacidad para diseñar y construir **sistemas backend empresariales** siguiendo las mejores prácticas de la industria:

- **Arquitectura limpia** con separación de responsabilidades
- **Código mantenible** gracias a DDD y SOLID
- **Escalabilidad** mediante inyección de dependencias
- **Testing facilitado** por inversión de dependencias
- **Documentación** clara y código autodocumentado
