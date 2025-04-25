import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComidaCaseraIndustriaPage() {
  const benefits = [
    {
      title: "Menú Digital Personalizado",
      description: "Presenta tu menú semanal con imágenes atractivas, descripciones detalladas y precios actualizados.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Pedidos Anticipados",
      description: "Sistema para que tus clientes reserven sus platos con anticipación, facilitando tu planificación de producción.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Control de Ingredientes",
      description: "Gestiona tu inventario de ingredientes y calcula costos automáticamente según los pedidos recibidos.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Gestión de Delivery",
      description: "Coordina entregas a domicilio con seguimiento en tiempo real para tus clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Marketing por WhatsApp",
      description: "Envía tu menú semanal, promociones y novedades directamente a tus clientes a través de WhatsApp.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      title: "Análisis de Preferencias",
      description: "Obtén estadísticas sobre tus platos más populares, horarios de mayor demanda y preferencias de clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Desde que implementé WaLinz en mi negocio de comida casera, he aumentado mis ventas en un 45% y puedo planificar mejor mi producción gracias a los pedidos anticipados.",
      author: "Carmen Rodríguez",
      business: "Delicias de Carmen",
      location: "Caracas",
      stats: "45% más ventas, +60% eficiencia"
    },
    {
      quote: "El control de ingredientes me ha permitido reducir el desperdicio en un 30% y calcular con precisión mis costos y ganancias por cada plato.",
      author: "Miguel Sánchez",
      business: "Sabor de Hogar",
      location: "Valencia",
      stats: "30% menos desperdicio, +25% rentabilidad"
    },
    {
      quote: "El marketing por WhatsApp ha sido clave para fidelizar a mis clientes. Ahora envío mi menú semanal y recibo pedidos anticipados sin complicaciones.",
      author: "Laura Méndez",
      business: "La Cocina de Laura",
      location: "Maracaibo",
      stats: "50% más pedidos recurrentes, +40% alcance"
    }
  ];

  const caseStudies = [
    {
      title: "Emprendimiento de Comida Casera Aumenta Clientes en 70%",
      description: "Un emprendimiento de comida casera implementó WaLinz para gestionar pedidos y comunicación con clientes. En 2 meses, aumentaron su clientela en un 70% y redujeron el tiempo dedicado a tareas administrativas en un 65%.",
      results: [
        "70% más clientes nuevos",
        "65% menos tiempo en administración",
        "40% reducción en desperdicio de alimentos",
        "35% incremento en ticket promedio"
      ]
    },
    {
      title: "Cocinera Independiente Expande su Negocio",
      description: "Una cocinera independiente utilizó las herramientas de marketing y pedidos anticipados de WaLinz para expandir su negocio. Logró aumentar su capacidad de producción en un 50% y sus ingresos mensuales en un 85%.",
      results: [
        "50% aumento en capacidad de producción",
        "85% incremento en ingresos mensuales",
        "60% más eficiencia en planificación",
        "90% satisfacción de clientes"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">WaLinz para Negocios de Comida Casera</h1>
            <p className="text-xl text-gray-600">
              Optimiza tu emprendimiento de comida casera con nuestra plataforma de gestión por WhatsApp. Recibe pedidos, planifica tu producción y fideliza a tus clientes sin complicaciones.
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu negocio de comida casera?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y lleva tu emprendimiento al siguiente nivel con WaLinz
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