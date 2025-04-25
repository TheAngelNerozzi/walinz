"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function SimplificaPedidos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simplifica tus pedidos por WhatsApp
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Formulario de pedidos */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Formulario de pedidos por WhatsApp</h3>
              <p className="text-gray-600 mb-6">
                Los clientes realizan pedidos de manera independiente a través de WhatsApp, especificando sus elecciones y horarios, lo cual minimiza las consultas repetitivas.
              </p>
              <Link href="/productos/formulario-pedidos" className="text-[hsl(var(--walinz-primary))] font-medium flex items-center">
                Más información
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-64 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-[240px] h-full max-h-64 border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-[hsl(var(--walinz-gray-light))] p-3">
                    <div className="flex flex-col space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 rounded-full bg-[hsl(var(--walinz-primary))] text-white flex items-center justify-center text-xs font-bold">VG</div>
                          <span className="font-medium text-sm">Veggie Garden</span>
                        </div>
                        <div className="text-xs text-gray-500">12:35</div>
                      </div>
                      <div className="bg-white p-2 rounded-lg text-sm">
                        <div className="font-semibold">Nuevo Pedido #124</div>
                        <div className="text-gray-700 mt-1">
                          - 1 Ensalada César <span className="text-[hsl(var(--walinz-primary))]">$12.50</span><br />
                          - 2 Smoothies de fresa <span className="text-[hsl(var(--walinz-primary))]">$16.00</span><br />
                          - 1 Wrap vegano <span className="text-[hsl(var(--walinz-primary))]">$9.99</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-gray-200 flex justify-between">
                          <span>Total:</span>
                          <span className="font-bold text-[hsl(var(--walinz-primary))]">$38.49</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gestión de Pedidos */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Gestión de Pedidos en Línea</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-[hsl(var(--walinz-primary))]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-700">Seguir el estado del pedido</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-[hsl(var(--walinz-primary))]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-700">Resumen del pedido</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-[hsl(var(--walinz-primary))]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-700">Enlace de factura</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-[hsl(var(--walinz-primary))]"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-gray-700">Notificaciones de pedido</span>
                </li>
              </ul>
            </div>
            <div className="relative h-64 bg-gray-100">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[280px] h-full max-h-64 overflow-hidden">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-[hsl(var(--walinz-primary))] text-white flex items-center justify-center font-bold">
                          #
                        </div>
                        <div className="ml-3">
                          <div className="font-bold text-sm">Pedido #124</div>
                          <div className="text-xs text-gray-500">12 abr 2025 • 12:35</div>
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Completado
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Estado:</span>
                        <span className="font-medium text-green-600">Entregado</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Pago:</span>
                        <span className="font-medium text-green-600">Completado</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Método:</span>
                        <span className="font-medium">Pago Móvil</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-bold">$38.49</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Métodos de Pago */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Métodos de Pago Locales</h3>
              <p className="text-gray-600 mb-6">
                Acepta pagos con métodos locales de Venezuela como Pago Móvil y criptomonedas como USDT, BTC y ETH, además de tarjetas de crédito/débito y pago contra entrega.
              </p>
              <Link href="/productos/metodos-pago" className="text-[hsl(var(--walinz-primary))] font-medium flex items-center">
                Más información
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="relative h-64 bg-gray-100 flex items-center justify-center">
              <div className="grid grid-cols-4 gap-2 p-4">
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-blue-600">PM</span>
                  </div>
                  <span className="text-xs text-center">Pago Móvil</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-teal-600">₮</span>
                  </div>
                  <span className="text-xs text-center">USDT</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-orange-600">₿</span>
                  </div>
                  <span className="text-xs text-center">BTC</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-purple-600">Ξ</span>
                  </div>
                  <span className="text-xs text-center">ETH</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-red-600">V</span>
                  </div>
                  <span className="text-xs text-center">Visa</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-yellow-600">MC</span>
                  </div>
                  <span className="text-xs text-center">Mastercard</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-green-600">$</span>
                  </div>
                  <span className="text-xs text-center">Efectivo</span>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                    <span className="text-xs font-bold text-gray-600">+</span>
                  </div>
                  <span className="text-xs text-center">Más</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
