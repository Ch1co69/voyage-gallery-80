import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DestinationCard from "./DestinationCard";
import mountainsImg from "@/assets/destination-mountains.jpg";
import cityImg from "@/assets/destination-city.jpg";
import forestImg from "@/assets/destination-forest.jpg";

const destinations = [
  {
    title: "Alpes Suíços",
    location: "Suíça",
    mainImage: mountainsImg,
    secondaryImages: [mountainsImg, mountainsImg, mountainsImg, mountainsImg],
    description: "Descubra a majestade dos Alpes Suíços com paisagens de tirar o fôlego, trilhas espetaculares e a hospitalidade única da Suíça. Uma experiência inesquecível entre montanhas cobertas de neve e lagos cristalinos.",
    price: "R$ 8.500",
    duration: "10 dias",
    rating: 4.9
  },
  {
    title: "Cidade Histórica",
    location: "Europa",
    mainImage: cityImg,
    secondaryImages: [cityImg, cityImg, cityImg, cityImg],
    description: "Explore cidades medievais preservadas, com arquitetura deslumbrante, ruas de pedra e uma rica história que se mantém viva. Perfeito para quem ama cultura e história.",
    price: "R$ 6.200",
    duration: "8 dias",
    rating: 4.8
  },
  {
    title: "Floresta Amazônica",
    location: "Brasil",
    mainImage: forestImg,
    secondaryImages: [forestImg, forestImg, forestImg, forestImg],
    description: "Uma aventura única na maior floresta tropical do mundo. Descubra a biodiversidade incrível, comunidades locais e paisagens exuberantes que só a Amazônia pode oferecer.",
    price: "R$ 3.800",
    duration: "7 dias",
    rating: 4.7
  }
];

export default function DestinationCarousel() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Destinos Incríveis</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore os destinos mais fascinantes do mundo com pacotes personalizados
            e experiências únicas que criarão memórias para toda a vida.
          </p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <DestinationCard {...destination} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
}