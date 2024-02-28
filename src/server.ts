import { fastify } from "./app";
import { env } from "./env";

// Run the server!
fastify.listen({ port: env.PORT })