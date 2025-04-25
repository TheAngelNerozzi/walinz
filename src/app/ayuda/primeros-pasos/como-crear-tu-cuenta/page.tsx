import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComoCrearCuentaPage() {
  const pasos = [
    {
      titulo: "Registro inicial",
      descripcion: "El primer paso para comenzar con WaLinz",
      instrucciones: [
        "Visita la página principal de WaLinz",
        "Haz clic en el botón 'Comenzar gratis'",
        "Ingresa tu correo electrónico",
        "Crea una contraseña segura",
        "Verifica tu correo electrónico"
      ],
      consejos: "Asegúrate de usar un correo electrónico que consultes regularmente, ya que será tu principal medio de comunicación."
    },
    {
      titulo: "Información del negocio",
      descripcion: "Configura los detalles básicos de tu negocio",
      instrucciones: [
        "Ingresa el nombre de tu negocio",
        "Selecciona tu industria",
        "Añade una descripción breve",
        "Sube tu logo (opcional)",
        "Configura tu zona horaria"
      ],
      consejos: "Elige un nombre de negocio que sea fácil de recordar y represente bien tu marca."
    },
    {
      titulo: "Personalización del perfil",
      descripcion: "Haz que tu perfil destaque",
      instrucciones: [
        "Personaliza los colores de tu marca",
        "Configura tu dirección física",
        "Añade información de contacto adicional",
        "Establece tus horarios de atención",
        "Configura tus preferencias de notificación"
      ],
      consejos: "Mantén tu información actualizada y asegúrate de que todos los datos sean precisos."
    }
  ];

  return (
    <main className="min-h-screen bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/ayuda" className="text-[hsl(var(--walinz-primary))] hover:underline mb-8 inline-block">
            ← Volver al Centro de Ayuda
          </Link>

          <h1 className="text-4xl font-bold mb-6">Cómo crear tu cuenta en WaLinz</h1>
          <p className="text-lg text-gray-600 mb-8">
            Sigue esta guía paso a paso para configurar tu cuenta en WaLinz y comenzar a potenciar
            tu negocio con WhatsApp Business.
          </p>

          <div className="space-y-8">
            {pasos.map((paso, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-[hsl(var(--walinz-primary))] text-white flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <h2 className="text-2xl font-bold">{paso.titulo}</h2>
                </div>

                <p className="text-gray-600 mb-6">{paso.descripcion}</p>

                <div className="bg-[hsl(var(--walinz-gray-light))] rounded-lg p-6 mb-6">
                  <h3 className="font-medium mb-4">Instrucciones:</h3>
                  <ul className="space-y-3">
                    {paso.instrucciones.map((instruccion, idx) => (
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
                        {paso.consejos}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda adicional?</h2>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte con el proceso de registro
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