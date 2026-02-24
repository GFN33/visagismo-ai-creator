import { motion } from "framer-motion";
import { Mail, ArrowRight, Scan, Cpu, BarChart3, ShieldCheck, CheckCircle2, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TALLY_FORM_URL } from "@/lib/config";

const ThankYou = () => {
  const processingSteps = [
    { icon: <Scan className="w-5 h-5" />, text: "Calibragem de 120 pontos nodais faciais", delay: 0.5 },
    { icon: <Cpu className="w-5 h-5" />, text: "Análise de proporção áurea e terços faciais", delay: 1.0 },
    { icon: <BarChart3 className="w-5 h-5" />, text: "Geração de diagnóstico morfológico", delay: 1.5 },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Criptografia e exportação do Manual PDF", delay: 2.0 },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 relative overflow-hidden flex flex-col items-center justify-center py-20 px-4">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container max-w-3xl relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          Acesso Confirmado: Visagismo AI
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6 font-display leading-tight"
        >
          Próximo Passo: <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            Envie sua Foto.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Para iniciar o escaneamento dos seus <strong>120 pontos nodais</strong>, precisamos que você envie sua foto agora através do nosso formulário seguro. Devido à complexidade, o sistema levará cerca de <strong>24h</strong> para gerar seu relatório.
        </motion.p>

        {/* --- BOTÃO DE AÇÃO PARA O TALLY --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <Button 
            size="xl" 
            className="group relative w-full sm:w-auto h-20 px-12 text-xl 
            bg-gradient-to-b from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 
            text-slate-900 font-extrabold tracking-tighter
            shadow-[0_0_50px_-10px_rgba(245,158,11,0.6)] hover:shadow-[0_0_60px_-10px_rgba(245,158,11,0.8)]
            border-2 border-amber-300/50 active:scale-[0.98] transition-all duration-200"
            asChild
          >
            <a href={TALLY_FORM_URL} className="flex items-center justify-center gap-4">
              <Camera className="w-6 h-6 animate-pulse" />
              <span>INICIAR ESCANEAMENTO BIOMÉTRICO</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
        </motion.div>

        {/* --- VISUAL DE PROCESSAMENTO --- */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/5 p-8 mb-12 shadow-2xl relative overflow-hidden text-left">
          <h3 className="text-amber-200 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Fluxo de Processamento Pós-Envio
          </h3>
          <div className="grid gap-6">
            {processingSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-center text-amber-500">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-300">{step.text}</p>
                  <div className="h-1 w-full bg-slate-800 rounded-full mt-2" />
                </div>
                <CheckCircle2 className="w-5 h-5 text-slate-700" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-slate-600 text-xs tracking-widest uppercase">
           &copy; 2026 QuantumEra &bull; Tecnologia de Visagismo Computacional
        </div>
      </div>
    </div>
  );
};

export default ThankYou;