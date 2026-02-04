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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
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
            Sua Transformação em{" "}
            <span className="text-gradient">3 Passos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sem complicação. Receba seu relatório personalizado de forma rápida e segura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border hover:shadow-medium transition-shadow h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold shadow-primary">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6`}
                >
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
