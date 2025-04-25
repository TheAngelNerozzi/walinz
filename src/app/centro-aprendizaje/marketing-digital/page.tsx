"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function MarketingDigitalPage() {
  const lecciones = [
    {
      titulo: "Campañas de mensajería",
      contenido: [
        {
          subtitulo: "Planificación de campañas",
          descripcion: "Aprende a diseñar campañas efectivas de mensajería para WhatsApp Business.",
          pasos: [
            "Define objetivos claros",
            "Identifica tu audiencia objetivo",
            "Establece un calendario",
            "Prepara contenido relevante"
          ]
        },
        {
          subtitulo: "Implementación y seguimiento",
          descripcion: "Ejecuta y monitorea tus campañas de mensajería para maximizar resultados.",
          pasos: [
            "Configura listas de difusión",
            "Programa envíos estratégicos",
            "Monitorea tasas de respuesta",
            "Ajusta según resultados"
          ]
        }
      ]
    },
    {
      titulo: "Segmentación de clientes",
      contenido: [
        {
          subtitulo: "Estrategias de segmentación",
          descripcion: "Aprende a dividir tu base de clientes para comunicaciones más efectivas.",
          pasos: [
            "Define criterios de segmentación",
            "Crea perfiles de cliente",
            "Organiza bases de datos",
            "Personaliza mensajes por segmento"
          ]
        },
        {
          subtitulo: "Gestión de bases de datos",
          descripcion: "Mantén una base de datos organizada y efectiva para tus campañas.",
          pasos: [
            "Implementa sistema de etiquetas",
            "Actualiza información regularmente",
            "Limpia datos obsoletos",
            "Mantén registros de interacciones"
          ]
        }
      ]
    },
    {
      titulo: "Análisis de métricas",
      contenido: [
        {
          subtitulo: "Métricas clave",
          descripcion: "Identifica y analiza las métricas más importantes para tu negocio.",
          pasos: [
            "Define KPIs relevantes",
            "Configura seguimiento",
            "Analiza tendencias",
            "Genera reportes periódicos"
          ]
        },
        {
          subtitulo: "Interpretación de datos",
          descripcion: "Aprende a interpretar datos para tomar decisiones informadas.",
          pasos: [
            "Identifica patrones",
            "Evalúa efectividad",
            "Compara resultados",
            "Ajusta estrategias"
          ]
        }
      ]
    },
    {
      titulo: "Optimización de conversiones",
      contenido: [
        {
          subtitulo: "Técnicas de optimización",
          descripcion: "Mejora tus tasas de conversión con estrategias probadas.",
          pasos: [
            "Identifica puntos de fricción",
            "Prueba diferentes mensajes",
            "Optimiza llamados a la acción",
            "Implementa mejores prácticas"
          ]
        },
        {
          subtitulo: "Pruebas A/B",
          descripcion: "Realiza pruebas efectivas para mejorar tus resultados.",
          pasos: [
            "Define variables a probar",
            "Crea versiones alternativas",
            "Mide resultados",
            "Implementa ganadores"
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

          <h1 className="text-4xl font-bold mb-6">Marketing Digital en WhatsApp</h1>
          <p className="text-lg text-gray-600 mb-8">
            Implementa estrategias efectivas de marketing digital para potenciar
            tu presencia en WhatsApp Business.
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
              ¡Has completado el módulo de Marketing Digital!
            </p>
            <Link href="/centro-aprendizaje" passHref>
              <Button className="bg-black text-white hover:bg-gray-800">
                Volver al Centro de Aprendizaje
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}