import React, { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface OpenStreetMapProps {
  onLocationSelect: (lat: number, lng: number) => void;
  selectedLocation?: { lat: number; lng: number } | null;
}

const OpenStreetMap: React.FC<OpenStreetMapProps> = ({ onLocationSelect, selectedLocation }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Dynamically load Leaflet (OpenStreetMap)
    const loadLeaflet = async () => {
      // Load CSS
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);

      // Load JS
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      script.onload = () => {
        const L = (window as any).L;
        
        // Initialize map
        const mapInstance = L.map(mapRef.current, {
          center: [46.603354, 1.888334], // Centre de la France
          zoom: 6,
          scrollWheelZoom: true,
        });

        // Add OpenStreetMap tiles (100% gratuit)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
          maxZoom: 19,
        }).addTo(mapInstance);

        // Handle map clicks
        mapInstance.on('click', (e: any) => {
          const { lat, lng } = e.latlng;
          onLocationSelect(lat, lng);
          
          // Remove existing marker
          if (marker) {
            mapInstance.removeLayer(marker);
          }
          
          // Add new marker
          const newMarker = L.marker([lat, lng]).addTo(mapInstance);
          setMarker(newMarker);
        });

        setMap(mapInstance);
      };
      document.head.appendChild(script);
    };

    loadLeaflet();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  // Update marker when selectedLocation changes
  useEffect(() => {
    if (map && selectedLocation) {
      // Remove existing marker
      if (marker) {
        map.removeLayer(marker);
      }
      
      // Add new marker
      const L = (window as any).L;
      if (L) {
        const newMarker = L.marker([selectedLocation.lat, selectedLocation.lng]).addTo(map);
        setMarker(newMarker);
        map.setView([selectedLocation.lat, selectedLocation.lng], 12);
      }
    }
  }, [selectedLocation, map]);

  return (
    <div className="h-96 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 relative">
      <div ref={mapRef} className="w-full h-full" />
      
      {!map && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500 mx-auto mb-4"></div>
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-700 font-semibold text-lg">Chargement de la carte...</p>
            <p className="text-sm text-gray-500 mt-2">OpenStreetMap - 100% Gratuit</p>
          </div>
        </div>
      )}
      
      <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg">
        🆓 100% Gratuit - OpenStreetMap
      </div>
    </div>
  );
};

export default OpenStreetMap;