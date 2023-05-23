import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { memoriesRoutes } from "./routes/memories";
import cors from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: true,
});
app.register(memoriesRoutes);

app
  .listen({
    port: 3001,
  })
  .then(() => {
    console.log(`Server is running on http://localhost:3001`);
  });
