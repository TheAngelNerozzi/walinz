"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function IntroduccionPage() {
  const lecciones = [
    {
      titulo: "Configuración inicial de WhatsApp Business",
      contenido: [
        {
          subtitulo: "Descarga e instalación",
          descripcion: "Aprende a descargar e instalar WhatsApp Business en tu dispositivo móvil o computadora.",
          pasos: [
            "Visita la tienda de aplicaciones de tu dispositivo",
            "Busca 'WhatsApp Business'",
            "Descarga e instala la aplicación",
            "Verifica tu número de teléfono"
          ]
        },
        {
          subtitulo: "Configuración del perfil empresarial",
          descripcion: "Configura tu perfil empresarial para mostrar información importante de tu negocio.",
          pasos: [
            "Agrega el nombre de tu empresa",
            "Selecciona la categoría de negocio",
            "Añade descripción y horario de atención",
            "Incluye ubicación y enlaces importantes"
          ]
        }
      ]
    },
    {
      titulo: "Integración con WaLinz",
      contenido: [
        {
          subtitulo: "Conexión de WhatsApp Business con WaLinz",
          descripcion: "Aprende a vincular tu cuenta de WhatsApp Business con la plataforma WaLinz.",
          pasos: [
            "Inicia sesión en tu cuenta WaLinz",
            "Accede a la sección de integraciones",
            "Selecciona WhatsApp Business",
            "Sigue el proceso de vinculación"
          ]
        }
      ]
    },
    {
      titulo: "Mejores prácticas de uso",
      contenido: [
        {
          subtitulo: "Optimización de mensajes",
          descripcion: "Descubre cómo crear mensajes efectivos para tu audiencia.",
          pasos: [
            "Mantén un tono profesional y amigable",
            "Usa mensajes claros y concisos",
            "Incluye llamados a la acción",
            "Personaliza tus respuestas"
          ]
        },
        {
          subtitulo: "Gestión de tiempo",
          descripcion: "Aprende a gestionar eficientemente tu tiempo en WhatsApp Business.",
          pasos: [
            "Establece horarios de atención",
            "Utiliza respuestas rápidas",
            "Organiza tus chats por etiquetas",
            "Programa mensajes importantes"
          ]
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/centro-aprendizaje" className="text-[hsl(var(--walinz-primary))] hover:underline mb-8 inline-block">
            ← Volver al Centro de Aprendizaje
          </Link>

          <h1 className="text-4xl font-bold mb-6">Introducción a WhatsApp Business</h1>
          <p className="text-lg text-gray-600 mb-8">
            Aprende los conceptos fundamentales para comenzar a utilizar WhatsApp Business
            y maximizar su potencial para tu negocio.
          </p>

          <div className="space-y-12">
            {lecciones.map((leccion, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-6">{leccion.titulo}</h2>
                
                <div className="space-y-8">
                  {leccion.contenido.map((seccion, seccionIndex) => (
                    <div key={seccionIndex} className="border-l-4 border-[hsl(var(--walinz-primary))] pl-6">
                      <h3 className="text-xl font-semibold mb-3">{seccion.subtitulo}</h3>
                      <p className="text-gray-600 mb-4">{seccion.descripcion}</p>
                      
                      <div className="bg-[hsl(var(--walinz-gray-light))] rounded-lg p-4">
                        <h4 className="font-medium mb-3">Pasos a seguir:</h4>
                        <ul className="space-y-2">
                          {seccion.pasos.map((paso, pasoIndex) => (
                            <li key={pasoIndex} className="flex items-center text-sm text-gray-700">
                              <span className="w-6 h-6 rounded-full bg-[hsl(var(--walinz-primary))] text-white flex items-center justify-center text-xs mr-3">
                                {pasoIndex + 1}
                              </span>
                              {paso}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              ¿Listo para comenzar con el siguiente módulo?
            </p>
            <Link href="/centro-aprendizaje/estrategias-ventas" passHref>
              <Button className="bg-black text-white hover:bg-gray-800">
                Continuar con Estrategias de Ventas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}