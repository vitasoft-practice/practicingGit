import { Suspense } from "react";
import Table from "../../ui/operator/table";
import { CreateOperator } from "../../ui/operator/button";
import Search from "@/app/ui/operator/search";
export default function Operator() {
return (
<div className="w-full">
<div className="flex w-full items-center justify-between">
<h1 className={`text-2xl`}>Operators</h1>
</div>
<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
<Search placeholder="Search operator..." />
<CreateOperator />
</div>
<Suspense key={""}>
<Table />
</Suspense>
<div className="mt-5 flex w-full justify-center">{/* <Pagination  /> */}</div>
</div>
);
}
