"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--walinz-primary))] to-[hsl(var(--walinz-secondary))]">
                  WaLinz
                </span>
                <span className="ml-2 text-xs text-gray-500 hidden md:inline-block">Socio Oficial</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-700">
                  Productos
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/productos/formulario-pedidos" className="w-full">
                    Formulario de Pedidos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/productos/sitio-web" className="w-full">
                    Sitio Web
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/productos/software-empresarial" className="w-full">
                    Software Empresarial
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-gray-700">
                  Industrias
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 max-h-[80vh] overflow-y-auto">
                <div className="p-2">
                  <h4 className="mb-2 px-2 text-sm font-semibold">Comida y Bebidas</h4>
                  <DropdownMenuItem>
                    <Link href="/industrias/restaurantes" className="w-full">Restaurantes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/cafes" className="w-full">Cafés</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/comida-casera" className="w-full">Comida Casera</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/carniceria-verduleria" className="w-full">Carnicería y Verdulería</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/bares-hoteles" className="w-full">Bares y Hoteles</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/panaderia-pasteleria" className="w-full">Panadería y Pastelería</Link>
                  </DropdownMenuItem>
                </div>
                <div className="p-2 border-t">
                  <h4 className="mb-2 px-2 text-sm font-semibold">Servicios</h4>
                  <DropdownMenuItem>
                    <Link href="/industrias/salon-belleza" className="w-full">Salón de Belleza</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/servicios-impresion" className="w-full">Servicios de Impresión</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/turismo-viajes" className="w-full">Turismo y Viajes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/servicios-digitales" className="w-full">Servicios Digitales</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/servicios-profesionales" className="w-full">Servicios Profesionales</Link>
                  </DropdownMenuItem>
                </div>
                <div className="p-2 border-t">
                  <h4 className="mb-2 px-2 text-sm font-semibold">Comercio</h4>
                  <DropdownMenuItem>
                    <Link href="/industrias/ropa" className="w-full">Tiendas de Ropa</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/joyeria-accesorios" className="w-full">Joyería y Accesorios</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/farmacias" className="w-full">Farmacias</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/electronicos" className="w-full">Electrónicos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/industrias/mayoristas" className="w-full">Venta al por Mayor</Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/precios" passHref>
              <Button variant="ghost" className="text-gray-700">
                Precios
              </Button>
            </Link>


          </div>

          <div className="hidden md:flex md:items-center md:space-x-2">
            <Button asChild className="bg-[hsl(var(--walinz-primary))] hover:bg-[hsl(var(--walinz-primary-hover))]">
              <Link href="https://wa.me/14424474116?text=Quiero%20comenzar%20a%20usar%20WaLinz%20App!">Comenzar Gratis</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <div className="px-3 py-2 text-gray-700 font-medium">Productos</div>
            <Link href="/productos/formulario-pedidos" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                Formulario de Pedidos
              </Button>
            </Link>
            <Link href="/productos/sitio-web" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                Sitio Web
              </Button>
            </Link>
            <Link href="/productos/software-empresarial" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                Software Empresarial
              </Button>
            </Link>

            <div className="px-3 py-2 text-gray-700 font-medium">Comida y Bebidas</div>
            <Link href="/industrias/restaurantes" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Restaurantes</Button>
            </Link>
            <Link href="/industrias/cafes" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Cafés</Button>
            </Link>
            <Link href="/industrias/comida-casera" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Comida Casera</Button>
            </Link>
            <Link href="/industrias/carniceria-verduleria" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Carnicería y Verdulería</Button>
            </Link>
            <Link href="/industrias/bares-hoteles" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Bares y Hoteles</Button>
            </Link>
            <Link href="/industrias/panaderia-pasteleria" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Panadería y Pastelería</Button>
            </Link>

            <div className="px-3 py-2 text-gray-700 font-medium">Servicios</div>
            <Link href="/industrias/salon-belleza" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Salón de Belleza</Button>
            </Link>
            <Link href="/industrias/servicios-impresion" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Servicios de Impresión</Button>
            </Link>
            <Link href="/industrias/turismo-viajes" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Turismo y Viajes</Button>
            </Link>
            <Link href="/industrias/servicios-digitales" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Servicios Digitales</Button>
            </Link>
            <Link href="/industrias/servicios-profesionales" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Servicios Profesionales</Button>
            </Link>
            
            <div className="px-3 py-2 text-gray-700 font-medium">Comercio</div>
            <Link href="/industrias/ropa" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Tiendas de Ropa</Button>
            </Link>
            <Link href="/industrias/joyeria-accesorios" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Joyería y Accesorios</Button>
            </Link>
            <Link href="/industrias/farmacias" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Farmacias</Button>
            </Link>
            <Link href="/industrias/electronicos" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Electrónicos</Button>
            </Link>
            <Link href="/industrias/mayoristas" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">Venta al por Mayor</Button>
            </Link>

            <Link href="/precios" passHref>
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                Precios
              </Button>
            </Link>


            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-5">
                <div className="space-y-2">
                  <Button asChild className="w-full justify-center bg-[hsl(var(--walinz-primary))] hover:bg-[hsl(var(--walinz-primary-hover))]">
                    <Link href="https://wa.me/14424474116?text=Quiero%20comenzar%20a%20usar%20WaLinz%20App!">Comenzar Gratis</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
