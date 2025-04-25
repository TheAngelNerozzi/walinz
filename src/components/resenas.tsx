"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Resenas() {
  const testimonialsData = [
    {
      name: "Alejandro Prieto",
      role: "Propietario",
      business: "Café Aroma",
      text: "WaLinz ha simplificado nuestro proceso de pedidos y ha mejorado significativamente la experiencia de nuestros clientes. El sistema de pago móvil es muy útil en Venezuela.",
      location: "Caracas, Venezuela",
    },
    {
      name: "María González",
      role: "Fundadora",
      business: "Eco Tienda Natural",
      text: "Gracias a WaLinz, nuestra tienda en línea ha crecido un 40%. La integración con criptomonedas nos ha facilitado enormemente las transacciones internacionales.",
      location: "Valencia, Venezuela",
    },
    {
      name: "Carlos Mendoza",
      role: "Gerente",
      business: "TechStore",
      text: "El sistema de inventario de WaLinz nos ayuda a mantener un control preciso de nuestros productos. La compatibilidad con USDT ha sido clave para nuestro negocio.",
      location: "Maracaibo, Venezuela",
    },
    {
      name: "Luisa Martínez",
      role: "CEO",
      business: "Moda Express",
      text: "Nuestra tienda de ropa ha aumentado sus ventas gracias a la facilidad de uso de WaLinz. Los clientes valoran poder pagar con diferentes métodos, especialmente con cripto.",
      location: "Barquisimeto, Venezuela",
    },
    {
      name: "Roberto Pérez",
      role: "Propietario",
      business: "Gourmet Delivery",
      text: "WaLinz ha transformado nuestro servicio de delivery. La gestión de pedidos es intuitiva y eficiente, y nuestros clientes están muy satisfechos con la experiencia.",
      location: "Mérida, Venezuela",
    },
    {
      name: "Ana Torres",
      role: "Directora",
      business: "BioBelleza",
      text: "Como tienda de productos naturales, necesitábamos una plataforma que reflejara nuestros valores. WaLinz no solo nos permite gestionar nuestro negocio sino también destacar nuestra marca.",
      location: "Puerto La Cruz, Venezuela",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nuestros clientes nos recomiendan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre por qué cientos de negocios confían en WaLinz para gestionar sus ventas en línea y mejorar su servicio al cliente.
          </p>
        </div>

        <div className="mt-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonialsData.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-[hsl(var(--walinz-primary-light))] fill-current"
                        >
                          <path d="M11.3 6.2H6.9C5.8 6.2 5 7 5 8.1V16.9C5 18 5.8 18.8 6.9 18.8H16.9C18 18.8 18.8 18 18.8 16.9V8.1C18.8 7 18 6.2 16.9 6.2H11.3Z" />
                        </svg>
                      </div>
                      <p className="text-gray-700 flex-grow mb-4">{testimonial.text}</p>
                      <div className="mt-auto">
                        <div className="border-t pt-4">
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.role} - {testimonial.business}</p>
                          <p className="text-sm text-[hsl(var(--walinz-primary))]">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static" />
              <CarouselNext className="static" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
