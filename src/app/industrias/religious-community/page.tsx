import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ReligiousCommunityIndustriaPage() {
  const benefits = [
    {
      title: "Gestión de Eventos",
      description: "Sistema automatizado para organizar y coordinar eventos religiosos, reuniones comunitarias y celebraciones especiales.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Donaciones Online",
      description: "Facilita las donaciones y contribuciones de la comunidad con un sistema seguro y transparente a través de WhatsApp.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Comunicación Comunitaria",
      description: "Mantén a tu comunidad informada y conectada con mensajes grupales, anuncios importantes y actualizaciones regulares.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Recursos Espirituales",
      description: "Comparte materiales espirituales, lecturas diarias y recursos de estudio directamente a través de WhatsApp.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Registro de Asistencia",
      description: "Sistema automatizado para registrar y dar seguimiento a la asistencia en eventos y servicios religiosos.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Programación de Voluntarios",
      description: "Coordina y organiza equipos de voluntarios para diferentes actividades y eventos comunitarios.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "WaLinz ha transformado la forma en que nos comunicamos con nuestra congregación. La gestión de eventos y donaciones es ahora más eficiente que nunca.",
      author: "Pastor Juan Rodríguez",
      business: "Iglesia Comunidad de Fe",
      location: "Caracas",
      stats: "85% más participación, +60% donaciones"
    },
    {
      quote: "La comunicación comunitaria y el registro de asistencia automático nos han permitido dar un mejor seguimiento a nuestros miembros y sus necesidades.",
      author: "Hermana María López",
      business: "Centro Comunitario Esperanza",
      location: "Valencia",
      stats: "90% asistencia regular, +70% engagement"
    },
    {
      quote: "Los recursos espirituales digitales y la coordinación de voluntarios han hecho que nuestro trabajo comunitario sea más efectivo y organizado.",
      author: "David Hernández",
      business: "Fundación Manos Unidas",
      location: "Maracaibo",
      stats: "75% más voluntarios activos, +50% alcance"
    }
  ];

  const caseStudies = [
    {
      title: "Congregación Duplica su Alcance",
      description: "Una congregación implementó WaLinz para mejorar su comunicación y gestión de eventos. En 6 meses, duplicaron su alcance y aumentaron significativamente la participación de la comunidad.",
      results: [
        "100% aumento en asistencia regular",
        "80% más participación en eventos",
        "95% satisfacción de la comunidad",
        "65% incremento en donaciones"
      ]
    },
    {
      title: "Centro Comunitario Optimiza Servicios",
      description: "Un centro comunitario utilizó WaLinz para coordinar voluntarios y gestionar programas sociales. Lograron aumentar su impacto y mejorar la eficiencia de sus servicios.",
      results: [
        "70% más programas implementados",
        "85% mejor coordinación de voluntarios",
        "60% reducción en tiempo administrativo",
        "90% satisfacción de beneficiarios"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">WaLinz para Organizaciones Religiosas y Comunitarias</h1>
            <p className="text-xl text-gray-600">
              Optimiza la gestión de tu organización religiosa o comunitaria con nuestra plataforma de comunicación por WhatsApp. Conecta con tu comunidad, coordina eventos y gestiona recursos de manera eficiente.
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu organización?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y lleva tu comunidad al siguiente nivel con WaLinz
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