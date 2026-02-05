import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, CheckCircle, Star } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] flex flex-col items-center justify-center pt-10 pb-20">
      
      {/* --- BACKGROUND LUXURY --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Luz Dourada Superior (Spotlight) */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full opacity-60" />
        
        {/* Luzes Laterais Sutis */}
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-amber-600/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full" />
        
        {/* Grid Sutil (Texture) */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center">
        
        {/* --- 1. A "CAPA" (LOGO GRANDE) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 relative"
        >
          {/* Brilho atrás do Logo */}
          <div className="absolute inset-0 bg-amber-500/20 blur-3xl rounded-full transform scale-150 opacity-40" />
          
          <img 
            src="/imagens/logo.png" 
            alt="Visagismo AI Logo" 
            className="relative z-10 h-32 md:h-40 w-auto object-contain drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]"
          />
        </motion.div>

        {/* --- BARRA DE STATUS (Escassez/Novidade) --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-2 text-sm text-amber-300 bg-amber-950/30 px-5 py-1.5 rounded-full border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] mb-10 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <span className="font-medium tracking-widest uppercase text-[10px] md:text-xs">
            Tecnologia 2.0 Disponível
          </span>
        </motion.div>

        {/* --- CONTEÚDO PRINCIPAL --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-6xl">
          
          {/* ESQUERDA: Copy & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
              <span className="text-sm font-medium text-amber-200/80 tracking-wide uppercase">
                O Segredo da Imagem Harmônica
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-50 leading-[1.1] mb-6 font-display tracking-tight">
              Sua Melhor Versão <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 drop-shadow-sm">
                Revelada com IA.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Elimine a dúvida do "será que combina comigo?". Nossa IA analisa 120 pontos do seu rosto e entrega o manual exato para realçar sua beleza natural.
            </p>

            {/* CTA LUXO */}
            <div className="flex flex-col w-full sm:w-auto gap-4">
              <Button 
                size="xl" 
                className="group relative w-full sm:w-auto h-16 px-10 text-lg bg-green-600 hover:bg-green-700 text-white 
                shadow-[0_0_40px_-10px_rgba(34,197,94,0.6)] hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.8)] 
                border-t border-white/20 transition-all duration-300 overflow-hidden"
                asChild
              >
                <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                  {/* Brilho Passante no Botão */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <span className="font-bold tracking-wide">QUERO MINHA ANÁLISE</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" /> Entrega em até 24h
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" /> +10k Análises Feitas
                </span>
              </div>
            </div>

            {/* --- 2. PROVA SOCIAL (MISTO HOMEM/MULHER) --- */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-4 mt-12 bg-slate-900/50 p-3 rounded-2xl border border-white/5 backdrop-blur-sm hover:border-amber-500/30 transition-colors"
            >
               <div className="flex -space-x-3">
                {/* MIX DE AVATARES (Homens e Mulheres) */}
                {[
                  "https://i.pravatar.cc/100?img=5",  // Mulher
                  "https://i.pravatar.cc/100?img=11", // Homem
                  "https://i.pravatar.cc/100?img=9",  // Mulher
                  "https://i.pravatar.cc/100?img=59"  // Homem
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden ring-2 ring-amber-500/20">
                    <img src={src} alt={`Cliente ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Mais de <strong className="text-slate-200">1.000 aprovações</strong>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* DIREITA: Visual High-Tech */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative perspective-1000 hidden lg:block"
          >
            {/* Efeito Glow Fundo */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent blur-[80px] -z-10 rounded-full" />

            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(245,158,11,0.3)] border border-amber-500/20 bg-slate-900/80 backdrop-blur-md group">
              <img
                src="https://placehold.co/600x700/0f172a/ffffff?text=Interface+Visagismo+AI" 
                alt="App Visagismo"
                className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-90" />
              
              {/* Scanner Line Animation */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,1)] animate-[scan_3s_linear_infinite]" />
              
              {/* Card Flutuante "Resultado" */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-8 left-8 right-8 bg-slate-950/90 backdrop-blur-xl p-5 rounded-xl border border-amber-500/30 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-bold text-amber-200 uppercase tracking-widest">Análise Concluída</span>
                  </div>
                  <span className="text-xs text-slate-500">120 pontos</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-amber-600 w-full animate-[width_1s_ease-out]" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;