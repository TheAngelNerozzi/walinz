import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ConfigurarTiendaPage() {
  const secciones = [
    {
      titulo: "Configuración básica",
      descripcion: "Establece los fundamentos de tu tienda en WaLinz",
      instrucciones: [
        "Accede al panel de administración",
        "Navega a la sección 'Configuración de tienda'",
        "Completa la información básica del negocio",
        "Guarda los cambios realizados"
      ],
      consejos: "Mantén tu información comercial actualizada y precisa para generar confianza en tus clientes."
    },
    {
      titulo: "Catálogo de productos",
      descripcion: "Organiza y presenta tus productos de manera efectiva",
      instrucciones: [
        "Crea categorías de productos",
        "Añade productos con descripciones detalladas",
        "Establece precios y disponibilidad",
        "Organiza el orden de visualización"
      ],
      consejos: "Utiliza imágenes de alta calidad y descripciones claras para mostrar tus productos de la mejor manera."
    },
    {
      titulo: "Métodos de pago",
      descripcion: "Configura las opciones de pago para tus clientes",
      instrucciones: [
        "Selecciona los métodos de pago disponibles",
        "Configura las cuentas de procesamiento",
        "Establece políticas de pago",
        "Verifica la integración de pagos"
      ],
      consejos: "Ofrece múltiples opciones de pago para facilitar la compra a tus clientes."
    },
    {
      titulo: "Opciones de envío",
      descripcion: "Define cómo entregarás tus productos",
      instrucciones: [
        "Configura zonas de envío",
        "Establece costos de envío",
        "Define tiempos de entrega",
        "Añade restricciones si es necesario"
      ],
      consejos: "Sé transparente con los costos y tiempos de envío para evitar confusiones."
    }
  ];

  return (
    <main className="min-h-screen bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/ayuda" className="text-[hsl(var(--walinz-primary))] hover:underline mb-8 inline-block">
            ← Volver al Centro de Ayuda
          </Link>

          <h1 className="text-4xl font-bold mb-6">Configurar tu tienda en WaLinz</h1>
          <p className="text-lg text-gray-600 mb-8">
            Aprende a configurar y personalizar tu tienda en WaLinz para maximizar
            tus ventas y brindar la mejor experiencia a tus clientes.
          </p>

          <div className="space-y-8">
            {secciones.map((seccion, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--walinz-primary))] text-white flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold">{seccion.titulo}</h2>
                </div>

                <p className="text-gray-600 mb-6">{seccion.descripcion}</p>

                <div className="bg-[hsl(var(--walinz-gray-light))] rounded-lg p-6 mb-6">
                  <h3 className="font-medium mb-4">Pasos a seguir:</h3>
                  <ul className="space-y-3">
                    {seccion.instrucciones.map((instruccion, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 mr-2 text-[hsl(var(--walinz-primary))] flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{instruccion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        {seccion.consejos}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con la configuración?</h2>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está disponible para ayudarte a configurar tu tienda
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Contactar soporte
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}