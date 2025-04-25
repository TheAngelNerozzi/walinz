import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PanaderiaPasteleriaIndustriaPage() {
  const benefits = [
    {
      title: "Catálogo Digital de Productos",
      description: "Presenta tus panes, pasteles y productos de repostería con imágenes atractivas, descripciones detalladas y precios actualizados.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Pedidos Personalizados",
      description: "Sistema para que tus clientes soliciten pasteles y productos personalizados con anticipación, facilitando tu planificación de producción.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Sistema de Encargos Anticipados",
      description: "Gestiona pedidos para fechas especiales como cumpleaños, bodas y eventos, con recordatorios automáticos.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Gestión de Producción Diaria",
      description: "Planifica tu producción diaria basada en pedidos y tendencias históricas, reduciendo desperdicios y optimizando recursos.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Delivery y Recogida",
      description: "Coordina entregas a domicilio y recogidas en tienda con seguimiento en tiempo real para tus clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Promociones y Fidelización",
      description: "Crea y difunde ofertas especiales, descuentos y programas de fidelización directamente a tus clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Desde que implementamos WaLinz en nuestra panadería, hemos aumentado nuestras ventas en un 40% y reducido el desperdicio de productos en un 35% gracias a la mejor planificación de producción.",
      author: "María Fernández",
      business: "Panadería El Buen Pan",
      location: "Caracas",
      stats: "40% más ventas, -35% desperdicio"
    },
    {
      quote: "El sistema de pedidos personalizados ha transformado nuestro negocio. Ahora recibimos encargos de pasteles para eventos con anticipación y podemos organizarnos mejor.",
      author: "Antonio Pérez",
      business: "Dulce Tentación Pastelería",
      location: "Valencia",
      stats: "60% más pedidos especiales, +45% eficiencia"
    },
    {
      quote: "Las promociones por WhatsApp nos han permitido vender productos que estaban por caducar y aumentar el tráfico en días de baja afluencia. ¡Un cambio total en nuestra rentabilidad!",
      author: "Luisa Martínez",
      business: "Delicias Artesanales",
      location: "Maracaibo",
      stats: "50% menos productos caducados, +30% ventas en días bajos"
    }
  ];

  const caseStudies = [
    {
      title: "Panadería Familiar Aumenta Producción en 50%",
      description: "Una panadería familiar implementó el sistema de pedidos anticipados y gestión de producción de WaLinz. En 3 meses, aumentaron su producción en un 50% y redujeron el tiempo dedicado a tareas administrativas en un 70%.",
      results: [
        "50% aumento en producción diaria",
        "70% menos tiempo en administración",
        "45% reducción en desperdicio",
        "35% incremento en satisfacción del cliente"
      ]
    },
    {
      title: "Pastelería Especializada Expande su Negocio",
      description: "Una pastelería especializada en eventos utilizó el catálogo digital y sistema de encargos de WaLinz para expandir su alcance. Lograron aumentar sus pedidos para eventos en un 80% y sus ingresos mensuales en un 65%.",
      results: [
        "80% más pedidos para eventos",
        "65% incremento en ingresos mensuales",
        "40% nuevos clientes por recomendación",
        "90% satisfacción en encuestas de clientes"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">WaLinz para Panaderías y Pastelerías</h1>
            <p className="text-xl text-gray-600">
              Optimiza tu panadería o pastelería con nuestra plataforma de gestión por WhatsApp. Recibe pedidos personalizados, planifica tu producción y fideliza a tus clientes sin complicaciones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Casos de Éxito</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">{caseStudy.description}</p>
                  <div className="bg-[hsl(var(--walinz-gray-light))] p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Resultados:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-[hsl(var(--walinz-primary))] pl-4">
                  <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                  <div className="mb-3">
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.business}, {testimonial.location}</p>
                  </div>
                  <div className="bg-[hsl(var(--walinz-gray-light))] px-3 py-1 rounded-full inline-block text-sm font-medium">
                    {testimonial.stats}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu panadería o pastelería?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y lleva tu negocio al siguiente nivel con WaLinz
            </p>
            <Link href="/registro" passHref>
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