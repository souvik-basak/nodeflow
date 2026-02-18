import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure, baseProcedure } from "../init";
import prisma from "@/lib/db";
import { z } from "zod";
export const appRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async ({ ctx }) => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: ctx.auth.user.email,
      },
    });

    return { success: true, message: "job queued" };
  }),
  checkEmailExists: baseProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      const user = await prisma.user.findUnique({
        where: { email: input.email },
      });
      return { exists: !!user };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
