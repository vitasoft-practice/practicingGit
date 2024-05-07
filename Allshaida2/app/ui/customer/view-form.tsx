"use client";

import Link from "next/link";
import {
DriveFileRenameOutline,
Mail,
OtherHouses,
Phone,
LocationCity,
FiberPin,
} from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function ViewForm() {
return (
<form>
<div className="rounded-md bg-gray-50 p-4 md:p-6">
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Name
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<input
id="name"
name="name"
type="text"
placeholder="Enter Name"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<DriveFileRenameOutline className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Email
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<input
id="name"
name="name"
type="text"
placeholder="Enter Email"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<Mail className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Phone Number
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<input
id="phone number"
name="phone number"
type="number"
placeholder="Enter Phone Number"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<Phone className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
State
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<input
id="State"
name="State"
type="text"
placeholder="Enter State"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<OtherHouses className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
City
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<input
id="city"
name="city"
type="text"
placeholder="Enter City"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<LocationCity className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Zipcode
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<input
id="zipcode"
name="zipcode"
type="number"
placeholder="Enter Zipcode"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<FiberPin className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
</div>
<div className="mt-6 flex justify-end gap-4">
<Link
href="/dashboard/customer"
className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
>
Cancel
</Link>
<Button type="submit">Submit</Button>
</div>
</form>
);
}
