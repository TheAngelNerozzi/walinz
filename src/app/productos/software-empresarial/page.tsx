import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SoftwareEmpresarialPage() {
  const features = [
    {
      title: "Automatización de Procesos",
      description: "Optimiza tus operaciones empresariales con flujos de trabajo automatizados y personalizados.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
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
      title: "Integración Total",
      description: "Conecta todas tus herramientas empresariales en una única plataforma centralizada.",
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
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
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
      title: "Análisis Avanzado",
      description: "Obtén insights valiosos con herramientas de análisis de datos y reportes personalizados.",
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
      title: "Seguridad Empresarial",
      description: "Protege tus datos con sistemas de seguridad avanzados y cumplimiento normativo.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
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
      title: "Eficiencia Operativa",
      description: "Reduce costos y tiempo con procesos optimizados y automatizados que mejoran la productividad.",
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
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      )
    },
    {
      title: "Escalabilidad",
      description: "Crece sin límites con una plataforma que se adapta a las necesidades cambiantes de tu empresa.",
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
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
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
      title: "Soporte Especializado",
      description: "Cuenta con un equipo de expertos dedicado a asegurar el éxito de tu implementación.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
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
            <h1 className="text-4xl font-bold mb-6">Software Empresarial WaLinz</h1>
            <p className="text-xl text-gray-600">
              Transforma tu empresa con nuestra solución integral de software empresarial.
              Automatiza, integra y optimiza todos tus procesos de negocio en una única plataforma.
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu empresa?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y descubre cómo WaLinz puede revolucionar tu negocio
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