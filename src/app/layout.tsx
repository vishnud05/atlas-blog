import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import UserModel from "@/models/User.Model";

export const metadata: Metadata = {
  title: "A T L A S",
  description: "A modern age blog platform for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className="flex flex-col gap-2 justify-around bg-gradient-to-r from-[#ff6b6b] to-[#ffa500]">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Toaster />
        </body>
      </html>
    </AuthProvider>
  );
}
