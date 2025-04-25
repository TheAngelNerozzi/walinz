import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WaLinz - Ecommerce para WhatsApp",
  description: "Crea Ecommerce para WhatsApp. Formulario de pedido gratuito en WhatsApp + Software empresarial todo en uno (ERP) para pequeñas empresas.",
  icons: {
    icon: "/walinz-logo.svg",
    shortcut: "/walinz-logo.svg",
    apple: "/walinz-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
