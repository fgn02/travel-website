import type { Metadata } from "next";
import { Inter, Cormorant_Infant } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const kalnia = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--heading-font",
});

export const metadata: Metadata = {
  title: "Next-Tour 🛤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${kalnia.variable} bg-slate-200`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
