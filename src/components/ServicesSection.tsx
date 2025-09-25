import ServiceCard from "./ServiceCard";
import hotelImg from "@/assets/service-hotel.jpg";
import tourImg from "@/assets/service-tour.jpg";
import flightImg from "@/assets/service-flight.jpg";

const services = [
  {
    title: "Hospedagem Premium",
    description: "Hotéis e resorts selecionados com os mais altos padrões de qualidade e conforto. Desde acomodações boutique até resorts all-inclusive, encontramos a hospedagem perfeita para sua viagem.",
    mainImage: hotelImg,
    secondaryImages: [hotelImg, hotelImg, hotelImg, hotelImg],
    features: [
      "Hotéis 4 e 5 estrelas",
      "Café da manhã incluído",
      "Wi-Fi gratuito",
      "Cancelamento flexível",
      "Suporte 24/7"
    ],
    price: "A partir de R$ 200/noite",
    category: "Hospedagem"
  },
  {
    title: "Tours Guiados",
    description: "Experiências exclusivas com guias especializados que conhecem cada detalhe dos destinos. Tours personalizados que revelam os segredos e belezas ocultas de cada lugar.",
    mainImage: tourImg,
    secondaryImages: [tourImg, tourImg, tourImg, tourImg],
    features: [
      "Guias locais especializados",
      "Grupos pequenos (máx. 12 pessoas)",
      "Transporte incluído",
      "Entradas para atrações",
      "Seguro de viagem"
    ],
    price: "A partir de R$ 150/pessoa",
    category: "Experiências"
  },
  {
    title: "Passagens Aéreas",
    description: "As melhores tarifas aéreas com companhias renomadas. Oferecemos desde voos econômicos até primeira classe, sempre com o melhor custo-benefício do mercado.",
    mainImage: flightImg,
    secondaryImages: [flightImg, flightImg, flightImg, flightImg],
    features: [
      "Melhores preços garantidos",
      "Companhias aéreas confiáveis",
      "Alterações sem taxa",
      "Check-in online",
      "Programa de milhagem"
    ],
    price: "Consulte valores",
    category: "Transporte"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para tornar sua viagem perfeita,
            desde o planejamento até cada detalhe da sua experiência.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}