import Form from "@/app/ui/admin/create-form";
import Breadcrumbs from "@/app/ui/admin/breadcrumbs";
// import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from "next";

export const metadata: Metadata = {
title: "Admin | create",
};

export default async function Page() {
// const customers = await fetchCustomers();

return (
<main>
<Breadcrumbs
breadcrumbs={[
{ label: "Admin", href: "/dashboard/admin" },
{
label: "Create Admin",
href: "/dashboard/admin/create",
active: true,
},
]}
/>
<Form />
</main>
);
}
