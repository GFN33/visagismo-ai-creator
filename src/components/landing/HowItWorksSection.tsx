import { motion } from "framer-motion";
import { ShoppingCart, FileText, Mail, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Adquira seu Relatório",
    description: "Faça a compra segura pelo nosso checkout Kiwify",
    color: "from-primary to-primary/80",
  },
  {
    icon: FileText,
    title: "Preencha o Questionário",
    description: "Responda perguntas simples e envie suas fotos",
    color: "from-accent to-accent/80",
  },
  {
    icon: Mail,
    title: "Receba seu PDF",
    description: "Relatório completo entregue no seu e-mail",
    color: "from-primary to-accent",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Processo Simples</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            É tão simples que você faz{" "}
            <span className="text-gradient">do seu celular</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Em menos de 5 minutos você envia suas fotos. Em até 24 horas, seu relatório 
            completo chega no seu e-mail. Simples assim.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft border border-border hover:shadow-medium transition-shadow h-full">
                {/* Step number */}
                <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-primary text-sm sm:text-base">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 sm:mb-6`}
                >
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
