"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SoftwareEmpresarial() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Software Empresarial Todo-en-Uno
            </h2>
            <div className="bg-[hsl(var(--walinz-primary))] text-white text-sm px-3 py-1 rounded-full">
              Próximamente
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mejora tu productividad usando nuestro software ERP enfocado en WhatsApp para pequeñas empresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <FeatureCard
            title="CRM"
            description="Aumenta tus ventas con una mejor Gestión de Relaciones con Clientes."
            image={
              <div className="relative p-4 bg-[hsl(var(--walinz-gray-light))] rounded-lg">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs ml-auto">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-[hsl(var(--walinz-primary))] text-white flex items-center justify-center text-xs font-bold">
                        WL
                      </div>
                      <div>
                        <p className="text-sm font-medium">WaLinz CRM</p>
                        <p className="text-xs text-gray-500">Hoy 10:45 AM</p>
                      </div>
                    </div>
                    <p className="text-sm">¡Feliz cumpleaños! 🎉 Mira esta oferta exclusiva solo para ti.</p>
                  </div>
                  <div className="bg-[hsl(var(--walinz-primary-light))] p-3 rounded-lg shadow-sm max-w-xs">
                    <p className="text-sm">¡Gracias!</p>
                  </div>
                </div>
              </div>
            }
          />

          <FeatureCard
            title="Inventario"
            description="Gestiona tu inventario en línea y evita la sobreventa o las faltas de stock."
            image={
              <div className="relative p-4 bg-[hsl(var(--walinz-gray-light))] rounded-lg overflow-hidden">
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <h4 className="text-sm font-medium mb-3">Gestión de Inventario</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-sm border-b pb-2">
                      <span className="font-medium">Producto</span>
                      <span className="font-medium">Inventario</span>
                    </div>
                    <InventoryItem name="Camisa Algodón" stock={15} />
                    <InventoryItem name="Pantalón de Mezclilla" stock={8} />
                    <InventoryItem name="Vestido Floral" stock={12} />
                    <InventoryItem name="Bufanda de Lana" stock={3} warning />
                    <InventoryItem name="Gorra Deportiva" stock={20} />
                  </div>
                </div>
              </div>
            }
          />

          <FeatureCard
            title="Venta al por mayor"
            description="Aumenta tus ventas con precios personalizados para tus clientes mayoristas."
            image={
              <div className="relative p-4 bg-[hsl(var(--walinz-gray-light))] rounded-lg">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-sm p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-md" />
                      <div>
                        <p className="text-sm font-medium">Teléfono Modelo X</p>
                        <p className="text-xs text-gray-500">Cliente regular</p>
                        <p className="text-sm font-bold text-[hsl(var(--walinz-primary))]">$599.99</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-md" />
                      <div>
                        <p className="text-sm font-medium">Teléfono Modelo X</p>
                        <p className="text-xs text-gray-500">Cliente Mayorista</p>
                        <div className="flex items-center">
                          <p className="text-sm font-bold text-[hsl(var(--walinz-primary))]">$499.99</p>
                          <p className="text-xs text-gray-500 line-through ml-2">$599.99</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />

          <FeatureCard
            title="Analíticas"
            description="Visualiza el rendimiento de tu negocio con nuestras herramientas de análisis de datos."
            image={
              <div className="relative p-4 bg-[hsl(var(--walinz-gray-light))] rounded-lg overflow-hidden">
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <h4 className="text-sm font-medium mb-3">Ventas Mensuales</h4>
                  <div className="h-40 flex items-end space-x-2">
                    <BarChart value={65} label="Ene" />
                    <BarChart value={48} label="Feb" />
                    <BarChart value={72} label="Mar" />
                    <BarChart value={93} label="Abr" />
                    <BarChart value={85} label="May" />
                    <BarChart value={110} label="Jun" highlight />
                  </div>
                </div>
              </div>
            }
          />
        </div>

        <div className="text-center">
          <Link href="/productos/software-empresarial" passHref>
            <Button className="bg-black text-white hover:bg-gray-800">
              Explorar todas las funciones
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
      <div className="h-64">{image}</div>
    </div>
  );
}

function InventoryItem({ name, stock, warning = false }: { name: string; stock: number; warning?: boolean }) {
  return (
    <div className="flex justify-between items-center text-sm py-2">
      <span>{name}</span>
      <span className={`font-medium ${warning ? 'text-amber-500' : ''}`}>{stock}</span>
    </div>
  );
}

function BarChart({ value, label, highlight = false }: { value: number; label: string; highlight?: boolean }) {
  const height = value / 1.1;
  return (
    <div className="flex flex-col items-center flex-1">
      <div
        className={`w-full rounded-t ${
          highlight
            ? 'bg-[hsl(var(--walinz-primary))]'
            : 'bg-gray-300'
        }`}
        style={{ height: `${height}px` }}
      />
      <span className="text-xs mt-1">{label}</span>
    </div>
  );
}
