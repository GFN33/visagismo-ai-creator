import { motion } from "framer-motion";
import { 
  Scan, 
  Scissors, 
  Palette, 
  Sparkles, 
  User, 
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const benefits = [
  {
    icon: Scan,
    title: "Seu Rosto Mapeado",
    description: "Você vai entender por que alguns cortes funcionam e outros não",
  },
  {
    icon: Scissors,
    title: "O Corte Certo pra Você",
    description: "Chegue no salão sabendo exatamente o que pedir",
  },
  {
    icon: Palette,
    title: "Suas Cores Ideais",
    description: "Descubra as cores que fazem você brilhar",
  },
  {
    icon: Sparkles,
    title: "Make que Valoriza",
    description: "Técnicas simples para destacar sua beleza natural",
  },
  {
    icon: User,
    title: "Seu Estilo Único",
    description: "Encontre o visual que é a sua cara — de verdade",
  },
  {
    icon: CheckCircle2,
    title: "Próximos Passos",
    description: "Um plano prático para você começar sua transformação",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-28 gradient-section">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <img
                src="https://placehold.co/600x400"
                alt="Relatório Visagismo AI"
                className="w-full max-w-md mx-auto rounded-2xl shadow-medium"
              />
              
              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -top-4 -right-4 lg:right-0 bg-card rounded-xl p-3 shadow-soft border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">PDF Premium</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -bottom-4 -left-4 lg:left-0 bg-card rounded-xl p-3 shadow-soft border border-border"
              >
                <p className="text-sm font-medium text-foreground">📄 +30 páginas</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Olha só o que você vai{" "}
              <span className="text-gradient">receber</span>
              <br />
              no seu relatório:
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Mais de 30 páginas feitas especialmente para você, com tudo que 
              precisa saber para transformar sua imagem.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border hover:shadow-soft transition-shadow"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              variant="hero" 
              size="lg" 
              className="group w-full sm:w-auto"
              asChild
            >
              <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                <span className="text-sm sm:text-base">Quero Descobrir Minha Imagem Ideal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
