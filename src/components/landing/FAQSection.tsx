import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "¿Cómo recibo el acceso?",
      answer: "Una vez confirmado el pago, recibes automáticamente un correo con el enlace para acceder a todo el material. ¡El acceso es inmediato y de por vida!",
    },
    {
      question: "¿Puedo usarlo en el celular y en la computadora?",
      answer: "¡Claro! Puedes descargar los playbacks en cualquier dispositivo: celular, computadora o tablet. Después los pasas a un USB o CD para usar en la iglesia.",
    },
    {
      question: "¿Los playbacks son de buena calidad?",
      answer: "Todos los playbacks fueron seleccionados y probados para asegurar la mejor calidad de sonido. Son archivos MP3 en alta definición, listos para uso profesional.",
    },
    {
      question: "¿Los playbacks incluyen letra?",
      answer: "¡Sí! Cada playback viene con su letra correspondiente, para que puedas cantar con total confianza durante los ensayos o en el momento de la alabanza.",
    },
    {
      question: "¿Puedo grabarlos en un CD o USB?",
      answer: "¡Por supuesto! Una vez descargados, puedes grabarlos en CDs, USBs o cualquier dispositivo de almacenamiento para usarlos donde quieras.",
    },
    {
      question: "¿Es segura la compra?",
      answer: "¡100% segura! Usamos plataformas de pago confiables y reconocidas. Tus datos están encriptados y protegidos en todo momento.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground">
            Preguntas Frecuentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-secondary rounded-xl border-none px-4"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground text-sm py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;