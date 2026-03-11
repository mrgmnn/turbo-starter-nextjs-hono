import { serve } from '@hono/node-server';
import { createDb } from '@repo/db';
import { createApp } from './app.js';

const db = createDb(process.env.DATABASE_URL!);
const app = createApp(db);

const PORT = Number(process.env.API_PORT) || 3000;

serve({ fetch: app.fetch, port: PORT }, info => {
  console.log(`API server running on http://localhost:${info.port}`);
});
