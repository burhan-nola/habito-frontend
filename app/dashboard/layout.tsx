"use client";
import Footer from "../components/Footer";
import NavbarComponent from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
