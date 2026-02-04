import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, ArrowRight, Sparkles } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const features = [
  "Análise Facial Completa com IA",
  "Sugestões de Corte e Cor de Cabelo",
  "Orientações para Barba (se aplicável)",
  "Dicas de Maquiagem e Acessórios",
  "Paleta de Cores Personalizada",
  "Plano de Ação Prático",
  "Relatório em PDF Premium (+30 páginas)",
  "Suporte por E-mail",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 gradient-section">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pronta(o) para se ver de um{" "}
            <span className="text-gradient-gold font-display italic">
              jeito diferente?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma consultoria presencial com um visagista custa em média R$ 1.500.
            <br />
            Com a IA, você tem a mesma precisão — por uma fração do investimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
              <div className="px-4 py-1 gradient-gold rounded-full text-sm font-semibold shadow-gold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Oferta Especial
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-medium border-2 border-primary/20 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 gradient-primary opacity-5 rounded-full blur-3xl" />

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-muted-foreground line-through mb-2">
                  De R$ 497,00
                </p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-lg text-muted-foreground">12x de</span>
                  <span className="text-5xl lg:text-6xl font-bold text-gradient">
                    R$ 19,99
                  </span>
                </div>
                <p className="text-muted-foreground">
                  ou <span className="font-semibold text-foreground">R$ 197,00</span> à vista
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="gold" 
                size="xl" 
                className="w-full group"
                asChild
              >
                <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  Sim! Quero Transformar Minha Imagem Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              {/* Guarantee */}
              <div className="mt-6 flex items-center justify-center gap-2 text-center">
                <Shield className="w-5 h-5 text-primary" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Garantia de 7 dias
                  </span>{" "}
                  ou seu dinheiro de volta
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <span>🔒 Pagamento Seguro</span>
                <span>📱 Checkout Kiwify</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
