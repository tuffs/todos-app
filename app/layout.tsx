import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Footer from '@/app/components/Footer';

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
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4" />
            <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4">
              {children}
            </div>
            <div className="col-xs-0 col-sm-0 col-md-4 col-lg-4 col-xl-4" />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}