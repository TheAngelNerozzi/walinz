"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PlanesPrecios() {
  const [billingType, setBillingType] = useState<"annual" | "monthly">("annual");

  const plans = [
    {
      name: "Básico",
      description: "Para aficionados",
      price: billingType === "annual" ? (10 * 0.75).toString() : "10",
      yearlyPrice: billingType === "annual" ? "90" : (10 * 12 * 0.75).toString(),
      features: [
        "Pedidos ilimitados por WhatsApp",
        "Sin comisiones",
        "Pagos manuales",
        "Sube hasta 20 imágenes",
        "Sin mensajes automáticos de WhatsApp",
      ],
      buttonText: "Comienza ahora",
      buttonLink: "/contacto",
      buttonVariant: "outline" as const,
    },
    {
      name: "Premium",
      description: "Para emprendedores independientes",
      price: billingType === "annual" ? (20 * 0.75).toString() : "20",
      yearlyPrice: billingType === "annual" ? "180" : (20 * 12 * 0.75).toString(),
      features: [
        "Todo en Basic, además:",
        "Imágenes ilimitadas",
        "Dominio y correo electrónico propios",
        "Pagos con Pago Móvil, USDT y más",
        "Comprobante de pago",
        "Analíticas",
        "Configuración de facturas y PDF",
        "Exportación/Importación de CSV",
        "Soporte de chat en vivo",
        "100 mensajes automáticos de WhatsApp/mes",
        "$0.05 por mensaje adicional",
      ],
      buttonText: `Obtén un 25% de dscto. el 1er año`,
      buttonLink: "/contacto",
      buttonVariant: "default" as const,
      highlight: true,
      badge: "Dominio gratis",
    },
    {
      name: "Business",
      description: "Para equipos",
      price: billingType === "annual" ? (40 * 0.75).toString() : "40",
      yearlyPrice: billingType === "annual" ? "360" : (40 * 12 * 0.75).toString(),
      features: [
        "Todo en Premium, además:",
        "Eliminación del logo de WaLinz",
        "Flujo de trabajo y catálogo de WhatsApp",
        "Acceso exclusivo para miembros",
        "5 tiendas",
        "Recompensas de membresía",
        "Precios al por mayor",
        "Webhooks",
        "Integración de aplicaciones externas",
        "Soporte prioritario de cuenta",
        "500 mensajes automáticos de WhatsApp/mes",
        "$0.05 por mensaje adicional",
      ],
      buttonText: `Obtén un 25% de dsct. el 1er año`,
      buttonLink: "/contacto",
      buttonVariant: "default" as const,
      badge: "Dominio gratis",
    },
  ];

  return (
    <section className="py-20 bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Elige un plan que funcione para ti
          </h2>
          <div className="inline-flex items-center rounded-full bg-[hsl(var(--walinz-gray))] p-1 mt-4">
            <button
              onClick={() => setBillingType("annual")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingType === "annual"
                  ? "bg-white shadow-sm text-gray-800"
                  : "text-gray-600"
              }`}
            >
              Paga anualmente (Ahorra 25%)
            </button>
            <button
              onClick={() => setBillingType("monthly")}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                billingType === "monthly"
                  ? "bg-white shadow-sm text-gray-800"
                  : "text-gray-600"
              }`}
            >
              Paga mensualmente
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.highlight ? "ring-2 ring-[hsl(var(--walinz-primary))]" : ""
              }`}
            >
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-gray-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price !== "0" && (
                      <span className="text-gray-500 ml-2">USD/mes</span>
                    )}
                  </div>
                  {plan.yearlyPrice && billingType === "annual" && (
                    <div className="text-sm text-gray-500 mt-1">${plan.yearlyPrice} / año</div>
                  )}
                  {plan.price === "0" && (
                    <div className="text-sm text-gray-500 mt-1">Pedidos ilimitados por WhatsApp</div>
                  )}
                </div>

                {plan.badge && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[hsl(var(--walinz-primary-light))] text-[hsl(var(--walinz-primary))]">
                      {plan.badge}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Oferta limitada</p>
                  </div>
                )}

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={`${plan.name}-feature-${i}`} className="flex text-sm">
                      {i === 0 && plan.name !== "Básico" ? (
                        <span className="text-gray-700">{feature}</span>
                      ) : (
                        <>
                          <svg
                            className="h-5 w-5 text-[hsl(var(--walinz-primary))] mr-2 flex-shrink-0"
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
                          <span className="text-gray-700">{feature}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/584241874360?text=${encodeURIComponent(
                    `¡Hola! Me interesa el plan ${plan.name} de WaLinz. ${plan.price}$/mes. ¿Podrían darme más información?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className={`w-full ${
                      plan.buttonVariant === "default"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "border-gray-300"
                    }`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </a>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Cancela en cualquier momento
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">Sin riesgos, puedes cancelar en cualquier momento.</p>
          <Link href="/precios/compare-plans" passHref>
            <Button variant="link" className="text-[hsl(var(--walinz-primary))]">
              Compara Planes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
