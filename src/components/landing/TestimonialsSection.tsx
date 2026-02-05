import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Trophy, Users, Clock, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Arquiteto",
    image: "https://i.pravatar.cc/150?img=11",
    content:
      "Eu gastava rios de dinheiro em barbeiros caros e nunca ficava satisfeito. O relatório me mostrou que meu rosto precisava de mais volume nas laterais para equilibrar. Mudei o corte e a barba e, sem brincadeira, minha postura profissional mudou. Vale cada centavo.",
    rating: 5,
    verified: true,
  },
  {
    name: "Patrícia Lima",
    role: "Diretora de Marketing",
    image: "https://i.pravatar.cc/150?img=5",
    content:
      "Sempre tive medo de cortar o cabelo curto e me arrepender. A IA sugeriu um 'Long Bob' assimétrico baseado na minha mandíbula. Criei coragem e fiz. Resultado? Nunca recebi tantos elogios na empresa. É como ter um consultor de imagem no bolso.",
    rating: 5,
    verified: true,
  },
  {
    name: "Gabriel Torres",
    role: "Empreendedor",
    image: "https://i.pravatar.cc/150?img=59",
    content:
      "O que mais me impressionou não foi só o corte, mas a paleta de cores. Comecei a usar as cores sugeridas nas minhas reuniões e senti uma diferença real na forma como sou percebido. O material é muito denso e técnico, não é brincadeira.",
    rating: 5,
    verified: true,
  },
];

const stats = [
  { value: "+10k", label: "Rostos Analisados", icon: Users },
  { value: "4.9/5", label: "Nota Média", icon: Star },
  { value: "98%", label: "Aprovação", icon: Trophy },
  { value: "24h", label: "Entrega Rápida", icon: Clock },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      {/* Luzes de Fundo (Ambiente Premium) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.02] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-amber-500/20 mb-6 backdrop-blur-sm">
             <Sparkles className="w-4 h-4 text-amber-400" />
             <span className="text-sm font-bold text-amber-200 uppercase tracking-wider">Histórias Reais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 mb-6 font-display">
            Quem experimenta, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              não volta atrás.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Veja como o Visagismo AI está elevando o padrão de imagem e confiança de profissionais exigentes em todo o Brasil.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group h-full"
            >
              {/* Card Container com Efeito Vidro/Ouro */}
              <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/95 backdrop-blur-xl rounded-[2rem] p-8 
                              border border-amber-500/10 hover:border-amber-500/30 transition-all duration-500 
                              hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.15)] hover:-translate-y-2 h-full flex flex-col relative overflow-hidden">
                
                {/* Brilho Superior no Hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Ícone de Aspas Gigante no Fundo */}
                <div className="absolute top-6 right-8 text-amber-500/5 group-hover:text-amber-500/10 transition-colors pointer-events-none">
                  <Quote className="w-16 h-16 fill-current" />
                </div>

                {/* Estrelas */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
                    />
                  ))}
                </div>

                {/* Conteúdo */}
                <p className="text-slate-300 mb-8 leading-relaxed flex-grow text-sm sm:text-base relative z-10 font-light">
                  "{testimonial.content}"
                </p>

                {/* Footer: User Info */}
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-800 group-hover:ring-amber-500/50 transition-all shadow-lg"
                    />
                    {testimonial.verified && (
                       <div className="absolute -bottom-1 -right-1 bg-green-600 text-white rounded-full p-[3px] border-[3px] border-slate-950 shadow-md" title="Compra Verificada">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                       </div>
                    )}
                  </div>
                  <div>
                    <p className="font-bold text-slate-100 group-hover:text-amber-200 transition-colors text-lg">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                        {testimonial.role}
                      </p>
                      {testimonial.verified && (
                        <span className="text-[10px] bg-green-900/30 text-green-400 px-2 py-0.5 rounded border border-green-500/20 font-semibold">
                          Verificado
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* STATS BAR - Estilo Vidro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/60 backdrop-blur-lg rounded-[2.5rem] p-8 sm:p-12 border border-white/5 mx-auto max-w-5xl shadow-2xl relative overflow-hidden"
        >
          {/* Efeito Glow Interno */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-white/5 flex items-center justify-center group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-amber-500" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;