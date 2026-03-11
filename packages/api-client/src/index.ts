import { hc } from 'hono/client';
import type { AppType } from '../../../apps/api/src/app.js';

export function createApiClient(baseUrl: string) {
  return hc<AppType>(baseUrl);
}

export type { AppType };
