import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golum AI — Tech Solutions & Blockchain",
  description: "Dispensary-GPT + Digital Twin for dispensary operations across the USA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
