import Form from "@/app/ui/customer/create-form";
import Breadcrumbs from "@/app/ui/admin/breadcrumbs";
// import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from "next";

export const metadata: Metadata = {
title: "Customers | create",
};

export default async function Page() {
// const customers = await fetchCustomers();

return (
<main>
<Breadcrumbs
breadcrumbs={[
{ label: "Customers", href: "/dashboard/customer" },
{
label: "Create Customer",
href: "/dashboard/customer/create",
active: true,
},
]}
/>
<Form />
</main>
);
}
