import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhatsAppFeaturePage() {
  const features = [
    {
      title: "Formulario de Pedidos Integrado",
      description: "Recibe pedidos estructurados directamente en tu WhatsApp Business, con toda la información necesaria.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Catálogo Digital",
      description: "Muestra tus productos o servicios con imágenes de alta calidad, descripciones y precios actualizados.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      title: "Respuestas Automáticas",
      description: "Configura mensajes automáticos para preguntas frecuentes, horarios, disponibilidad y más.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Gestión de Pedidos",
      description: "Organiza y da seguimiento a tus pedidos desde la recepción hasta la entrega.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Notificaciones en Tiempo Real",
      description: "Recibe alertas instantáneas cuando lleguen nuevos pedidos o mensajes importantes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      title: "Análisis de Conversaciones",
      description: "Obtén estadísticas sobre tus conversaciones, tiempos de respuesta y satisfacción del cliente.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Regístrate en WaLinz",
      description: "Crea tu cuenta en nuestra plataforma y conecta tu número de WhatsApp Business."
    },
    {
      number: "02",
      title: "Configura tu catálogo",
      description: "Sube tus productos o servicios con imágenes, descripciones y precios."
    },
    {
      number: "03",
      title: "Personaliza tu formulario",
      description: "Adapta el formulario de pedidos según las necesidades específicas de tu negocio."
    },
    {
      number: "04",
      title: "Comparte tu enlace",
      description: "Difunde el enlace de tu tienda en redes sociales y con tus clientes."
    },
    {
      number: "05",
      title: "Recibe pedidos",
      description: "Comienza a recibir pedidos estructurados directamente en tu WhatsApp Business."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            WhatsApp Business para tu Negocio
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforma tu WhatsApp en una potente herramienta de ventas con nuestras soluciones especializadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Cómo Empezar</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--walinz-primary))] text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para potenciar tu negocio?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Únete a miles de negocios que ya están aprovechando el poder de WhatsApp Business con WaLinz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[hsl(var(--walinz-primary))] hover:bg-[hsl(var(--walinz-primary-hover))]">
              <Link href="https://wa.me/14424474116?text=Quiero%20comenzar%20a%20usar%20WaLinz%20App!">Comenzar Gratis</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contacto">Solicitar Demo</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}