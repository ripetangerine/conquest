import type { Metadata}  from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

//meta
export const metadata: Metadata = {
  title: "conquest - quest post writing!",
  description: "Here is description",
};


//font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
