import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Clock } from "lucide-react";

interface DestinationCardProps {
  title: string;
  location: string;
  mainImage: string;
  secondaryImages: string[];
  description: string;
  price: string;
  duration: string;
  rating: number;
}

export default function DestinationCard({
  title,
  location,
  mainImage,
  secondaryImages,
  description,
  price,
  duration,
  rating
}: DestinationCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-[1.02]">
          <div className="relative">
            <img
              src={mainImage}
              alt={title}
              className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4">
              <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                <Star className="h-3 w-3 mr-1 fill-current text-sunset" />
                {rating}
              </Badge>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">{location}</span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">{duration}</span>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-primary">{price}</span>
                <p className="text-xs text-muted-foreground">por pessoa</p>
              </div>
            </div>
          </div>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2">
              <img
                src={mainImage}
                alt={title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            {secondaryImages.slice(0, 4).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title} ${index + 1}`}
                className="w-full h-32 object-cover rounded-lg"
              />
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Sobre o Destino</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
            
            <div className="bg-gradient-card p-6 rounded-lg">
              <div className="text-center mb-4">
                <span className="text-3xl font-bold text-primary">{price}</span>
                <p className="text-sm text-muted-foreground">por pessoa</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duração:</span>
                  <span>{duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Avaliação:</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-sunset" />
                    <span>{rating}</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">Saiba Mais</Button>
              
              <div className="text-center p-4 bg-muted/30 rounded-lg mt-4">
                <p className="text-sm text-muted-foreground">
                  Entre em contato para mais informações sobre este destino
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}