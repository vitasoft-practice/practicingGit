import Form from "@/app/ui/operator/edit-form";
import Breadcrumbs from "@/app/ui/operator/breadcrumbs";
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
// import { notFound } from 'next/navigation';

import { Metadata } from "next";

export const metadata: Metadata = {
title: "Operator | [id] | edit",
};

export default async function Page({ params }: { params: { id: string } }) {
const id = params.id;
//   const [invoice, customers] = await Promise.all([
//     fetchInvoiceById(id),
//     fetchCustomers(),
//   ]);

//   if (!invoice) {
//     notFound();
//   }

return (
<main>
<Breadcrumbs
breadcrumbs={[
{ label: "Operators", href: "/dashboard/operator" },
{
label: "Edit Operator",
href: `/dashboard/operator/${id}/edit`,
active: true,
},
]}
/>
<Form />
</main>
);
}
