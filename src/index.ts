import { buildApp } from "./app.js";
import { PORT } from "./config.js";

const app = buildApp();
await app.listen({ port: PORT, host: "0.0.0.0" });
