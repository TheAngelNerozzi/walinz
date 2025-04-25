import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CursoPage() {
  const cursos = [
    {
      id: 1,
      title: "Primeros pasos con WaLinz",
      description: "Aprende los conceptos básicos para configurar tu tienda en WhatsApp.",
      duration: "30 minutos",
      level: "Principiante",
      modules: 5
    },
    {
      id: 2,
      title: "Optimización de ventas",
      description: "Estrategias avanzadas para aumentar tus conversiones y ventas.",
      duration: "45 minutos",
      level: "Intermedio",
      modules: 7
    },
    {
      id: 3,
      title: "Marketing en WhatsApp",
      description: "Aprende a promocionar tu negocio efectivamente usando WhatsApp Business.",
      duration: "60 minutos",
      level: "Avanzado",
      modules: 8
    },
    {
      id: 4,
      title: "Gestión de pedidos",
      description: "Mejores prácticas para manejar pedidos y mantener clientes satisfechos.",
      duration: "40 minutos",
      level: "Intermedio",
      modules: 6
    },
    {
      id: 5,
      title: "Análisis y métricas",
      description: "Interpreta tus datos para tomar mejores decisiones de negocio.",
      duration: "50 minutos",
      level: "Avanzado",
      modules: 7
    },
    {
      id: 6,
      title: "Automatización de respuestas",
      description: "Configura respuestas automáticas para mejorar la atención al cliente.",
      duration: "35 minutos",
      level: "Intermedio",
      modules: 5
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Academia WaLinz</h1>
            <p className="text-lg text-gray-600">
              Aprende a maximizar el potencial de tu negocio con nuestros cursos gratuitos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((curso) => (
              <Card key={curso.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-[hsl(var(--walinz-primary-light))] text-[hsl(var(--walinz-primary))]">
                      {curso.level}
                    </span>
                    <span className="text-sm text-gray-500">{curso.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{curso.title}</h3>
                  <p className="text-gray-600 mb-4">{curso.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">{curso.modules} módulos</span>
                    <Link href="https://wa.me/14424474116" passHref>
                      <Button className="bg-black text-white hover:bg-gray-800">
                        Comenzar curso
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda personalizada?</h2>
            <p className="text-gray-600 mb-6">
              Agenda una sesión uno a uno con nuestros expertos para resolver tus dudas
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Agendar consultoría
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}