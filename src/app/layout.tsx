// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentoria Mago O Trader",              // <- título da aba
  description: "Mentoria de trading focada em consistência e gestão de risco.",
  icons: { icon: "/favicon.ico" },             // opcional (seu favicon em /public)
  openGraph: {
    title: "Mentoria Mago O Trader",
    description: "Acompanhe, aprenda e opere com método.",
    url: "https://seu-dominio.com",           // ajuste se tiver domínio
    siteName: "Mentoria Mago O Trader",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }], // opcional
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
