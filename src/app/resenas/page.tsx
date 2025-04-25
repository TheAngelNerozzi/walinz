import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ResenasPage() {
  const resenas = [
    {
      id: 1,
      nombre: "María González",
      negocio: "Café La Esquina",
      foto: "/testimonials/maria.jpg",
      texto: "WaLinz transformó mi cafetería. Ahora recibimos pedidos directamente por WhatsApp y nuestras ventas han aumentado un 40%.",
      calificacion: 5,
      fecha: "Marzo 2024"
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      negocio: "Tech Store CR",
      foto: "/testimonials/carlos.jpg",
      texto: "La plataforma es intuitiva y el soporte es excelente. Mis clientes adoran la facilidad para hacer pedidos.",
      calificacion: 5,
      fecha: "Febrero 2024"
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      negocio: "Dulces Caseros",
      foto: "/testimonials/ana.jpg",
      texto: "Gracias a WaLinz pude expandir mi negocio de repostería. La gestión de pedidos es muy eficiente.",
      calificacion: 5,
      fecha: "Febrero 2024"
    },
    {
      id: 4,
      nombre: "Luis Pérez",
      negocio: "Farmacia San Juan",
      foto: "/testimonials/luis.jpg",
      texto: "Excelente plataforma para gestionar pedidos. Ha mejorado significativamente nuestra atención al cliente.",
      calificacion: 4,
      fecha: "Enero 2024"
    },
    {
      id: 5,
      nombre: "Patricia Díaz",
      negocio: "Moda Express",
      foto: "/testimonials/patricia.jpg",
      texto: "WaLinz nos ayudó a organizar mejor nuestro inventario y ventas. El sistema es muy completo.",
      calificacion: 5,
      fecha: "Enero 2024"
    },
    {
      id: 6,
      nombre: "Roberto Sánchez",
      negocio: "Distribuidora RS",
      foto: "/testimonials/roberto.jpg",
      texto: "La mejor inversión para mi negocio. El ROI fue evidente desde el primer mes.",
      calificacion: 5,
      fecha: "Enero 2024"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Reseñas de Clientes</h1>
            <p className="text-lg text-gray-600">
              Descubre por qué miles de negocios confían en WaLinz para sus ventas por WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resenas.map((resena) => (
              <Card key={resena.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                    <div>
                      <h3 className="font-bold">{resena.nombre}</h3>
                      <p className="text-sm text-gray-600">{resena.negocio}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(resena.calificacion)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{resena.texto}</p>
                  <div className="text-sm text-gray-500">{resena.fecha}</div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">¿Listo para empezar?</h2>
            <p className="text-gray-600 mb-6">
              Únete a miles de negocios que ya confían en WaLinz
            </p>
            <Button asChild className="bg-black text-white hover:bg-gray-800">
              <Link href="/contacto">Comienza ahora</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}