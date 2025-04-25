"use client";

import { motion } from "framer-motion";

export function EstadisticasEmpresa() {
  const stats = [
    { number: "500+", label: "Negocios activos" },
    { number: "15K", label: "Pedidos mensuales" },
    { number: "98%", label: "Satisfacción" },
    { number: "24/7", label: "Soporte técnico" },
  ];

  return (
    <section className="py-16 bg-[hsl(var(--walinz-gray))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[hsl(var(--walinz-primary))] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
