import { motion } from "framer-motion";
import { AlertTriangle, Ban, XCircle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const problems = [
  {
    icon: Ban,
    title: "O ciclo da tentativa e erro",
    text: "Cortes que ficam ótimos na referência, mas não encaixam no seu rosto.",
  },
  {
    icon: XCircle,
    title: "Insegurança constante",
    text: "Aquela sensação de olhar no espelho e sentir que 'algo está errado'.",
  },
  {
    icon: AlertTriangle,
    title: "Dinheiro desperdiçado",
    text: "Salões caros, produtos de marca, e zero resultado na sua autoestima.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#020617] relative overflow-hidden">
      {/* Luz ambiente de fundo (Vermelho sutil para perigo/dor) */}
      <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Luz ambiente de fundo (Dourado para solução) */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* --- LADO DA DOR (PROBLEM) --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               <span className="text-xs font-bold text-red-400 tracking-widest uppercase">O Custo Invisível</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-6 leading-tight">
              Por que continuar <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                jogando na sorte?
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Sua imagem é seu cartão de visita. Quando você ignora suas proporções naturais, transmite insegurança sem perceber. Não é sobre beleza, é sobre <strong className="text-slate-200">estratégia</strong>.
            </p>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex items-start gap-4 p-5 rounded-xl bg-red-950/10 border border-red-500/10 hover:border-red-500/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <problem.icon className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                  </div>
                  <div>
                    <h4 className="text-slate-200 font-semibold mb-1 group-hover:text-red-200 transition-colors">{problem.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{problem.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* --- LADO DA SOLUÇÃO (BRIDGE) --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Efeito Glow atrás do card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-[2.5rem] blur opacity-20" />

            <div className="bg-slate-900/80 backdrop-blur-xl rounded-[2rem] p-8 sm:p-10 lg:p-12 border border-amber-500/20 relative overflow-hidden">
              
              {/* Badge Topo */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-100">Visagismo AI</h3>
                    <p className="text-xs text-amber-400 font-medium uppercase tracking-wide">Tecnologia Premium</p>
                  </div>
                </div>
                {/* Visual Tech Element */}
                <div className="hidden sm:flex gap-1">
                   {[1,2,3].map(i => <div key={i} className="w-1 h-6 bg-slate-800 rounded-full" />)}
                </div>
              </div>

              <h4 className="text-2xl font-bold text-white mb-4">
                Pare de adivinhar. <br/> Comece a <span className="text-amber-400">Impressionar.</span>
              </h4>

              <p className="text-slate-400 mb-8 leading-relaxed">
                Descubra a matemática por trás da sua melhor versão. Nossa IA analisa 120 pontos do seu rosto para entregar um dossiê que nenhum profissional humano conseguiria fazer por este preço.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Harmonização baseada na Proporção Áurea",
                  "Cortes validados para seu formato de rosto",
                  "Guia de estilo que impõe respeito",
                  "Economia vitalícia de erros no salão"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-300 font-medium group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-all group border-b border-amber-500/30 pb-1 hover:border-amber-400"
              >
                Descobrir minha imagem ideal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              {/* Textura de fundo do card */}
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;