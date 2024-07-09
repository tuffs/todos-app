import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Todo Application by Devon Kiss",
  description: "Displaying my aptitude for Full-Stack Development w/ NextJS, React, Prisma, PostgreSQL, and Clerk. Sass being utilized for styling and Typescript for the safety of type checking inputs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}