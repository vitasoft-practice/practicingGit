import { Suspense } from "react";
import Table from "../../ui/admin/table";
import { CreateAdmin } from "../../ui/admin/button";
export default function Admin() {
return (
<div className="w-full">
<div className="flex w-full items-center justify-between">
<h1 className={`text-2xl`}>Admins</h1>
</div>
<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
{/* <Search placeholder="Search invoices..." /> */}
<CreateAdmin />
</div>
<Suspense key={""}>
<Table />
</Suspense>
<div className="mt-5 flex w-full justify-center">{/* <Pagination  /> */}</div>
</div>
);
}
