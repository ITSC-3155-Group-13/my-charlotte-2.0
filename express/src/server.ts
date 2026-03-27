import { serverEnv } from "@shared/serverEnv";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { appRouter } from "./trpc";

const app = express();
const port = serverEnv.VITE_EXPRESS_PORT;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
	res.json({ ok: true });
});

app.use(
	"/trpc",
	createExpressMiddleware({
		router: appRouter,
	}),
);

app.listen(port, () => {
	console.log(`Express server listening on http://localhost:${port}`);
});
