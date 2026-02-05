import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "O relatório serve para o meu formato de rosto?",
    answer: "Absolutamente. Nossa IA foi treinada com milhares de faces de todas as etnias e formatos. Ela identifica nuances que o olho humano muitas vezes perde, garantindo uma recomendação personalizada para VOCÊ, seja seu rosto redondo, quadrado, oval ou misto."
  },
  {
    question: "Como envio minha foto? É complicado?",
    answer: "Zero complicado. Você precisa apenas de uma selfie frontal bem iluminada (pode ser feita no celular mesmo). Após o pagamento, você recebe um link seguro para fazer o upload em segundos."
  },
  {
    question: "E se eu não gostar do resultado?",
    answer: "Nós garantimos a qualidade técnica da análise. Mas se por qualquer motivo você sentir que o material não agregou valor, você tem 7 dias de garantia incondicional. Basta um e-mail e devolvemos 100% do seu dinheiro."
  },
  {
    question: "O que exatamente eu vou receber?",
    answer: "Você recebe um Dossiê Digital (PDF) completo contendo: Análise do seu formato de rosto, cortes de cabelo ideais (e os proibidos!), guia de barba/acessórios, e sua paleta de cores pessoal para roupas. É um manual completo da sua imagem."
  },
  {
    question: "Quanto tempo demora para chegar?",
    answer: "Diferente de uma consultoria presencial que leva semanas, nossa IA processa seus dados rapidamente. Você receberá seu dossiê completo no e-mail cadastrado em até 24 horas após o envio das fotos."
  },
  {
    question: "É seguro pagar? Meus dados estão protegidos?",
    answer: "Sim. Utilizamos a Kiwify para processar os pagamentos, que possui criptografia de ponta. Além disso, suas fotos são usadas estritamente para a análise e deletadas dos nossos servidores logo após a geração do relatório."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-slate-900 to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-white/10 mb-6">
            <HelpCircle className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-slate-300">Dúvidas Frequentes</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            Ainda com <span className="text-amber-500">dúvidas?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Não deixe nada te impedir de alcançar sua melhor versão.
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
                className="bg-slate-900/50 border border-white/5 rounded-2xl px-6 hover:border-amber-500/30 transition-colors data-[state=open]:border-amber-500/50 data-[state=open]:bg-slate-900"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-slate-200 py-6 hover:text-amber-400 hover:no-underline transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-slate-400 pb-6 leading-relaxed">
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