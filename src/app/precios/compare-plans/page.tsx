import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ComparePlansPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Comparativa de Planes</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Compara las características de nuestros planes para encontrar el que mejor se adapte a tus necesidades.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[hsl(var(--walinz-gray-light))] border-b">
              <th className="p-4 text-left font-medium text-gray-600">Características</th>
              <th className="p-4 text-center font-medium text-gray-600">Starter</th>
              <th className="p-4 text-center font-medium text-gray-600 bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]">Business</th>
              <th className="p-4 text-center font-medium text-gray-600">Enterprise</th>
            </tr>
            <tr className="border-b">
              <th className="p-4 text-left font-medium text-gray-600">Precio</th>
              <td className="p-4 text-center">
                <div className="font-bold">$49/mes</div>
                <div className="text-sm text-gray-500">$490/año</div>
              </td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]">
                <div className="font-bold">$149/mes</div>
                <div className="text-sm text-gray-500">$1490/año</div>
              </td>
              <td className="p-4 text-center">
                <div className="font-bold">Custom</div>
                <div className="text-sm text-gray-500">Contáctanos para precios</div>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Productos</td>
              <td className="p-4 text-center">Hasta 50</td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]">Hasta 200</td>
              <td className="p-4 text-center">Ilimitados</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Dominio gratis</td>
              <td className="p-4 text-center"><svg className="h-5 w-5 text-[hsl(var(--walinz-primary))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]"><svg className="h-5 w-5 text-[hsl(var(--walinz-primary))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></td>
              <td className="p-4 text-center"><svg className="h-5 w-5 text-[hsl(var(--walinz-primary))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Pedidos por WhatsApp</td>
              <td className="p-4 text-center">Ilimitados</td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]">Ilimitados</td>
              <td className="p-4 text-center">Ilimitados</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Soporte</td>
              <td className="p-4 text-center">VIP por WhatsApp +$29/mes</td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]">VIP por WhatsApp +$29/mes</td>
              <td className="p-4 text-center">Incluido + Premium</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Remueve el logo de WaLinz App</td>
              <td className="p-4 text-center">-</td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]"><svg className="h-5 w-5 text-[hsl(var(--walinz-primary))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></td>
              <td className="p-4 text-center"><svg className="h-5 w-5 text-[hsl(var(--walinz-primary))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Anexar productos adicionales</td>
              <td className="p-4 text-center">+$15/mes por 100</td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]">+$15/mes por 100</td>
              <td className="p-4 text-center">Incluido</td>
            </tr>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-4 font-medium">Features Premium</td>
              <td className="p-4 text-center">-</td>
              <td className="p-4 text-center bg-[hsl(var(--walinz-primary-light))] border-x border-[hsl(var(--walinz-primary-light))]">-</td>
              <td className="p-4 text-center"><svg className="h-5 w-5 text-[hsl(var(--walinz-primary))] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-12 text-center">
        <Link href="wa.me/14424474116" passHref>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-2">
            Comienza ahora
          </Button>
        </Link>
        <p className="mt-4 text-gray-600">Sin riesgos, puedes cancelar en cualquier momento.</p>
      </div>
    </div>
  );
}
