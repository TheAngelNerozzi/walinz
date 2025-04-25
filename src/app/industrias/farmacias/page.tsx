import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FarmaciasIndustriaPage() {
  const benefits = [
    {
      title: "Catálogo Digital de Medicamentos",
      description: "Presenta tu inventario completo con descripciones detalladas, indicaciones y disponibilidad actualizada en tiempo real.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Recetas Digitales",
      description: "Recibe y gestiona recetas médicas directamente por WhatsApp, facilitando el proceso para tus clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Recordatorios de Medicamentos",
      description: "Sistema automatizado para enviar recordatorios de toma de medicamentos y reposición de recetas a tus clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      title: "Consultas Farmacéuticas",
      description: "Ofrece asesoramiento profesional sobre medicamentos y tratamientos directamente a través de WhatsApp.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Control de Inventario",
      description: "Gestiona tu stock en tiempo real, con alertas automáticas para reposición y seguimiento de productos de alta demanda.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Programas de Fidelización",
      description: "Implementa programas de puntos y descuentos para clientes frecuentes, gestionados automáticamente a través de WhatsApp.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Desde que implementamos WaLinz en nuestra farmacia, hemos aumentado nuestras ventas en un 28% y mejorado significativamente la adherencia a tratamientos de nuestros clientes gracias a los recordatorios automáticos.",
      author: "Dr. Manuel Sánchez",
      business: "Farmacia Salud Total",
      location: "Caracas",
      stats: "28% más ventas, +45% adherencia a tratamientos"
    },
    {
      quote: "El sistema de recetas digitales ha transformado nuestra operación diaria. Los clientes valoran poder enviar sus recetas por WhatsApp y recibir confirmación inmediata de disponibilidad.",
      author: "Lic. Patricia Gómez",
      business: "Farmacia Bienestar",
      location: "Valencia",
      stats: "65% menos tiempo en gestión, +30% satisfacción"
    },
    {
      quote: "Las consultas farmacéuticas por WhatsApp nos han permitido diferenciarnos de la competencia. Nuestros clientes aprecian poder resolver dudas sobre medicamentos sin tener que desplazarse.",
      author: "Dra. Claudia Martínez",
      business: "Farmacia Vida Sana",
      location: "Maracaibo",
      stats: "40% más consultas, +35% fidelización"
    }
  ];

  const caseStudies = [
    {
      title: "Farmacia Incrementa Adherencia a Tratamientos en 50%",
      description: "Una farmacia comunitaria implementó el sistema de recordatorios de WaLinz para pacientes con tratamientos crónicos. En 3 meses, la adherencia a tratamientos aumentó un 50% y las ventas recurrentes crecieron un 35%.",
      results: [
        "50% mejora en adherencia a tratamientos",
        "35% incremento en ventas recurrentes",
        "42% reducción en medicamentos caducados",
        "28% aumento en satisfacción del cliente"
      ]
    },
    {
      title: "Cadena de Farmacias Optimiza Inventario en 40%",
      description: "Una cadena de farmacias utilizó el control de inventario de WaLinz para optimizar su stock. Lograron reducir el exceso de inventario en un 40% y disminuir las roturas de stock en un 65%.",
      results: [
        "40% reducción en exceso de inventario",
        "65% menos roturas de stock",
        "30% mejora en rotación de productos",
        "25% incremento en margen de beneficio"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">WaLinz para Farmacias y Salud</h1>
            <p className="text-xl text-gray-600">
              Optimiza tu farmacia con nuestra plataforma de gestión por WhatsApp. Gestiona recetas, envía recordatorios y ofrece consultas farmacéuticas sin complicaciones.
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu farmacia?</h2>
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