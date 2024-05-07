import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
title: {
template: "%s | Operator",
default: "Operator",
},
description: "The official Next.js Learn Dashboard built with App Router.",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<head>
<link rel="icon" href="/operatot-icon.jpg" sizes="any" />
<meta name="viewport" content="initial-scale=1, width=device-width" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
{/* <link
rel="stylesheet"
href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/> */}
<link
rel="stylesheet"
href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
</head>
<body className={`${inter.className} antialiased`}>{children}</body>
</html>
);
}
