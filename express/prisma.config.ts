import { serverEnv } from "@shared/serverEnv";
import { defineConfig } from "prisma/config";

export default defineConfig({
	schema: "prisma/schema.prisma",
	migrations: {
		path: "prisma/migrations",
	},
	datasource: {
		url: serverEnv.DATABASE_URL,
	},
});
