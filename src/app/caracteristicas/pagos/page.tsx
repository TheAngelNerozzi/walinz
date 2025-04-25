import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PagosFeaturePage() {
  const features = [
    {
      title: "Múltiples Métodos de Pago",
      description: "Ofrece a tus clientes diversas opciones de pago: transferencias bancarias, pago móvil, criptomonedas y más.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      title: "Pagos Seguros",
      description: "Garantiza transacciones seguras con verificación de pagos y protección contra fraudes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Comprobantes Automáticos",
      description: "Genera y envía comprobantes de pago automáticamente a tus clientes tras cada transacción.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Gestión de Facturas",
      description: "Crea y administra facturas profesionales para tus clientes con todos los detalles fiscales.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Pagos Recurrentes",
      description: "Configura cobros automáticos para servicios de suscripción o pagos periódicos.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Análisis Financiero",
      description: "Obtén estadísticas detalladas sobre tus ingresos, métodos de pago más utilizados y tendencias de ventas.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Sin Comisiones por Transacción",
      description: "A diferencia de otras plataformas, WaLinz no cobra comisiones por cada venta realizada."
    },
    {
      title: "Cobros Instantáneos",
      description: "Recibe tus pagos de forma inmediata, sin retenciones ni periodos de espera."
    },
    {
      title: "Integración con WhatsApp",
      description: "Todo el proceso de pago se gestiona directamente a través de WhatsApp, sin redirecciones."
    },
    {
      title: "Personalización Total",
      description: "Adapta los métodos de pago según las preferencias de tu negocio y tus clientes."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Sistema de Pagos WaLinz</h1>
            <p className="text-xl text-gray-600">
              Gestiona todos tus cobros directamente desde WhatsApp con múltiples opciones de pago y sin comisiones por transacción.
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
            <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de Nuestro Sistema de Pagos</h2>
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
            <h2 className="text-3xl font-bold mb-4">¿Listo para simplificar tus cobros?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y lleva la gestión de pagos de tu negocio al siguiente nivel
            </p>
            <Button asChild className="bg-[hsl(var(--walinz-primary))] hover:bg-[hsl(var(--walinz-primary-hover))]">
              <Link href="https://wa.me/14424474116?text=Quiero%20comenzar%20a%20usar%20WaLinz%20App!">Comenzar Gratis</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}