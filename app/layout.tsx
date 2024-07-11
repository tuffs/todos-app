import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Formatting from '@/app/components/Formatting';

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
        <Formatting children={children} />
      </body>
    </html>
  );
}