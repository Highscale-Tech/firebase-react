import { Resend } from "resend";
import { FormSchema } from "~/components/form";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const resend = new Resend(process.env.RESEND_API);

export const employeesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.hsEmployee.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  form: publicProcedure.input(FormSchema).mutation(async ({ ctx, input }) => {
    const employee = await ctx.prisma.hsEmployee.create({
      data: {
        ...input,
      },
    });
    await resend.emails.send({
      from: "ahla@yusuf.fyi",
      to: employee.email,
      subject: "Welcome to Highscale",
      html: `<p>Hi ${employee.name}, we're happy to inform you that you got accepted into happy</p>`,
    });

    return employee;
  }),
});
