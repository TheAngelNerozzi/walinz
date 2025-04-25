import Image from "next/image";

export function WhatsappBusiness() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Potencia tu Negocio con WhatsApp Business
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Optimiza tu comunicación y ventas con herramientas profesionales diseñadas para empresas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[hsl(var(--walinz-gray-light))] p-6 rounded-lg">
            <div className="h-12 w-12 bg-[hsl(var(--walinz-primary))] rounded-lg flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Respuestas Automáticas</h3>
            <p className="text-gray-600">
              Configura mensajes automáticos para responder consultas frecuentes y mantener una comunicación eficiente
            </p>
          </div>

          <div className="bg-[hsl(var(--walinz-gray-light))] p-6 rounded-lg">
            <div className="h-12 w-12 bg-[hsl(var(--walinz-primary))] rounded-lg flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                  fill="currentColor"
                />
                <path
                  d="M7 12H9V17H7V12ZM15 7H17V17H15V7ZM11 14H13V17H11V14ZM11 10H13V12H11V10Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Análisis de Conversaciones</h3>
            <p className="text-gray-600">
              Obtén insights valiosos sobre el rendimiento de tus conversaciones y métricas de engagement
            </p>
          </div>

          <div className="bg-[hsl(var(--walinz-gray-light))] p-6 rounded-lg">
            <div className="h-12 w-12 bg-[hsl(var(--walinz-primary))] rounded-lg flex items-center justify-center mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
                  fill="currentColor"
                />
                <path
                  d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Catálogo de Productos</h3>
            <p className="text-gray-600">
              Muestra tu catálogo directamente en WhatsApp y facilita la compra a tus clientes
            </p>
          </div>
        </div>

        {/* The WhatsApp interface image section has been removed as requested */}
      </div>
    </section>
  );
}