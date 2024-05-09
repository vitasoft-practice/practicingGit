"use client";

import Link from "next/link";
import { DriveFileRenameOutline, Mail, Lock } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
name: Yup.string()
.min(2, "Too Short!")
.max(50, "Too Long!")
.required("Name Required!"),
password: Yup.string()
.min(4, "Too Short!")
.max(8, "Too Long!")
.required("Password Required!"),
email: Yup.string().email("Invalid Email Formate!").required("Email Required!"),
});

export default function AddForm() {
return (
<Formik
initialValues={{
name: "",
email: "",
password: "",
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
Password
</label>
<div className="relative mt-2 rounded-md">
<div className="relative">
<Field
id="password"
name="password"
type="text"
placeholder="Enter Password"
className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
aria-describedby="amount-error"
/>
<Lock className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
</div>
{errors.password && touched.password ? (
<div className="Inactive">{errors.password}</div>
) : null}
<div id="amount-error" aria-live="polite" aria-atomic="true"></div>
</div>
</div>
</div>
<div className="mt-6 flex justify-end gap-4">
<Link
href="/dashboard/admin"
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
