import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProfessionalPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioImages = [
    {
      src: "/lovable-uploads/f9ee99ae-f231-4972-8c1d-e99b896b5e13.png",
      alt: "Installation solaire sur station de ski en montagne",
      title: "Station de ski solaire",
      description: "Installation haute performance en environnement montagnard"
    },
    {
      src: "/lovable-uploads/2303f311-c023-4a11-b278-0c521ded6d5a.png", 
      alt: "Carport solaire pour parking d'entreprise",
      title: "Carport commercial",
      description: "Protection véhicules et production d'énergie"
    },
    {
      src: "/lovable-uploads/244a8a84-ce6a-42f6-b97d-eb1540f724cd.png",
      alt: "Installation solaire sur complexe hôtelier avec piscine",
      title: "Complexe hôtelier",
      description: "Intégration architecturale et performance énergétique"
    },
    {
      src: "/lovable-uploads/9e129e15-8825-49c4-bd31-b2bbd1099249.png",
      alt: "Installation solaire industrielle vue aérienne",
      title: "Site industriel",
      description: "Installation grande échelle pour industrie"
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
              Nos Réalisations Professionnelles
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Installations <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">industrielles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez nos installations solaires réalisées pour entreprises et collectivités
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
                    <div 
                      className="aspect-[16/9] relative overflow-hidden cursor-pointer touch-manipulation"
                      onClick={() => openModal(index)}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        openModal(index);
                      }}
                    >
                      <img 
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                      
                      {/* Hover overlay - always visible on mobile */}
                      <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-500">
                        <Button 
                          variant="secondary" 
                          size="lg" 
                          className="bg-white/90 text-black hover:bg-white touch-manipulation min-h-[48px] min-w-[120px]"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(index);
                          }}
                          onTouchEnd={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            openModal(index);
                          }}
                        >
                          <ZoomIn className="w-5 h-5 mr-2" />
                          Voir en grand
                        </Button>
                      </div>
                      
                      {/* Image info - always visible on mobile */}
                      <div className="absolute bottom-6 left-6 right-6 text-white md:transform md:translate-y-full md:group-hover:translate-y-0 transform translate-y-0 transition-transform duration-500">
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
                onTouchEnd={(e) => {
                  e.preventDefault();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 touch-manipulation min-h-[48px] min-w-[48px]"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              
              <button
                onClick={nextImage}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 touch-manipulation min-h-[48px] min-w-[48px]"
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

export default ProfessionalPortfolio;