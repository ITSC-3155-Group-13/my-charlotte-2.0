import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { serverEnv } from "../shared/src/serverEnv.ts";

// https://vite.dev/config/
export default defineConfig({
	envDir: "..",
	envPrefix: "VITE_",
	plugins: [react(), tailwindcss()],
	server: {
		proxy: {
			"/trpc": `http://localhost:${serverEnv.VITE_EXPRESS_PORT}`,
		},
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
			"@shared": fileURLToPath(new URL("../shared/src", import.meta.url)),
		},
	},
});
