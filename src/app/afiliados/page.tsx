import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AfiliadosPage() {
  const beneficios = [
    {
      id: 1,
      title: "Comisiones Atractivas",
      description: "Gana hasta un 30% de comisión por cada cliente que refieras a WaLinz.",
      icon: "💰"
    },
    {
      id: 2,
      title: "Pagos Puntuales",
      description: "Recibe tus comisiones mensualmente a través de múltiples métodos de pago.",
      icon: "📅"
    },
    {
      id: 3,
      title: "Materiales de Marketing",
      description: "Accede a banners, enlaces y contenido promocional profesional.",
      icon: "🎯"
    },
    {
      id: 4,
      title: "Panel de Control",
      description: "Monitorea tus referencias y comisiones en tiempo real.",
      icon: "📊"
    },
    {
      id: 5,
      title: "Soporte Dedicado",
      description: "Cuenta con asistencia personalizada para maximizar tus ganancias.",
      icon: "🤝"
    },
    {
      id: 6,
      title: "Sin Límites",
      description: "No hay tope en las comisiones que puedes ganar.",
      icon: "⭐"
    }
  ];

  const pasos = [
    {
      numero: 1,
      titulo: "Regístrate",
      descripcion: "Completa el formulario de registro para unirte al programa."
    },
    {
      numero: 2,
      titulo: "Comparte",
      descripcion: "Utiliza tu enlace único para promocionar WaLinz."
    },
    {
      numero: 3,
      titulo: "Gana",
      descripcion: "Recibe comisiones por cada cliente que se suscriba."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Programa de Afiliados</h1>
            <p className="text-lg text-gray-600">
              Únete a nuestro programa de afiliados y gana dinero recomendando WaLinz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {beneficios.map((beneficio) => (
              <Card key={beneficio.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="text-4xl mb-4">{beneficio.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{beneficio.title}</h3>
                  <p className="text-gray-600">{beneficio.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pasos.map((paso) => (
                <div key={paso.numero} className="text-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {paso.numero}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{paso.titulo}</h3>
                  <p className="text-gray-600">{paso.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
            <p className="text-lg mb-8">
              Únete ahora y comienza a ganar dinero recomendando la mejor plataforma de ventas por WhatsApp
            </p>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-2">
              Convertirme en afiliado
            </Button>
          </div>

          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="font-bold mb-2">¿Cuánto puedo ganar?</h3>
                <p className="text-gray-600">
                  Las ganancias dependen de tu dedicación y alcance. Nuestros afiliados más activos ganan más de $1,000 mensuales.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">¿Cuándo recibo mis comisiones?</h3>
                <p className="text-gray-600">
                  Las comisiones se pagan mensualmente, siempre que alcances el mínimo de $50 en ganancias.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">¿Qué métodos de pago aceptan?</h3>
                <p className="text-gray-600">
                  Realizamos pagos a través de transferencias bancarias, PayPal y criptomonedas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}