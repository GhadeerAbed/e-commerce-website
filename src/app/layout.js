"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import ShopContextProvider from '../context/ShopContext'

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "E-commerce app",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full overflow-hidden">
          <Navbar />
          <ShopContextProvider>{children}</ShopContextProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
