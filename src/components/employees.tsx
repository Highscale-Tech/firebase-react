import { api } from "~/utils/api";
import { Skeleton } from "./ui/skeleton";

export default function EmployeeList() {
  const { data: employees, isLoading } = api.employees.getAll.useQuery();
  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="mt-2 w-fit space-y-2 rounded-md border-2 border-gray-50 p-4">
          <div className="flex gap-2">
            <Skeleton className="h-8 w-96" />
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="h-8 w-72" />
        </div>

        <div className="mt-2 w-fit space-y-2 rounded-md border-2 border-gray-50 p-4">
          <div className="flex gap-2">
            <Skeleton className="h-8 w-96" />
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="h-8 w-72" />
        </div>
      </div>
    );
  }
  if (employees.length == 0)
    return (
      <div className="w-fit rounded-md border-2 border-gray-300 px-2 py-4">
        There are no employees!
      </div>
    );
  return (
    <div>
      {employees.map((employee) => (
        <div
          className=" mt-2 w-fit rounded-md border-2 p-2  "
          key={employee.id}
        >
          <div className="mb-2 flex items-center gap-2">
            <h1 className="text-2xl font-bold">{employee.name}</h1>{" "}
            <div className="rounded-lg bg-emerald-200 p-1 px-4 text-base font-bold text-emerald-800">
              {employee.type}
            </div>
          </div>
          <h2>{employee.email}</h2>
        </div>
      ))}
    </div>
  );
}
