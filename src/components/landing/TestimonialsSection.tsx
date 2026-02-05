import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Empresária",
    image: "https://placehold.co/48x48",
    content:
      "Finalmente entendi porque alguns cortes funcionavam e outros não. O relatório me deu clareza total sobre meu tipo de rosto e as cores ideais. Recomendo demais!",
    rating: 5,
  },
  {
    name: "Carlos Eduardo",
    role: "Advogado",
    image: "https://placehold.co/48x48",
    content:
      "Sempre tive dúvidas sobre barba e cabelo. O Visagismo AI me mostrou exatamente o que valoriza minhas feições. Minha esposa adorou o resultado!",
    rating: 5,
  },
  {
    name: "Juliana Costa",
    role: "Designer",
    image: "https://placehold.co/48x48",
    content:
      "Como profissional da área visual, fiquei impressionada com a precisão da análise. O relatório é super completo e as dicas são práticas. Vale cada centavo!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pessoas reais que{" "}
            <span className="text-gradient">mudaram sua imagem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que elas dizem sobre a experiência com o Visagismo AI
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft border border-border h-full hover:shadow-medium transition-shadow">
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
                  <img
                    src={testimonial.image || `https://placehold.co/48x48`}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
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
          className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
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
