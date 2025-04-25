"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SitioWeb() {
  return (
    <section className="py-20 bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crea tu sitio web en minutos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Diseña y personaliza tu sitio web profesional sin necesidad de conocimientos técnicos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Tabs defaultValue="catalogo" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="catalogo">Catálogo</TabsTrigger>
                <TabsTrigger value="dominio">Dominio</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
              </TabsList>
              <TabsContent value="catalogo" className="space-y-4">
                <h3 className="text-2xl font-bold">Hermosos catálogos de productos</h3>
                <p className="text-gray-600">
                  Presenta tus productos con imágenes atractivas, descripciones detalladas y opciones personalizables para que tus clientes encuentren exactamente lo que buscan.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[hsl(var(--walinz-primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Organiza productos por categorías</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[hsl(var(--walinz-primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Añade variantes y opciones personalizables</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[hsl(var(--walinz-primary))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Sincronización con inventario en tiempo real</span>
                  </li>
                </ul>
              </TabsContent>

              <TabsContent value="dominio" className="space-y-4">
                <h3 className="text-2xl font-bold">Dominio propio</h3>
                <p className="text-gray-600">
                  Conecta tu propio dominio o usa uno proporcionado por WaLinz para darle una identidad profesional a tu negocio online.
                </p>
                <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <div className="flex-1 h-6 bg-gray-100 rounded-md ml-2 flex items-center px-2">
                      <span className="text-xs text-gray-500">https://</span>
                      <span className="text-xs font-medium">tutienda</span>
                      <span className="text-xs text-[hsl(var(--walinz-primary))]">.walinz.com</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Obtén tu dominio personalizado o conecta uno existente</p>
                </div>
              </TabsContent>

              <TabsContent value="seo" className="space-y-4">
                <h3 className="text-2xl font-bold">Optimización para Motores de Búsqueda (SEO)</h3>
                <p className="text-gray-600">
                  Haz que tu negocio sea más visible en línea con nuestras herramientas de SEO integradas que mejoran tu posicionamiento en Google y otros motores de búsqueda.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-sm mb-1">Meta descripciones</h4>
                    <p className="text-xs text-gray-600">Personaliza cómo aparece tu sitio en resultados de búsqueda</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-sm mb-1">URLs amigables</h4>
                    <p className="text-xs text-gray-600">URLs optimizadas para mejorar el posicionamiento</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-sm mb-1">Analíticas integradas</h4>
                    <p className="text-xs text-gray-600">Mide el rendimiento de tu sitio y tráfico</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-sm mb-1">Optimización móvil</h4>
                    <p className="text-xs text-gray-600">Diseño responsive para todos los dispositivos</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-8">
              <Link href="/productos/sitio-web" passHref>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Crear mi sitio web
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] rounded-xl overflow-hidden border border-gray-200 bg-white shadow-lg">
            <div className="absolute top-0 left-0 w-full h-12 bg-gray-100 flex items-center px-4 border-b">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 h-6 bg-white rounded-md mx-4 flex items-center px-3">
                <span className="text-xs text-gray-500">restaurantevegano.walinz.com</span>
              </div>
            </div>

            <div className="absolute top-12 left-0 w-full h-[calc(100%-48px)] overflow-y-auto">
              <div className="relative h-64 bg-[hsl(var(--walinz-primary-light))]">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">Veggie Garden</h3>
                    <p className="text-lg">Comida orgánica y deliciosa</p>
                    <Button className="mt-4 bg-white text-[hsl(var(--walinz-primary))] hover:bg-gray-100">
                      Ver menú
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-xl font-bold mb-4">Nuestros productos destacados</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <div className="h-24 bg-gray-200" />
                    <div className="p-3">
                      <h5 className="font-semibold text-sm">Ensalada Mediterránea</h5>
                      <p className="text-xs text-gray-500">Mezcla fresca de vegetales</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="font-bold text-[hsl(var(--walinz-primary))]">$12.99</span>
                        <button className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
                    <div className="h-24 bg-gray-200" />
                    <div className="p-3">
                      <h5 className="font-semibold text-sm">Bowl de Quinoa</h5>
                      <p className="text-xs text-gray-500">Con vegetales y aderezo</p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="font-bold text-[hsl(var(--walinz-primary))]">$15.99</span>
                        <button className="text-xs bg-gray-100 px-2 py-1 rounded">
                          Agregar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold mb-4">Visítanos</h4>
                  <div className="h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-sm text-gray-500">Mapa de ubicación</span>
                  </div>
                  <div className="mt-4 text-sm">
                    <p className="mb-1"><strong>Dirección:</strong> Av. Los Palos Grandes 125, Caracas</p>
                    <p className="mb-1"><strong>Horario:</strong> Lun-Sáb 9am-9pm / Dom 10am-6pm</p>
                    <p><strong>Teléfono:</strong> (0212) 555-1234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
