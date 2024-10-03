import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/shared/footer";
import Header, { LocalNav } from "@/components/shared/header";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen font-poppins w-full h-full relative">
        <Header />

        <LocalNav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
