import { Suspense } from "react";
import Table from "../../ui/customer/table";
import { CreateCustomer } from "../../ui/customer/button";

export default function Customer() {
return (
<div className="w-full">
<div className="flex w-full items-center justify-between">
<h1 className={`text-2xl`}>Customers</h1>
</div>
<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
{/* <Search placeholder="Search invoices..." /> */}
<CreateCustomer />
</div>
<Suspense key={""}>
<Table />
</Suspense>
<div className="mt-5 flex w-full justify-center">{/* <Pagination  /> */}</div>
</div>
);
}
