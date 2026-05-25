import { Gift, BookOpen, Music, FileText, Volume2 } from "lucide-react";
import bonusEbook from "@/assets/bonus-ebook.png";
import CountdownTimer from "./CountdownTimer";

const SpecialOfferSection = () => {
  const bonuses = [
    {
      icon: BookOpen,
      title: "Ebook: La Voz de la Alabanza",
      description: "La Guía Práctica Para Cantar Mejor en la Iglesia",
    },
    {
      icon: Music,
      title: "Multitracks de Adoración",
      description: "Archivos con instrumentos separados para ensayar como un profesional.",
    },
    {
      icon: FileText,
      title: "5.000 Partituras Cristianas",
      description: "Una biblioteca digital para músicos y ministerios.",
    },
    {
      icon: Volume2,
      title: "Música de Fondo para Oración",
      description: "Instrumentales perfectos para momentos de oración y predicación.",
    },
  ];

  return (
    <section className="section-dark py-12 px-4">
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-8">
          <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">
            OFERTA ESPECIAL
          </p>
          <h2 className="text-2xl font-black text-white">
            SOLO POR HOY:
          </h2>
        </div>

        <CountdownTimer variant="full" />

        <div className="card-elevated p-6 mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-xl font-black text-foreground">Plan Completo</span>
          </div>
          <p className="text-center text-lg font-bold text-primary mb-4">
            +4 BONOS EXCLUSIVOS
          </p>
          
          <div className="flex justify-center mb-6">
          <img 
            src={bonusEbook} 
            alt="Paquete de Bonos - Pistas Cristianos" 
            className="w-full max-w-xs h-auto drop-shadow-lg"
          />
          </div>

          <div className="space-y-4">
            {bonuses.map((bonus, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{bonus.title}</h4>
                  <p className="text-xs text-muted-foreground">{bonus.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a 
          href="#pricing" 
          className="btn-gradient w-full flex items-center justify-center text-lg animate-stretch"
        >
          🔥 ¡LO QUIERO AHORA! 🔥
        </a>
      </div>
    </section>
  );
};

export default SpecialOfferSection;