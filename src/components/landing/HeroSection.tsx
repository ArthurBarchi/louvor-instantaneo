import { Shield, Lock, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-playbacks.png";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative bg-background pb-12 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="text-white text-center py-2.5 px-4 text-xs font-bold uppercase tracking-wider -mx-4 mb-6" style={{ background: 'var(--gradient-primary)' }}>
        DESCUENTO EXCLUSIVO SOLO HOY • 01/07/2026
      </div>
      
      <div className="container max-w-lg mx-auto relative">
        <div className="text-center mb-6">
          <div className="mb-3">
            <CountdownTimer variant="badge" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground leading-tight mb-2">
            1.500 Playbacks Para
            <br />
            <span className="text-gradient">Alabar En Tu Iglesia</span>
          </h1>
        </div>

        <div className="mb-6 animate-fade-in">
          <img 
            src={heroImage} 
            alt="Playbacks Cristianos - Más de 1500 himnos de alabanza" 
            className="w-full rounded-2xl"
          />
        </div>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-6">
          DEJA de perder tiempo buscando playbacks malos en YouTube o gastando en CDs. Descárgalos AL INSTANTE y úsalos en tu iglesia, USB o donde quieras. FÁCIL y RÁPIDO.
        </p>

        <div className="text-center mb-6">
          <p className="text-2xl font-black text-foreground">
            TODO POR SOLO{" "}
            <span className="text-gradient text-4xl">$10</span>
          </p>
        </div>

        <div className="mb-6">
          <a 
            href="#pricing" 
            className="btn-gradient w-full flex items-center justify-center text-lg"
          >
            SÍ, ¡LO QUIERO AHORA!
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-1.5 text-xs">
            <Lock className="w-4 h-4 text-success" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <Shield className="w-4 h-4 text-success" />
            <span>Garantía 7 días</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs">
            <CreditCard className="w-4 h-4 text-success" />
            <span>Tarjeta o Transferencia</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;