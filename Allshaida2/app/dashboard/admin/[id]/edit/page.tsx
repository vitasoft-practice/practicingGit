import Form from "@/app/ui/admin/edit-form";
import Breadcrumbs from "@/app/ui/admin/breadcrumbs";
// import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
// import { notFound } from 'next/navigation';

import { Metadata } from "next";

export const metadata: Metadata = {
title: "admin | [id] | edit",
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
{ label: "Admins", href: "/dashboard/admin" },
{
label: "Edit Admin",
href: `/dashboard/admin/${id}/edit`,
active: true,
},
]}
/>
<Form />
</main>
);
}
