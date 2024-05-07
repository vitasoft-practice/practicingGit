import React from "react";
import { Edit, Visibility, Delete } from "@mui/icons-material";

export default function AdminTable() {
return (
<div className="mt-6 flow-root">
<div className="inline-block min-w-full align-middle">
<div className="rounded-lg bg-gray-50 p-2 md:pt-0">
<div className="md:hidden"></div>
<table className="hidden min-w-full text-gray-900 md:table">
<thead className="rounded-lg text-left text-sm font-normal">
<tr>
<th scope="col" className="px-4 py-5 font-medium sm:pl-6">
Name
</th>
<th scope="col" className="px-3 py-5 font-medium">
Email
</th>
<th scope="col" className="px-3 py-5 font-medium">
Password
</th>
<th scope="col" className="px-3 py-5 font-medium">
Date
</th>
<th scope="col" className="px-3 py-5 font-medium">
Status
</th>
{/* <th scope="col" className="px-3 py-5 font-medium">
Action
</th> */}
<th scope="col" className="relative py-3 pl-6 pr-3">
<span className="sr-only">Action</span>
</th>
</tr>
</thead>
<tbody className="bg-white">
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Active">Active</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit />
<Visibility />
<Delete />
</div>
</td>
</tr>
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Active">Active</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit />
<Visibility />
<Delete />
</div>
</td>
</tr>
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Inactive">Inactive</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit className="cus" />
<Visibility className="cus" />
<Delete className="cus" />
</div>
</td>
</tr>
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Inactive">Inactive</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit className="cus" />
<Visibility className="cus" />
<Delete className="cus" />
</div>
</td>
</tr>
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Active">Active</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit className="cus" />
<Visibility className="cus" />
<Delete className="cus" />
</div>
</td>
</tr>
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Inactive">Inactive</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit className="cus" />
<Visibility className="cus" />
<Delete className="cus" />
</div>
</td>
</tr>
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Active">Active</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit className="cus" />
<Visibility className="cus" />
<Delete className="cus" />
</div>
</td>
</tr>
<tr
key={""}
className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex items-center gap-3">
<p>Allshaida Shaik</p>
</div>
</td>
<td className="whitespace-nowrap px-3 py-3">allshaida.shaik@gmail.com</td>
<td className="whitespace-nowrap px-3 py-3">123456</td>
<td className="whitespace-nowrap px-3 py-3">02-05-2024</td>
<td className="whitespace-nowrap px-3 py-3">
<span className="Inactive">Inactive</span>
</td>
<td className="whitespace-nowrap py-3 pl-6 pr-3">
<div className="flex justify-end gap-3">
<Edit className="cus" />
<Visibility className="cus" />
<Delete className="cus" />
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
);
}
