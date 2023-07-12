import { FormSchema } from "~/components/form";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { db } from "~/server/db";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API);
const employees = collection(db, "employees");
export const employeesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    const employeesSnapshot = await getDocs(employees);
    const employeeList = employeesSnapshot.docs.map((doc) => {
      const id = doc.id;
      const data = doc.data();

      return { id, ...data };
    });
    return employeeList;
  }),
  form: publicProcedure.input(FormSchema).mutation(async ({ input }) => {
    await addDoc(employees, input);

    await resend.emails.send({
      from: "ahla@yusuf.fyi",
      to: input.email,
      subject: "Welcome to Highscale",
      html: `<p>Hi ${input.name}, we're happy to inform you that you got accepted into happy</p>`,
    });
  }),
});
