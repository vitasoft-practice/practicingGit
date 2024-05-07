import Form from "@/app/ui/operator/create-form";
import Breadcrumbs from "@/app/ui/operator/breadcrumbs";
// import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from "next";

export const metadata: Metadata = {
title: "Operator | create",
};

export default async function Page() {
// const customers = await fetchCustomers();

return (
<main>
<Breadcrumbs
breadcrumbs={[
{ label: "Operator", href: "/dashboard/operator" },
{
label: "Create Operator",
href: "/dashboard/operator/create",
active: true,
},
]}
/>
<Form />
</main>
);
}
