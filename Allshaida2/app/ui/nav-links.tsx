"use client";
import {
Home as HomeIcon,
Badge,
Groups,
AdminPanelSettings,
} from "@mui/icons-material";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
// vitasoft.it@gmail.com
// V8dR2KApyYKb8W3y2z74GznG7uJ
const links = [
{ name: "Home", href: "/dashboard", icon: HomeIcon },
{ name: "Admins", href: "/dashboard/admin", icon: AdminPanelSettings },
{ name: "Operators", href: "/dashboard/operator", icon: Badge },
{
name: "Customers",
href: "/dashboard/customer",
icon: Groups,
},
];

export default function NavLinks() {
const pathname = usePathname();
return (
<>
{links.map((link) => {
const LinkIcon = link.icon;
return (
<Link
key={link.name}
href={link.href}
className={clsx(
"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
{ "bg-sky-100 text-blue-600": pathname === link.href }
)}
>
<LinkIcon className="w-6" />
<p className="hidden md:block">{link.name}</p>
</Link>
);
})}
</>
);
}
