// import { z } from "zod";

import {
  createTRPCRouter,
  //   protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
// import { posts } from "~/server/db/schema";

export const musicRouter = createTRPCRouter({
  play: publicProcedure
    // .input(z.object({ text: z.string() }))
    .mutation(async ({}) => {
      await fetch("http://192.168.1.86:11000/Play");
      return {
        status: "success",
      };
    }),

  pause: publicProcedure
    // .input(z.object({ text: z.string() }))
    .mutation(async ({}) => {
      await fetch("http://192.168.1.86:11000/Pause");
      return {
        status: "success",
      };
    }),

  //   create: protectedProcedure
  //     .input(z.object({ name: z.string().min(1) }))
  //     .mutation(async ({ ctx, input }) => {
  //       await ctx.db.insert(posts).values({
  //         name: input.name,
  //         createdById: ctx.session.user.id,
  //       });
  //     }),

  //   getLatest: protectedProcedure.query(async ({ ctx }) => {
  //     const post = await ctx.db.query.posts.findFirst({
  //       orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  //     });

  //     return post ?? null;
  //   }),

  //   getSecretMessage: protectedProcedure.query(() => {
  //     return "you can now see this secret message!";
  //   }),
});
