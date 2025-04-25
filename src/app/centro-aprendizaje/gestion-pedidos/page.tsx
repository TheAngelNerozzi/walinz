"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function GestionPedidosPage() {
  const lecciones = [
    {
      titulo: "Sistema de procesamiento de pedidos",
      contenido: [
        {
          subtitulo: "Configuración del sistema",
          descripcion: "Aprende a configurar un sistema eficiente para procesar pedidos a través de WhatsApp.",
          pasos: [
            "Establece un flujo de trabajo claro",
            "Configura plantillas de mensajes",
            "Define estados de pedidos",
            "Implementa sistema de numeración"
          ]
        },
        {
          subtitulo: "Gestión de pedidos entrantes",
          descripcion: "Maneja eficientemente los pedidos que llegan a través de WhatsApp.",
          pasos: [
            "Confirma recepción inmediatamente",
            "Verifica disponibilidad de productos",
            "Calcula costos totales",
            "Envía resumen del pedido"
          ]
        }
      ]
    },
    {
      titulo: "Automatización de respuestas",
      contenido: [
        {
          subtitulo: "Configuración de respuestas automáticas",
          descripcion: "Implementa un sistema de respuestas automáticas para mejorar la eficiencia.",
          pasos: [
            "Identifica preguntas frecuentes",
            "Crea mensajes predefinidos",
            "Configura palabras clave",
            "Establece horarios de activación"
          ]
        },
        {
          subtitulo: "Personalización de mensajes",
          descripcion: "Aprende a personalizar mensajes automáticos para mantener un tono humano.",
          pasos: [
            "Usa variables dinámicas",
            "Adapta el tono de comunicación",
            "Incluye información relevante",
            "Mantén opciones de contacto humano"
          ]
        }
      ]
    },
    {
      titulo: "Seguimiento de envíos",
      contenido: [
        {
          subtitulo: "Sistema de tracking",
          descripcion: "Implementa un sistema efectivo para el seguimiento de envíos.",
          pasos: [
            "Genera códigos de seguimiento",
            "Integra servicios de mensajería",
            "Automatiza actualizaciones",
            "Comunica estados del envío"
          ]
        },
        {
          subtitulo: "Comunicación con el cliente",
          descripcion: "Mantén informados a tus clientes sobre el estado de sus envíos.",
          pasos: [
            "Envía confirmaciones automáticas",
            "Proporciona enlaces de seguimiento",
            "Notifica sobre cambios de estado",
            "Solicita confirmación de recepción"
          ]
        }
      ]
    },
    {
      titulo: "Gestión de inventario",
      contenido: [
        {
          subtitulo: "Control de stock",
          descripcion: "Mantén un control efectivo de tu inventario para evitar problemas con los pedidos.",
          pasos: [
            "Implementa sistema de conteo",
            "Establece alertas de stock bajo",
            "Actualiza disponibilidad",
            "Sincroniza múltiples canales"
          ]
        },
        {
          subtitulo: "Optimización de inventario",
          descripcion: "Aprende a optimizar tu inventario para maximizar ventas y minimizar costos.",
          pasos: [
            "Analiza patrones de demanda",
            "Establece stock mínimo",
            "Implementa sistema FIFO",
            "Realiza inventarios periódicos"
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

          <h1 className="text-4xl font-bold mb-6">Gestión de Pedidos en WhatsApp</h1>
          <p className="text-lg text-gray-600 mb-8">
            Optimiza tu proceso de gestión de pedidos y mejora la satisfacción del cliente
            con nuestras estrategias probadas.
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
              ¿Listo para aprender sobre marketing digital?
            </p>
            <Link href="/centro-aprendizaje/marketing-digital" passHref>
              <Button className="bg-black text-white hover:bg-gray-800">
                Continuar con Marketing Digital
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}