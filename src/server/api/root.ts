import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import {tasksRouter} from "~/server/api/routers/tasks";

export const appRouter = createTRPCRouter({
  tasks: tasksRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
