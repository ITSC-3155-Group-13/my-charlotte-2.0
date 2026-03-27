import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { z } from "zod";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const serverEnvSchema = z.object({
	NODE_ENV: z
		.enum(["development", "production", "test"])
		.default("development"),
	VITE_EXPRESS_PORT: z.coerce.number().int().positive().default(3001),
	DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
});

const parsed = serverEnvSchema.parse(process.env);

export const serverEnv = {
	NODE_ENV: parsed.NODE_ENV,
	VITE_EXPRESS_PORT: parsed.VITE_EXPRESS_PORT,
	DATABASE_URL: parsed.DATABASE_URL,
};
