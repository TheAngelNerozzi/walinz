import { PlanesPrecios } from "@/components/planes-precios";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function PreciosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <PlanesPrecios />
      <Footer />
    </main>
  );
}