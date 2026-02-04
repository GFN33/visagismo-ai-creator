import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-12 lg:pt-28">
        {/* Header */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Visagismo <span className="text-gradient">AI</span>
            </span>
          </div>
          <Button variant="outline-hero" size="sm" className="hidden sm:flex">
            Falar com Especialista
          </Button>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent-foreground">
                +2.500 pessoas já descobriram sua melhor versão
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Descubra a Imagem que{" "}
              <span className="text-gradient">Transmite sua Verdadeira Essência</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Maria, imagine a confiança de se olhar no espelho e ver um visual que finalmente harmoniza com quem você é. Use a precisão da IA para encontrar seu corte, cor e estilo ideal em 24h.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center lg:items-start">
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  asChild
                >
                  <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Quero Minha Transformação Agora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-2 text-center lg:text-left">
                  ⚡ Oferta por tempo limitado: Adicione consultoria express no checkout
                </p>
              </div>
              <Button variant="ghost" size="xl" className="text-muted-foreground">
                Como Funciona?
              </Button>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://placehold.co/40x40`}
                    alt={`Cliente ${i}`}
                    className="w-10 h-10 rounded-full border-2 border-background object-cover"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">+2.500 clientes</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-accent text-sm">★</span>
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-medium">
              <img
                src="https://placehold.co/600x400"
                alt="Análise facial com IA"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-soft border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Análise Completa</p>
                  <p className="text-sm text-muted-foreground">Em minutos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-4 -right-4 bg-card rounded-2xl px-4 py-3 shadow-soft border border-border"
            >
              <p className="text-sm font-medium text-foreground">🎯 97% Precisão</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
