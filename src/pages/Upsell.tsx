import { useEffect, useState } from "react";
import { Check, Clock } from "lucide-react";
import kitImage from "@/assets/kit-cultos.jpg";

const Upsell = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 9,
    seconds: 59,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Load Hotmart Sales Funnel Widget
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js";
    script.async = true;
    script.onload = () => {
      if ((window as any).checkoutElements) {
        (window as any).checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Top bar - wait / confirmed */}
      <div
        className="w-full py-3 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 70% 30%) 100%)",
        }}
      >
        <p className="text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2">
          <Check className="w-4 h-4" />
          ¡ESPERA! Tu pedido aún no está completo
        </p>
      </div>

      <div
        className={`max-w-2xl mx-auto px-6 py-8 transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Headline */}
        <div className="text-center mb-6">
          <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-2">
            Oferta exclusiva de una sola vez
          </p>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            Agrega el{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(38 92% 50%) 0%, hsl(28 95% 45%) 100%)",
              }}
            >
              Kit Completo
            </span>
            <br />
            para tus cultos
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Todo lo que tu ministerio necesita, en un solo lugar.
          </p>
        </div>

        {/* Product Image */}
        <div className="mb-6">
          <img
            src={kitImage}
            alt="Kit Completo Para Tus Cultos"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Timer urgency bar */}
        <div
          className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 mb-6"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(38 50% 96%) 100%)",
            border: "1px solid hsl(38 80% 85%)",
          }}
        >
          <Clock className="w-4 h-4 text-amber-600" />
          <span className="text-amber-800 text-sm font-semibold">
            Esta oferta expira en{" "}
            <span className="font-mono font-black text-amber-600">
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </span>
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-6">
          {[
            "Planificador semanal de cultos listo para usar",
            "Guías completas de adoración para líderes",
            "Plantillas editables de orden del culto",
            "Banco de ideas para predicaciones",
            "Material visual profesional para proyección",
            "Recursos gráficos para anuncios y redes",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3"
            >
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{
                  background: "linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 70% 30%) 100%)",
                }}
              >
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-700 text-sm leading-snug">{item}</span>
            </div>
          ))}
        </div>

        {/* Price section */}
        <div
          className="rounded-2xl p-6 mb-6 text-center"
          style={{
            background: "linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 15% 95%) 100%)",
            border: "1px solid hsl(220 15% 90%)",
          }}
        >
          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
            Valor normal
          </p>
          <p className="text-2xl text-gray-300 line-through font-bold mb-2">$97</p>

          <div className="flex items-center justify-center gap-1 mb-1">
            <span className="text-gray-500 text-lg">Hoy solo</span>
          </div>
          <p className="text-5xl font-black text-gray-900 mb-1">
            $27
          </p>
          <p className="text-gray-400 text-xs">
            Pago único · Acceso inmediato · Sin suscripción
          </p>
        </div>

        {/* Hotmart Sales Funnel Widget */}
        <div id="hotmart-sales-funnel" className="mb-6" />
      </div>
    </main>
  );
};

export default Upsell;
