import Head from "next/head";
import EmployeeList from "~/components/employees";
import { NewEmployeeForm } from "~/components/form";
import { Toaster } from "~/components/ui/toaster";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-4">
        <div className="mb-2">
          <h1 className="text-2xl font-bold">
            Hi, My Name is Mongia Ben Hmiden
          </h1>
          <p>
            I will be your email automator today, add a new employee below to
            get started!
          </p>
        </div>
        <NewEmployeeForm />
        <h2 className="text-xl font-semibold">Employees</h2>
        <EmployeeList />
      </main>
      <Toaster />
    </>
  );
}
