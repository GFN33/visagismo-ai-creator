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
    answer:
      "Após a compra, você receberá um link para preencher um questionário simples e fazer o upload de 3 fotos do seu rosto (frente, perfil esquerdo e perfil direito). As instruções são bem claras e você pode usar a câmera do seu celular.",
  },
  {
    question: "Qual o prazo de entrega do relatório?",
    answer:
      "Seu relatório personalizado será entregue no seu e-mail em até 24 horas úteis após o envio das fotos. Em alguns casos, pode ser ainda mais rápido!",
  },
  {
    question: "Posso pedir revisão?",
    answer:
      "Sim! Se você tiver alguma dúvida ou precisar de esclarecimentos sobre o seu relatório, nossa equipe está disponível por e-mail para ajudar. Queremos que você aproveite ao máximo sua análise.",
  },
  {
    question: "É seguro pagar pela Kiwify?",
    answer:
      "Sim, totalmente seguro! A Kiwify é uma das maiores plataformas de pagamento do Brasil, com certificação SSL e criptografia de ponta. Seus dados estão 100% protegidos.",
  },
  {
    question: "O relatório serve para homens e mulheres?",
    answer:
      "Sim! O Visagismo AI analisa as proporções faciais de qualquer pessoa, oferecendo recomendações personalizadas de cabelo, barba (para homens), maquiagem (para mulheres) e estilo em geral.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "Se por qualquer motivo você não ficar satisfeito(a) com o relatório, basta enviar um e-mail em até 7 dias após a compra e devolvemos 100% do seu dinheiro. Sem burocracia.",
  },
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
            Perguntas{" "}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Relatório Visagismo AI
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
