import { motion } from "framer-motion";
import { AlertCircle, HelpCircle, Frown, Lightbulb, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "Você já cortou o cabelo e se arrependeu depois?",
  },
  {
    icon: HelpCircle,
    text: "Fica na dúvida se aquela cor ou estilo combina com você?",
  },
  {
    icon: Frown,
    text: "Sente que poderia estar mais bonita(o), mas não sabe por onde começar?",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Você merece{" "}
              <span className="text-gradient">parar de adivinhar</span>
              <br />
              e começar a acertar
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Sei como é frustrante gastar dinheiro em salão e sair insatisfeita(o). 
              Ou comprar roupas que pareciam incríveis na loja, mas em você... não ficaram tão bem assim.
            </p>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-destructive/5 border border-destructive/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <p className="text-foreground font-medium">{problem.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solution Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-medium border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">A Solução</h3>
              </div>

              <h4 className="text-xl font-semibold text-gradient mb-4">
                Agora você pode ter certeza antes de mudar
              </h4>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Com o Visagismo AI, você descobre exatamente o que valoriza 
                seu rosto antes de ir ao salão. Nada de achismo — é ciência 
                aplicada à sua beleza única.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Você vai saber exatamente qual corte valoriza seu rosto",
                  "Descubra as cores que iluminam sua pele",
                  "Receba um guia prático do SEU estilo ideal",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full gradient-gold flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Descobrir minha imagem ideal
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full gradient-primary rounded-3xl opacity-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
