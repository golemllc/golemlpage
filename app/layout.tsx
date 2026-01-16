import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golem AI — Intelligence is Artificial",
  description: "Digital Worker GPT + Simulation Twin to reason supply chain and optimize ops across dispensaries in the USA & CA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
