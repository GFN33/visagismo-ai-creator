import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Empresária",
    image: null,
    content:
      "Finalmente entendi porque alguns cortes funcionavam e outros não. O relatório me deu clareza total sobre meu tipo de rosto e as cores ideais. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Advogado",
    image: null,
    content:
      "Sempre tive dúvidas sobre barba e cabelo. O Visagismo AI me mostrou exatamente o que valoriza minhas feições. Minha esposa adorou o resultado!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Designer",
    image: null,
    content:
      "Como profissional da área visual, fiquei impressionada com a precisão da análise. O relatório é super completo e as dicas são práticas. Vale cada centavo!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que Nossos Clientes{" "}
            <span className="text-gradient">Estão Dizendo</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de pessoas já transformaram sua imagem com o Visagismo AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-3xl p-8 shadow-soft border border-border h-full hover:shadow-medium transition-shadow">
                {/* Quote icon */}
                <div className="absolute -top-3 right-8">
                  <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center shadow-gold">
                    <Quote className="w-5 h-5" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "2.500+", label: "Clientes Satisfeitos" },
            { value: "4.9", label: "Avaliação Média" },
            { value: "97%", label: "Taxa de Satisfação" },
            { value: "24h", label: "Entrega Média" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
