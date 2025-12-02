import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Potencia V2 | Clinica de Empresas - Asesoria Empresarial Integral",
  description:
    "Somos una empresa especializada en ofrecer servicios integrales de asesoramiento empresarial: Contabilidad, Asesoria Legal, Marketing Empresarial y Talento Humano. Tu socio de confianza para el exito empresarial.",
  keywords: [
    "asesoria empresarial",
    "contabilidad",
    "tributacion",
    "asesoria legal",
    "marketing empresarial",
    "talento humano",
    "Arequipa",
    "Peru",
    "consultoria",
    "SUNAT",
    "planillas",
  ],
  authors: [{ name: "Potencia V2" }],
  openGraph: {
    title: "Potencia V2 | Clinica de Empresas",
    description:
      "Servicios integrales de asesoramiento empresarial. Potencia tu empresa con nosotros.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
