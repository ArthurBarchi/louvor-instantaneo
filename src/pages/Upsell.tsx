import { useEffect, useState } from "react";
import { Check, Gift, ShieldCheck, Clock } from "lucide-react";

const Upsell = () => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 9,
    seconds: 59,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    // Entrance animation
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

  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background:
          "linear-gradient(135deg, hsl(220 25% 6%) 0%, hsl(220 20% 12%) 50%, hsl(220 25% 6%) 100%)",
      }}
    >
      <div
        className={`max-w-md w-full transition-all duration-700 ease-out ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Success badge */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Check className="w-4 h-4" />
            ¡Tu compra fue confirmada!
          </div>
          <p className="text-white/50 text-sm">
            Antes de acceder a tu material, tenemos una oferta especial para ti.
          </p>
        </div>

        {/* Main card */}
        <div
          className="rounded-3xl p-[1px] mb-6"
          style={{
            background:
              "linear-gradient(135deg, hsl(38 92% 50% / 0.5), hsl(38 92% 50% / 0.1), hsl(38 92% 50% / 0.3))",
          }}
        >
          <div
            className="rounded-3xl p-6 md:p-8"
            style={{
              background:
                "linear-gradient(135deg, hsl(220 20% 12%) 0%, hsl(220 25% 10%) 100%)",
            }}
          >
            {/* Timer */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">
                Oferta expira en{" "}
                <span className="font-mono font-black">
                  {String(timeLeft.minutes).padStart(2, "0")}:
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </span>
            </div>

            {/* Product title */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                <Gift className="w-3.5 h-3.5" />
                Oferta Exclusiva
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
                Kit Completo
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, hsl(38 92% 55%) 0%, hsl(28 95% 50%) 100%)",
                  }}
                >
                  Para Tus Cultos
                </span>
              </h1>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                "Planificador semanal de cultos",
                "Guías de adoración para líderes",
                "Plantillas de orden del culto",
                "Banco de ideas para predicaciones",
                "Material visual para proyección",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white/80 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="text-center mb-6">
              <p className="text-white/40 text-sm line-through mb-1">$97</p>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-white/60 text-lg font-medium">Solo</span>
                <span className="text-4xl font-black text-white">$27</span>
              </div>
              <p className="text-white/40 text-xs mt-1">Pago único · Acceso inmediato</p>
            </div>

            {/* CTA button */}
            <a
              href="#"
              className="group relative block w-full py-4 px-6 text-center font-bold text-white text-lg rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_hsl(142_76%_36%/0.5)] animate-btn-bounce"
              style={{
                background:
                  "linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 70% 30%) 100%)",
              }}
            >
              <span className="relative z-10">
                SÍ, QUIERO EL KIT – $27
              </span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(142 76% 42%) 0%, hsl(142 70% 36%) 100%)",
                }}
              />
            </a>

            {/* Security */}
            <div className="flex items-center justify-center gap-2 mt-4 text-white/30 text-xs">
              <ShieldCheck className="w-4 h-4" />
              Pago 100% seguro · Garantía de 7 días
            </div>
          </div>
        </div>

        {/* No thanks link */}
        <div className="text-center">
          <a
            href="#"
            className="text-white/30 text-xs underline underline-offset-4 hover:text-white/50 transition-colors duration-200"
          >
            No, gracias. Quiero continuar sin el kit.
          </a>
        </div>
      </div>
    </main>
  );
};

export default Upsell;
