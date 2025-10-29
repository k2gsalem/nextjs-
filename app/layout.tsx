import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaPulse Labs | Intelligent Product Analytics",
  description:
    "NovaPulse Labs builds AI-driven product analytics that turn customer data into actionable growth insights for modern SaaS companies."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
