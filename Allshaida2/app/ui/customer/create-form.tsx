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
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
name: Yup.string()
.min(2, "Too Short!")
.max(50, "Too Long!")
.required("Name Required!"),
email: Yup.string().email("Invalid Email Formate!").required("Email Required!"),
phone_number: Yup.number()
.min(10, "Too Short!")
.max(10, "Too Long!")
.required("Phome Number Required!"),
state: Yup.string()
.min(2, "Too Short!")
.max(50, "Too Long!")
.required("State Required!"),
city: Yup.string()
.min(2, "Too Short!")
.max(50, "Too Long!")
.required("City Required!"),
zipcode: Yup.number()
.min(5, "Too Short!")
.max(5, "Too Long!")
.required("Zipcode Required!"),
});

export default function AddForm() {
return (
<Formik
initialValues={{
name: "",
email: "",
phone_number: "",
state: "",
city: "",
zipcode: "",
}}
validationSchema={SignupSchema}
onSubmit={(Values) => {
console.log(Values);
}}
>
{({ errors, touched }) => (
<Form>
<div className="rounded-md bg-gray-50 p-4 md:p-6">
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Name
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<Field
id="name"
name="name"
type="text"
placeholder="Enter Name"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<DriveFileRenameOutline className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
{errors.name && touched.name ? (
<div className="Inactive">{errors.name}</div>
) : null}
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Email
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<Field
id="email"
name="email"
type="email"
placeholder="Enter Email"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<Mail className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
{errors.email && touched.email ? (
<div className="Inactive">{errors.email}</div>
) : null}
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Phone Number
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<Field
id="phone_number"
name="phone_number"
type="number"
placeholder="Enter Phone Number"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<Phone className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
{errors.phone_number && touched.phone_number ? (
<div className="Inactive">{errors.phone_number}</div>
) : null}
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
State
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<Field
id="state"
name="state"
type="text"
placeholder="Enter State"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<OtherHouses className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
{errors.state && touched.state ? (
<div className="Inactive">{errors.state}</div>
) : null}
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
City
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<Field
id="city"
name="city"
type="text"
placeholder="Enter City"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<LocationCity className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
{errors.city && touched.city ? (
<div className="Inactive">{errors.city}</div>
) : null}
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
<div className="mb-4">
<label htmlFor="amount" className="mb-2 block text-sm font-medium">
Zipcode
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<Field
id="zipcode"
name="zipcode"
type="number"
placeholder="Enter Zipcode"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<FiberPin className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
{errors.zipcode && touched.zipcode ? (
<div className="Inactive">{errors.zipcode}</div>
) : null}
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
</Form>
)}
</Formik>
);
}
