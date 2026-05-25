import { Heart, Target, Users, Sparkles } from "lucide-react";

const StorySection = () => {
  const painPoints = [
    "CDs que costaban $15 por solo unos pocos himnos.",
    "Playbacks de YouTube que fallaban en pleno culto.",
    "Horas perdidas buscando los himnos correctos para alabar.",
    "Alabanzas importantes que dejaban de cantarse por falta de material.",
  ];

  const storyCards = [
    {
      icon: Heart,
      iconBg: "bg-gradient-to-br from-rose-400 to-red-500",
      iconColor: "text-white",
      title: "Una Misión Que Nació en Casa",
      content: "Desde pequeño, veía la misma lucha: mi mamá cantaba en la iglesia, pero siempre enfrentaba la dificultad de encontrar playbacks de calidad.",
      hasList: false,
    },
    {
      icon: Target,
      iconBg: "bg-gradient-to-br from-amber-400 to-orange-500",
      iconColor: "text-white",
      title: "El Dolor Que Nos Motivó",
      intro: "Mi mamá siempre me pedía ayuda. Pero lo que más me dolía era ver cuánto gastaba en CDs.",
      hasList: true,
    },
    {
      icon: Users,
      iconBg: "bg-gradient-to-br from-sky-400 to-blue-500",
      iconColor: "text-white",
      title: "La Solución Que Construimos Juntos",
      content: "Fue cuando tuve una idea: ¿y si pudiéramos reunir miles de playbacks de alta calidad en un solo lugar? Reuní un equipo apasionado por la adoración y trabajamos por meses construyendo Estudio Alabanza, organizando y probando cada archivo para asegurar la mejor calidad.",
      hasList: false,
    },
    {
      icon: Sparkles,
      iconBg: "bg-gradient-to-br from-violet-400 to-purple-500",
      iconColor: "text-white",
      title: "¿Por Qué Solo $10?",
      content: "Muchos me preguntan por qué es tan barato. La respuesta es simple: este valor simbólico cubre nuestros costos y nos permite seguir ayudando. Nuestra misión no es ganar dinero, sino facilitar la alabanza en miles de iglesias en toda Latinoamérica.",
      hasList: false,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-secondary via-secondary to-background">
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-black text-foreground mb-1">
            ¿POR QUÉ CREAMOS
          </h2>
          <p className="text-2xl font-black text-gradient">
            ESTE PROYECTO?
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs mx-auto">
            Una historia de fe, familia y dedicación a la alabanza
          </p>
        </div>

        <div className="space-y-5">
          {storyCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center shadow-md`}>
                  <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground leading-tight">
                  {card.title}
                </h3>
              </div>
              
              {card.hasList ? (
                <>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {card.intro}
                  </p>
                  <div className="bg-secondary/50 rounded-xl p-4 space-y-3">
                    {painPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">{point}</p>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.content}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-6 mb-6 border border-primary/20">
            <p className="text-foreground font-semibold italic text-lg leading-relaxed">
              "Este proyecto fue pensado para ti, que enfrenta la misma dificultad."
            </p>
          </div>
          
          <a 
            href="#pricing" 
            className="btn-gradient inline-flex items-center justify-center text-lg px-10 shadow-gold"
          >
            QUIERO SER PARTE ❤️
          </a>
          
          <p className="text-muted-foreground text-sm mt-5">
            ¡Que Dios bendiga tu ministerio! 🙏
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;