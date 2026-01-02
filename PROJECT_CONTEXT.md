# Portfolio Back - Project Context

## Overview
This is a Backend project built with **NestJS** (TypeScript) for a Portfolio application. It manages authentication, project showcases, experience tracking, technologies, and file uploads.

## Tech Stack
- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens), Passport
- **File Storage**: Cloudinary (inferred from `common/cloudinary`)
- **Validation**: class-validator, class-transformer

## Directory Structure

### Root (`/src`)
- `main.ts`: Entry point of the application.
- `app.module.ts`: Root module importing all feature modules and configuration.

### Modules (`/src/modules`)
Contains the core business logic, likely for Admin/Management purposes.
- **auth**: Authentication logic (Login, Register, Guards).
- **email**: Email handling capabilities.
- **experience**: Management of work experience records.
- **files**: File upload and management (likely wrapping Cloudinary logic).
- **projects**: Project portfolio management (CRUD).
- **tecnologie**: Management of technologies/skills.

### Public (`/src/public`)
Likely read-only or public interfaces for fetching data for the frontend portfolio view.
- **proyects**: Public access to projects.
- **tecnologies**: Public access to technologies.
- **experience**: Public access to experience.

### Common (`/src/common`)
Shared resources used across the application.
- **auth**: JWT strategies and guards.
- **cloudinary**: Cloudinary configuration and providers.
- **decorator**: Custom decorators (e.g., `@Auth`, `@User`).
- **enum**: Shared enums (e.g., `RoleEnum`).
- **filters**: Exception filters.
- **interface**: TypeScript interfaces.
- **jwt**: JWT utilities.

## Key Configuration
- **Environment**: Managed via `@nestjs/config` and `.env` file.
- **Database Connection**: Configured in `app.module.ts` using `MongooseModule.forRoot`.
- **Global Prefix**: Likely set in `main.ts` (e.g., `/api`).

## Build & Run
- `npm run start:dev`: Development server.
- `npm run build`: Build for production (outputs to `/dist`).
- `npm run start:prod`: Run production build.

## Notes for AI Assistant
- The `auth` module uses a custom Role-based access control system (`RoleEnum`, `Auth` decorator).
- There is a clear separation between `modules` (management) and `public` (read-only) APIs.
- When adding new resources, consider if they belong in the private management API or the public facing API.
