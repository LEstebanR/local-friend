import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/header";
export const metadata: Metadata = {
  title: "Local Friend",
  description: "Local Friend",
  generator: "Local Friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
