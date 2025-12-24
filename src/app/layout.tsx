import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MusicPlayer } from "@/components/ui/MusicPlayer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevNest | Developer Community",
  description: "Where Developers Build, Learn & Grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${sora.variable} antialiased bg-background text-foreground font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MusicPlayer />
      </body>
    </html>
  );
}
