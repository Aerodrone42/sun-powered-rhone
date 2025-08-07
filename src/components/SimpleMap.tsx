import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface SimpleMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  selectedLocation?: { lat: number; lng: number } | null;
}

const SimpleMap: React.FC<SimpleMapProps> = ({ onLocationSelect, selectedLocation }) => {
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Conversion approximative pixel vers coordonnées (France)
    // Bounding box France: lat: 41.3-51.1, lng: -5.1-9.6
    const lat = 51.1 - (y / rect.height) * 9.8; // 51.1 à 41.3
    const lng = -5.1 + (x / rect.width) * 14.7; // -5.1 à 9.6
    
    setClickPosition({ x, y });
    onLocationSelect(lat, lng);
  };

  // Conversion coordonnées vers position pixel pour affichage du marker
  const getMarkerPosition = (location: { lat: number; lng: number }) => {
    // Conversion inverse
    const x = ((location.lng + 5.1) / 14.7) * 100; // Pourcentage
    const y = ((51.1 - location.lat) / 9.8) * 100; // Pourcentage
    return { x: `${Math.max(0, Math.min(100, x))}%`, y: `${Math.max(0, Math.min(100, y))}%` };
  };

  const markerPos = selectedLocation ? getMarkerPosition(selectedLocation) : 
                   clickPosition ? { x: `${(clickPosition.x / 640) * 100}%`, y: `${(clickPosition.y / 384) * 100}%` } : null;

  return (
    <div className="h-96 rounded-2xl overflow-hidden shadow-lg relative cursor-crosshair">
      {/* Carte de France stylisée */}
      <div 
        className="w-full h-full bg-gradient-to-br from-blue-100 via-green-100 to-yellow-50 relative"
        onClick={handleMapClick}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 20%, transparent 21%),
            radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.3) 15%, transparent 16%),
            radial-gradient(circle at 60% 70%, rgba(245, 158, 11, 0.3) 25%, transparent 26%),
            linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)
          `
        }}
      >
        {/* Contours France stylisés */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 640 384" className="w-full h-full">
            <path
              d="M100 50 L200 30 L300 40 L400 45 L500 55 L540 80 L580 120 L590 180 L570 240 L530 280 L480 320 L400 340 L300 350 L200 340 L120 320 L80 280 L60 240 L50 180 L60 120 Z"
              fill="rgba(34, 197, 94, 0.2)"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="2"
            />
          </svg>
        </div>
        
        {/* Instructions */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 max-w-xs">
            <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-sm font-medium text-gray-700">
              Cliquez sur la carte pour sélectionner votre position
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Carte interactive de la France
            </p>
          </div>
        </div>

        {/* Marker */}
        {markerPos && (
          <div 
            className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2 z-10 animate-bounce"
            style={{
              left: markerPos.x,
              top: markerPos.y
            }}
          >
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
          </div>
        )}

        {/* Villes principales */}
        <div className="absolute top-[25%] left-[25%] w-2 h-2 bg-gray-600 rounded-full" title="Paris"></div>
        <div className="absolute top-[75%] left-[85%] w-2 h-2 bg-gray-600 rounded-full" title="Nice"></div>
        <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-gray-600 rounded-full" title="Lyon"></div>
        <div className="absolute top-[65%] left-[35%] w-2 h-2 bg-gray-600 rounded-full" title="Toulouse"></div>
        <div className="absolute top-[75%] left-[55%] w-2 h-2 bg-gray-600 rounded-full" title="Marseille"></div>
      </div>
    </div>
  );
};

export default SimpleMap;