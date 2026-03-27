import { initTRPC } from "@trpc/server";
import { counterService } from "./counter-service";

const trpc = initTRPC.create();

export const appRouter = trpc.router({
	counter: trpc.router({
		get: trpc.procedure.query(() => ({ count: counterService.getCount() })),
		increment: trpc.procedure.mutation(() => {
			return { count: counterService.increment() };
		}),
	}),
});

export type AppRouter = typeof appRouter;
