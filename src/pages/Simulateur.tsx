import React, { useState, useEffect, useRef } from 'react';
import { Sun, Zap, Home, Calculator, MapPin, Battery, Leaf, TrendingUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenStreetMap from '../components/OpenStreetMap';

const SolarSimulator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null);

  // Form data
  const [formData, setFormData] = useState({
    city: '',
    address: '',
    postalCode: '',
    houseType: 'maison',
    houseSurface: '100',
    roofOrientation: 'sud',
    roofInclination: '30',
    roofSurface: 60,
    monthlyBill: 120,
    residents: '4',
    heating: 'electrique'
  });

  const totalSteps = 4;

  // Recherche d'adresse avec l'API française
  const searchAddress = async () => {
    const address = formData.address?.trim();
    if (!address) {
      alert('Veuillez saisir une adresse');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(address)}&limit=1`
      );
      const data = await response.json();
      
      if (data.features && data.features.length > 0) {
        const feature = data.features[0];
        const [lng, lat] = feature.geometry.coordinates;
        
        setSelectedLocation({ lat, lng });
        await fetchLocationData(lat, lng, feature.properties.label);
      } else {
        alert('Adresse non trouvée. Veuillez vérifier et réessayer.');
      }
    } catch (error) {
      console.error('Erreur de recherche:', error);
      alert('Erreur lors de la recherche. Essayez avec une ville du menu déroulant.');
    }
    setLoading(false);
  };

  // Recherche par code postal améliorée
  const searchByPostalCode = async (postalCode) => {
    if (postalCode.length === 5) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${postalCode}&type=municipality&limit=1`
        );
        const data = await response.json();
        
        if (data.features && data.features.length > 0) {
          const feature = data.features[0];
          const [lng, lat] = feature.geometry.coordinates;
          
          setSelectedLocation({ lat, lng });
          await fetchLocationData(lat, lng, feature.properties.label);
        }
      } catch (error) {
        console.error('Erreur recherche code postal:', error);
      }
      setLoading(false);
    }
  };

  // Initialisation simplifiée (sans Leaflet pour éviter les problèmes Lovable)
  useEffect(() => {
    // La carte est maintenant stylisée en CSS, pas besoin de Leaflet dans Lovable
    setMap(true); // Carte "active"
  }, []);

  // Récupération des données d'irradiation RÉELLES via API PVGIS (Commission Européenne)
  const fetchLocationData = async (lat, lng, addressLabel = null) => {
    setLoading(true);
    try {
      let address = addressLabel;

      if (!address) {
        // Géocodage inverse avec l'API française
        try {
          const geoResponse = await fetch(
            `https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}&limit=1`
          );
          const geoData = await geoResponse.json();
          
          if (geoData.features && geoData.features.length > 0) {
            address = geoData.features[0].properties.label;
          }
        } catch (error) {
          console.error('Erreur géocodage:', error);
        }
        
        if (!address) {
          address = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        }
      }

      // **API PVGIS OFFICIELLE** - Données d'irradiation solaire précises
      let pvgisData = null;
      try {
        const pvgisResponse = await fetch(
          `https://re.jrc.ec.europa.eu/api/PVcalc?lat=${lat}&lon=${lng}&peakpower=1&loss=14&optimalangles=1&outputformat=json`
        );
        
        if (pvgisResponse.ok) {
          const data = await pvgisResponse.json();
          if (data.outputs && data.outputs.totals) {
            pvgisData = {
              irradiation: Math.round(data.outputs.totals.fixed.H_y), // kWh/m²/an
              production: Math.round(data.outputs.totals.fixed.E_y), // kWh/kWp/an
              optimalAngle: data.inputs.angle || 35,
              pvtemp: Math.round(data.outputs.totals.fixed.T2m || 15)
            };
          }
        }
      } catch (error) {
        console.error('Erreur API PVGIS:', error);
      }

      // Données finales (PVGIS en priorité, sinon fallback par région)
      let finalData;
      
      if (pvgisData) {
        // **DONNÉES RÉELLES PVGIS** 🎯
        finalData = {
          address,
          region: `Données PVGIS précises`,
          lat,
          lng,
          irradiation: pvgisData.irradiation,
          sunshine: Math.round(pvgisData.irradiation / 0.65), // Estimation heures soleil
          solarScore: Math.min(10, Math.round(pvgisData.irradiation / 150)),
          optimalAngle: pvgisData.optimalAngle,
          production: pvgisData.production,
          temperature: pvgisData.pvtemp,
          dataSource: 'PVGIS (Commission Européenne)'
        };
      } else {
        // **Fallback données par région** (si PVGIS indisponible)
        let region = 'Provence-Alpes-Côte d\'Azur';
        
        // Détermination région par coordonnées
        if (lat > 48.5 && lng < 4) region = "Hauts-de-France";
        else if (lat > 47.5 && lng > 5.5) region = "Grand Est";
        else if (lat > 46 && lng > 4.5) region = "Auvergne-Rhône-Alpes";
        else if (lat > 43.5 && lng > 4) region = "Provence-Alpes-Côte d'Azur";
        else if (lat > 42.5 && lng > 8) region = "Corse";
        else if (lat < 44.5 && lng < 3) region = "Occitanie";
        else if (lat < 46.5 && lng < 1) region = "Nouvelle-Aquitaine";
        else if (lng < -1) region = "Bretagne";
        else if (lat > 49) region = "Normandie";
        else if (lat > 47 && lng < 3) region = "Pays de la Loire";
        else if (lat > 46.5 && lng < 4.5) region = "Centre-Val de Loire";
        else if (lat > 46 && lng < 6) region = "Bourgogne-Franche-Comté";
        else region = "Île-de-France";

        const irradiationData = {
          'Provence-Alpes-Côte d\'Azur': { irradiation: 1550, sunshine: 2800 },
          'Corse': { irradiation: 1650, sunshine: 2900 },
          'Occitanie': { irradiation: 1450, sunshine: 2500 },
          'Nouvelle-Aquitaine': { irradiation: 1350, sunshine: 2200 },
          'Auvergne-Rhône-Alpes': { irradiation: 1300, sunshine: 2100 },
          'Pays de la Loire': { irradiation: 1250, sunshine: 1950 },
          'Centre-Val de Loire': { irradiation: 1200, sunshine: 1850 },
          'Bourgogne-Franche-Comté': { irradiation: 1150, sunshine: 1800 },
          'Île-de-France': { irradiation: 1150, sunshine: 1760 },
          'Bretagne': { irradiation: 1100, sunshine: 1700 },
          'Grand Est': { irradiation: 1100, sunshine: 1650 },
          'Normandie': { irradiation: 1050, sunshine: 1600 },
          'Hauts-de-France': { irradiation: 1000, sunshine: 1550 }
        };

        const regionData = irradiationData[region] || irradiationData['Provence-Alpes-Côte d\'Azur'];

        finalData = {
          address,
          region,
          lat,
          lng,
          irradiation: regionData.irradiation,
          sunshine: regionData.sunshine,
          solarScore: Math.min(10, Math.round(regionData.irradiation / 155)),
          optimalAngle: 35,
          production: Math.round(regionData.irradiation * 0.8),
          temperature: 15,
          dataSource: 'Données régionales (fallback)'
        };
      }

      setLocationData(finalData);

    } catch (error) {
      console.error('Erreur de géolocalisation:', error);
      setLocationData({
        address: addressLabel || `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        region: 'Données par défaut',
        lat,
        lng,
        irradiation: 1400,
        sunshine: 2500,
        solarScore: 8,
        optimalAngle: 35,
        production: 1200,
        temperature: 15,
        dataSource: 'Données par défaut (erreur API)'
      });
    }
    setLoading(false);
  };

  // Sélection de ville prédéfinie
  const handleCitySelect = (cityKey) => {
    const cities = {
      'paris': { lat: 48.8566, lng: 2.3522, name: 'Paris', region: 'Île-de-France' },
      'marseille': { lat: 43.2965, lng: 5.3698, name: 'Marseille', region: 'Provence-Alpes-Côte d\'Azur' },
      'lyon': { lat: 45.7640, lng: 4.8357, name: 'Lyon', region: 'Auvergne-Rhône-Alpes' },
      'toulouse': { lat: 43.6047, lng: 1.4442, name: 'Toulouse', region: 'Occitanie' },
      'nice': { lat: 43.7102, lng: 7.2620, name: 'Nice', region: 'Provence-Alpes-Côte d\'Azur' },
      'nantes': { lat: 47.2184, lng: -1.5536, name: 'Nantes', region: 'Pays de la Loire' },
      'montpellier': { lat: 43.6110, lng: 3.8767, name: 'Montpellier', region: 'Occitanie' },
      'strasbourg': { lat: 48.5734, lng: 7.7521, name: 'Strasbourg', region: 'Grand Est' },
      'bordeaux': { lat: 44.8378, lng: -0.5792, name: 'Bordeaux', region: 'Nouvelle-Aquitaine' },
      'lille': { lat: 50.6292, lng: 3.0573, name: 'Lille', region: 'Hauts-de-France' }
    };

    const city = cities[cityKey];
    if (city) {
      setSelectedLocation({ lat: city.lat, lng: city.lng });
      fetchLocationData(city.lat, city.lng, `${city.name}, ${city.region}`);
    }
  };

  // Calcul des résultats solaires
  const calculateSolarResults = async () => {
    setLoading(true);
    
    const { irradiation, temperature, optimalAngle } = locationData;
    const roofSurface = formData.roofSurface;
    const monthlyBill = formData.monthlyBill;
    const residents = parseInt(formData.residents) || 4;
    const heating = formData.heating;
    
    // Calcul consommation plus précis selon habitants et chauffage
    let baseConsumption = monthlyBill * 12 / 0.17;
    if (heating === 'electrique') {
      baseConsumption *= 1.3; // +30% pour chauffage électrique
    }
    const annualConsumption = baseConsumption * (residents / 4); // Ajustement selon nombre d'habitants
    
    // Facteurs d'orientation
    const orientationFactors = {
      'sud': 1.0,
      'sud-est': 0.93,
      'sud-ouest': 0.93,
      'est': 0.78,
      'ouest': 0.78,
      'nord': 0.6
    };
    
    // Facteurs d'inclinaison (optimal = angle donné par l'API)
    const roofAngle = parseInt(formData.roofInclination) || 30;
    const angleDiff = Math.abs(roofAngle - (optimalAngle || 30));
    const inclinationFactor = angleDiff <= 5 ? 1.0 : 1.0 - (angleDiff * 0.015); // -1.5% par degré d'écart
    
    const orientationFactor = orientationFactors[formData.roofOrientation] || 1.0;
    const irradiationFactor = irradiation / 1000;
    const temperatureFactor = temperature ? (1.0 - ((temperature - 25) * 0.004)) : 1.0; // -0.4% par degré au-dessus de 25°C

    // PANNEAUX 700-850W STANDARDS (technologie actuelle) - Calcul réaliste selon type logement
    let maxPanels;
    let availableSurface;
    
    if (formData.houseType === 'appartement') {
      // Appartement: limité par les balcons/terrasses ou copropriété
      const houseSurfaceNum = parseInt(formData.houseSurface) || 60;
      if (houseSurfaceNum <= 60) {
        maxPanels = 3; // 2-3 panneaux max sur balcon/terrasse
        availableSurface = 7.2; // ~7m² max
      } else if (houseSurfaceNum <= 100) {
        maxPanels = 5; // Grande terrasse
        availableSurface = 12;
      } else {
        maxPanels = 7; // Très grand appartement avec terrasse
        availableSurface = 16.8;
      }
    } else {
      // Maison: calcul basé sur la surface de toit disponible
      // Un panneau moderne fait 3.094 m² (2380mm × 1300mm)
      const panelSurface = 3.094;
      // On utilise 60-65% de la surface de toit pour l'espacement, bords, obstacles
      const usableSurface = roofSurface * 0.65;
      const theoreticalPanels = Math.floor(usableSurface / panelSurface);
      
      // Limitation selon le type de bâtiment
      if (formData.houseType === 'exploitation' || formData.houseType === 'hangar' || formData.houseType === 'batiment_pro') {
        // Exploitation agricole: peut accueillir plus de panneaux
        maxPanels = Math.min(theoreticalPanels, 100); // Max 100 panneaux pour les pro
        availableSurface = maxPanels * panelSurface;
      } else {
        // Maison individuelle: pas de limite artificielle  
        maxPanels = theoreticalPanels;
        availableSurface = Math.round(maxPanels * panelSurface * 100) / 100; // Arrondi à 2 décimales
      }
    }
    
    const classicPower = maxPanels * 0.775; // 775W moyenne, pas de limite
    const classicPanels = maxPanels;
    const classicSurface = Math.round(classicPanels * 3.094 * 100) / 100; // Arrondi à 2 décimales
    const classicProductionMin = Math.round(classicPower * 1000 * irradiationFactor * orientationFactor * inclinationFactor * temperatureFactor * 0.98);
    const classicProductionMax = Math.round(classicPower * 1000 * irradiationFactor * orientationFactor * inclinationFactor * temperatureFactor * 1.02);
    const classicSavingsMin = Math.round(classicProductionMin * 0.70 * 0.17);
    const classicSavingsMax = Math.round(classicProductionMax * 0.70 * 0.17);

    // PANNEAUX 700-850W NOUVELLE GÉNÉRATION (même puissance + 25-30% rendement supplémentaire)
    const newGenPower = classicPower; // Même puissance installée
    const newGenPanels = classicPanels; // Même nombre de panneaux
    const newGenSurface = classicSurface; // Même surface utilisée
    const newGenProductionMin = Math.round(classicProductionMin * 1.25); // +25% de rendement
    const newGenProductionMax = Math.round(classicProductionMax * 1.30); // +30% de rendement
    const newGenSavingsMin = Math.round(newGenProductionMin * 0.72 * 0.17);
    const newGenSavingsMax = Math.round(newGenProductionMax * 0.72 * 0.17);

    // Avantages
    const productionGainMin = newGenProductionMin - classicProductionMax;
    const productionGainMax = newGenProductionMax - classicProductionMin;
    const savingsGainMin = newGenSavingsMin - classicSavingsMax;
    const savingsGainMax = newGenSavingsMax - classicSavingsMin;
    const autonomy = Math.round(((newGenProductionMin + newGenProductionMax) / 2) / annualConsumption * 100);
    const co2Saved = Math.round(((newGenProductionMin + newGenProductionMax) / 2) * 0.07);

    const calculatedResults = {
      classic: {
        power: classicPower,
        panels: classicPanels,
        surface: classicSurface,
        productionMin: classicProductionMin,
        productionMax: classicProductionMax,
        savingsMin: classicSavingsMin,
        savingsMax: classicSavingsMax
      },
      newGen: {
        power: newGenPower,
        panels: newGenPanels,
        surface: newGenSurface,
        productionMin: newGenProductionMin,
        productionMax: newGenProductionMax,
        savingsMin: newGenSavingsMin,
        savingsMax: newGenSavingsMax
      },
      advantages: {
        productionGainMin,
        productionGainMax,
        savingsGainMin,
        savingsGainMax,
        spaceSaved: Math.round(roofSurface - newGenSurface),
        autonomy,
        co2Saved,
        efficiency: '25-30%'
      }
    };

    setResults(calculatedResults);
    setLoading(false);
    setCurrentStep(4);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetSimulator = () => {
    setCurrentStep(1);
    setSelectedLocation(null);
    setLocationData(null);
    setResults(null);
    setMarker(null);
    
    setFormData({
      city: '',
      address: '',
      postalCode: '',
      houseType: 'maison',
      houseSurface: '100',
      roofOrientation: 'sud',
      roofInclination: '30',
      roofSurface: 60,
      monthlyBill: 120,
      residents: '4',
      heating: 'electrique'
    });
  };

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden z-10 m-4">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary via-primary to-primary backdrop-blur-xl text-primary-foreground p-8 text-center border-b border-border">
            <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3 drop-shadow-lg">
              <Sun className="w-10 h-10" />
              Simulateur Panneaux Solaires
            </h1>
            <p className="text-xl opacity-90 drop-shadow-md">
              Découvrez la puissance des panneaux nouvelle génération !
            </p>
            <div className="inline-flex items-center bg-background/20 backdrop-blur-xl border border-border text-foreground px-4 py-2 rounded-full text-sm font-semibold mt-3 shadow-xl">
              <Zap className="w-4 h-4 mr-2" />
              700-850W | Rendement +30%
            </div>
          </div>

          {/* Progress Bar */}
          <div className="p-8 bg-background/95 backdrop-blur-xl">
            <div className="h-3 bg-muted rounded-full mb-8 overflow-hidden backdrop-blur-xl border border-border">
              <div 
                className="h-full bg-gradient-to-r from-primary via-primary to-primary rounded-full transition-all duration-500 shadow-glow"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>

          {/* Étape 1: Localisation */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3 drop-shadow-lg">
                <MapPin className="w-8 h-8 text-primary" />
                Localisez votre logement
              </h2>
              
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-foreground drop-shadow-md">
                  Tapez votre adresse exacte
                </label>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    value={formData.address || ''}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="Ex: 123 rue de la République 69000 Lyon" 
                    className="flex-1 p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground placeholder-muted-foreground shadow-xl"
                  />
                  <button 
                    onClick={searchAddress}
                    disabled={loading}
                    className="bg-secondary hover:bg-secondary-hover border border-border text-secondary-foreground px-6 py-3 rounded-xl font-semibold disabled:opacity-50 transition-all flex items-center gap-2 shadow-xl hover:shadow-glow"
                  >
                    🔍 {loading ? 'Recherche...' : 'Rechercher'}
                  </button>
                </div>
              </div>

              <p className="text-center text-muted-foreground mb-4 drop-shadow-md">
                Saisissez votre adresse complète avec le code postal pour une localisation précise
              </p>

              <div className="text-center mb-4">
                <span className="inline-flex items-center text-primary font-semibold drop-shadow-lg">
                  👆 Cliquez sur la carte pour affiner votre position exacte 👆
                </span>
              </div>

              {/* Carte interactive */}
              <OpenStreetMap 
                onLocationSelect={(lat, lng) => {
                  setSelectedLocation({ lat, lng });
                  fetchLocationData(lat, lng);
                }}
                selectedLocation={selectedLocation}
              />

              {/* Données de localisation */}
              {locationData && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-2">📍 Localisation sélectionnée</h4>
                  <p className="text-gray-700 mb-2">{locationData.address}</p>
                  <div className="text-xs text-blue-600 mb-4 font-semibold">
                    🔬 {locationData.dataSource}
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center bg-white rounded-xl p-4">
                      <div className="text-2xl font-bold text-orange-500">
                        {locationData.irradiation}
                      </div>
                      <div className="text-sm text-gray-600">
                        kWh/m²/an<br/>Irradiation
                      </div>
                    </div>
                    <div className="text-center bg-white rounded-xl p-4">
                      <div className="text-2xl font-bold text-orange-500">
                        {locationData.sunshine}
                      </div>
                      <div className="text-sm text-gray-600">
                        heures/an<br/>Ensoleillement
                      </div>
                    </div>
                    <div className="text-center bg-white rounded-xl p-4">
                      <div className="text-2xl font-bold text-orange-500">
                        {locationData.solarScore}
                      </div>
                      <div className="text-sm text-gray-600">
                        / 10<br/>Potentiel solaire
                      </div>
                    </div>
                    <div className="text-center bg-white rounded-xl p-4">
                      <div className="text-2xl font-bold text-blue-500">
                        {locationData.optimalAngle}°
                      </div>
                      <div className="text-sm text-gray-600">
                        Angle<br/>optimal
                      </div>
                    </div>
                  </div>

                  {locationData.dataSource.includes('PVGIS') && (
                    <div className="mt-4 bg-green-50 border-2 border-green-200 rounded-xl p-3">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600 font-bold">✅ DONNÉES OFFICIELLES</span>
                        <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                          Commission Européenne
                        </span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        Production estimée: <strong>{locationData.production} kWh/kWc/an</strong> | 
                        Température moy.: <strong>{locationData.temperature}°C</strong>
                      </p>
                    </div>
                  )}
                </div>
              )}

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Sun className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Plus votre localisation est précise, plus nos calculs seront exacts !
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={nextStep}
                  disabled={!locationData}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 2: Caractéristiques du logement */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3 drop-shadow-lg">
                <Home className="w-8 h-8 text-primary" />
                Caractéristiques de votre logement
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-foreground drop-shadow-md">
                    Type de logement
                  </label>
                  <select 
                    value={formData.houseType}
                    onChange={(e) => setFormData({...formData, houseType: e.target.value})}
                    className="w-full p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground shadow-xl"
                  >
                    <option value="maison">Maison individuelle</option>
                    <option value="appartement">Appartement</option>
                    <option value="exploitation">Exploitation agricole</option>
                    <option value="hangar">Hangar agricole</option>
                    <option value="batiment_pro">Bâtiment professionnel</option>
                  </select>
                </div>

                <div className="space-y-4">
                   <label className="block text-sm font-semibold text-foreground drop-shadow-md">
                     Surface de toit disponible
                  </label>
                  <select 
                    value={formData.houseSurface}
                    onChange={(e) => setFormData({...formData, houseSurface: e.target.value})}
                    className="w-full p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground shadow-xl"
                  >
                     <option value="80">Moins de 80 m²</option>
                     <option value="100">80 - 120 m²</option>
                     <option value="150">120 - 180 m²</option>
                     <option value="200">180 - 250 m²</option>
                     <option value="300">250 - 350 m²</option>
                     <option value="500">Plus de 350 m²</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-foreground drop-shadow-md">
                    Orientation principale du toit
                  </label>
                  <select 
                    value={formData.roofOrientation}
                    onChange={(e) => setFormData({...formData, roofOrientation: e.target.value})}
                    className="w-full p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground shadow-xl"
                  >
                    <option value="sud">Sud (idéal)</option>
                    <option value="sud-est">Sud-Est</option>
                    <option value="sud-ouest">Sud-Ouest</option>
                    <option value="est">Est</option>
                    <option value="ouest">Ouest</option>
                    <option value="nord">Nord</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-foreground">
                    Inclinaison du toit
                  </label>
                  <select 
                    value={formData.roofInclination}
                    onChange={(e) => setFormData({...formData, roofInclination: e.target.value})}
                    className="w-full p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground shadow-xl"
                  >
                    <option value="30">30° (optimale)</option>
                    <option value="25">25°</option>
                    <option value="35">35°</option>
                    <option value="40">40°</option>
                    <option value="45">45°</option>
                    <option value="plat">Toit plat</option>
                  </select>
                </div>
              </div>


              <div className="flex justify-between">
                <button 
                  onClick={prevStep}
                  className="bg-secondary hover:bg-secondary-hover border border-border text-secondary-foreground px-8 py-3 rounded-xl font-semibold transition-all shadow-xl"
                >
                  Retour
                </button>
                <button 
                  onClick={nextStep}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all shadow-xl"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 3: Consommation */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3 drop-shadow-lg">
                <Zap className="w-8 h-8 text-primary" />
                Votre consommation électrique
              </h2>

              <div className="space-y-6">
                <div className="space-y-4">
                   <label className="block text-sm font-semibold text-foreground">
                     Montant de votre facture électrique mensuelle
                   </label>
                   <div className="flex gap-2 items-center">
                     <input 
                       type="number" 
                       min="50" 
                       max="5000"
                       step="10"
                       value={formData.monthlyBill}
                       onChange={(e) => setFormData({...formData, monthlyBill: parseInt(e.target.value) || 50})}
                       className="flex-1 p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground shadow-xl"
                       placeholder="Ex: 150"
                     />
                     <span className="text-foreground font-semibold">€/mois</span>
                   </div>
                   <div className="text-sm text-muted-foreground">
                     💡 Pour les entreprises agricoles, indiquez votre facture totale mensuelle
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-foreground">
                      Nombre de personnes dans le foyer
                    </label>
                    <select 
                      value={formData.residents}
                      onChange={(e) => setFormData({...formData, residents: e.target.value})}
                      className="w-full p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground shadow-xl"
                    >
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes ou plus</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-foreground">
                      Mode de chauffage
                    </label>
                    <select 
                      value={formData.heating}
                      onChange={(e) => setFormData({...formData, heating: e.target.value})}
                      className="w-full p-3 bg-background/90 backdrop-blur-xl border border-border rounded-xl focus:border-primary focus:outline-none text-foreground shadow-xl"
                    >
                      <option value="electrique">Électrique</option>
                      <option value="gaz">Gaz</option>
                      <option value="fioul">Fioul</option>
                      <option value="pompe-chaleur">Pompe à chaleur</option>
                      <option value="bois">Bois</option>
                    </select>
                  </div>
                </div>

                {/* Comparatif technologies */}
                <h3 className="text-2xl font-bold text-foreground mt-8">
                  🔬 Panneaux 700-850W : Standard vs Nouvelle Génération
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-4">🔶 Panneaux 700-850W Standards</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Puissance</span>
                        <span className="font-bold">700-850W</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Technologie</span>
                        <span className="font-bold">Standard actuelle</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Surface par panneau</span>
                        <span className="font-bold">≈ 2.4 m²</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Rendement</span>
                        <span className="font-bold">Standard</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-4">⚡ Panneaux 700-850W Nouvelle Génération</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Puissance</span>
                        <span className="font-bold">
                          700-850W 
                          <span className="ml-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">Même</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Technologie</span>
                        <span className="font-bold">
                          Nouvelle génération 
                          <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">2024</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Surface par panneau</span>
                        <span className="font-bold">
                          ≈ 2.4 m² 
                          <span className="ml-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs">Même</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                        <span>Rendement</span>
                        <span className="font-bold">
                          +25% à +30% 
                          <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">NOUVEAU</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">
                        Les panneaux nouvelle génération offrent 25-30% de rendement supplémentaire à puissance égale !
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button 
                    onClick={prevStep}
                    className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-3 rounded-xl font-semibold transition-all"
                  >
                    Retour
                  </button>
                  <button 
                    onClick={calculateSolarResults}
                    disabled={loading}
                    className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {loading ? 'Calcul en cours...' : 'Calculer mon potentiel'}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Étape 4: Résultats */}
          {currentStep === 4 && results && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-foreground flex items-center gap-3 drop-shadow-lg">
                <Calculator className="w-8 h-8 text-primary" />
                Votre simulation personnalisée
              </h2>

              {/* Comparatif des résultats */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-6">🔶 Panneaux 700-850W Standards</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Puissance installée</span>
                      <span className="font-bold">{results.classic.power} kWc</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Nombre de panneaux</span>
                      <span className="font-bold">{results.classic.panels}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Production annuelle</span>
                      <span className="font-bold">{results.classic.productionMin.toLocaleString()} - {results.classic.productionMax.toLocaleString()} kWh</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Surface utilisée</span>
                      <span className="font-bold">{results.classic.surface} m²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Économies annuelles</span>
                      <span className="font-bold">{results.classic.savingsMin} - {results.classic.savingsMax} €</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-card-foreground mb-6">⚡ Panneaux 700-850W Nouvelle Génération</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Puissance installée</span>
                      <span className="font-bold">{results.newGen.power} kWc</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Nombre de panneaux</span>
                      <span className="font-bold">{results.newGen.panels}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Production annuelle</span>
                      <span className="font-bold">{results.newGen.productionMin.toLocaleString()} - {results.newGen.productionMax.toLocaleString()} kWh</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Surface utilisée</span>
                      <span className="font-bold">{results.newGen.surface} m²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Économies annuelles</span>
                      <span className="font-bold">{results.newGen.savingsMin} - {results.newGen.savingsMax} €</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Rendement supérieur</span>
                      <span className="font-bold text-green-600">
                        +{results.advantages.efficiency}
                        <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">NOUVEAU</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avantages de la nouvelle génération */}
              <h3 className="text-2xl font-bold text-foreground">💎 Avantages de la nouvelle génération</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-card-foreground mb-2">
                    +{results.advantages.productionGainMin.toLocaleString()} à +{results.advantages.productionGainMax.toLocaleString()}
                  </div>
                  <div className="text-muted-foreground font-medium">kWh/an supplémentaires</div>
                </div>

                <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary">
                  <div className="text-4xl mb-4">💰</div>
                  <div className="text-3xl font-bold text-card-foreground mb-2">
                    +{results.advantages.savingsGainMin} à +{results.advantages.savingsGainMax} €
                  </div>
                  <div className="text-muted-foreground font-medium">d'économies annuelles</div>
                </div>

                <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-card-foreground mb-2">
                    {results.advantages.efficiency}
                  </div>
                  <div className="text-muted-foreground font-medium">de rendement supérieur</div>
                </div>

                <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary">
                  <Battery className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-card-foreground mb-2">
                    {results.advantages.autonomy}%
                  </div>
                  <div className="text-muted-foreground font-medium">d'autonomie énergétique</div>
                </div>

                <div className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-border hover:border-primary">
                  <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-card-foreground mb-2">
                    {results.advantages.co2Saved} kg
                  </div>
                  <div className="text-muted-foreground font-medium">CO₂ évité/an</div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="text-2xl">📞</div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Contactez nos experts pour obtenir un devis détaillé avec les panneaux nouvelle génération !
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button 
                  onClick={resetSimulator}
                  className="bg-secondary hover:bg-secondary-hover text-secondary-foreground px-8 py-3 rounded-xl font-semibold transition-all"
                >
                  Nouvelle simulation
                </button>
                <button 
                  onClick={() => alert('Merci pour votre intérêt ! Un expert vous contactera sous 24h pour établir votre devis personnalisé avec nos panneaux nouvelle génération.')}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Demander un devis gratuit
                </button>
              </div>
            </div>
          )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SolarSimulator;
