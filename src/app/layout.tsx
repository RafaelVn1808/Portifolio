import type { Metadata } from "next";
import { Outfit, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rafael Almeida | Backend Developer",
  description:
    "Desenvolvedor backend com experiência em C#, ASP.NET Core, SQL Server e deploy multi-cloud. Sistemas em produção, APIs otimizadas e consultas 40% mais rápidas.",
  keywords: [
    "C#",
    "ASP.NET Core",
    "Backend Developer",
    "SQL Server",
    "PostgreSQL",
    "Docker",
    "Azure",
    "API REST",
  ],
  authors: [{ name: "Rafael Almeida" }],
  openGraph: {
    title: "Rafael Almeida | Backend Developer",
    description:
      "Sistemas em produção. APIs otimizadas. Deploy multi-cloud.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${outfit.variable} ${lexend.variable} antialiased bg-background text-foreground pt-16`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
