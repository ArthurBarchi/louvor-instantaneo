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
      answer: "Después de la confirmación del pago, recibes automáticamente un correo electrónico con el enlace para acceder a todos los materiales. ¡El acceso es inmediato y de por vida!",
    },
    {
      question: "¿Puedo usarlo en el celular y en la computadora?",
      answer: "¡Sí! Puedes descargar los playbacks en cualquier dispositivo: celular, computadora, tablet. Y después transferirlos a un USB o CD para usar en la iglesia.",
    },
    {
      question: "¿Los playbacks son de buena calidad?",
      answer: "Todos los playbacks fueron seleccionados y probados para garantizar la máxima calidad de sonido. Son archivos en MP3 de alta definición, listos para uso profesional.",
    },
    {
      question: "¿Puedo grabarlos en un CD o en un USB?",
      answer: "¡Sí! Después de descargar los archivos, puedes grabarlos en CDs, USBs o cualquier otro dispositivo de almacenamiento para usar donde prefieras.",
    },
    {
      question: "¿La compra es segura?",
      answer: "¡100% segura! Utilizamos plataformas de pago confiables. Tus datos están encriptados y protegidos.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-background">
      <div className="container max-w-lg mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-foreground">
            Preguntas Frecuentes
          </h2>
        </div>

        {/* FAQ Accordion */}
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