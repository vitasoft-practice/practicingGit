import type { Metadata } from "next";
import localFont from "next/font/local";
import './globals.scss';
import { CounterContext, CounterProvider } from "./context/CounterContext";
import Navbar from "@/components/Navbar/Navbar";
import ReduxProvider from "./redux/reduxProvider";

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

export const metadata: Metadata = {
  title: "Next Js Practice",
  description: "Practiced by Aasif at Vitasoft",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} h-100`}>
        <ReduxProvider>
          <div className="">
            <Navbar />
            <main className="main_layout">
              <CounterProvider>

                {children}
              </CounterProvider>
            </main>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
