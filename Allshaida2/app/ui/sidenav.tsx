import Link from "next/link";
import NavLinks from "@/app/ui/nav-links";
import { PowerSettingsNew, SupportAgent } from "@mui/icons-material";

export default function SideNav() {
return (
<div className="flex h-full flex-col px-3 py-4 md:px-2">
<Link
className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-20"
href="/dashboard"
>
<div className="flex gap-3">
<SupportAgent className="text-white" />
<div className="w-32 text-white md:w-40">OPERATOR</div>
</div>
</Link>
<div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
<NavLinks />
<div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
<form>
<Link href="/login">
<button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
<PowerSettingsNew className="w-6" />
<div className="hidden md:block">Sign Out</div>
</button>
</Link>
</form>
</div>
</div>
);
}
