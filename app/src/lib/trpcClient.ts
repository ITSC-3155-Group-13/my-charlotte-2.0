import type { AppRouter } from "@express/trpc";
import { clientEnv } from "@shared/clientEnv";
import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";

export const api = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

export const trpcClient = api.createClient({
	links: [
		httpBatchLink({
			url: `http://localhost:${clientEnv.VITE_EXPRESS_PORT}/trpc`,
		}),
	],
});
