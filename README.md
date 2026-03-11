# Turbo Next.js + Hono Starter

A monorepo starter template built with [Turborepo](https://turbo.build/repo), [Next.js](https://nextjs.org), [Hono](https://hono.dev), [shadcn/ui](https://ui.shadcn.com), and [Drizzle ORM](https://orm.drizzle.team).

## What's Inside

### Apps

- **`apps/web`** — Next.js 15 App Router frontend
- **`apps/api`** — Hono API server with Node.js adapter

### Packages

- **`packages/ui`** — Shared component library (shadcn/ui + Tailwind v4)
- **`packages/db`** — Database layer (Drizzle ORM + PostgreSQL)
- **`packages/api-client`** — End-to-end type-safe API client via Hono RPC
- **`packages/eslint-config`** — Shared ESLint 9 flat configs
- **`packages/typescript-config`** — Shared TypeScript configs

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 9+
- PostgreSQL

### Setup

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Push database schema (requires running PostgreSQL)
pnpm db:push

# Start development servers
pnpm dev
```

### Port Convention

| Layer    | Range  | Default | Env Variable |
| -------- | ------ | ------- | ------------ |
| Frontend | `8xxx` | `8000`  | `WEB_PORT`   |
| Backend  | `3xxx` | `3000`  | `API_PORT`   |

By default the web app runs at [http://localhost:8000](http://localhost:8000) and the API at [http://localhost:3000](http://localhost:3000). Override via `.env`.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Start all apps in development mode   |
| `pnpm build`        | Build all apps and packages          |
| `pnpm lint`         | Lint all apps and packages           |
| `pnpm db:generate`  | Generate Drizzle migrations          |
| `pnpm db:migrate`   | Run Drizzle migrations               |
| `pnpm db:push`      | Push schema directly to the database |

## Adding shadcn/ui Components

To add shared components to `packages/ui`:

```bash
cd packages/ui
pnpm dlx shadcn@latest add <component>
```

## Type-Safe API Client

The API client provides full end-to-end type safety using Hono RPC:

```tsx
import { createApiClient } from "@repo/api-client";

const api = createApiClient(process.env.NEXT_PUBLIC_API_URL!);
const res = await api.health.$get();
const data = await res.json(); // fully typed
```

## API Routes

| Method   | Path          | Description      |
| -------- | ------------- | ---------------- |
| `GET`    | `/health`     | Health check     |
| `GET`    | `/users`      | List all users   |
| `GET`    | `/users/:id`  | Get user by ID   |
| `POST`   | `/users`      | Create a user    |
| `DELETE` | `/users/:id`  | Delete a user    |
