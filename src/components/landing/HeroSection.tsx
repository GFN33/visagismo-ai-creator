import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-12 lg:pt-28">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Visagismo <span className="text-gradient">AI</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-green-700 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Vagas abertas agora
          </div>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                IA treinada com os maiores visagistas do mundo
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Pare de errar no corte. <br/>Descubra sua beleza em
              <span className="text-gradient block mt-2">Segundos com IA.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Imagine a confiança de se olhar no espelho e ter certeza que seu visual é perfeito para você. Nossa Inteligência Artificial analisa 120 pontos do seu rosto para revelar seu corte, cor e estilo ideal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
                
                {/* BOTÃO HERO VERDE */}
                <Button 
                  size="xl" 
                  className="group w-full sm:w-auto h-14 text-lg bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 animate-pulse-green"
                  asChild
                >
                  <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Quero Minha Análise Agora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                  </a>
                </Button>
                
                <p className="text-xs text-muted-foreground mt-3 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" /> Compra segura e entrega em 24h
                </p>
              </div>
            </div>

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
                    className="w-10 h-10 rounded-full border-2 border-background object-cover grayscale hover:grayscale-0 transition-all"
                  />
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">+2.500 rostos analisados</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarFilled key={i} />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://placehold.co/600x400" 
                alt="Análise facial com IA"
                className="w-full h-auto object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.5)] animate-scan" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 gradient-gold rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Relatório Premium</p>
                  <p className="text-xs text-muted-foreground">+30 Páginas Personalizadas</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StarFilled = () => (
  <svg className="w-3 h-3 text-amber-400 fill-amber-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default HeroSection;