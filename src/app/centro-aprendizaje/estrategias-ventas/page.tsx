"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function EstrategiasVentasPage() {
  const lecciones = [
    {
      titulo: "Creación de mensajes persuasivos",
      contenido: [
        {
          subtitulo: "Estructura de mensajes efectivos",
          descripcion: "Aprende a crear mensajes que capturen la atención y generen respuestas positivas.",
          pasos: [
            "Identifica el objetivo del mensaje",
            "Personaliza el saludo",
            "Presenta el valor principal",
            "Incluye llamada a la acción clara"
          ]
        },
        {
          subtitulo: "Técnicas de copywriting",
          descripcion: "Domina las técnicas de escritura persuasiva para WhatsApp Business.",
          pasos: [
            "Utiliza el lenguaje del cliente",
            "Destaca beneficios clave",
            "Crea urgencia y escasez",
            "Incluye prueba social"
          ]
        }
      ]
    },
    {
      titulo: "Gestión de catálogo de productos",
      contenido: [
        {
          subtitulo: "Organización del catálogo",
          descripcion: "Aprende a estructurar y presentar tu catálogo de productos de manera efectiva.",
          pasos: [
            "Categoriza tus productos",
            "Optimiza las imágenes",
            "Escribe descripciones atractivas",
            "Mantén precios actualizados"
          ]
        },
        {
          subtitulo: "Promoción de productos",
          descripcion: "Estrategias para promocionar productos específicos en WhatsApp.",
          pasos: [
            "Crea ofertas especiales",
            "Utiliza estados de WhatsApp",
            "Implementa cross-selling",
            "Programa promociones estacionales"
          ]
        }
      ]
    },
    {
      titulo: "Técnicas de seguimiento",
      contenido: [
        {
          subtitulo: "Gestión de leads",
          descripcion: "Aprende a dar seguimiento efectivo a tus prospectos.",
          pasos: [
            "Establece un sistema de priorización",
            "Crea recordatorios de seguimiento",
            "Personaliza mensajes de seguimiento",
            "Mide tasas de conversión"
          ]
        },
        {
          subtitulo: "Reactivación de clientes",
          descripcion: "Estrategias para recuperar clientes inactivos.",
          pasos: [
            "Identifica clientes inactivos",
            "Crea mensajes de reactivación",
            "Ofrece incentivos especiales",
            "Establece comunicación regular"
          ]
        }
      ]
    },
    {
      titulo: "Cierre de ventas efectivo",
      contenido: [
        {
          subtitulo: "Técnicas de cierre",
          descripcion: "Domina las técnicas más efectivas para cerrar ventas por WhatsApp.",
          pasos: [
            "Identifica señales de compra",
            "Maneja objeciones comunes",
            "Utiliza preguntas de cierre",
            "Confirma detalles de la venta"
          ]
        },
        {
          subtitulo: "Seguimiento post-venta",
          descripcion: "Aprende a mantener relaciones duraderas con tus clientes.",
          pasos: [
            "Confirma la satisfacción",
            "Solicita testimonios",
            "Ofrece soporte continuo",
            "Implementa programa de fidelización"
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

          <h1 className="text-4xl font-bold mb-6">Estrategias de Ventas en WhatsApp</h1>
          <p className="text-lg text-gray-600 mb-8">
            Descubre técnicas probadas para aumentar tus ventas y mejorar tu tasa de conversión
            a través de WhatsApp Business.
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
              ¿Listo para aprender sobre gestión de pedidos?
            </p>
            <Link href="/centro-aprendizaje/gestion-pedidos" passHref>
              <Button className="bg-black text-white hover:bg-gray-800">
                Continuar con Gestión de Pedidos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}