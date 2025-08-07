import React, { useState, useEffect } from 'react';
import { MapPin, Crosshair, Navigation } from 'lucide-react';

interface RealMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  selectedLocation?: { lat: number; lng: number } | null;
}

const RealMap: React.FC<RealMapProps> = ({ onLocationSelect, selectedLocation }) => {
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 46.6031, lng: 2.3522 }); // Centre France
  const [zoom, setZoom] = useState(6);

  // Obtenir la position actuelle
  const getCurrentLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
          setMapCenter({ lat: latitude, lng: longitude });
          setZoom(12);
          onLocationSelect(latitude, longitude);
          setIsLocating(false);
        },
        (error) => {
          console.error('Erreur géolocalisation:', error);
          setIsLocating(false);
        }
      );
    }
  };

  // Villes françaises avec coordonnées exactes
  const cities = [
    { name: 'Paris', lat: 48.8566, lng: 2.3522, population: '2.2M' },
    { name: 'Marseille', lat: 43.2965, lng: 5.3698, population: '870K' },
    { name: 'Lyon', lat: 45.7640, lng: 4.8357, population: '515K' },
    { name: 'Toulouse', lat: 43.6047, lng: 1.4442, population: '479K' },
    { name: 'Nice', lat: 43.7102, lng: 7.2620, population: '340K' },
    { name: 'Nantes', lat: 47.2184, lng: -1.5536, population: '309K' },
    { name: 'Montpellier', lat: 43.6110, lng: 3.8767, population: '295K' },
    { name: 'Strasbourg', lat: 48.5734, lng: 7.7521, population: '280K' },
    { name: 'Bordeaux', lat: 44.8378, lng: -0.5792, population: '254K' },
    { name: 'Lille', lat: 50.6292, lng: 3.0573, population: '233K' }
  ];

  const selectCity = (city: typeof cities[0]) => {
    setMapCenter({ lat: city.lat, lng: city.lng });
    setZoom(11);
    onLocationSelect(city.lat, city.lng);
  };

  // Convertir coordonnées en position sur la mini-carte
  const getMapPosition = (lat: number, lng: number) => {
    // Bounding box France étendu
    const bounds = { 
      north: 51.5, south: 41.0, 
      west: -5.5, east: 10.0 
    };
    
    const x = ((lng - bounds.west) / (bounds.east - bounds.west)) * 100;
    const y = ((bounds.north - lat) / (bounds.north - bounds.south)) * 100;
    
    return { 
      x: Math.max(0, Math.min(100, x)), 
      y: Math.max(0, Math.min(100, y)) 
    };
  };

  return (
    <div className="space-y-6">
      {/* Contrôles de géolocalisation */}
      <div className="bg-white rounded-xl p-6 shadow-lg border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-blue-500" />
          Localisation précise
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={getCurrentLocation}
            disabled={isLocating}
            className="flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50 transition-all"
          >
            <Crosshair className={`w-4 h-4 ${isLocating ? 'animate-spin' : ''}`} />
            {isLocating ? 'Localisation...' : 'Ma position actuelle'}
          </button>
          
          <select 
            onChange={(e) => {
              const city = cities.find(c => c.name === e.target.value);
              if (city) selectCity(city);
            }}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
          >
            <option value="">Choisir une ville</option>
            {cities.map(city => (
              <option key={city.name} value={city.name}>
                {city.name} ({city.population})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mini-carte interactive */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg border">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-orange-500" />
          Carte de France interactive
        </h3>
        
        <div className="relative h-80 bg-gradient-to-br from-blue-100 via-green-100 to-blue-200 rounded-lg overflow-hidden shadow-inner">
          {/* Contour France plus précis */}
          <svg viewBox="0 0 400 320" className="absolute inset-0 w-full h-full">
            <defs>
              <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
            </defs>
            <path
              d="M80 80 L140 60 L200 65 L260 70 L320 80 L350 100 L370 130 L375 170 L365 210 L340 240 L300 260 L250 270 L190 265 L130 255 L80 240 L50 210 L40 170 L45 130 L60 100 Z"
              fill="rgba(59, 130, 246, 0.2)"
              stroke="rgba(59, 130, 246, 0.6)"
              strokeWidth="2"
              filter="url(#shadow)"
            />
          </svg>

          {/* Villes principales */}
          {cities.map(city => {
            const pos = getMapPosition(city.lat, city.lng);
            return (
              <button
                key={city.name}
                onClick={() => selectCity(city)}
                className="absolute group transition-all duration-200 hover:scale-110"
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-3 h-3 bg-blue-600 rounded-full shadow-lg border-2 border-white"></div>
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {city.name}
                </div>
              </button>
            );
          })}

          {/* Position sélectionnée */}
          {selectedLocation && (
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                left: `${getMapPosition(selectedLocation.lat, selectedLocation.lng).x}%`,
                top: `${getMapPosition(selectedLocation.lat, selectedLocation.lng).y}%`
              }}
            >
              <div className="relative">
                <div className="w-6 h-6 bg-red-500 rounded-full border-3 border-white shadow-xl animate-bounce"></div>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-60"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap">
                  Position sélectionnée
                </div>
              </div>
            </div>
          )}

          {/* Position actuelle */}
          {currentPosition && (
            <div 
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${getMapPosition(currentPosition.lat, currentPosition.lng).x}%`,
                top: `${getMapPosition(currentPosition.lat, currentPosition.lng).y}%`
              }}
            >
              <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            </div>
          )}
        </div>

        <div className="mt-4 text-center text-sm text-gray-600">
          Cliquez sur une ville ou utilisez votre position actuelle
        </div>
      </div>

      {/* Informations de localisation */}
      {selectedLocation && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-green-600" />
            <span className="font-semibold text-green-800">Position confirmée</span>
          </div>
          <p className="text-sm text-green-700">
            Latitude: {selectedLocation.lat.toFixed(4)}° | 
            Longitude: {selectedLocation.lng.toFixed(4)}°
          </p>
        </div>
      )}
    </div>
  );
};

export default RealMap;