import { z } from "zod";

const clientEnvSchema = z.object({
	VITE_API_URL: z.string().optional(),
	VITE_EXPRESS_PORT: z.coerce.number().int().positive().default(3001),
});

const importEnv =
	(import.meta as unknown as { env: Record<string, unknown> }).env ?? {};

export const clientEnv = clientEnvSchema.parse({
	VITE_API_URL: importEnv.VITE_API_URL,
	VITE_EXPRESS_PORT: importEnv.VITE_EXPRESS_PORT,
});
