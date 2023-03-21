import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const noteRouter = createTRPCRouter({
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.note.delete({
        where: {
          id: input.id,
        },
      });
    }),

  create: protectedProcedure
    .input(
      z.object({ title: z.string(), content: z.string(), topicId: z.string(), initialInvestment: z.number(), monthlyDeposit: z.number(), yearsOfInvestment: z.number(), annualInterestRate: z.number(), annualManagementFees: z.number(), monthlyManagementFees: z.number() })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.note.create({
        data: {
          title: input.title,
          content: input.content,

          topicId: input.topicId,
          id: input.topicId,
          initialInvestment: input.initialInvestment,
          monthlyDeposit: input.monthlyDeposit,
          yearsOfInvestment: input.yearsOfInvestment,
          annualInterestRate: input.annualInterestRate,
          annualManagementFees: input.annualManagementFees,
          monthlyManagementFees: input.monthlyManagementFees,

        },
      });
    }),

  getAll: protectedProcedure
    .input(z.object({ topicId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.note.findMany({
        where: {
          topicId: input.topicId,
        },
      });
    }),
});
