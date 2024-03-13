import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BoostrapInstall from "./components/Bootstrap";
const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habito App",
  description: "Habito application for better habbit. Developed by PKBM Nola",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <BoostrapInstall />
        {children}
      </body>
    </html>
  );
}
