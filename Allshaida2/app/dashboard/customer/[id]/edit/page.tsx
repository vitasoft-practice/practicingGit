import Form from "@/app/ui/customer/edit-form";
import Breadcrumbs from "@/app/ui/customer/breadcrumbs";
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
// import { notFound } from 'next/navigation';

import { Metadata } from "next";

export const metadata: Metadata = {
title: "Customer | [id] | edit",
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
{ label: "Admins", href: "/dashboard/customer" },
{
label: "Edit Customer",
href: `/dashboard/customer/${id}/edit`,
active: true,
},
]}
/>
<Form />
</main>
);
}
