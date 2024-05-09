import React, { Suspense } from "react";
import CardWrapper from "@/app/ui/dashboard/card";

export default function Dashboard() {
return (
<main>
<h1 className=" mb-4 text-xl md:text-2xl">Dashboard</h1>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<Suspense>
<CardWrapper />
</Suspense>
</div>
{/* <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
  <Suspense fallback={<RevenueChartSkeleton />}>
    <RevenueChart />
  </Suspense>
  <LatestInvoices latestInvoices={latestInvoices} />
</div> */}
</main>
);
}
