import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SitioWebPage() {
  const features = [
    {
      title: "Diseño Personalizado",
      description: "Crea un sitio web único que refleje la identidad de tu marca con diseños personalizados y modernos.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] transform transition-transform hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0 100"
              to="100 100"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )
    },
    {
      title: "Optimización SEO",
      description: "Mejora tu visibilidad en línea con herramientas de SEO integradas y optimización para motores de búsqueda.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] transform transition-transform hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )
    },
    {
      title: "Integración WhatsApp",
      description: "Conecta tu sitio web con WhatsApp para una comunicación directa y eficiente con tus clientes.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] transform transition-transform hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,100"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )
    },
    {
      title: "Análisis de Tráfico",
      description: "Monitorea el rendimiento de tu sitio web con análisis detallados y estadísticas en tiempo real.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] transform transition-transform hover:scale-110"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="200;0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Presencia Profesional",
      description: "Establece una presencia en línea profesional que construye confianza y credibilidad con tus clientes.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] animate-pulse transform hover:scale-110 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      )
    },
    {
      title: "Ventas 24/7",
      description: "Tu sitio web trabaja por ti las 24 horas, capturando leads y generando ventas incluso mientras duermes.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] transform hover:scale-110 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,100;100,100"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )
    },
    {
      title: "Alcance Global",
      description: "Expande tu negocio más allá de las fronteras locales y llega a clientes en todo el mundo.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] transform hover:scale-110 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="100"
              to="0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Sitio Web WaLinz</h1>
            <p className="text-xl text-gray-600">
              Crea una presencia en línea impactante con nuestro constructor de sitios web integrado con WhatsApp.
              Diseña, personaliza y gestiona tu sitio web de manera profesional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Beneficios Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:bg-[hsl(var(--walinz-gray-light))] transition-colors"
                >
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para destacar en línea?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y descubre cómo WaLinz puede transformar tu presencia digital
            </p>
            <Link href="/registro" passHref>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg transform hover:scale-105 transition-transform">
                Prueba Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}