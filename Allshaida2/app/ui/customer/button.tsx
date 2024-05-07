// import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
// import { deleteInvoice } from '@/app/lib/actions';
import { Add, Delete, Edit, Visibility } from "@mui/icons-material";

export function CreateCustomer() {
return (
<Link
href="/dashboard/customer/create"
className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
>
<span className="hidden md:block">Create Customer</span>{" "}
<Add className="h-5 md:ml-4" />
</Link>
);
}

export function UpdateCustomer({ id }: { id: string }) {
return (
<Link
href={`/dashboard/customer/${id}/edit`}
className="rounded-md border p-2 hover:bg-gray-100"
>
<Edit className="w-5" />
</Link>
);
}

export function ViewCustomer({ id }: { id: string }) {
return (
<Link
href={`/dashboard/customer/${id}/view`}
className="rounded-md border p-2 hover:bg-gray-100"
>
<Visibility className="w-5" />
</Link>
);
}

export function DeleteCustomer({ id }: { id: string }) {
//   const deleteInvoiceWithId = deleteInvoice.bind(null, id);
return (
<form action={""}>
<button className="rounded-md border p-2 hover:bg-gray-100">
<span className="sr-only">Delete</span>
<Delete className="w-5" />
</button>
</form>
);
}
