import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";

const purchases = [
  { name: "Carlos Rodríguez", city: "Ciudad de México", country: "MX", package: "Paquete Completo" },
  { name: "María González", city: "Buenos Aires", country: "AR", package: "Paquete Básico" },
  { name: "Juan Pérez", city: "Bogotá", country: "CO", package: "Paquete Completo" },
  { name: "Ana López", city: "Lima", country: "PE", package: "Paquete Completo" },
  { name: "Pedro Martínez", city: "Santiago", country: "CL", package: "Paquete Básico" },
  { name: "Juliana Ramírez", city: "Quito", country: "EC", package: "Paquete Completo" },
  { name: "Diego Hernández", city: "Guadalajara", country: "MX", package: "Paquete Completo" },
  { name: "Fernanda Castro", city: "Medellín", country: "CO", package: "Paquete Básico" },
];

const PurchaseNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchase, setCurrentPurchase] = useState(purchases[0]);

  useEffect(() => {
    const showNotification = () => {
      const randomPurchase = purchases[Math.floor(Math.random() * purchases.length)];
      setCurrentPurchase(randomPurchase);
      setIsVisible(true);

      window.dispatchEvent(new CustomEvent('newPurchase'));

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    const initialTimeout = setTimeout(showNotification, 5000);

    const interval = setInterval(() => {
      const randomDelay = Math.floor(Math.random() * 7000) + 8000;
      setTimeout(showNotification, randomDelay);
    }, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ease-in-out ${
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="bg-white rounded-xl shadow-xl border border-yellow-200 p-4 flex items-center gap-3 max-w-[320px]">
        <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
          <ShoppingBag className="w-5 h-5 text-white" />
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-gray-900 text-sm">
            {currentPurchase.name} de {currentPurchase.city}, {currentPurchase.country}
          </span>
          <span className="text-gray-600 text-xs">
            acaba de adquirir el {currentPurchase.package}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;