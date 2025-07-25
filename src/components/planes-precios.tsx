"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PlanesPrecios() {
  const [billingType, setBillingType] = useState<"annual" | "monthly">("annual");

  const plans = [
    {
      name: "Básico",
      description: "Para emprendedores individuales",
      price: billingType === "annual" ? (25 * 10 / 12).toFixed(2) : "25",
      yearlyPrice: billingType === "annual" ? (25 * 10).toString() : (25 * 12).toString(),
      features: [
        "Dominio gratis",
        "Sin comisiones por venta",
        "Sube hasta 100 productos",
        "Pedidos ilimitados por WhatsApp",
        "Remueve el logo de WaLinz App",
        "+$10 Por Anexar 100 productos más",
      ],
      buttonText: "Comienza ahora",
      buttonLink: "/contacto",
      buttonVariant: "outline" as const,
      badge: "Dominio gratis",
    },
    {
      name: "Premium",
      description: "Para equipos pequeños",
      price: billingType === "annual" ? (40 * 10 / 12).toFixed(2) : "40",
      yearlyPrice: billingType === "annual" ? (40 * 10).toString() : (40 * 12).toString(),
      features: [
        "Todo en Basic, además:",
        "Dominio gratis",
        "Sin comisiones por venta",
        "Sube hasta 200 productos",
        "Soporte de chat en vivo",
        "+$10 Por Anexar 100 productos más",
      ],
      buttonText: `Comienza ahora`,
      buttonLink: "/contacto",
      buttonVariant: "default" as const,
      highlight: true,
      badge: "Dominio gratis",
    },
    {
      name: "Business",
      description: "A medida que tu negocio escala",
      price: billingType === "annual" ? (99 * 10 / 12).toFixed(2) : "99",
      yearlyPrice: billingType === "annual" ? (99 * 10).toString() : (99 * 12).toString(),
      features: [
        "Hasta 2,000 productos",
        "Sin comisiones por venta",
        "Atención al cliente personalizada vía WhatsApp",
        "Características de todos los demás planes",
        "+$10 Por Anexar 100 productos más",
      ],
      buttonText: `Comienza ahora`,
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
                    <span className="text-gray-500 ml-2">USD/mes</span>
                </div>
                {billingType === "annual" && (
                  <div className="text-sm text-gray-500 mt-1">${plan.yearlyPrice} / año</div>
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
                  href={`https://wa.me/14424474116?text=${encodeURIComponent(
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
