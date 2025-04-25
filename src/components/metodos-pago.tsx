"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MetodosPago() {
  const [activeTab, setActiveTab] = useState("venezuela");

  return (
    <section className="py-20 bg-[hsl(var(--walinz-gray-light))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Métodos de Pago Adaptados a Venezuela
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Acepta pagos con métodos locales de Venezuela y criptomonedas adaptadas a tu negocio,
            además de las opciones tradicionales.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <Tabs
            defaultValue="venezuela"
            className="w-full"
            onValueChange={(value) => setActiveTab(value)}
          >
            <div className="px-6 pt-6">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="venezuela">Métodos Locales</TabsTrigger>
                <TabsTrigger value="crypto">Criptomonedas</TabsTrigger>
                <TabsTrigger value="traditional">Tradicionales</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="venezuela" className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <PaymentMethod
                  name="Pago Móvil"
                  icon="PM"
                  description="Transferencias instantáneas entre usuarios de bancos venezolanos"
                  bgColor="bg-blue-100"
                  textColor="text-blue-600"
                />
                <PaymentMethod
                  name="Zelle"
                  icon="Z"
                  description="Transferencias desde cuentas en bancos de EE.UU."
                  bgColor="bg-purple-100"
                  textColor="text-purple-600"
                />
                <PaymentMethod
                  name="Efectivo"
                  icon="$"
                  description="Pago contra entrega en Bolívares o USD"
                  bgColor="bg-green-100"
                  textColor="text-green-600"
                />
                <PaymentMethod
                  name="Transferencia"
                  icon="T"
                  description="Transferencias a cuentas bancarias locales"
                  bgColor="bg-indigo-100"
                  textColor="text-indigo-600"
                />
                <PaymentMethod
                  name="Reserve"
                  icon="RV"
                  description="Pagos mediante la plataforma Reserve"
                  bgColor="bg-green-100"
                  textColor="text-green-600"
                />
                <PaymentMethod
                  name="Paypal"
                  icon="PP"
                  description="Transferencias mediante Paypal"
                  bgColor="bg-blue-100"
                  textColor="text-blue-600"
                />
              </div>
            </TabsContent>

            <TabsContent value="crypto" className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <PaymentMethod
                  name="USDT (Tether)"
                  icon="₮"
                  description="Stablecoin vinculada al dólar estadounidense"
                  bgColor="bg-teal-100"
                  textColor="text-teal-600"
                />
                <PaymentMethod
                  name="Bitcoin (BTC)"
                  icon="₿"
                  description="La criptomoneda más establecida y conocida"
                  bgColor="bg-orange-100"
                  textColor="text-orange-600"
                />
                <PaymentMethod
                  name="Ethereum (ETH)"
                  icon="Ξ"
                  description="Plataforma descentralizada con contratos inteligentes"
                  bgColor="bg-purple-100"
                  textColor="text-purple-600"
                />
                <PaymentMethod
                  name="Binance (BNB)"
                  icon="BNB"
                  description="Token nativo del ecosistema Binance"
                  bgColor="bg-yellow-100"
                  textColor="text-yellow-600"
                />
                <PaymentMethod
                  name="Solana (SOL)"
                  icon="SOL"
                  description="Blockchain de alto rendimiento con bajas comisiones"
                  bgColor="bg-indigo-100"
                  textColor="text-indigo-600"
                />
                <PaymentMethod
                  name="Cardano (ADA)"
                  icon="ADA"
                  description="Blockchain de tercera generación basada en prueba de participación"
                  bgColor="bg-blue-100"
                  textColor="text-blue-600"
                />
              </div>
            </TabsContent>

            <TabsContent value="traditional" className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <PaymentMethod
                  name="Visa"
                  icon="V"
                  description="Tarjetas de crédito y débito Visa"
                  bgColor="bg-red-100"
                  textColor="text-red-600"
                />
                <PaymentMethod
                  name="Mastercard"
                  icon="MC"
                  description="Tarjetas de crédito y débito Mastercard"
                  bgColor="bg-yellow-100"
                  textColor="text-yellow-600"
                />
                <PaymentMethod
                  name="American Express"
                  icon="AE"
                  description="Tarjetas de crédito American Express"
                  bgColor="bg-blue-100"
                  textColor="text-blue-600"
                />
                <PaymentMethod
                  name="Apple Pay"
                  icon="AP"
                  description="Pago móvil y billetera digital de Apple"
                  bgColor="bg-gray-100"
                  textColor="text-gray-800"
                />
                <PaymentMethod
                  name="Google Pay"
                  icon="GP"
                  description="Sistema de pago digital de Google"
                  bgColor="bg-indigo-100"
                  textColor="text-indigo-600"
                />
                <PaymentMethod
                  name="Contra entrega"
                  icon="CE"
                  description="Pago al momento de recibir el producto"
                  bgColor="bg-green-100"
                  textColor="text-green-600"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium mb-6">
            Más de 30 métodos de pago disponibles para tu negocio
          </p>
          <Link href="/productos/metodos-pago" passHref>
            <Button className="bg-black text-white hover:bg-gray-800">
              Ver todos los métodos de pago
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PaymentMethod({
  name,
  icon,
  description,
  bgColor,
  textColor
}: {
  name: string;
  icon: string;
  description: string;
  bgColor: string;
  textColor: string;
}) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-3">
        <div className={`w-10 h-10 ${bgColor} rounded-full flex items-center justify-center mb-1 mt-1`}>
          <span className={`font-bold ${textColor}`}>{icon}</span>
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
