import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProcesarPedidosPage() {
  const secciones = [
    {
      titulo: "Recepción de pedidos",
      descripcion: "Aprende a gestionar la entrada de nuevos pedidos",
      instrucciones: [
        "Configura las notificaciones de pedidos",
        "Revisa los detalles del pedido",
        "Verifica la disponibilidad de productos",
        "Confirma el pedido al cliente"
      ],
      consejos: "Establece un sistema de prioridades para procesar los pedidos según su urgencia y hora de llegada."
    },
    {
      titulo: "Procesamiento de pedidos",
      descripcion: "Gestiona eficientemente los pedidos recibidos",
      instrucciones: [
        "Asigna un número de seguimiento",
        "Prepara los productos solicitados",
        "Verifica la información de envío",
        "Actualiza el estado del pedido"
      ],
      consejos: "Mantén un registro detallado de cada paso del proceso para evitar errores y retrasos."
    },
    {
      titulo: "Gestión de inventario",
      descripcion: "Controla el stock durante el procesamiento",
      instrucciones: [
        "Actualiza el inventario automáticamente",
        "Configura alertas de stock bajo",
        "Gestiona reservas de productos",
        "Sincroniza con proveedores"
      ],
      consejos: "Implementa un sistema de actualización automática de inventario para mantener información precisa."
    },
    {
      titulo: "Comunicación con el cliente",
      descripcion: "Mantén informado al cliente sobre su pedido",
      instrucciones: [
        "Envía confirmación de pedido",
        "Actualiza estado de preparación",
        "Notifica envío y seguimiento",
        "Solicita confirmación de recepción"
      ],
      consejos: "Mantén una comunicación clara y proactiva para mejorar la satisfacción del cliente."
    }
  ];

  return (
    <main className="min-h-screen bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/ayuda" className="text-[hsl(var(--walinz-primary))] hover:underline mb-8 inline-block">
            ← Volver al Centro de Ayuda
          </Link>

          <h1 className="text-4xl font-bold mb-6">Procesar pedidos en WaLinz</h1>
          <p className="text-lg text-gray-600 mb-8">
            Aprende a gestionar y procesar pedidos de manera eficiente para
            garantizar la satisfacción de tus clientes.
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
            <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda con el procesamiento de pedidos?</h2>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está disponible para ayudarte a optimizar tu proceso
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