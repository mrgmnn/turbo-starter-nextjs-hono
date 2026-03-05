import { serve } from "@hono/node-server";
import { createDb } from "@repo/db";
import { createApp } from "./app.js";

const db = createDb(process.env.DATABASE_URL!);
const app = createApp(db);

serve({ fetch: app.fetch, port: 3001 }, (info) => {
  console.log(`API server running on http://localhost:${info.port}`);
});
