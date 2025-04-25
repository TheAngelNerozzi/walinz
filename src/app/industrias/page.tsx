"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function IndustriasPage() {
  const categories = [
    {
      title: "Comida y bebidas",
      industries: [
        {
          name: "Restaurantes",
          href: "/industrias/restaurantes",
          benefits: [
            "Menú digital interactivo",
            "Sistema de reservas integrado",
            "Gestión de pedidos en tiempo real",
            "Programa de fidelización"
          ]
        },
        {
          name: "Cafés",
          href: "/industrias/cafes",
          benefits: [
            "Control de inventario especializado",
            "Programa de puntos para clientes frecuentes",
            "Gestión de eventos y talleres",
            "Pedidos para llevar optimizados"
          ]
        },
        {
          name: "Negocio de Comida desde Casa",
          href: "/industrias/comida-casera",
          benefits: [
            "Gestión de pedidos anticipados",
            "Planificación de menú semanal",
            "Control de ingredientes y costos",
            "Marketing directo por WhatsApp"
          ]
        },
        {
          name: "Carnicería y Verdulería",
          href: "/industrias/carniceria-verduleria",
          benefits: [
            "Control de stock en tiempo real",
            "Gestión de productos frescos",
            "Ofertas del día automatizadas",
            "Pedidos mayoristas integrados"
          ]
        },
        {
          name: "Bares y Restaurantes de Hoteles",
          href: "/industrias/bares-hoteles",
          benefits: [
            "Integración con sistema hotelero",
            "Room service automatizado",
            "Reservas para eventos especiales",
            "Gestión de cuentas huéspedes"
          ]
        },
        {
          name: "Panadería y Pastelería",
          href: "/industrias/panaderia-pasteleria",
          benefits: [
            "Pedidos personalizados",
            "Catálogo de productos especiales",
            "Gestión de producción diaria",
            "Sistema de encargos anticipados"
          ]
        },
        {
          name: "B2B y Venta al por Mayor",
          href: "/industrias/mayoristas",
          benefits: [
            "Gestión de clientes corporativos",
            "Precios especiales por volumen",
            "Facturación automatizada",
            "Seguimiento de pedidos B2B"
          ]
        },
        {
          name: "Servicio de Catering y Suscripción de Comidas",
          href: "/industrias/catering-suscripcion",
          benefits: [
            "Planificación de eventos",
            "Gestión de suscripciones",
            "Menús personalizados",
            "Logística de entregas"
          ]
        }
      ]
    },
    {
      title: "Servicios",
      industries: [
        {
          name: "Alquiler",
          href: "/industrias/alquiler",
          benefits: [
            "Gestión de reservas",
            "Calendario de disponibilidad",
            "Contratos automatizados",
            "Seguimiento de pagos"
          ]
        },
        {
          name: "Salón de belleza",
          href: "/industrias/salon-belleza",
          benefits: [
            "Reserva de citas online",
            "Recordatorios automáticos",
            "Historial de clientes",
            "Promociones personalizadas"
          ]
        },
        {
          name: "Servicios de Impresión",
          href: "/industrias/servicios-impresion",
          benefits: [
            "Gestión de trabajos de impresión",
            "Presupuestos automáticos",
            "Seguimiento de pedidos",
            "Archivo de diseños"
          ]
        },
        {
          name: "Servicios de Turismo y Viajes",
          href: "/industrias/turismo-viajes",
          benefits: [
            "Reservas de tours",
            "Itinerarios personalizados",
            "Gestión de grupos",
            "Información turística automatizada"
          ]
        }
      ]
    },
    {
      title: "Ecommerce",
      industries: [
        {
          name: "Moda y Ropa",
          href: "/industrias/ropa",
          benefits: [
            "Catálogo visual interactivo",
            "Guía de tallas automatizada",
            "Gestión de inventario",
            "Seguimiento de tendencias"
          ]
        },
        {
          name: "Joyería y Accesorios",
          href: "/industrias/joyeria-accesorios",
          benefits: [
            "Catálogo premium",
            "Certificados digitales",
            "Pedidos personalizados",
            "Seguimiento de valor"
          ]
        },
        {
          name: "Farmacias y Salud",
          href: "/industrias/farmacias",
          benefits: [
            "Recetas digitales",
            "Recordatorios de medicamentos",
            "Control de inventario",
            "Consultas farmacéuticas"
          ]
        },
        {
          name: "Teléfonos Móviles y Electrónicos",
          href: "/industrias/electronicos",
          benefits: [
            "Comparador de productos",
            "Soporte técnico integrado",
            "Garantías digitales",
            "Actualizaciones de stock"
          ]
        },
        {
          name: "Productos y Servicios Digitales",
          href: "/industrias/servicios-digitales",
          benefits: [
            "Entrega automática",
            "Licencias digitales",
            "Soporte 24/7",
            "Actualizaciones automáticas"
          ]
        },
        {
          name: "Religious & Community",
          href: "/industrias/religious-community",
          benefits: [
            "Gestión de eventos",
            "Donaciones online",
            "Comunicación comunitaria",
            "Calendario de actividades"
          ]
        },
        {
          name: "Tienda Pop-up y de Eventos",
          href: "/industrias/popup-eventos",
          benefits: [
            "Gestión de eventos temporales",
            "Inventario por evento",
            "Marketing de ubicación",
            "Análisis post-evento"
          ]
        },
        {
          name: "Personal Shopping",
          href: "/industrias/personal-shopping",
          benefits: [
            "Perfiles de clientes",
            "Recomendaciones personalizadas",
            "Seguimiento de preferencias",
            "Citas de compras"
          ]
        }
      ]
    }
  ];

  const showBenefits = (industry: any) => {
    toast(industry.name, {
      description: (
        <div className="mt-2">
          <h4 className="font-semibold mb-2">Beneficios principales:</h4>
          <ul className="list-disc pl-4 space-y-1">
            {industry.benefits.map((benefit: string, index: number) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
          <Button
            className="mt-4 w-full"
            variant="outline"
            onClick={() => window.location.href = industry.href}
          >
            Ver más detalles
          </Button>
        </div>
      ),
      duration: 5000,
    });
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Soluciones por Industria</h1>
            <p className="text-xl text-gray-600">
              Descubre cómo WaLinz se adapta a las necesidades específicas de tu sector
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-8">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.industries.map((industry, industryIndex) => (
                    <div
                      key={industryIndex}
                      className="p-6 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                      onClick={() => showBenefits(industry)}
                    >
                      <h3 className="text-lg font-semibold mb-2">{industry.name}</h3>
                      <p className="text-sm text-gray-600">Click para ver beneficios</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}