import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, ArrowRight, Sparkles, Timer, CreditCard, Star } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const features = [
  "Análise de Rosto (Formato + Proporções)",
  "Dossiê de Cortes de Cabelo Ideais",
  "Guia de Barba e Acessórios (Óculos/Bonés)",
  "Coloração Pessoal (Sua Paleta de Poder)",
  "Harmonização de Traços Naturais",
  "Acesso Vitalício ao Relatório Digital",
  "Bônus: Manual de Estilo Masculino",
  "Suporte para Dúvidas",
];

const PricingSection = () => {
  // --- LÓGICA DE TIMER PERSISTENTE ---
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    // Tenta recuperar o tempo final do localStorage
    const getEndTime = () => {
      const savedTime = localStorage.getItem('visagismo_offer_end');
      const now = new Date();
      
      // Se existe e ainda é futuro, usa ele
      if (savedTime && new Date(savedTime) > now) {
        return new Date(savedTime);
      }
      
      // Senão, cria novo tempo (15 min a partir de agora) e salva
      const newTime = new Date();
      newTime.setMinutes(newTime.getMinutes() + 15);
      localStorage.setItem('visagismo_offer_end', newTime.toISOString());
      return newTime;
    };

    const endTime = getEndTime();

    const timer = setInterval(() => {
      const now = new Date();
      const difference = endTime.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ minutes: 0, seconds: 0 });
        clearInterval(timer);
        // Opcional: Reiniciar o timer para criar ciclo de escassez
        // localStorage.removeItem('visagismo_offer_end'); 
      } else {
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#020617] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* Alerta de Escassez Real */}
          <div className="inline-flex items-center gap-2 bg-red-950/30 border border-red-500/30 text-red-400 px-4 py-2 rounded-full font-bold mb-6 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <Timer className="w-4 h-4" />
            <span>
              Oferta Especial encerra em: {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            O investimento para a sua <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 font-display italic">
               Melhor Versão
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Visagistas tradicionais cobram até R$ 2.000,00 por esta mesma análise. <br/>
            Com IA, entregamos precisão clínica por uma fração do valor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="relative group perspective-1000">
            {/* Efeito de borda brilhante animada */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600 rounded-[2.2rem] blur-sm opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            {/* Badge Flutuante */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-full text-center">
              <span className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white text-sm font-bold shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 w-max mx-auto uppercase tracking-wide border border-amber-400/50">
                <Sparkles className="w-4 h-4 text-yellow-100" />
                Plano Vitalício
              </span>
            </div>

            {/* CARD PRINCIPAL (Estilo Black Card) */}
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden z-20 h-full border border-white/10">
              
              {/* Textura sutil no card */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

              {/* Preço */}
              <div className="text-center mb-8 mt-4 relative">
                <p className="text-slate-500 font-medium mb-1 line-through text-sm">
                  De R$ 497,00 por
                </p>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-5xl lg:text-6xl font-bold text-slate-50 tracking-tight">
                    R$ 297<span className="text-2xl text-slate-400">,00</span>
                  </span>
                  <p className="text-green-400 font-semibold mt-2 text-sm bg-green-950/30 px-3 py-1 rounded-full border border-green-500/20">
                    À vista ou 12x de R$ 30,72
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-amber-500 group-hover/item:border-amber-500 transition-colors">
                      <Check className="w-3 h-3 text-amber-500 group-hover/item:text-black transition-colors" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium group-hover/item:text-slate-100 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Botão de Alta Conversão */}
              <Button 
                size="xl" 
                className="w-full group text-lg h-16 bg-green-600 hover:bg-green-700 text-white font-bold tracking-wide
                shadow-[0_0_20px_-5px_rgba(34,197,94,0.5)] hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.7)]
                border border-green-400/30 active:scale-[0.98] transition-all duration-200 relative overflow-hidden"
                asChild
              >
                <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                   {/* Efeito de brilho "passando" */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
                  
                  <span className="relative z-20 flex items-center gap-2">
                    QUERO MINHA ANÁLISE
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>

              {/* Garantia e Segurança */}
              <div className="mt-6 flex items-center justify-center gap-6">
                 <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-medium">Garantia de 7 Dias</span>
                 </div>
                 <div className="w-px h-4 bg-slate-700" />
                 <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-xs font-medium">Pagamento Seguro</span>
                 </div>
              </div>

              {/* Selo de Reviews */}
              <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none">
                 <Star className="w-24 h-24 text-white fill-white" />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;