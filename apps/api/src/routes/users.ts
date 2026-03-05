import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { type Database, users } from "@repo/db";

const createUserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export function createUsersRoute(db: Database) {
  return new Hono()
    .get("/users", async (c) => {
      const result = await db.select().from(users);
      return c.json(result);
    })
    .get("/users/:id", async (c) => {
      const id = c.req.param("id");
      const result = await db.select().from(users).where(eq(users.id, id));
      if (result.length === 0) {
        return c.json({ error: "User not found" }, 404);
      }
      return c.json(result[0]);
    })
    .post("/users", zValidator("json", createUserSchema), async (c) => {
      const body = c.req.valid("json");
      const result = await db
        .insert(users)
        .values({ name: body.name, email: body.email })
        .returning();
      return c.json(result[0], 201);
    })
    .delete("/users/:id", async (c) => {
      const id = c.req.param("id");
      await db.delete(users).where(eq(users.id, id));
      return c.json({ success: true });
    });
}
