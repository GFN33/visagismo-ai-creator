import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, ArrowRight, Sparkles, Timer } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const features = [
  "Análise Facial Completa com IA (120 pontos)",
  "Indicação do Corte de Cabelo Perfeito",
  "Análise de Barba e Acessórios",
  "Dicas de Maquiagem para seu formato",
  "Coloração Pessoal (Sua Paleta Ideal)",
  "Relatório PDF Premium (+30 páginas)",
  "Acesso Vitalício ao material",
  "Bônus: Guia de Estilo e Imagem",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 lg:py-28 gradient-section relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sua nova imagem custa menos que <br />
            <span className="text-gradient-gold font-display italic">
               uma pizza no fim de semana
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visagistas cobram R$ 1.500,00 por essa análise. <br/>
            Nossa IA democratizou sua beleza por um valor simbólico.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative group">
            {/* Efeito de brilho pulsante atrás do card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            {/* Badge Flutuante */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-full text-center">
              <span className="px-6 py-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-sm font-bold shadow-lg flex items-center justify-center gap-2 w-max mx-auto uppercase tracking-wide">
                <Sparkles className="w-4 h-4" />
                Oferta Exclusiva Hoje
              </span>
            </div>

            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-2xl border border-primary/10 relative overflow-hidden z-10">
              
              {/* Preço */}
              <div className="text-center mb-8 mt-4">
                <p className="text-muted-foreground font-medium mb-1">
                  De <span className="line-through text-red-400">R$ 497,00</span> por apenas:
                </p>
                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-5xl lg:text-6xl font-bold text-foreground">
                    R$ 27,90
                  </span>
                  <span className="text-lg text-muted-foreground mb-2">/único</span>
                </div>
                <div className="bg-primary/10 rounded-lg py-2 px-4 inline-block mt-2">
                  <p className="text-primary text-sm font-semibold">
                    Economize 94% nesta oferta
                  </p>
                </div>
              </div>

              {/* Features com ícones mais destacados */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    </div>
                    <span className="text-foreground/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                variant="gold" 
                size="xl" 
                className="w-full group text-lg h-14 animate-pulse-subtle" // Criar animação suave no CSS global
                asChild
              >
                <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                  QUERO DESCOBRIR MINHA VERSÃO
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                </a>
              </Button>

              {/* Scarcity Trigger */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-amber-600 font-medium">
                <Timer className="w-4 h-4" />
                <span>O valor pode subir a qualquer momento</span>
              </div>

              {/* Guarantee */}
              <div className="mt-6 pt-6 border-t border-border flex items-center justify-center gap-2">
                <Shield className="w-5 h-5 text-muted-foreground" />
                <p className="text-xs text-muted-foreground text-center">
                  Risco Zero: <span className="font-bold text-foreground">Garantia de 7 dias</span>.<br/>
                  Não gostou? Devolvemos 100% do dinheiro.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;