import { Download, Usb, Church, Music, Disc, Users } from "lucide-react";
import mockupDevices from "@/assets/mockup-devices.png";

const PreviewSection = () => {
  const stats = [
    { icon: Users, value: "+100", label: "Cantantes" },
    { icon: Disc, value: "+500", label: "Álbumes" },
    { icon: Music, value: "+1.500", label: "Himnos" },
  ];

  const steps = [
    { icon: Download, label: "Descarga al Instante" },
    { icon: Usb, label: "Copia a tu USB" },
    { icon: Church, label: "Úsalo en la Iglesia" },
  ];

  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground mb-1">
            MIRA TODO LO
          </h2>
          <p className="text-2xl font-black text-gradient">
            QUE RECIBES:
          </p>
        </div>

        <div className="mb-8">
          <img 
            src={mockupDevices} 
            alt="Playbacks en múltiples dispositivos" 
            className="w-full rounded-xl"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-4 text-center shadow-sm"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-2">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs font-medium text-foreground">{step.label}</p>
              {index < steps.length - 1 && (
                <div className="absolute translate-x-12">
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewSection;