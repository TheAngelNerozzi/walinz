"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [paymentType, setPaymentType] = useState<"annual" | "monthly">("annual");

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 md:pr-8">
            <div className="text-sm inline-flex items-center bg-white px-3 py-1 rounded-full border border-gray-200 mb-4">
              <span className="font-medium text-[hsl(var(--walinz-primary))]">Socio Oficial</span>
              <Image
                src="/whatsapp-icon.svg"
                alt="WhatsApp Icon"
                width={18}
                height={18}
                className="ml-2"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              Crea Ecommerce para WhatsApp
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Simplifica tus pedidos por WhatsApp. Aumenta tus ventas con un mejor servicio al cliente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="https://wa.me/14424474116?text=Quiero%20comenzar%20a%20usar%20WaLinz%20App!" passHref>
                <Button className="w-full sm:w-auto bg-black text-white hover:bg-gray-800 h-12 px-8 rounded-md">
                  Comienza ahora
                </Button>
              </Link>
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500 mr-1"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">5.0</span>
                </div>
                <span className="mx-3 text-gray-400">|</span>
                <div className="flex items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500 mr-1"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">4.9</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative h-[500px] w-full overflow-hidden">
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-[280px] mx-auto">
                <div className="relative h-[452px] overflow-hidden">
                  <div className="animate-slide-loop">
                    {/* Tienda Online */}
                    <div className="h-[452px]">
                      <Image
                        src="/online-store.svg"
                        alt="Tienda Online"
                        width={260}
                        height={480}
                        className="rounded-lg"
                      />
                    </div>
                    
                    {/* Formulario de Pedido */}
                    <div className="h-[452px]">
                      <Image
                        src="/order-form.svg"
                        alt="Formulario de Pedido"
                        width={260}
                        height={480}
                        className="rounded-lg"
                      />
                    </div>
                    
                    {/* Conversación WhatsApp */}
                    <div className="h-[452px]">
                      <Image
                        src="/whatsapp-chat.svg"
                        alt="Conversación WhatsApp"
                        width={260}
                        height={480}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
