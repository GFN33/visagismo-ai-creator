import { motion } from "framer-motion";
import { Mail, ArrowRight, Scan, Cpu, BarChart3, ShieldCheck, CheckCircle2 } from "lucide-react";

const ThankYou = () => {
  // Passos da "Espera Estratégica" para gerar dopamina
  const processingSteps = [
    { icon: <Scan className="w-5 h-5" />, text: "Calibragem de 120 pontos nodais faciais", delay: 0.5 },
    { icon: <Cpu className="w-5 h-5" />, text: "Análise de proporção áurea e terços faciais", delay: 1.0 },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Geração de diagnóstico morfológico", delay: 1.5 },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Criptografia e exportação do Manual PDF", delay: 2.0 },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 relative overflow-hidden flex flex-col items-center justify-center py-20 px-4">
      
      {/* Fundo de Autoridade Tech */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container max-w-3xl relative z-10 text-center">
        
        {/* Status de Escaneamento */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Escaneamento Biométrico em Andamento
        </motion.div>

        {/* Headline de Poder */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 font-display leading-tight"
        >
          Análise Iniciada. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            Aguarde a Decodificação.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Nossa IA está processando sua imagem agora. Para garantir a precisão de uma consultoria de alto padrão, o sistema levará cerca de <strong>24h</strong> para gerar seu relatório completo.
        </motion.p>

        {/* --- VISUAL DE PROCESSAMENTO (DOPAMINA) --- */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/5 p-8 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-800 overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 300, ease: "linear" }} // 5 minutos de animação sutil
              className="h-full bg-gradient-to-r from-amber-500 to-amber-200 w-full"
            />
          </div>

          <div className="grid gap-6">
            {processingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: step.delay }}
                className="flex items-center gap-4 text-left group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-amber-500 group-hover:border-amber-500/30 transition-all">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-200">{step.text}</p>
                  <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: step.delay }}
                      className="h-full bg-amber-500/40"
                    />
                  </div>
                </div>
                <CheckCircle2 className="w-5 h-5 text-green-500/50" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- INSTRUÇÃO FINAL --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="bg-amber-500/5 border border-amber-500/20 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 text-left"
        >
          <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-500 shrink-0">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Onde está meu Manual?</h3>
            <p className="text-slate-400 text-sm">
              O PDF final será enviado para o seu e-mail. Procure por <strong>"Visagismo AI"</strong>. Se não encontrar, verifique sua caixa de Spam.
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-amber-500 hidden md:block" />
        </motion.div>
        
        <div className="mt-16 text-slate-600 text-xs tracking-widest uppercase">
           &copy; 2026 QuantumEra &bull; Tecnologia de Visagismo Computacional
        </div>

      </div>
    </div>
  );
};

export default ThankYou;