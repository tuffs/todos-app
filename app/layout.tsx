import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

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
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}