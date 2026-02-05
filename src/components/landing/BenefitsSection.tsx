import { motion } from "framer-motion";
import { Brain, FileText, Crown, Sparkles } from "lucide-react";

// --- DEFINIÇÕES DE DADOS E ANIMAÇÃO (FORA DO COMPONENTE) ---
// Isso evita erros de recriação e leitura da variável variants

const features = [
  {
    icon: <Brain className="w-8 h-8 text-amber-400" />,
    title: "Tecnologia de Precisão Algorítmica",
    description: "Esqueça o 'achismo'. Nossa IA mapeia 120 pontos geométricos do seu rosto para entregar uma análise fundamentada em dados, não em opiniões.",
  },
  {
    icon: <FileText className="w-8 h-8 text-amber-400" />,
    title: "Dossiê Estratégico Executivo",
    description: "Muito além de um PDF. Um manual de instruções da sua imagem. Cortes, barbas e óculos alinhados milimetricamente aos seus objetivos.",
  },
  {
    icon: <Crown className="w-8 h-8 text-amber-400" />,
    title: "Ativo de Valor Vitalício",
    description: "Um investimento único para um conhecimento permanente. Domine as regras do seu jogo visual para sempre e pare de gastar dinheiro à toa.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- COMPONENTE PRINCIPAL ---

const BenefitsSection = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Luzes de fundo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-700/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-amber-400 mb-4"
          >
             <Sparkles className="w-5 h-5" />
             <span className="text-sm font-medium uppercase tracking-wider">O Protocolo Visagismo AI</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-50 mb-6 font-display"
          >
            Não é Mágica. É a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Ciência da Sua Melhor Versão.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Transformamos a complexidade dos seus traços em um plano de ação claro. 
            Receba o conhecimento de uma consultoria de alto padrão, condensado e pronto para aplicar.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Linha de conexão (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent hidden md:block -z-10"></div>

          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-8 rounded-[2rem] border border-amber-500/10 hover:border-amber-500/40 transition-all duration-500 shadow-[0_0_30px_-15px_rgba(0,0,0,1)] hover:shadow-[0_0_50px_-15px_rgba(245,158,11,0.2)] backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/0 via-amber-500/0 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                <div className="relative w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/60 transition-colors shadow-lg shadow-amber-500/5">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-amber-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;