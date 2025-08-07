import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface FreeMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  selectedLocation?: { lat: number; lng: number } | null;
}

const FreeMap: React.FC<FreeMapProps> = ({ onLocationSelect, selectedLocation }) => {
  const [markerPosition, setMarkerPosition] = useState<{ x: number; y: number } | null>(null);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Conversion pixel vers coordonnées GPS (France métropolitaine)
    // Bounding box France: lat: 41.3-51.1, lng: -5.1-9.6
    const lat = 51.1 - (y / rect.height) * 9.8;
    const lng = -5.1 + (x / rect.width) * 14.7;
    
    setMarkerPosition({ x, y });
    onLocationSelect(lat, lng);
  };

  // Convertir les coordonnées GPS vers position pixel
  const getPixelPosition = (location: { lat: number; lng: number }) => {
    const x = ((location.lng + 5.1) / 14.7) * 100;
    const y = ((51.1 - location.lat) / 9.8) * 100;
    return { 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    };
  };

  const currentMarker = selectedLocation ? getPixelPosition(selectedLocation) : 
                       markerPosition ? { 
                         x: (markerPosition.x / 640) * 100, 
                         y: (markerPosition.y / 400) * 100 
                       } : null;

  return (
    <div className="h-96 rounded-2xl overflow-hidden shadow-lg relative cursor-crosshair bg-gradient-to-br from-blue-50 via-green-50 to-blue-100">
      {/* Fond de carte avec style moderne */}
      <div 
        className="w-full h-full relative transition-all duration-300 hover:scale-[1.02]"
        onClick={handleMapClick}
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 197, 94, 0.1) 50%, rgba(168, 85, 247, 0.1) 100%),
            radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.2) 0%, transparent 50%)
          `
        }}
      >
        {/* Contour de la France stylisé */}
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-40">
          <defs>
            <linearGradient id="franceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor:'#3b82f6', stopOpacity:0.3}} />
              <stop offset="50%" style={{stopColor:'#22c55e', stopOpacity:0.3}} />
              <stop offset="100%" style={{stopColor:'#a855f7', stopOpacity:0.3}} />
            </linearGradient>
          </defs>
          <path
            d="M50 40 L120 25 L180 30 L240 35 L320 45 L350 65 L380 95 L390 140 L380 185 L350 220 L320 250 L280 270 L220 280 L160 275 L100 265 L60 245 L35 215 L25 180 L30 140 L40 100 Z"
            fill="url(#franceGradient)"
            stroke="rgba(59, 130, 246, 0.5)"
            strokeWidth="2"
            className="drop-shadow-sm"
          />
        </svg>

        {/* Villes principales avec animation */}
        <div className="absolute top-[20%] left-[48%] group">
          <div className="w-3 h-3 bg-blue-600 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-transform"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Paris
          </div>
        </div>
        
        <div className="absolute top-[75%] left-[85%] group">
          <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-transform"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Nice
          </div>
        </div>
        
        <div className="absolute top-[55%] left-[45%] group">
          <div className="w-3 h-3 bg-purple-500 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-transform"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Lyon
          </div>
        </div>

        <div className="absolute top-[70%] left-[35%] group">
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg animate-pulse group-hover:scale-125 transition-transform"></div>
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Toulouse
          </div>
        </div>

        {/* Instructions centrées */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-sm border border-white/20 shadow-xl">
            <MapPin className="w-10 h-10 text-blue-500 mx-auto mb-3 animate-bounce" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">
              Sélectionnez votre position
            </h3>
            <p className="text-sm text-gray-600">
              Cliquez n'importe où sur la carte de France
            </p>
            <div className="mt-3 flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Carte interactive gratuite</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Marker avec animation */}
        {currentMarker && (
          <div 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{
              left: `${currentMarker.x}%`,
              top: `${currentMarker.y}%`
            }}
          >
            <div className="relative">
              <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-2xl animate-bounce">
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap">
                Position sélectionnée
              </div>
            </div>
          </div>
        )}

        {/* Grille décorative */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-full border-t border-blue-300" style={{top: `${i * 12.5}%`}} />
          ))}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="absolute h-full border-l border-blue-300" style={{left: `${i * 10}%`}} />
          ))}
        </div>
      </div>

      {/* Badge d'information */}
      <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
        🆓 100% Gratuit
      </div>
    </div>
  );
};

export default FreeMap;