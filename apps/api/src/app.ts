import { Hono } from "hono";
import { cors } from "hono/cors";
import type { Database } from "@repo/db";
import { health } from "./routes/health.js";
import { createUsersRoute } from "./routes/users.js";

export function createApp(db: Database) {
  const app = new Hono()
    .use("*", cors())
    .route("/", health)
    .route("/", createUsersRoute(db));

  return app;
}

export type AppType = ReturnType<typeof createApp>;
