import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SolarPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioImages = [
    {
      src: "/lovable-uploads/febaf256-faa6-4300-b2c1-1dafce6fd975.png",
      alt: "Installation panneaux solaires sur toiture résidentielle",
      title: "Panneaux solaires résidentiels",
      description: "Installation complète sur toiture traditionnelle"
    },
    {
      src: "/lovable-uploads/4574e06f-1dea-4292-89c8-aa07712bb131.png",
      alt: "Maison moderne avec installation solaire complète",
      title: "Maison éco-énergétique",
      description: "Design moderne avec panneaux intégrés"
    },
    {
      src: "/lovable-uploads/20ba9fe3-2a93-4d9b-b7c5-0ebc890bd764.png",
      alt: "Carport solaire avec voiture électrique",
      title: "Carport solaire",
      description: "Protection et recharge pour véhicule électrique"
    },
    {
      src: "/lovable-uploads/c8073d58-c09a-4d54-b55c-c1da19b533f3.png",
      alt: "Pergola solaire moderne",
      title: "Pergola photovoltaïque",
      description: "Espace de vie ombragé et productif"
    },
    {
      src: "/lovable-uploads/3229b3fb-4c9c-4a45-8731-39d33a5615ab.png",
      alt: "Carport solaire en bois",
      title: "Carport écologique",
      description: "Structure bois avec panneaux solaires"
    },
    {
      src: "/lovable-uploads/ccff295e-3cbe-42f7-bf4f-d2698e5570b8.png",
      alt: "Carports solaires en série",
      title: "Installation collective",
      description: "Solutions pour résidences collectives"
    },
    {
      src: "/lovable-uploads/5ac11717-e8c1-465b-869d-f377853070bf.png",
      alt: "Pergola moderne avec panneaux solaires",
      title: "Pergola design",
      description: "Élégance et performance énergétique"
    }
  ];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1
    );
  };

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <ZoomIn className="w-4 h-4 mr-2" />
              Nos Réalisations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Portfolio de nos <span className="bg-gradient-to-r from-primary via-primary-variant to-accent bg-clip-text text-transparent">installations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez nos installations solaires réalisées chez nos clients particuliers
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main carousel container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-1000 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {portfolioImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative group">
                    <div className="aspect-[16/9] relative overflow-hidden cursor-pointer">
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onClick={() => openModal(index)}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <Button variant="secondary" size="lg" className="bg-white/90 text-black hover:bg-white">
                          <ZoomIn className="w-5 h-5 mr-2" />
                          Voir en grand
                        </Button>
                      </div>
                      
                      {/* Image info */}
                      <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                        <p className="text-white/90">{image.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center mt-8 space-x-3 overflow-x-auto pb-2">
              {portfolioImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    currentIndex === index 
                      ? 'border-primary scale-110 shadow-lg' 
                      : 'border-transparent hover:border-primary/50 hover:scale-105'
                  }`}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {portfolioImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'w-8 bg-primary' 
                      : 'w-2 bg-gray-300 hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for zoomed image */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            
            <img
              src={portfolioImages[selectedImage].src}
              alt={portfolioImages[selectedImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            <div className="absolute bottom-4 left-4 right-4 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {portfolioImages[selectedImage].title}
              </h3>
              <p className="text-white/90">
                {portfolioImages[selectedImage].description}
              </p>
            </div>
          </div>
          
          {/* Navigation in modal */}
          {selectedImage > 0 && (
            <button
              onClick={() => setSelectedImage(selectedImage - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}
          
          {selectedImage < portfolioImages.length - 1 && (
            <button
              onClick={() => setSelectedImage(selectedImage + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default SolarPortfolio;