import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-amber-500/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Marca com LOGO NOVO */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <img 
                  src="/imagens/logo.png" 
                  alt="Visagismo AI" 
                  className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
              Descubra a ciência por trás da sua beleza. Utilizamos IA avançada para revelar sua melhor versão através do visagismo.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={Instagram} />
              <SocialLink href="#" icon={Facebook} />
              <SocialLink href="#" icon={Twitter} />
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Acesso Rápido</h3>
            <ul className="space-y-4 text-sm">
              <li><FooterLink to="#how-it-works">Como Funciona</FooterLink></li>
              <li><FooterLink to="#features">Benefícios</FooterLink></li>
              <li><FooterLink to="#testimonials">Depoimentos</FooterLink></li>
              <li><FooterLink to="#pricing">Planos e Preços</FooterLink></li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><FooterLink to="/privacy">Política de Privacidade</FooterLink></li>
              <li><FooterLink to="/terms">Termos de Uso</FooterLink></li>
              <li><FooterLink to="/refund">Política de Reembolso</FooterLink></li>
              <li><FooterLink to="/support">Suporte</FooterLink></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-foreground">Fale Conosco</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5" />
                <span>suporte@visagismoai.com</span>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Visagismo AI. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-amber-400 hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <a href={to} className="text-muted-foreground hover:text-amber-400 transition-colors duration-200">
    {children}
  </a>
);

export default Footer;