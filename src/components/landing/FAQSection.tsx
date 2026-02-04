import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o upload das fotos?",
    answer: "Após a compra, você será direcionado(a) para um formulário seguro onde poderá fazer o upload das suas fotos (frontal e perfil) e responder a um breve questionário. É simples e rápido!"
  },
  {
    question: "Qual o prazo de entrega do relatório?",
    answer: "Seu relatório personalizado será entregue em seu e-mail em até 24 horas após o envio das suas fotos. Nossa IA trabalha rápido para você não esperar!"
  },
  {
    question: "Posso pedir revisão?",
    answer: "Nosso relatório é gerado com alta precisão. Caso tenha dúvidas, nossa equipe de suporte está à disposição. Oferecemos garantia de satisfação de 7 dias!"
  },
  {
    question: "É seguro pagar pela Kiwify?",
    answer: "Sim, a Kiwify é uma das maiores e mais seguras plataformas de pagamento do Brasil, garantindo a proteção total dos seus dados."
  },
  {
    question: "O que acontece com minhas fotos?",
    answer: "Sua privacidade é nossa prioridade absoluta. Suas fotos são deletadas automaticamente de nossos servidores após a análise e entrega do relatório."
  },
  {
    question: "O relatório serve para homens e mulheres?",
    answer: "Sim! O Visagismo AI possui algoritmos específicos para analisar traços masculinos e femininos, oferecendo recomendações personalizadas para todos os gêneros."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ainda tem{" "}
            <span className="text-gradient">alguma dúvida?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aqui estão as perguntas que mais recebemos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
