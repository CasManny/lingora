import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { satoshi } from "../fonts/font";


import "./globals.css";

const geistKarla = Karla({
  variable: "--font-geist-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lingora | Language learning platform",
  description: "Learn different languages in a fun, interactive way with Lingora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistKarla.variable} ${satoshi.variable} font-karla antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
