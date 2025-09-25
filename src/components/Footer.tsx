import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plane, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Nossa Equipe", href: "#equipe" },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Carreiras", href: "#carreiras" },
  ],
  services: [
    { label: "Pacotes de Viagem", href: "#pacotes" },
    { label: "Hospedagem", href: "#hospedagem" },
    { label: "Passagens Aéreas", href: "#passagens" },
    { label: "Seguro Viagem", href: "#seguro" },
  ],
  support: [
    { label: "Central de Ajuda", href: "#ajuda" },
    { label: "Política de Cancelamento", href: "#cancelamento" },
    { label: "Termos de Uso", href: "#termos" },
    { label: "Privacidade", href: "#privacidade" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-ocean p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-ocean bg-clip-text text-transparent">
                TravelDreams
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transformamos sonhos em realidade há mais de 15 anos, criando experiências 
              de viagem únicas e inesquecíveis para nossos clientes.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>São Paulo, SP - Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>(11) 9999-8888</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@traveldreams.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            
            <div>
              <h4 className="font-semibold mb-3 text-sm">Siga-nos</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="bg-gradient-card p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-card rounded-lg p-6 mb-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Receba ofertas exclusivas</h3>
              <p className="text-muted-foreground text-sm">
                Inscreva-se em nossa newsletter e seja o primeiro a saber sobre promoções especiais.
              </p>
            </div>
            <div className="flex gap-2 max-w-md md:max-w-xs">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 text-sm border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button size="sm" className="bg-gradient-ocean hover:opacity-90 border-0">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 TravelDreams. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#termos" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#cookies" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}