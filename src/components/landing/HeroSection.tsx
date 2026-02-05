import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero flex items-center">
      {/* Background Ambient Light (Dourado Suave no Fundo Preto) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-amber-500/10 blur-[100px]" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full bg-amber-600/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-12 lg:pt-32">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-16"
        >
          {/* LOGO DA MARCA (Imagens) */}
          <div className="flex items-center gap-2">
            <img 
              src="/imagens/logo.png" 
              alt="Visagismo AI" 
              className="h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]"
            />
          </div>
          
          <div className="hidden sm:flex items-center gap-2 text-sm text-green-400 bg-green-900/20 px-4 py-1.5 rounded-full border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-medium tracking-wide">Análise Disponível Agora</span>
          </div>
        </motion.nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-200 tracking-wide">
                IA treinada com visagistas de elite
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6 font-display">
              Pare de errar no corte. <br/>
              Descubra sua beleza em <br/>
              <span className="text-gradient-gold drop-shadow-sm">Segundos com IA.</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Não deixe um corte errado sabotar sua confiança. Nossa IA analisa 120 pontos do seu rosto para revelar a versão de você que impõe respeito.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="flex flex-col items-center lg:items-start w-full sm:w-auto">
                <Button 
                  size="xl" 
                  className="group w-full sm:w-auto h-16 px-8 text-lg bg-green-600 hover:bg-green-700 text-white shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_-5px_rgba(34,197,94,0.6)] transition-all duration-300 animate-pulse-green border-t border-white/20"
                  asChild
                >
                  <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                    Quero Minha Análise
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform ml-2" />
                  </a>
                </Button>
                
                <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground/80 justify-center lg:justify-start">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Compra Segura
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-amber-500" /> Entrega em 24h
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4 mt-12 justify-center lg:justify-start opacity-80 hover:opacity-100 transition-opacity"
            >
               <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-slate-800 flex items-center justify-center text-xs text-white font-bold">
                    <span className="opacity-50">User</span>
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarFilled key={i} />
                  ))}
                </div>
                <p className="text-xs font-medium text-muted-foreground mt-1">
                  <strong className="text-foreground">4.9/5</strong> de satisfação
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative perspective-1000"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-purple-500/0 blur-[60px] -z-10 rounded-full transform scale-75" />

            <div className="relative rounded-3xl overflow-hidden shadow-gold border border-amber-500/20 bg-card/50 backdrop-blur-sm">
              <img
                src="https://placehold.co/600x400/1e293b/ffffff?text=Analise+Facial+IA" 
                alt="Análise facial com IA"
                className="w-full h-auto object-cover opacity-90 animate-float"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
              <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-amber-400/50 shadow-[0_0_15px_rgba(251,191,36,0.8)] animate-scan" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-amber-500/30 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-sm">Relatório Premium</p>
                  <p className="text-[10px] text-amber-200/80 uppercase tracking-wider">Desbloqueado</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StarFilled = () => (
  <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400 drop-shadow-[0_0_2px_rgba(251,191,36,0.5)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default HeroSection;