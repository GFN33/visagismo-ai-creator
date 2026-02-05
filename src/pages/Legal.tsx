import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Shield, FileText, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Legal = () => {
  const { pathname } = useLocation();

  // Rola para o topo ao abrir
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getContent = () => {
    switch (pathname) {
      case "/privacy":
        return {
          title: "Política de Privacidade",
          icon: Shield,
          text: (
            <div className="space-y-4">
              <p>A sua privacidade é importante para nós. É política do Visagismo AI respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Visagismo AI, e outros sites que possuímos e operamos.</p>
              <h3 className="text-xl font-bold text-white mt-6">1. Informações que coletamos</h3>
              <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
              <h3 className="text-xl font-bold text-white mt-6">2. Uso de Imagens</h3>
              <p>As fotos enviadas para análise são utilizadas estritamente para o processamento da IA e geração do relatório. Após a conclusão do serviço, os arquivos são deletados automaticamente de nossos servidores.</p>
              <h3 className="text-xl font-bold text-white mt-6">3. Segurança</h3>
              <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
            </div>
          )
        };
      case "/terms":
        return {
          title: "Termos de Uso",
          icon: FileText,
          text: (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mt-6">1. Termos</h3>
              <p>Ao acessar ao site Visagismo AI, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
              <h3 className="text-xl font-bold text-white mt-6">2. Uso de Licença</h3>
              <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Visagismo AI , apenas para visualização transitória pessoal e não comercial.</p>
              <h3 className="text-xl font-bold text-white mt-6">3. Isenção de responsabilidade</h3>
              <p>Os materiais no site da Visagismo AI são fornecidos 'como estão'. Visagismo AI não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>
            </div>
          )
        };
      case "/refund":
        return {
          title: "Política de Reembolso",
          icon: RefreshCcw,
          text: (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mt-6">Garantia de 7 Dias</h3>
              <p>Nós confiamos tanto na qualidade do nosso produto que oferecemos uma garantia incondicional de 7 dias.</p>
              <p>Se você não estiver satisfeito com a sua análise de visagismo por qualquer motivo, você pode solicitar o reembolso total do valor pago dentro de 7 dias após a compra.</p>
              <h3 className="text-xl font-bold text-white mt-6">Como solicitar</h3>
              <p>Para solicitar o reembolso, basta enviar um e-mail para suporte@visagismoai.com com o número do seu pedido. O estorno será processado imediatamente pela plataforma de pagamento (Kiwify).</p>
            </div>
          )
        };
      default:
        return {
          title: "Página Legal",
          icon: Shield,
          text: <p>Conteúdo legal.</p>
        };
    }
  };

  const content = getContent();
  const Icon = content.icon;

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          asChild 
          className="mb-8 hover:text-amber-400 hover:bg-slate-900"
        >
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar para Início
          </Link>
        </Button>

        <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-amber-500" />
            </div>
            <h1 className="text-3xl font-bold text-white">{content.title}</h1>
          </div>

          <div className="prose prose-invert prose-amber max-w-none text-slate-400 leading-relaxed">
            {content.text}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-slate-600">
            <p>Última atualização: Fevereiro de 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;