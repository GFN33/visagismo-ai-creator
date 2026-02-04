import { motion } from "framer-motion";
import { AlertCircle, HelpCircle, Frown, Lightbulb, ArrowRight } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    text: "Cortes de cabelo que não combinam com seu rosto",
  },
  {
    icon: HelpCircle,
    text: "Dificuldade em definir seu estilo pessoal",
  },
  {
    icon: Frown,
    text: "Insegurança sobre o que valoriza sua imagem",
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
              Cansado(a) de{" "}
              <span className="text-gradient">tentar e errar</span>
              <br />
              com sua imagem?
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              Você não está sozinho(a). Milhares de pessoas passam anos testando
              estilos, cores e cortes sem encontrar o que realmente funciona.
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
                Visagismo AI oferece clareza e direção
              </h4>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Utilizando inteligência artificial avançada, analisamos as
                proporções únicas do seu rosto para criar recomendações
                personalizadas que realmente funcionam para você.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Análise científica das suas proporções faciais",
                  "Recomendações personalizadas de corte e cor",
                  "Guia completo de estilo que combina com você",
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
