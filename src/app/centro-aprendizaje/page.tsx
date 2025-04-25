import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CentroAprendizajePage() {
  const modulos = [
    {
      titulo: "Introducción a WhatsApp Business",
      descripcion: "Aprende los fundamentos para comenzar con WhatsApp Business y WaLinz.",
      imagen: "/modulos/intro-whatsapp.svg",
      lecciones: [
        "Configuración inicial de WhatsApp Business",
        "Integración con WaLinz",
        "Mejores prácticas de uso",
        "Herramientas básicas"
      ],
      ruta: "/centro-aprendizaje/introduccion"
    },
    {
      titulo: "Estrategias de Ventas",
      descripcion: "Descubre técnicas efectivas para aumentar tus ventas a través de WhatsApp.",
      imagen: "/modulos/estrategias-ventas.svg",
      lecciones: [
        "Creación de mensajes persuasivos",
        "Gestión de catálogo de productos",
        "Técnicas de seguimiento",
        "Cierre de ventas efectivo"
      ],
      ruta: "/centro-aprendizaje/estrategias-ventas"
    },
    {
      titulo: "Gestión de Pedidos",
      descripcion: "Optimiza tu proceso de gestión de pedidos y mejora la satisfacción del cliente.",
      imagen: "/modulos/gestion-pedidos.svg",
      lecciones: [
        "Sistema de procesamiento de pedidos",
        "Automatización de respuestas",
        "Seguimiento de envíos",
        "Gestión de inventario"
      ],
      ruta: "/centro-aprendizaje/gestion-pedidos"
    },
    {
      titulo: "Marketing Digital",
      descripcion: "Implementa estrategias de marketing efectivas para tu negocio en WhatsApp.",
      imagen: "/modulos/marketing-digital.svg",
      lecciones: [
        "Campañas de mensajería",
        "Segmentación de clientes",
        "Análisis de métricas",
        "Optimización de conversiones"
      ],
      ruta: "/centro-aprendizaje/marketing-digital"
    }
  ];

  return (
    <main className="min-h-screen bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Centro de Aprendizaje WaLinz</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recursos educativos gratuitos para ayudarte a maximizar el potencial de tu negocio en WhatsApp Business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {modulos.map((modulo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{modulo.titulo}</h2>
                <p className="text-gray-600 mb-4">{modulo.descripcion}</p>
                
                <h3 className="font-medium mb-2">Contenido del módulo:</h3>
                <ul className="space-y-2 mb-6">
                  {modulo.lecciones.map((leccion, leccionIndex) => (
                    <li key={leccionIndex} className="flex items-center text-sm text-gray-700">
                      <svg
                        className="w-5 h-5 mr-2 text-[hsl(var(--walinz-primary))]"
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
                      {leccion}
                    </li>
                  ))}
                </ul>

                <Link href="https://wa.me/14424474116" passHref>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Comenzar curso
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas ayuda personalizada? Contáctanos para recibir asesoramiento específico para tu negocio.
          </p>
          <Link href="/contacto" passHref>
            <Button variant="outline" className="bg-white">
              Contactar con un experto
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}