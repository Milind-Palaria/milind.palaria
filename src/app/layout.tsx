import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Milind Palaria PORTFOLIO",
  description: "Portfolio of Milind Palaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
