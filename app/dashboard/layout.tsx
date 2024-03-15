"use client";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";
import { Inter, Oswald } from "next/font/google";
const oswald = Oswald({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
