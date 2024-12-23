import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunitoFont = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Turf Town",
  description: "Front end assessment by Dhruv Panchal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
