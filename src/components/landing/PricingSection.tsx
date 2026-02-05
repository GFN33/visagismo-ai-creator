import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Shield, ArrowRight, Sparkles, Users, CreditCard, Star } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const features = [
  "Análise Geométrica Facial (120 Pontos)",
  "Dossiê Completo de Estratégia de Imagem",
  "Guia de Barba e Acessórios Otimizados",
  "Coloração Pessoal Digital (Sua Paleta)",
  "Harmonização de Traços e Proporção Áurea",
  "Acesso Vitalício ao Dossiê Premium",
  "Bônus: Manual de Posicionamento de Imagem",
  "Prioridade na Fila de Processamento",
];

const PricingSection = () => {
  // --- LÓGICA DE ESCASSEZ DE VAGAS (DECAIMENTO) ---
  const [spots, setSpots] = useState(9);

  useEffect(() => {
    // 1. Recupera ou Inicia as Vagas
    const storedSpots = localStorage.getItem("visagismo_spots");
    let currentSpots = storedSpots ? parseInt(storedSpots) : 9;
    
    // Se por acaso estiver zerado ou inválido, reseta para 9
    if (isNaN(currentSpots) || currentSpots < 2) currentSpots = 9;
    
    setSpots(currentSpots);

    // 2. Função de Decaimento Aleatório
    const decreaseSpots = () => {
      // Para de cair quando chega em 3 (escassez máxima sem esgotar)
      if (currentSpots <= 3) return;

      currentSpots -= 1;
      setSpots(currentSpots);
      localStorage.setItem("visagismo_spots", currentSpots.toString());

      // Agenda a próxima queda (entre 20s e 60s para parecer natural)
      const nextTime = Math.floor(Math.random() * (60000 - 20000 + 1) + 20000);
      timeoutId = setTimeout(decreaseSpots, nextTime);
    };

    // Define a primeira queda
    // Se acabou de entrar (9 vagas), cai a primeira vez mais rápido (10s) para dar susto
    const initialDelay = currentSpots === 9 ? 10000 : 30000;
    let timeoutId = setTimeout(decreaseSpots, initialDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  // Formata o número sempre com 2 dígitos (ex: 09, 08)
  const formattedSpots = spots.toString().padStart(2, "0");

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
          {/* ALERTA DE VAGAS LIMITADAS (COM DECAIMENTO) */}
          <div className="inline-flex items-center gap-2 bg-amber-950/30 border border-amber-500/30 text-amber-400 px-5 py-2 rounded-full font-bold mb-6 shadow-[0_0_20px_rgba(245,158,11,0.15)] animate-pulse">
            <Users className="w-4 h-4" />
            <span className="tracking-wide text-sm">
              CONSULTORIAS LIMITADAS: RESTANTE <span className="text-white text-base underline decoration-amber-500/50 underline-offset-4 mx-1">{formattedSpots}</span>
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-4">
            O investimento na sua <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 font-display italic">
               Assinatura Visual
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Uma consultoria presencial de visagismo custa em média R$ 2.500,00. <br/>
            Obtenha a mesma precisão técnica, instantaneamente, por uma fração do valor.
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
            {/* Efeito de borda brilhante animada Dourado Premium */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-amber-600 via-yellow-200 to-amber-600 rounded-[2.2rem] blur-sm opacity-40 group-hover:opacity-70 transition duration-500"></div>
            
            {/* Badge Flutuante */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 w-full text-center">
              <span className="px-6 py-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white text-sm font-bold shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 w-max mx-auto uppercase tracking-wide border border-amber-400/50">
                <Sparkles className="w-4 h-4 text-yellow-100" />
                Dossiê Completo + Bônus
              </span>
            </div>

            {/* CARD PRINCIPAL */}
            <div className="bg-slate-900/95 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 shadow-2xl relative overflow-hidden z-20 h-full border border-white/10">
              
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
                  <p className="text-amber-400/90 font-medium mt-3 text-sm tracking-wide">
                    Pagamento Único • Acesso Vitalício
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8" />

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 group/item">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-green-500 group-hover/item:border-green-500 transition-colors">
                      <Check className="w-3 h-3 text-green-500 group-hover/item:text-black transition-colors" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium group-hover/item:text-slate-100 transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* --- BOTÃO DE AÇÃO DOURADO (MID-TICKET) --- */}
              <Button 
                size="xl" 
                className="w-full group text-lg h-16 
                bg-gradient-to-b from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 
                text-slate-900 font-bold tracking-wide
                shadow-[0_0_30px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_0_40px_-5px_rgba(245,158,11,0.7)]
                border border-amber-300/50 active:scale-[0.98] transition-all duration-200 relative overflow-hidden"
                asChild
              >
                <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  {/* Brilho (Shimmer) Passante */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                  
                  <span className="relative z-20 flex items-center gap-2">
                    GARANTIR MINHA VAGA
                    <ArrowRight className="w-5 h-5 text-slate-900 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Button>

              {/* Garantia e Segurança */}
              <div className="mt-6 flex items-center justify-center gap-6">
                 <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-medium">Garantia Blindada de 7 Dias</span>
                 </div>
                 <div className="w-px h-4 bg-slate-700" />
                 <div className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors">
                    <CreditCard className="w-4 h-4" />
                    <span className="text-xs font-medium">Checkout Seguro</span>
                 </div>
              </div>

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