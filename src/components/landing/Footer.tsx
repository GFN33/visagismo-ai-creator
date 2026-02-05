import { Instagram, Mail, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = 2026; // Fixado em 2026 conforme solicitado

  return (
    <footer className="bg-[#020617] border-t border-amber-500/10 pt-20 pb-10 relative overflow-hidden">
      {/* Luz Dourada de Fundo (Efeito Premium) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca & Sobre */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               {/* Logo com brilho sutil */}
               <img 
                  src="/imagens/logo.png" 
                  alt="Visagismo AI" 
                  className="h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm max-w-xs">
              Tecnologia de ponta aplicada à sua imagem pessoal. O protocolo definitivo de visagismo digital.
            </p>
            
            {/* Social Links (Apenas Instagram) */}
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-950/20 transition-all">
                  <Instagram className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Siga-nos
                </span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div>
            <h3 className="font-bold text-slate-100 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              Menu <div className="h-px w-8 bg-amber-500/30"></div>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="#how-it-works">Como Funciona</FooterLink></li>
              <li><FooterLink href="#benefits">Benefícios & Tecnologia</FooterLink></li>
              <li><FooterLink href="#testimonials">Casos de Sucesso</FooterLink></li>
              <li><FooterLink href="#pricing">Investimento</FooterLink></li>
            </ul>
          </div>

          {/* Coluna 3: Legal & Institucional */}
          <div>
             <h3 className="font-bold text-slate-100 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              Legal <div className="h-px w-8 bg-amber-500/30"></div>
            </h3>
            <ul className="space-y-3 text-sm">
              <li><FooterLink href="/privacy">Política de Privacidade</FooterLink></li>
              <li><FooterLink href="/terms">Termos de Uso</FooterLink></li>
              <li><FooterLink href="/refund">Política de Reembolso</FooterLink></li>
            </ul>
          </div>

          {/* Coluna 4: Suporte & Segurança */}
          <div>
             <h3 className="font-bold text-slate-100 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
              Suporte <div className="h-px w-8 bg-amber-500/30"></div>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-slate-400 bg-slate-900/50 p-3 rounded-lg border border-white/5">
                <ShieldCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                <div>
                  <span className="block text-slate-200 font-medium text-xs">Ambiente Seguro</span>
                  <span className="text-[10px] opacity-70">Dados Criptografados (SSL)</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:suporte@quantumera.tech" className="hover:text-amber-400 transition-colors">suporte@visagismo.ai</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Final - Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-medium">
            &copy; {currentYear} <span className="text-slate-300">QuantumEra</span>. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
             <span className="hover:text-slate-300 transition-colors cursor-pointer">Brasil 🇧🇷</span>
             <span className="opacity-30">|</span>
             <span className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-pointer">
               Processado por Kiwify <ArrowUpRight className="w-3 h-3" />
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-slate-400 hover:text-amber-400 transition-all duration-200 flex items-center gap-1 group">
    <span className="w-0 group-hover:w-2 h-px bg-amber-500 transition-all duration-300"></span>
    {children}
  </a>
);

export default Footer;