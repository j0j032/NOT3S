import { createTRPCRouter } from "~/server/api/trpc";
import { topicRouter} from "./routers/topics";
import { noteRouter } from "~/server/api/routers/note";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  topic: topicRouter,
  note: noteRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
