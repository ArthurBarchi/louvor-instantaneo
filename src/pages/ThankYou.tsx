import { useEffect, useState } from "react";
import { CheckCircle, Mail, Clock, ArrowRight } from "lucide-react";

const ThankYou = () => {
  const [show, setShow] = useState(false);
  const [checkVisible, setCheckVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    setTimeout(() => setCheckVisible(true), 600);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <div
        className="w-full py-3 px-4 text-center"
        style={{
          background: "linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 70% 30%) 100%)",
        }}
      >
        <p className="text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2">
          <CheckCircle className="w-4 h-4" />
          Compra confirmada con éxito
        </p>
      </div>

      <div
        className={`max-w-2xl mx-auto px-6 py-12 transition-all duration-700 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div
            className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
              checkVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
            style={{
              background: "linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 70% 30%) 100%)",
              boxShadow: "0 15px 40px -10px hsl(142 76% 36% / 0.4)",
            }}
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-3">
            ¡Gracias por{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, hsl(38 92% 50%) 0%, hsl(28 95% 45%) 100%)",
              }}
            >
              tu compra!
            </span>
          </h1>
          <p className="text-gray-500 text-base md:text-lg">
            Tu material ya está en camino. ¡Prepárate para transformar tus cultos!
          </p>
        </div>

        {/* Email instruction card */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-6"
          style={{
            background: "linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 15% 95%) 100%)",
            border: "1px solid hsl(220 15% 90%)",
          }}
        >
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, hsl(38 92% 50%) 0%, hsl(28 95% 45%) 100%)",
              }}
            >
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-black text-gray-900 mb-1">
                Revisa tu correo electrónico
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                En los próximos minutos recibirás un email con el{" "}
                <strong className="text-gray-700">enlace de acceso</strong>{" "}
                a todo tu material. Revisa también la carpeta de{" "}
                <strong className="text-gray-700">spam o promociones</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 mb-8">
          {[
            {
              icon: Mail,
              step: "1",
              title: "Abre tu correo electrónico",
              desc: "Busca un email de Hotmart o Estudio Alabanza.",
            },
            {
              icon: ArrowRight,
              step: "2",
              title: "Haz clic en el enlace de acceso",
              desc: "Dentro del email encontrarás el botón para descargar tu material.",
            },
            {
              icon: CheckCircle,
              step: "3",
              title: "¡Disfruta tu material!",
              desc: "Descarga todo y empieza a usarlo en tus cultos hoy mismo.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4 rounded-xl bg-white"
              style={{
                border: "1px solid hsl(220 15% 92%)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-black"
                style={{
                  background: "linear-gradient(135deg, hsl(142 76% 36%) 0%, hsl(142 70% 30%) 100%)",
                }}
              >
                {item.step}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Time notice */}
        <div
          className="flex items-center justify-center gap-2 rounded-xl py-3 px-4 mb-8"
          style={{
            background: "linear-gradient(135deg, hsl(38 50% 97%) 0%, hsl(38 40% 95%) 100%)",
            border: "1px solid hsl(38 60% 88%)",
          }}
        >
          <Clock className="w-4 h-4 text-amber-600" />
          <span className="text-amber-800 text-sm font-semibold">
            El email puede tardar hasta 10 minutos en llegar
          </span>
        </div>

        {/* Support */}
        <div className="text-center">
          <p className="text-gray-400 text-xs">
            ¿No recibiste el email? Escríbenos y te ayudaremos de inmediato.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ThankYou;
