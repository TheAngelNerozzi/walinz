"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PlanesPrecios() {
  const [billingType, setBillingType] = useState<"annual" | "monthly">("annual");

  const plans = [
    {
      name: "Starter",
      description: "Para emprendedores individuales",
      price: billingType === "annual" ? (49 * 10).toString() : "49",
      features: [
        "Dominio gratis",
        "Sube hasta 50 productos",
        "Pedidos ilimitados por WhatsApp",
        "Con el logo de WaLinz App",
        "Soporte de chat en vivo VIP por WhatsApp +$29/mes",
        "+$15/mes por anexar 100 productos más",
      ],
      buttonText: "Comienza ahora",
      buttonLink: "/contacto",
      buttonVariant: "outline" as const,
      badge: "Dominio gratis",
    },
    {
      name: "Business",
      description: "Para equipos pequeños",
      price: billingType === "annual" ? (149 * 10).toString() : "149",
      features: [
        "Todo en Starter, además:",
        "Dominio gratis",
        "Sube hasta 200 productos",
        "Remueve el WaLinz App",
        "Soporte de chat en vivo VIP por WhatsApp +$29/mes",
        "+$15/mes por anexar 100 productos más",
      ],
      buttonText: `Comienza ahora`,
      buttonLink: "/contacto",
      buttonVariant: "default" as const,
      highlight: true,
      badge: "Dominio gratis",
    },
    {
      name: "Enterprise",
      description: "A medida que tu negocio escala",
      price: "Custom",
      customPricing: true,
      features: [
        "Incluye lo de los demás planes",
        "Productos ilimitados + features premium",
      ],
      buttonText: "Contáctanos",
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
              Paga anualmente y obtén 2 meses gratis
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
          {plans.map((plan, index) => {
            const message = plan.customPricing ? `¡Hola! Me interesa el plan ${plan.name} de WaLinz. ¿Podrían darme más información sobre precios personalizados?` : `¡Hola! Me interesa el plan ${plan.name} de WaLinz. ${plan.price}$/${billingType === "annual" ? 'año' : 'mes'}. ¿Podrían darme más información?`;
            return (
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
                  {plan.customPricing ? (
                    <div className="mb-6">
                      <span className="text-4xl font-bold">Custom</span>
                      <p className="text-gray-500 text-sm mt-1">Contáctanos para precios</p>
                    </div>
                  ) : (
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-gray-500 ml-2">{billingType === "annual" ? "USD/año" : "USD/mes"}</span>
                      </div>
                    </div>
                  )}

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
                        {i === 0 ? (
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
                    href={`https://wa.me/14424474116?text=${encodeURIComponent(message)}`}
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
            );
          })}
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
