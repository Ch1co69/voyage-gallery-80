import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  mainImage: string;
  secondaryImages: string[];
  features: string[];
  price: string;
  category: string;
}

export default function ServiceCard({
  title,
  description,
  mainImage,
  secondaryImages,
  features,
  price,
  category
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02]">
          <div className="relative">
            <img
              src={mainImage}
              alt={title}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary">
                {category}
              </Badge>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Ver galeria de fotos
              </span>
              <span className="text-lg font-bold text-primary">{price}</span>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <Badge variant="outline" className="w-fit border-primary text-primary">
            {category}
          </Badge>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <img
              src={mainImage}
              alt={title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="grid grid-cols-2 gap-2">
              {secondaryImages.slice(0, 4).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-[120px] object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Sobre o Serviço</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
              
              <h4 className="text-lg font-semibold mb-3">O que está incluído</h4>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg">
              <div className="text-center mb-6">
                <span className="text-3xl font-bold text-primary">{price}</span>
                <p className="text-sm text-muted-foreground">preço inicial</p>
              </div>
              
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Interessado neste serviço?
                </p>
                <p className="text-xs text-muted-foreground">
                  Entre em contato para receber uma proposta personalizada
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}