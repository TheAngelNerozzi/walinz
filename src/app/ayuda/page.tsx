import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AyudaPage() {
  const categorias = [
    {
      id: 1,
      title: "Primeros pasos",
      description: "Aprende lo básico para comenzar a usar WaLinz.",
      links: [
        "Cómo crear tu cuenta",
        "Configurar tu tienda",
        "Personalizar tu menú",
        "Conectar WhatsApp Business"
      ]
    },
    {
      id: 2,
      title: "Gestión de pedidos",
      description: "Todo sobre el manejo de pedidos y clientes.",
      links: [
        "Procesar pedidos",
        "Estados de pedido",
        "Historial de pedidos",
        "Gestión de clientes"
      ]
    },
    {
      id: 3,
      title: "Pagos y facturación",
      description: "Información sobre pagos, planes y facturación.",
      links: [
        "Métodos de pago",
        "Planes y precios",
        "Facturación",
        "Reembolsos"
      ]
    },
    {
      id: 4,
      title: "Configuración",
      description: "Ajusta WaLinz según tus necesidades.",
      links: [
        "Perfil de la tienda",
        "Notificaciones",
        "Integraciones",
        "Personalización"
      ]
    },
    {
      id: 5,
      title: "Seguridad",
      description: "Mantén tu cuenta segura y protegida.",
      links: [
        "Contraseñas y acceso",
        "Verificación en dos pasos",
        "Permisos de usuario",
        "Registro de actividad"
      ]
    },
    {
      id: 6,
      title: "Solución de problemas",
      description: "Resuelve problemas comunes rápidamente.",
      links: [
        "Problemas frecuentes",
        "Errores conocidos",
        "Estado del sistema",
        "Contactar soporte"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Centro de Ayuda</h1>
            <p className="text-lg text-gray-600">
              Encuentra respuestas a tus preguntas y aprende a sacar el máximo provecho de WaLinz
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar ayuda..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--walinz-primary))] focus:border-transparent"
              />
              <Button 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white hover:bg-gray-800"
              >
                Buscar
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <Card key={categoria.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{categoria.title}</h3>
                  <p className="text-gray-600 mb-4">{categoria.description}</p>
                  <ul className="space-y-2">
                    {categoria.links.map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-[hsl(var(--walinz-primary))] hover:underline flex items-center"
                        >
                          <span className="mr-2">•</span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Contactar soporte
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}