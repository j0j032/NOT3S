import {z} from "zod";

import {createTRPCRouter, protectedProcedure} from "../trpc";
import { Simulate } from "react-dom/test-utils";
import input = Simulate.input;

export const noteRouter = createTRPCRouter({
  getAll: protectedProcedure
    .input(z.object({topicId: z.string()}))
    .query(({input, ctx}) => {
      return ctx.prisma.note.findMany({
        where: {
          topicId: input.topicId,
        },
      });
    }),

  create: protectedProcedure
    .input(z.object({title: z.string(), content:z.string(), topicId: z.string()}))
    .mutation(async ({input, ctx})=>{
      const note = await ctx.prisma.note.create({
        data: {
          title: input.title,
          content: input.content,
          topicId: input.topicId
        },
      });
      return note;
    }),

  delete: protectedProcedure
    .input(z.object({id: z.string()}))
    .mutation(async ({input, ctx})=>{
      const note = await ctx.prisma.note.delete({
        where: {
          id: input.id
        }
      });
      return note;
    })
})
