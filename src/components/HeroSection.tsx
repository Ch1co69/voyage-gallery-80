import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import heroImage from "@/assets/hero-beach.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful tropical destination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Badge variant="outline" className="mb-6 bg-white/10 border-white/20 text-white backdrop-blur-sm">
          ✈️ Agência de Viagens Premium
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Explore o Mundo
          <br />
          <span className="bg-gradient-sunset bg-clip-text text-transparent">
            Sem Limites
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          Descubra destinos extraordinários com nossa expertise em viagens personalizadas. 
          Criamos experiências únicas que transformam sonhos em memórias inesquecíveis.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
          <Button size="lg" className="bg-gradient-ocean hover:opacity-90 border-0 text-lg px-8 py-4">
            Ver Nossos Destinos
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary text-lg px-8 py-4 backdrop-blur-sm">
            Conhecer a Agência
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <MapPin className="h-8 w-8 mx-auto mb-3 text-sunset" />
            <div className="text-3xl font-bold mb-1">50+</div>
            <div className="text-white/80">Destinos Únicos</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Users className="h-8 w-8 mx-auto mb-3 text-sunset" />
            <div className="text-3xl font-bold mb-1">10.000+</div>
            <div className="text-white/80">Clientes Felizes</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <Calendar className="h-8 w-8 mx-auto mb-3 text-sunset" />
            <div className="text-3xl font-bold mb-1">15</div>
            <div className="text-white/80">Anos de Experiência</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}