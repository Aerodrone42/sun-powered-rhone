import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface MapboxMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  selectedLocation?: { lat: number; lng: number } | null;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ onLocationSelect, selectedLocation }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Initialize map when token is provided
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Set Mapbox access token
    mapboxgl.accessToken = mapboxToken;
    
    try {
      // Initialize map centered on France
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [2.3522, 46.6031], // France center
        zoom: 5.5,
        pitch: 0,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Handle map clicks
      map.current.on('click', (e) => {
        const { lng, lat } = e.lngLat;
        onLocationSelect(lat, lng);
        
        // Add or update marker
        if (marker.current) {
          marker.current.remove();
        }
        
        marker.current = new mapboxgl.Marker({
          color: '#ef4444'
        })
          .setLngLat([lng, lat])
          .addTo(map.current!);
      });

      setShowTokenInput(false);
    } catch (error) {
      console.error('Erreur d\'initialisation de la carte:', error);
      setShowTokenInput(true);
    }

    // Cleanup
    return () => {
      if (marker.current) {
        marker.current.remove();
      }
      if (map.current) {
        map.current.remove();
      }
    };
  }, [mapboxToken, onLocationSelect]);

  // Update marker when selectedLocation changes
  useEffect(() => {
    if (!map.current || !selectedLocation) return;

    if (marker.current) {
      marker.current.remove();
    }

    marker.current = new mapboxgl.Marker({
      color: '#ef4444'
    })
      .setLngLat([selectedLocation.lng, selectedLocation.lat])
      .addTo(map.current);

    // Center map on selected location
    map.current.flyTo({
      center: [selectedLocation.lng, selectedLocation.lat],
      zoom: 10,
      duration: 1000
    });
  }, [selectedLocation]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <div className="h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Configuration de la carte
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Veuillez entrer votre token public Mapbox pour activer la carte interactive.
            <br />
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:underline"
            >
              Obtenez votre token sur mapbox.com
            </a>
          </p>
          <div className="space-y-3">
            <input
              type="text"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              placeholder="pk.eyJ1IjoiY..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none text-sm"
            />
            <button
              onClick={handleTokenSubmit}
              disabled={!mapboxToken.trim()}
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Activer la carte
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-96 rounded-2xl overflow-hidden shadow-lg relative">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-gray-700">
          📍 Cliquez sur la carte pour sélectionner votre position
        </p>
      </div>
    </div>
  );
};

export default MapboxMap;