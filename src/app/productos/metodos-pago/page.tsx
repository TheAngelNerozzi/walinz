import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MetodosPagoPage() {
  // Bancos Nacionales
  const bancosNacionales = [
    {
      name: "Banco de Venezuela",
      icon: "BDV",
      description: "Transferencias y pagos móviles a cuentas del Banco de Venezuela",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      name: "Banesco",
      icon: "BAN",
      description: "Transferencias y pagos móviles a cuentas de Banesco",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "Banco Mercantil",
      icon: "BM",
      description: "Transferencias y pagos móviles a cuentas del Banco Mercantil",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Provincial BBVA",
      icon: "BP",
      description: "Transferencias y pagos móviles a cuentas del Banco Provincial",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      name: "Banco Nacional de Crédito",
      icon: "BNC",
      description: "Transferencias y pagos móviles a cuentas del BNC",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      name: "Banco Exterior",
      icon: "BE",
      description: "Transferencias y pagos móviles a cuentas del Banco Exterior",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      name: "Banco Bicentenario",
      icon: "BB",
      description: "Transferencias y pagos móviles a cuentas del Banco Bicentenario",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      name: "Banco del Tesoro",
      icon: "BT",
      description: "Transferencias y pagos móviles a cuentas del Banco del Tesoro",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600"
    },
    {
      name: "Banco Venezolano de Crédito",
      icon: "BVC",
      description: "Transferencias y pagos móviles a cuentas del BVC",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600"
    },
    {
      name: "Banco Caroní",
      icon: "BC",
      description: "Transferencias y pagos móviles a cuentas del Banco Caroní",
      bgColor: "bg-gray-100",
      textColor: "text-gray-600"
    }
  ];

  // Criptomonedas
  const criptomonedas = [
    {
      name: "Bitcoin (BTC)",
      icon: "₿",
      description: "La criptomoneda más establecida y conocida mundialmente",
      bgColor: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      name: "Ethereum (ETH)",
      icon: "Ξ",
      description: "Plataforma descentralizada con contratos inteligentes",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      name: "USDT (Tether)",
      icon: "₮",
      description: "Stablecoin vinculada al dólar estadounidense",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600"
    },
    {
      name: "USDC",
      icon: "$C",
      description: "Stablecoin respaldada por dólares estadounidenses",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Binance Coin (BNB)",
      icon: "BNB",
      description: "Token nativo del ecosistema Binance",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      name: "Solana (SOL)",
      icon: "SOL",
      description: "Blockchain de alto rendimiento con bajas comisiones",
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-600"
    },
    {
      name: "Cardano (ADA)",
      icon: "ADA",
      description: "Blockchain de tercera generación basada en prueba de participación",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Polkadot (DOT)",
      icon: "DOT",
      description: "Protocolo que conecta blockchains permitiendo transferencias entre ellas",
      bgColor: "bg-pink-100",
      textColor: "text-pink-600"
    },
    {
      name: "Dogecoin (DOGE)",
      icon: "Ð",
      description: "Criptomoneda basada en el meme del perro Shiba Inu",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      name: "Litecoin (LTC)",
      icon: "Ł",
      description: "Una de las primeras altcoins, similar a Bitcoin pero más rápida",
      bgColor: "bg-gray-100",
      textColor: "text-gray-600"
    }
  ];

  // Aplicaciones y otros métodos
  const aplicaciones = [
    {
      name: "Pago Móvil",
      icon: "PM",
      description: "Transferencias instantáneas entre usuarios de bancos venezolanos",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Zelle",
      icon: "Z",
      description: "Transferencias desde cuentas en bancos de EE.UU.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      name: "PayPal",
      icon: "PP",
      description: "Plataforma global de pagos en línea",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "Reserve",
      icon: "RV",
      description: "Aplicación para pagos y protección contra la inflación",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "Efectivo (USD)",
      icon: "$",
      description: "Pago en efectivo con dólares estadounidenses",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "Efectivo (Bs.)",
      icon: "Bs",
      description: "Pago en efectivo con bolívares",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      name: "Contra entrega",
      icon: "CE",
      description: "Pago al momento de recibir el producto",
      bgColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "Visa",
      icon: "V",
      description: "Tarjetas de crédito y débito Visa",
      bgColor: "bg-red-100",
      textColor: "text-red-600"
    },
    {
      name: "Mastercard",
      icon: "MC",
      description: "Tarjetas de crédito y débito Mastercard",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      name: "American Express",
      icon: "AE",
      description: "Tarjetas de crédito American Express",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow py-12 bg-[hsl(var(--walinz-gray-light))]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">Métodos de Pago Disponibles</h1>
            <p className="text-xl text-gray-600">
              Ofrecemos más de 30 métodos de pago adaptados a las necesidades de tu negocio y tus clientes
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <Tabs defaultValue="bancos" className="w-full">
              <div className="px-6 pt-6">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="bancos">Bancos Nacionales</TabsTrigger>
                  <TabsTrigger value="cripto">Criptomonedas</TabsTrigger>
                  <TabsTrigger value="apps">Aplicaciones y Otros</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="bancos" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {bancosNacionales.map((metodo, index) => (
                    <PaymentMethod
                      key={index}
                      name={metodo.name}
                      icon={metodo.icon}
                      description={metodo.description}
                      bgColor={metodo.bgColor}
                      textColor={metodo.textColor}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="cripto" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {criptomonedas.map((metodo, index) => (
                    <PaymentMethod
                      key={index}
                      name={metodo.name}
                      icon={metodo.icon}
                      description={metodo.description}
                      bgColor={metodo.bgColor}
                      textColor={metodo.textColor}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="apps" className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {aplicaciones.map((metodo, index) => (
                    <PaymentMethod
                      key={index}
                      name={metodo.name}
                      icon={metodo.icon}
                      description={metodo.description}
                      bgColor={metodo.bgColor}
                      textColor={metodo.textColor}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de Nuestros Métodos de Pago</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--walinz-primary-light))] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Sin Comisiones por Transacción</h3>
                  <p className="text-gray-600">A diferencia de otras plataformas, WaLinz no cobra comisiones por cada venta realizada.</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--walinz-primary-light))] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Cobros Instantáneos</h3>
                  <p className="text-gray-600">Recibe tus pagos de forma inmediata, sin retenciones ni periodos de espera.</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--walinz-primary-light))] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Integración con WhatsApp</h3>
                  <p className="text-gray-600">Todo el proceso de pago se gestiona directamente a través de WhatsApp, sin redirecciones.</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--walinz-primary-light))] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[hsl(var(--walinz-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Personalización Total</h3>
                  <p className="text-gray-600">Adapta los métodos de pago según las preferencias de tu negocio y tus clientes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para simplificar tus cobros?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Comienza hoy mismo y lleva la gestión de pagos de tu negocio al siguiente nivel
            </p>
            <Link href="/registro" passHref>
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg">
                Comienza tu prueba gratuita
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
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