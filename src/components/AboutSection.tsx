import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Award, Users, Clock } from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: "50+",
    label: "Destinos",
    description: "Países visitados"
  },
  {
    icon: Users,
    number: "10.000+",
    label: "Clientes",
    description: "Satisfeitos"
  },
  {
    icon: Award,
    number: "15",
    label: "Anos",
    description: "De experiência"
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Suporte",
    description: "Sempre disponível"
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              Sobre Nós
            </Badge>
            <h2 className="text-4xl font-bold mb-6">
              Transformando sonhos em
              <span className="bg-gradient-ocean bg-clip-text text-transparent"> realidade</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Há mais de 15 anos, somos especialistas em criar experiências de viagem únicas e inesquecíveis. 
              Nossa paixão é conectar pessoas a destinos extraordinários, oferecendo serviços personalizados 
              que superam expectativas.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com uma equipe de especialistas apaixonados por viagens, trabalhamos incansavelmente para 
              garantir que cada detalhe da sua jornada seja perfeito. Desde a primeira consulta até o 
              retorno para casa, estamos ao seu lado em cada passo.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card border-0 shadow-card">
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-ocean rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Criar conexões autênticas entre nossos clientes e os destinos mais incríveis do mundo, 
                proporcionando experiências transformadoras que ficam na memória para sempre.
              </p>
              
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Por que escolher a gente?</h4>
                <ul className="space-y-2 text-sm text-white/90">
                  <li>✓ Atendimento personalizado e humanizado</li>
                  <li>✓ Parcerias exclusivas com fornecedores locais</li>
                  <li>✓ Preços competitivos e transparentes</li>
                  <li>✓ Suporte completo durante toda a viagem</li>
                </ul>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-sunset rounded-full opacity-20 animate-float"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}