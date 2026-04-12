import { Shield, CreditCard, Cloud, Lock, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: CreditCard,
      title: "Pago Seguro",
      description: "Procesado por plataformas de pago seguras y confiables. Tus datos financieros están encriptados y protegidos.",
    },
    {
      icon: Cloud,
      title: "Almacenamiento Seguro",
      description: "Todo el material está alojado en Google Drive, garantizando que tus archivos estén siempre disponibles y protegidos.",
    },
    {
      icon: Lock,
      title: "Privacidad Garantizada",
      description: "Tus datos personales están 100% protegidos y nunca serán compartidos con terceros.",
    },
    {
      icon: CheckCircle,
      title: "Satisfacción Garantizada",
      description: "Si dentro de 7 días no estás satisfecho, te devolvemos el 100% de tu dinero. Sin preguntas, sin complicaciones.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-lg mx-auto">
        {/* Guarantee Badge */}
        <div className="bg-success/10 border border-success/20 rounded-2xl p-6 mb-8 text-center">
          <Shield className="w-12 h-12 mx-auto mb-3 text-success" />
          <h3 className="text-lg font-black text-foreground mb-1">
            GARANTÍA DE 7 DÍAS
          </h3>
          <p className="text-muted-foreground text-sm">
            ¿No te gustó? ¡Te devolvemos tu dinero!
          </p>
        </div>

        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground mb-1">
            TU COMPRA ESTÁ
          </h2>
          <p className="text-2xl font-black text-gradient">
            100% PROTEGIDA
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="space-y-4 mb-8">
          {guarantees.map((item, index) => (
            <div 
              key={index}
              className="bg-secondary rounded-xl p-4 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a 
          href="#pricing" 
          className="btn-gradient w-full flex items-center justify-center text-lg"
        >
          COMPRAR AHORA
        </a>
      </div>
    </section>
  );
};

export default GuaranteeSection;