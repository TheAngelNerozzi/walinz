import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SeoFeaturePage() {
  const features = [
    {
      title: "Optimización para Motores de Búsqueda",
      description: "Tu tienda en WhatsApp aparecerá en los resultados de búsqueda de Google, aumentando tu visibilidad online.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      title: "Meta Etiquetas Personalizadas",
      description: "Configura títulos, descripciones y palabras clave para mejorar tu posicionamiento en buscadores.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "URLs Amigables",
      description: "Genera direcciones web optimizadas para SEO que mejoran tu ranking en buscadores.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      )
    },
    {
      title: "Contenido Optimizado",
      description: "Herramientas para crear descripciones de productos y categorías que mejoran tu posicionamiento.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Análisis de Rendimiento SEO",
      description: "Monitorea tu posicionamiento y recibe recomendaciones para mejorar tu visibilidad en buscadores.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Integración con Google Analytics",
      description: "Conecta tu tienda con Google Analytics para obtener datos detallados sobre el tráfico y comportamiento de usuarios.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Mayor Visibilidad Online",
      description: "Aumenta la presencia de tu negocio en internet y atrae más clientes potenciales."
    },
    {
      title: "Tráfico Orgánico",
      description: "Recibe visitantes de forma gratuita a través de los resultados de búsqueda."
    },
    {
      title: "Mejor Experiencia de Usuario",
      description: "Las optimizaciones SEO también mejoran la navegación y usabilidad de tu tienda."
    },
    {
      title: "Ventaja Competitiva",
      description: "Destaca frente a competidores que no tienen presencia optimizada en buscadores."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Optimización SEO para tu Negocio</h1>
            <p className="text-xl text-gray-600">
              Aumenta la visibilidad de tu negocio en internet y atrae más clientes a través de los motores de búsqueda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Beneficios del SEO para tu Negocio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[hsl(var(--walinz-primary-light))] flex items-center justify-center">
                      <svg className="w-6 h-6 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para mejorar tu posicionamiento?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y haz que tu negocio sea más visible en internet
            </p>
            <Link href="/registrarse" passHref>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Comienza tu prueba gratuita
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}