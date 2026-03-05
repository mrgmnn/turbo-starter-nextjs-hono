import { Button } from "@repo/ui/components/button";
import { createApiClient } from "@repo/api-client";

const api = createApiClient("http://localhost:3001");

async function getHealth() {
  try {
    const res = await api.health.$get();
    return await res.json();
  } catch {
    return { status: "unreachable" };
  }
}

export default async function Home() {
  const health = await getHealth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      <h1 className="text-4xl font-bold">Turbo Starter</h1>
      <p className="text-muted-foreground">
        Next.js + Hono + shadcn/ui + Drizzle
      </p>
      <div className="flex gap-4">
        <Button>Default Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
      <div className="rounded-lg border p-4">
        <p className="text-sm text-muted-foreground">
          API Health: <span className="font-mono font-bold">{health.status}</span>
        </p>
      </div>
    </main>
  );
}
