"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Precios",
      href: "/precios",
    },
  ];

  const resourceLinks = [
    {
      title: "Centro de Ayuda",
      href: "/ayuda"
    },
    {
      title: "Reseñas de clientes",
      href: "/resenas"
    },
    {
      title: "Programa de afiliados",
      href: "/afiliados"
    }
  ];

  const featureLinks = [
    {
      title: "Pagos",
      href: "/caracteristicas/pagos",
    },
    {
      title: "SEO",
      href: "/caracteristicas/seo",
    },
    {
      title: "Membresía",
      href: "/caracteristicas/membresia",
    },
  ];

  const foodAndBeverageLinks = [
    {
      title: "Restaurantes",
      href: "/industrias/restaurantes",
    },
    {
      title: "Cafés",
      href: "/industrias/cafes",
    },
    {
      title: "Comida Casera",
      href: "/industrias/comida-casera",
    },
  ];

  const commerceLinks = [
    {
      title: "Tiendas de Ropa",
      href: "/industrias/ropa",
    },
    {
      title: "Farmacias",
      href: "/industrias/farmacias",
    },
    {
      title: "Venta al por Mayor",
      href: "/industrias/mayoristas",
    },
  ];

  const companyLinks = [
    {
      title: "Sobre nosotros",
      href: "/paginas/sobre-nosotros",
    }
  ];



  return (
    <footer className="bg-white text-black">
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-gray-600">Todos los sistemas funcionando correctamente</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black">
            Crea Ecommerce para WhatsApp.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[hsl(var(--walinz-primary))] hover:bg-[hsl(var(--walinz-primary))] hover:opacity-90">
              <Link href="https://wa.me/14424474116?text=Quiero%20comenzar%20a%20usar%20WaLinz%20App!">Comenzar Gratis</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div>
              <h3 className="font-medium text-xl mb-4 text-black">Enlaces</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-xl mb-4 text-black">Recursos</h3>
              <ul className="space-y-2">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-xl mb-4 text-black">Funciones</h3>
              <ul className="space-y-2">
                {featureLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-xl mb-4 text-black">Comida y Bebidas</h3>
              <ul className="space-y-2">
                {foodAndBeverageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-xl mb-4 text-black">Comercio</h3>
              <ul className="space-y-2">
                {commerceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-medium text-xl mb-4 text-black">Empresa</h3>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-600 mb-4 md:mb-0">
              © {currentYear} WaLinz App C.A Todos los derechos reservados. 
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">Español</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
