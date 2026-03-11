# Project: Turbo Next.js + Hono Starter

Turborepo monorepo with Next.js 15 (web), Hono (api), shadcn/ui, Drizzle ORM + PostgreSQL. pnpm workspaces.

## Commands

```bash
pnpm dev             # Start all apps in dev mode
pnpm build           # Build all apps and packages
pnpm lint            # Check linting and formatting (Biome)
pnpm lint:fix        # Auto-fix linting and formatting issues
pnpm format          # Format all source files
pnpm db:generate     # Generate Drizzle migrations
pnpm db:migrate      # Run Drizzle migrations
pnpm db:push         # Push schema directly to database
```

## Code Style

- TypeScript strict mode — no `any` types, no `@ts-ignore`
- ES modules (`import/export`), never CommonJS
- Named exports over default exports (exception: Next.js pages/layouts require default exports)
- Explicit return types on public functions and exported APIs (exception: factory functions and Hono route builders where the return type is complex and inferred, e.g. `createApp`, `createDb`, `createUsersRoute`, `createApiClient`)
- Use `type` for type aliases, `interface` for extendable object shapes
- Prefer `unknown` over `any`; narrow with type guards

## Naming Conventions

- **Files**: camelCase (`apiClient.ts`, `userSchema.ts`)
- **Test files**: colocated with source, `.test.ts` suffix
- **Types/Interfaces**: PascalCase (`AppType`, `Database`)
- **Functions/Variables**: camelCase (`createApiClient`, `createDb`)
- **Constants**: UPPER_SNAKE_CASE
- **Generics**: Descriptive names (`TInput`, `TResult`) not single letters
