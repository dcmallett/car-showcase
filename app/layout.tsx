import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";




export const metadata: Metadata = {
  title: "CarHub",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative antialiased`}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
