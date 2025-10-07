import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const PublicPortfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const portfolioImages = [{
    src: "/lovable-uploads/5b326b35-6d62-4350-8917-233901eef3b1.png",
    alt: "Auvent photovoltaïque au-dessus d'une statue avec aménagement paysager",
    title: "Aménagement urbain solaire",
    description: "Intégration harmonieuse d'ombrières photovoltaïques dans l'espace public"
  }, {
    src: "/lovable-uploads/71affdd6-13b1-4dc9-a68e-edc831cf2d5b.png",
    alt: "Station de vélos en libre-service sous ombrière photovoltaïque",
    title: "Mobilité urbaine durable",
    description: "Station vélos solaire pour une mobilité écologique"
  }, {
    src: "/lovable-uploads/a7bc6975-8aa9-4283-bad2-08d84f8b5120.png",
    alt: "Promenade urbaine avec auvents photovoltaïques le long d'une rivière",
    title: "Promenade solaire urbaine",
    description: "Aménagement de promenades publiques avec toiture photovoltaïque"
  }, {
    src: "/lovable-uploads/c364ce98-5379-4cfa-ad14-6912c431251e.png",
    alt: "Parking public couvert par des ombrières photovoltaïques",
    title: "Stationnement solaire public",
    description: "Ombrières photovoltaïques pour parkings municipaux"
  }];

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [portfolioImages.length]);
  const nextImage = () => {
    setCurrentIndex(prevIndex => prevIndex === portfolioImages.length - 1 ? 0 : prevIndex + 1);
  };
  const prevImage = () => {
    setCurrentIndex(prevIndex => prevIndex === 0 ? portfolioImages.length - 1 : prevIndex - 1);
  };
  const openModal = (index: number) => {
    setSelectedImage(index);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  return <>
      <section className="py-16 bg-gradient-to-br from-background via-blue-500/5 to-indigo-500/5">
        <div className="container">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <ZoomIn className="w-4 h-4 mr-2" />
              Nos Réalisations Publiques
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Installations <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">publiques</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Découvrez nos solutions photovoltaïques pour les collectivités et espaces publics</p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Main carousel container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="flex transition-transform duration-1000 ease-out" style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
                {portfolioImages.map((image, index) => <div key={index} className="w-full flex-shrink-0 relative group">
                    <div className="aspect-[16/9] relative overflow-hidden cursor-pointer touch-manipulation" onClick={() => openModal(index)} onTouchEnd={e => {
                  e.preventDefault();
                  openModal(index);
                }}>
                      <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none" draggable={false} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 opacity-50 transition-opacity duration-500" />
                      
                      {/* Hover overlay - repositioned on mobile */}
                      <div className="absolute inset-0 flex items-center justify-center md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-all duration-500">
                        <div className="md:block hidden">
                          <Button variant="secondary" size="lg" className="bg-white/90 text-black hover:bg-white touch-manipulation min-h-[48px] min-w-[120px]" onClick={e => {
                        e.stopPropagation();
                        openModal(index);
                      }}>
                            <ZoomIn className="w-5 h-5 mr-2" />
                            Voir en grand
                          </Button>
                        </div>
                      </div>
                      
                      {/* Mobile button - positioned in top right */}
                      <div className="absolute top-4 right-4 md:hidden">
                        <Button variant="secondary" size="sm" className="bg-white/90 text-black hover:bg-white touch-manipulation min-h-[40px]" onClick={e => {
                      e.stopPropagation();
                      openModal(index);
                    }} onTouchEnd={e => {
                      e.stopPropagation();
                      e.preventDefault();
                      openModal(index);
                    }}>
                          <ZoomIn className="w-4 h-4 mr-1" />
                          Voir
                        </Button>
                      </div>
                      
                      {/* Image info - always visible on mobile */}
                      <div className="absolute bottom-4 left-4 right-4 text-white md:transform md:translate-y-full md:group-hover:translate-y-0 transform translate-y-0 transition-transform duration-500">
                        <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2">{image.title}</h3>
                        <p className="text-white/90 text-sm md:text-base">{image.description}</p>
                      </div>
                    </div>
                  </div>)}
              </div>

              {/* Navigation arrows */}
              <button onClick={prevImage} onTouchEnd={e => {
              e.preventDefault();
              prevImage();
            }} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 touch-manipulation min-h-[48px] min-w-[48px]">
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              
              <button onClick={nextImage} onTouchEnd={e => {
              e.preventDefault();
              nextImage();
            }} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 touch-manipulation min-h-[48px] min-w-[48px]">
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center mt-8 space-x-3 overflow-x-auto pb-2">
              {portfolioImages.map((image, index) => <button key={index} onClick={() => setCurrentIndex(index)} className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${currentIndex === index ? 'border-blue-600 scale-110 shadow-lg' : 'border-transparent hover:border-blue-400/50 hover:scale-105'}`}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </button>)}
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {portfolioImages.map((_, index) => <div key={index} className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-blue-400/50'}`} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for zoomed image */}
      {selectedImage !== null && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          <div className="relative max-w-7xl max-h-full p-4">
            <button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-2 text-white transition-all duration-300">
              <X className="w-6 h-6" />
            </button>
            
            <img src={portfolioImages[selectedImage].src} alt={portfolioImages[selectedImage].alt} className="max-w-full max-h-full object-contain rounded-lg" />
            
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
          {selectedImage > 0 && <button onClick={() => setSelectedImage(selectedImage - 1)} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300">
              <ChevronLeft className="w-6 h-6" />
            </button>}
          
          {selectedImage < portfolioImages.length - 1 && <button onClick={() => setSelectedImage(selectedImage + 1)} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </button>}
        </div>}
    </>;
};
export default PublicPortfolio;