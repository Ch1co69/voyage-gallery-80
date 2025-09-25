import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Calendar, Users, ChevronLeft, ChevronRight } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";
import maldivesImg from "@/assets/carousel-maldives.jpg";
import santoriniImg from "@/assets/carousel-santorini.jpg";
import japanImg from "@/assets/carousel-japan.jpg";

const carouselSlides = [
  {
    image: heroBeach,
    title: "Explore o Mundo",
    subtitle: "Sem Limites",
    description: "Descubra destinos extraordinários com nossa expertise em viagens personalizadas."
  },
  {
    image: maldivesImg,
    title: "Paraíso Tropical",
    subtitle: "Maldivas",
    description: "Águas cristalinas e resorts exclusivos em um dos destinos mais paradisíacos do mundo."
  },
  {
    image: santoriniImg,
    title: "Charme Mediterrâneo",
    subtitle: "Santorini",
    description: "Pôr do sol inesquecível nas ilhas gregas com arquitetura única e vistas deslumbrantes."
  },
  {
    image: japanImg,
    title: "Cultura Milenar",
    subtitle: "Japão",
    description: "Tradição e modernidade se encontram em uma experiência cultural única e transformadora."
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = carouselSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {carouselSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <Badge variant="outline" className="mb-6 bg-white/10 border-white/20 text-white backdrop-blur-sm animate-fade-in">
          ✈️ Agência de Viagens Premium
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {currentSlideData.title}
          <br />
          <span className="bg-gradient-sunset bg-clip-text text-transparent">
            {currentSlideData.subtitle}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
          {currentSlideData.description}
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
      
      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-3 mb-4">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}