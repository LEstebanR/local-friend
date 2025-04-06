import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Local Friend",
  description: "Local Friend",
  generator: "Local Friend",
  icons: {
    icon: {
      url: "/favicon.svg",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-lt-installed="true">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
