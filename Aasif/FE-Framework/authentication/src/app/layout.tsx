'use client'

import localFont from "next/font/local";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import { CounterProvider } from "./context/CounterContext";
import ReduxProvider from "./redux/reduxProvider";
import { usePathname } from "next/navigation";
import { publicRoutes } from "@/constant";
import { Toaster } from "react-hot-toast";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="">
          <Toaster />
          {!publicRoutes.has(pathname) && <Navbar />}
          <main className={`main_layout ${publicRoutes.has(pathname) ? 'no_nav_layout' : ''}`}>
            <AppRouterCacheProvider>
              <CounterProvider>
                <ReduxProvider>

                  {children}
                </ReduxProvider>
              </CounterProvider>
            </AppRouterCacheProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
