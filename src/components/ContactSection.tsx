import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Rua das Palmeiras, 123", "Centro - São Paulo, SP", "CEP: 01234-567"]
  },
  {
    icon: Phone,
    title: "Telefone",
    details: ["(11) 9999-8888", "(11) 3333-4444", "WhatsApp disponível"]
  },
  {
    icon: Mail,
    title: "E-mail",
    details: ["contato@viagens.com", "vendas@viagens.com", "suporte@viagens.com"]
  },
  {
    icon: Clock,
    title: "Horário",
    details: ["Segunda à Sexta: 9h às 18h", "Sábado: 9h às 14h", "Domingo: Plantão online"]
  }
];

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Contato
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Fale Conosco</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a planejar a viagem dos seus sonhos.
            Entre em contato através dos canais abaixo.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-card">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-ocean p-3 rounded-lg">
                    <info.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
            
            <Card className="p-6 bg-gradient-ocean text-white border-0">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-6 w-6" />
                <h3 className="font-semibold">WhatsApp</h3>
              </div>
              <p className="text-white/90 text-sm mb-4">
                Fale conosco agora mesmo pelo WhatsApp e receba atendimento imediato!
              </p>
              <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary">
                Chamar no WhatsApp
              </Button>
            </Card>
          </div>
          
            <Card className="p-8 bg-gradient-card border-0 shadow-card">
              <h3 className="text-2xl font-semibold mb-6">Entre em Contato</h3>
              <p className="text-muted-foreground mb-6">
                Estamos aqui para transformar seus sonhos de viagem em realidade. 
                Entre em contato através dos canais ao lado ou visite nosso escritório.
              </p>
              
              <div className="bg-gradient-ocean p-6 rounded-lg text-white text-center">
                <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
                <div className="space-y-2 text-sm text-white/90">
                  <p>Segunda à Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 14h</p>
                  <p>Domingo: Atendimento online</p>
                </div>
              </div>
            </Card>
        </div>
      </div>
    </section>
  );
}