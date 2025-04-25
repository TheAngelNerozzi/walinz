import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { SimplificaPedidos } from "@/components/simplifica-pedidos";
import { MetodosPago } from "@/components/metodos-pago";
import { WhatsappBusiness } from "@/components/whatsapp-business";
import { SitioWeb } from "@/components/sitio-web";
import { SoftwareEmpresarial } from "@/components/software-empresarial";
import { Resenas } from "@/components/resenas";
import { PlanesPrecios } from "@/components/planes-precios";
import { EstadisticasEmpresa } from "@/components/estadisticas-empresa";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <SimplificaPedidos />
      <MetodosPago />
      <WhatsappBusiness />
      <SitioWeb />
      <SoftwareEmpresarial />
      <EstadisticasEmpresa />
      <Resenas />
      <PlanesPrecios />
      <Footer />
    </main>
  );
}
