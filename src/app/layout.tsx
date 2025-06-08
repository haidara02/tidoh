import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tydal",
  description: "Social media app with attitude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
