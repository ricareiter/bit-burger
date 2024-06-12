import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/navigation/ResponsiveNav";
import Footer from "@/components/Footer";

const barlow_condensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bit Burger",
  description: "Burgers made with love and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={barlow_condensed.className}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
