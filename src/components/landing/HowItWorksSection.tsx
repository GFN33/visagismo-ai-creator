import { motion } from "framer-motion";
import { Camera, ScanFace, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { KIWIFY_CHECKOUT_URL } from "@/lib/config";

const steps = [
  {
    icon: Camera,
    title: "1. Envie sua Foto",
    description: "Tire uma selfie simples com seu celular. Não precisa ser profissional, apenas com boa iluminação.",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: ScanFace,
    title: "2. Análise IA",
    description: "Nossa Inteligência Artificial escaneia 120 pontos do seu rosto para identificar seu formato e proporções.",
    color: "from-amber-500 to-amber-700",
  },
  {
    icon: BookOpen,
    title: "3. Receba a Análise",
    description: "Em até 24h, seu relatório personalizado chega no seu e-mail com todas as recomendações.",
    color: "from-amber-600 to-amber-800",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#020617] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-bold text-amber-200 tracking-wider uppercase">Processo em 3 Etapas</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-6">
            Do seu celular para a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              sua melhor versão
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Sem questionários chatos ou espera de dias. O futuro da consultoria de imagem é instantâneo e preciso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative max-w-6xl mx-auto">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-slate-800 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent w-1/2 mx-auto blur-[1px]" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative z-10 group"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-amber-500/30 transition-all duration-300 hover:bg-slate-900/80 h-full flex flex-col items-center text-center group-hover:-translate-y-2">
                
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} p-[2px] shadow-lg shadow-black/50`}>
                    <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-50" />
                       <step.icon className="w-10 h-10 text-amber-100 relative z-10 drop-shadow-md" />
                    </div>
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-amber-500 text-amber-950 font-bold flex items-center justify-center border-4 border-slate-900 z-20">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.8 }}
           className="mt-16 text-center"
        >
          <Button 
            className="bg-transparent hover:bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:border-amber-500 px-8 py-6 rounded-full transition-all duration-300"
            asChild
          >
             <a href={KIWIFY_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2">
               Começar Minha Análise Agora
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;