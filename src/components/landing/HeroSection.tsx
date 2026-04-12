import { Shield, Lock, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-playbacks.png";
import CountdownTimer from "./CountdownTimer";

const HeroSection = () => {
  return (
    <section className="relative bg-background pt-8 pb-12 px-4 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container max-w-lg mx-auto relative">
        {/* Main Headline */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-2">
            1.500 Playbacks Para
            <br />
            <span className="text-gradient">Alabar En La Iglesia</span>
          </h1>
          
          {/* Countdown Badge */}
          <div className="mt-4">
            <CountdownTimer variant="badge" />
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-6 animate-fade-in">
          <img 
            src={heroImage} 
            alt="Playbacks Gospel - Más de 1500 himnos" 
            className="w-full rounded-2xl"
          />
        </div>

        {/* Value Proposition */}
        <p className="text-center text-foreground text-lg font-black leading-relaxed mb-6">
          BASTA de dolores de cabeza descargando playbacks malos de YouTube o gastando en CDs. Descárgalos{" "}
          <span className="text-amber-500">HOY MISMO</span> directo a tu USB, de forma <span className="text-amber-500">SIMPLE</span> y <span className="text-amber-500">PRÁCTICA</span>.
        </p>

        {/* Price */}
        <div className="text-center mb-6">
          <p className="text-2xl font-black text-foreground">
            TODO POR SOLO{" "}
            <span className="text-gradient text-4xl">$10</span>
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-6">
          <a 
            href="#pricing" 
            className="btn-gradient w-full flex items-center justify-center text-lg"
          >
            SÍ, ¡LO QUIERO AHORA!
          </a>
        </div>

        {/* Trust Badges */}
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