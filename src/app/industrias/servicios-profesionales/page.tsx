import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ServiciosProfesionalesIndustriaPage() {
  const benefits = [
    {
      title: "Agenda de Citas Automatizada",
      description: "Sistema integrado para que tus clientes reserven consultas directamente desde WhatsApp, con confirmaciones automáticas.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Catálogo de Servicios Digital",
      description: "Presenta tus servicios profesionales con descripciones detalladas, precios y disponibilidad actualizada en tiempo real.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Comunicación Directa con Clientes",
      description: "Mantén conversaciones personalizadas con tus clientes a través de WhatsApp, enviando documentos, propuestas y seguimientos.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Gestión de Proyectos y Contratos",
      description: "Administra tus proyectos, envía contratos digitales y realiza seguimiento de avances directamente por WhatsApp.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Pagos Integrados",
      description: "Recibe pagos por tus servicios directamente a través de WhatsApp, con recordatorios automáticos y facturas digitales.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Análisis de Rendimiento",
      description: "Obtén estadísticas detalladas sobre tus servicios más solicitados, clientes recurrentes y horas de mayor demanda.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Desde que implementamos WaLinz en mi consultorio, he aumentado mi cartera de clientes en un 40% y reducido el tiempo dedicado a tareas administrativas en más de 15 horas semanales.",
      author: "Dr. Alejandro Méndez",
      business: "Consultoría Jurídica Méndez",
      location: "Caracas",
      stats: "40% más clientes, -15h en administración"
    },
    {
      quote: "La función de agenda automática ha transformado mi práctica profesional. Mis clientes valoran poder reservar y recibir confirmación instantánea sin llamadas telefónicas.",
      author: "Lic. María Fernández",
      business: "Asesoría Financiera MF",
      location: "Valencia",
      stats: "85% menos llamadas, +28% en retención"
    },
    {
      quote: "El sistema de contratos digitales y pagos integrados me permite cerrar acuerdos mucho más rápido. He reducido el ciclo de venta de mis servicios en un 60%.",
      author: "Ing. Carlos Rodríguez",
      business: "Consultoría Tecnológica CR",
      location: "Maracaibo",
      stats: "60% menos tiempo en ciclo de venta"
    }
  ];

  const caseStudies = [
    {
      title: "Despacho de Abogados Incrementa Clientes en 35%",
      description: "Un bufete especializado en derecho corporativo implementó WaLinz para gestionar consultas iniciales y seguimiento de casos. En 3 meses, aumentaron sus consultas en un 35% y mejoraron la satisfacción del cliente en un 28%.",
      results: [
        "35% más consultas iniciales",
        "28% mejora en satisfacción",
        "42% reducción en tiempo administrativo",
        "22% incremento en ingresos"
      ]
    },
    {
      title: "Consultora Financiera Optimiza Agenda en 50%",
      description: "Una consultora financiera independiente implementó el sistema de citas de WaLinz, logrando optimizar su agenda en un 50% y reduciendo las cancelaciones de última hora en un 75% gracias a los recordatorios automáticos.",
      results: [
        "50% mejor optimización de agenda",
        "75% menos cancelaciones",
        "30% más citas mensuales",
        "15% incremento en facturación"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">WaLinz para Servicios Profesionales</h1>
            <p className="text-xl text-gray-600">
              Optimiza tu práctica profesional con nuestra plataforma de gestión por WhatsApp. Agenda citas, envía propuestas y recibe pagos sin comisiones.
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu práctica profesional?</h2>
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