import { Star, Users, ThumbsUp, Award, MessageCircle } from "lucide-react";
import whatsappTestimonials from "@/assets/whatsapp-testimonials.png";

const TestimonialsSection = () => {
  const stats = [
    { icon: Users, value: "+5.000", label: "Ministerios Bendecidos" },
    { icon: ThumbsUp, value: "97%", label: "De Satisfacción" },
    { icon: Star, value: "4.9/5", label: "Calificación Promedio" },
    { icon: MessageCircle, value: "+1.000", label: "Mensajes de Gratitud" },
  ];

  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground mb-1">
            MIRA LO QUE DICEN
          </h2>
          <p className="text-2xl font-black text-gradient">
            NUESTROS USUARIOS
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Testimonios de Ministerios Transformados
          </p>
        </div>

        <div className="mb-8">
          <img 
            src={whatsappTestimonials} 
            alt="Testimonios de clientes satisfechos en WhatsApp" 
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-sm mb-6">
          <p className="text-center text-foreground font-semibold mb-6">
            ¡Únete a Miles de Ministerios Satisfechos!
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-4 bg-secondary/50 rounded-xl"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <p className="text-xl font-black text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Calificado por miles de usuarios
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;