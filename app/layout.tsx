import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { AOSProvider } from "./components/providers/AOSProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PFM Medical",
  description: "Advanced Healthcare Solutions Across Specialties",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sora.className} font-sans antialiased bg-background text-foreground`}
      >
        <AOSProvider />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
