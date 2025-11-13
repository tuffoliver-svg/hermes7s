import type { Metadata } from "next";
import { Sanchez, Inter } from "next/font/google";
import "./globals.css";

const sanchez = Sanchez({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hermès McKinsey 7S Explorer",
  description: "Explore the McKinsey 7S model applied to Hermès luxury brand strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sanchez.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
