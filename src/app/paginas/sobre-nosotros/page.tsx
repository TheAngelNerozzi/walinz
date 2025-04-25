import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Nuestra Misión</h1>
            <p className="text-lg text-gray-600">
              Transformando el futuro digital de Venezuela
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 mb-16">
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-4">
                Fundada en 2025, WaLinz nace con una misión clara: revolucionar la manera en que los negocios venezolanos operan en la era digital. En un momento donde la transformación digital es más crucial que nunca, nos dedicamos a proporcionar soluciones innovadoras que permitan a las empresas locales prosperar en la economía moderna.
              </p>
              <p className="text-gray-600 mb-4">
                Nuestra plataforma integra perfectamente con WhatsApp, la herramienta de comunicación más utilizada en Venezuela, para crear una experiencia de comercio digital sin fricciones. Entendemos los desafíos únicos que enfrentan los emprendedores venezolanos y hemos diseñado una solución que no solo es accesible y eficiente, sino que también se adapta a las necesidades específicas del mercado local.
              </p>
              <p className="text-gray-600">
                En WaLinz, creemos en el poder de la tecnología para impulsar el crecimiento económico y la innovación en Venezuela. Nuestra visión es crear un ecosistema digital donde cada negocio, sin importar su tamaño, pueda competir y prosperar en la economía global.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Nuestro Compromiso</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 mb-4">
                Nos comprometemos a ser más que un proveedor de servicios; somos un aliado estratégico en el crecimiento y éxito de los negocios venezolanos. Trabajamos incansablemente para:
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-600">
                <li>Facilitar la transformación digital de las empresas tradicionales</li>
                <li>Proporcionar herramientas accesibles y efectivas para el comercio digital</li>
                <li>Impulsar la innovación y el crecimiento económico en Venezuela</li>
                <li>Ofrecer soporte continuo y soluciones adaptadas a las necesidades locales</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-black text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Únete a la Revolución Digital</h2>
            <p className="text-lg mb-8">
              Descubre cómo WaLinz puede ayudarte a transformar tu negocio
            </p>
            <Button asChild className="bg-white text-black hover:bg-gray-100">
              <Link href="/contacto">Comienza ahora</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}