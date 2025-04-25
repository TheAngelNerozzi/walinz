import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SoftwareEmpresarialPage() {
  const products = [
    {
      id: 1,
      name: "Formularios de Pedidos Personalizados",
      status: "Próximamente",
      image: "/placeholder.svg",
      description: "Sistema avanzado de formularios para optimizar la gestión de pedidos y automatizar el proceso de ventas.",
      features: [
        "Formularios personalizables",
        "Integración con WhatsApp",
        "Seguimiento en tiempo real",
        "Análisis de datos"
      ]
    },
    {
      id: 2,
      name: "Sitios Web Profesionales",
      status: "Próximamente",
      image: "/placeholder.svg",
      description: "Desarrollo de sitios web modernos y responsivos optimizados para conversión y experiencia de usuario.",
      features: [
        "Diseño personalizado",
        "Optimización SEO",
        "Integración con CRM",
        "Panel de administración"
      ]
    },
    {
      id: 3,
      name: "Software Empresarial a Medida",
      status: "Próximamente",
      image: "/placeholder.svg",
      description: "Soluciones de software personalizadas para automatizar y optimizar procesos empresariales específicos.",
      features: [
        "Desarrollo a medida",
        "Integración con sistemas existentes",
        "Escalabilidad garantizada",
        "Soporte técnico dedicado"
      ]
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">Soluciones de Software Empresarial</h1>
            <p className="text-xl text-gray-600">
              Transforme su negocio con nuestras soluciones tecnológicas personalizadas. Próximamente disponibles para impulsar su crecimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {products.map((product) => (
              <Card key={product.id} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.status}
                </div>
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 mt-6" disabled>
                    Más información pronto
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Interesado en nuestras soluciones?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Sé el primero en conocer cuando lancemos nuestros productos de software
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--walinz-primary))]" 
                />
                <Button className="bg-black text-white hover:bg-gray-800 px-8">
                  Notifícame
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}