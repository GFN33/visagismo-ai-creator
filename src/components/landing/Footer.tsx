import { Facebook, Instagram, Twitter, Mail, MapPin, ShieldCheck } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Luz Dourada de Fundo no Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-amber-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Coluna 1: Marca */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <img 
                  src="/imagens/logo.png" 
                  alt="Visagismo AI" 
                  className="h-12 w-auto object-contain brightness-0 invert opacity-90" // Ajuste para logo branco se necessário, ou remova brightness/invert se o logo já for colorido
                />
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              A primeira plataforma de Visagismo com Inteligência Artificial do Brasil. Democratizando o acesso à consultoria de imagem de alto padrão.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
            </div>
          </div>

          {/* Coluna 2: Links */}
          <div>
            <h3 className="font-bold text-slate-100 text-lg mb-6">Navegação</h3>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="#how-it-works">Como Funciona</FooterLink></li>
              <li><FooterLink href="#benefits">Benefícios</FooterLink></li>
              <li><FooterLink href="#testimonials">Depoimentos</FooterLink></li>
              <li><FooterLink href="#pricing">Planos e Preços</FooterLink></li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div>
            <h3 className="font-bold text-slate-100 text-lg mb-6">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><FooterLink href="/privacy">Política de Privacidade</FooterLink></li>
              <li><FooterLink href="/terms">Termos de Uso</FooterLink></li>
              <li><FooterLink href="/refund">Política de Reembolso</FooterLink></li>
            </ul>
          </div>

          {/* Coluna 4: Segurança */}
          <div>
            <h3 className="font-bold text-slate-100 text-lg mb-6">Compra Segura</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 text-slate-400">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span>Ambiente Criptografado</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5" />
                <a href="mailto:suporte@visagismoai.com" className="hover:text-amber-400 transition-colors">suporte@visagismoai.com</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>&copy; {currentYear} Visagismo AI. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Espaço para logos de pagamento (opcional) */}
             <span className="text-xs">Processado por Kiwify</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-slate-400 hover:text-amber-400 transition-colors duration-200 block hover:translate-x-1 transform">
    {children}
  </a>
);

export default Footer;