import Fastify, { type FastifyInstance } from "fastify";
import { SERVICE_NAME } from "./config.js";

export function buildApp(): FastifyInstance {
  const app = Fastify({ logger: false });
  app.get("/health", async () => ({ status: "ok", service: SERVICE_NAME }));
  return app;
}
