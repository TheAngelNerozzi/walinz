import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FormularioPedidosPage() {
  const features = [
    {
      title: "Personalización Total",
      description: "Crea formularios adaptados a tu negocio con campos personalizados y validación automática.",
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
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
      title: "Respuestas Automáticas",
      description: "Configura respuestas automáticas personalizadas para cada tipo de pedido recibido.",
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
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
      title: "Gestión de Pedidos",
      description: "Organiza y gestiona todos los pedidos desde un panel de control intuitivo.",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
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
      title: "Análisis en Tiempo Real",
      description: "Obtén estadísticas y análisis detallados sobre tus pedidos y clientes.",
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
      title: "Ahorra Tiempo",
      description: "Automatiza la recepción y procesamiento de pedidos, reduciendo el tiempo de gestión en un 75%.",
      icon: (
        <svg
          className="w-12 h-12 text-[hsl(var(--walinz-primary))] animate-spin-slow transform hover:scale-110 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )
    },
    {
      title: "Reduce Errores",
      description: "Elimina errores de comunicación y entrada manual con formularios inteligentes y validación automática.",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
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
      title: "Mejora la Satisfacción",
      description: "Ofrece una experiencia de pedido fluida y profesional que encanta a tus clientes.",
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
            <h1 className="text-4xl font-bold mb-6">Formulario de Pedidos WaLinz</h1>
            <p className="text-xl text-gray-600">
              Transforma la manera en que recibes pedidos con nuestro sistema inteligente de formularios por WhatsApp.
              Personaliza, automatiza y gestiona tus pedidos de forma eficiente.
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para optimizar tus pedidos?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y descubre cómo WaLinz puede transformar tu negocio
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