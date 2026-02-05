import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, MessageCircle, Play, ArrowRight, Star } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 relative overflow-hidden flex flex-col items-center justify-center py-20 px-4">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none opacity-60" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />

      <div className="container max-w-3xl relative z-10 text-center">
        
        {/* Ícone de Sucesso */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
        >
          <CheckCircle className="w-12 h-12 text-green-500" />
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-6 font-display"
        >
          Parabéns! Você tomou a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
            Decisão Certa.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-lg mb-12 max-w-xl mx-auto"
        >
          Seu pedido foi confirmado com sucesso. O protocolo de Visagismo AI já está sendo preparado para você.
        </motion.p>

        {/* --- VÍDEO DE BOAS VINDAS (PLACEHOLDER) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative aspect-video w-full bg-slate-900 rounded-2xl border border-amber-500/20 shadow-2xl overflow-hidden mb-12 group cursor-pointer"
        >
          {/* Aqui você colocará seu vídeo real (iframe do Youtube/Vimeo/Panda) futuramente */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
            <div className="w-20 h-20 bg-amber-500/90 rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_rgba(245,158,11,0.5)] group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-left">
             <p className="text-white font-bold text-lg drop-shadow-md">Importante: Assista antes de começar</p>
             <p className="text-amber-200 text-sm">Mensagem do Fundador</p>
          </div>
          <img src="/imagens/hero.png" alt="Cover" className="w-full h-full object-cover opacity-50 -z-10" />
        </motion.div>

        {/* --- PASSOS FINAIS --- */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          
          {/* Passo 1: Email */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-slate-900/50 p-6 rounded-2xl border border-white/5 hover:border-amber-500/20 transition-colors"
          >
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-4 text-amber-400">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">1. Verifique seu E-mail</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Enviamos seus dados de acesso para o e-mail cadastrado. Procure por <strong>"Visagismo AI"</strong> (cheque também a caixa de spam/promoções).
            </p>
          </motion.div>

          {/* Passo 2: Grupo VIP (Community/Upsell) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-slate-900/80 to-green-950/20 p-6 rounded-2xl border border-green-500/20 hover:border-green-500/40 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-2">
              <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide">Recomendado</span>
            </div>
            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 text-green-500">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">2. Entre no Grupo VIP</h3>
            <p className="text-slate-400 text-sm mb-4">
              Receba dicas exclusivas de estilo e atualizações da plataforma em primeira mão.
            </p>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-500/20"
              onClick={() => window.open("https://whatsapp.com", "_blank")} // Coloque seu link do grupo aqui
            >
              Entrar no Grupo VIP <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

        </div>
        
        <div className="mt-16 text-slate-600 text-sm">
           &copy; 2026 QuantumEra. Todos os direitos reservados.
        </div>

      </div>
    </div>
  );
};

export default ThankYou;