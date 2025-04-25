import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RestaurantesIndustriaPage() {
  const benefits = [
    {
      title: "Menú Digital Interactivo",
      description: "Presenta tu menú completo con imágenes atractivas, descripciones detalladas y precios actualizados.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Pedidos por WhatsApp",
      description: "Recibe pedidos directamente en tu WhatsApp Business, sin comisiones ni intermediarios.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      )
    },
    {
      title: "Reserva de Mesas",
      description: "Sistema integrado para que tus clientes reserven mesas directamente desde WhatsApp.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Gestión de Delivery",
      description: "Coordina entregas a domicilio con seguimiento en tiempo real para tus clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      )
    },
    {
      title: "Promociones Especiales",
      description: "Crea y difunde ofertas, descuentos y promociones directamente a tus clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    {
      title: "Análisis de Ventas",
      description: "Obtén estadísticas detalladas sobre tus platos más vendidos, horarios pico y preferencias de clientes.",
      icon: (
        <svg className="w-12 h-12 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      quote: "Desde que implementamos WaLinz en nuestro restaurante, hemos aumentado nuestras ventas en un 30% y reducido los errores en los pedidos casi por completo.",
      author: "María Rodríguez",
      restaurant: "La Esquina Gourmet",
      location: "Caracas"
    },
    {
      quote: "La función de reserva de mesas ha simplificado enormemente nuestra operación diaria. Nuestros clientes adoran la facilidad para hacer pedidos por WhatsApp.",
      author: "Carlos Mendoza",
      restaurant: "Sabores del Mar",
      location: "Maracaibo"
    },
    {
      quote: "El sistema de delivery integrado nos ha permitido expandir nuestro negocio y llegar a más clientes sin necesidad de depender de aplicaciones que cobran altas comisiones.",
      author: "Ana Gómez",
      restaurant: "Pasta Fresca",
      location: "Valencia"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">WaLinz para Restaurantes</h1>
            <p className="text-xl text-gray-600 mb-8">Optimiza la gestión de tu restaurante con nuestra solución integral de WhatsApp Business</p>
            <Link href="/contacto" className="inline-block">
              <Button size="lg" className="bg-[hsl(var(--walinz-primary))] text-white hover:bg-[hsl(var(--walinz-primary-dark))]">
                Comienza Ahora
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.restaurant}</p>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu restaurante?</h2>
            <p className="text-xl text-gray-600 mb-8">Únete a los cientos de restaurantes que ya confían en WaLinz</p>
            <Link href="/contacto" className="inline-block">
              <Button size="lg" className="bg-[hsl(var(--walinz-primary))] text-white hover:bg-[hsl(var(--walinz-primary-dark))]">
                Solicita una Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}