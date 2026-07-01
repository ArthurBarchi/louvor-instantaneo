import { useEffect, useState } from "react";
import { Check, Clock, AlertTriangle, X } from "lucide-react";
import kitImage from "@/assets/kit-cultos.jpg";

const Downsell = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 4,
    seconds: 59,
  });

  const [show, setShow] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  // Pulse the timer when under 2 minutes
  useEffect(() => {
    if (timeLeft.minutes < 2) {
      setPulse(true);
    }
  }, [timeLeft.minutes]);

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

  const isExpiring = timeLeft.minutes < 2;

  return (
    <main className="min-h-screen bg-white">
      {/* Top bar - URGENT RED */}
      <div
        className="w-full py-3 px-4 text-center animate-pulse"
        style={{
          background: "linear-gradient(135deg, hsl(0 80% 45%) 0%, hsl(0 85% 38%) 100%)",
        }}
      >
        <p className="text-white text-sm font-black tracking-wide flex items-center justify-center gap-2 uppercase">
          <AlertTriangle className="w-4 h-4" />
          ¡Última oportunidad! Esta página no volverá a aparecer
          <AlertTriangle className="w-4 h-4" />
        </p>
      </div>

      <div
        className={`max-w-2xl mx-auto px-6 py-8 transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Urgency headline */}
        <div className="text-center mb-5">
          <div
            className="inline-flex items-center gap-2 text-red-600 text-xs font-black uppercase tracking-widest mb-3 px-4 py-2 rounded-full"
            style={{
              background: "hsl(0 80% 96%)",
              border: "1px solid hsl(0 70% 88%)",
            }}
          >
            <X className="w-3.5 h-3.5" />
            Vimos que rechazaste la oferta anterior
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
            ¿Y si te damos el{" "}
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
            por un precio especial?
          </h1>

          <p className="text-gray-500 text-base mt-3">
            Entendemos. Por eso creamos un{" "}
            <strong className="text-gray-800">descuento exclusivo de última chance</strong>{" "}
            solo para ti.
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

        {/* URGENT Timer */}
        <div
          className={`flex items-center justify-center gap-3 rounded-xl py-4 px-5 mb-6 transition-all duration-300 ${
            isExpiring ? "animate-pulse" : ""
          }`}
          style={{
            background: isExpiring
              ? "linear-gradient(135deg, hsl(0 80% 97%) 0%, hsl(0 60% 95%) 100%)"
              : "linear-gradient(135deg, hsl(0 0% 97%) 0%, hsl(38 50% 96%) 100%)",
            border: isExpiring
              ? "2px solid hsl(0 70% 70%)"
              : "1px solid hsl(38 80% 85%)",
          }}
        >
          <Clock className={`w-5 h-5 ${isExpiring ? "text-red-600" : "text-amber-600"}`} />
          <span className={`text-sm font-bold ${isExpiring ? "text-red-800" : "text-amber-800"}`}>
            {isExpiring ? "¡CASI SE ACABA! " : ""}Esta oferta desaparece en{" "}
            <span className={`font-mono font-black text-lg ${isExpiring ? "text-red-600" : "text-amber-600"}`}>
              {String(timeLeft.minutes).padStart(2, "0")}:
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </span>
        </div>

        {/* Benefits - same as upsell */}
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

        {/* Price section - DRAMATIC */}
        <div
          className="rounded-2xl p-6 mb-6 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(38 30% 96%) 100%)",
            border: "2px solid hsl(38 80% 75%)",
          }}
        >
          {/* "Last chance" ribbon */}
          <div
            className="absolute top-3 -right-8 rotate-45 px-10 py-1 text-[10px] font-black text-white uppercase tracking-wider"
            style={{
              background: "linear-gradient(135deg, hsl(0 80% 45%) 0%, hsl(0 85% 38%) 100%)",
            }}
          >
            Última vez
          </div>

          <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">
            Valor normal
          </p>
          <p className="text-xl text-gray-300 line-through font-bold">$97</p>
          <p className="text-lg text-red-400 line-through font-bold mb-2">$27</p>

          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-gray-500 text-lg">Tu precio final:</span>
          </div>
          <p className="text-6xl font-black text-gray-900 mb-1">
            $17
          </p>
          <p className="text-red-500 text-xs font-bold uppercase tracking-wider">
            — Descuento extra de 37% solo ahora —
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Pago único · Acceso inmediato · Garantía de 7 días
          </p>
        </div>

        {/* Scarcity message */}
        <div
          className="text-center mb-6 py-3 px-4 rounded-lg"
          style={{
            background: "hsl(0 80% 97%)",
            border: "1px solid hsl(0 60% 90%)",
          }}
        >
          <p className="text-red-700 text-xs font-bold">
            ⚠️ Si cierras esta página, el precio vuelve a $97 y no podrás acceder a este descuento nunca más.
          </p>
        </div>

        {/* Hotmart Sales Funnel Widget */}
        <div id="hotmart-sales-funnel" className="mb-6" />
      </div>
    </main>
  );
};

export default Downsell;
