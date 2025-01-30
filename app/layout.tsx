import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "600", "700", "800", "900"],
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rentcars - Affordable Car Rentals for Every Journey",
  description:
    "Discover hassle-free car rentals with Rentcars. Choose from a wide range of vehicles at unbeatable prices. Perfect for every trip, whether business or leisure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
