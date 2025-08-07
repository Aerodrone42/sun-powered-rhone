import React, { useState, useEffect, useRef } from 'react';
import { Sun, Zap, Home, Calculator, MapPin, Battery, Leaf, TrendingUp } from 'lucide-react';

const SolarSimulator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<{lat: number; lng: number} | null>(null);
  const [locationData, setLocationData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  // Form data
  const [formData, setFormData] = useState({
    city: '',
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

  // Récupération des données de localisation via GéoAPI
  const fetchLocationData = async (lat, lng) => {
    setLoading(true);
    try {
      // Géocodage inverse avec l'API française
      const geoResponse = await fetch(
        `https://api-adresse.data.gouv.fr/reverse/?lon=${lng}&lat=${lat}&limit=1`
      );
      const geoData = await geoResponse.json();
      
      let address = `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
      let region = 'Provence-Alpes-Côte d\'Azur'; // Fallback
      
      if (geoData.features && geoData.features.length > 0) {
        const feature = geoData.features[0];
        address = feature.properties.label || address;
        
        // Détermination de la région pour l'irradiation
        const context = feature.properties.context;
        if (context) {
          if (context.includes('Provence-Alpes-Côte d\'Azur')) region = 'Provence-Alpes-Côte d\'Azur';
          else if (context.includes('Occitanie')) region = 'Occitanie';
          else if (context.includes('Nouvelle-Aquitaine')) region = 'Nouvelle-Aquitaine';
          else if (context.includes('Auvergne-Rhône-Alpes')) region = 'Auvergne-Rhône-Alpes';
          else if (context.includes('Île-de-France')) region = 'Île-de-France';
          else if (context.includes('Grand Est')) region = 'Grand Est';
          else if (context.includes('Hauts-de-France')) region = 'Hauts-de-France';
          else if (context.includes('Normandie')) region = 'Normandie';
          else if (context.includes('Bretagne')) region = 'Bretagne';
          else if (context.includes('Centre-Val de Loire')) region = 'Centre-Val de Loire';
          else if (context.includes('Bourgogne-Franche-Comté')) region = 'Bourgogne-Franche-Comté';
          else if (context.includes('Pays de la Loire')) region = 'Pays de la Loire';
          else if (context.includes('Corse')) region = 'Corse';
        }
      }

      // Données d'irradiation réelles par région
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

      setLocationData({
        address,
        region,
        lat,
        lng,
        irradiation: regionData.irradiation,
        sunshine: regionData.sunshine,
        solarScore: Math.min(10, Math.round(regionData.irradiation / 155))
      });

    } catch (error) {
      console.error('Erreur de géolocalisation:', error);
      setLocationData({
        address: `${lat.toFixed(4)}, ${lng.toFixed(4)}`,
        region: 'Provence-Alpes-Côte d\'Azur',
        lat,
        lng,
        irradiation: 1400,
        sunshine: 2500,
        solarScore: 8
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
      fetchLocationData(city.lat, city.lng);
    }
  };

  // Calcul des résultats solaires
  const calculateSolarResults = async () => {
    setLoading(true);
    
    const { irradiation } = locationData;
    const roofSurface = formData.roofSurface;
    const monthlyBill = formData.monthlyBill;
    const annualConsumption = monthlyBill * 12 / 0.17;
    
    // Facteurs d'orientation
    const orientationFactors = {
      'sud': 1.0,
      'sud-est': 0.93,
      'sud-ouest': 0.93,
      'est': 0.78,
      'ouest': 0.78,
      'nord': 0.6
    };
    
    const orientationFactor = orientationFactors[formData.roofOrientation] || 1.0;
    const irradiationFactor = irradiation / 1000;

    // PANNEAUX CLASSIQUES (300-400W)
    const classicPower = Math.min(Math.ceil(roofSurface / 7) * 0.35, 9);
    const classicPanels = Math.ceil(classicPower * 1000 / 350);
    const classicSurface = classicPanels * 2;
    const classicProductionMin = Math.round(classicPower * 1000 * irradiationFactor * orientationFactor * 0.95);
    const classicProductionMax = Math.round(classicPower * 1000 * irradiationFactor * orientationFactor * 1.05);
    const classicSavingsMin = Math.round(classicProductionMin * 0.7 * 0.17);
    const classicSavingsMax = Math.round(classicProductionMax * 0.7 * 0.17);

    // PANNEAUX NOUVELLE GÉNÉRATION (700-850W, rendement +25-30%)
    const newGenPower = Math.min(Math.ceil(roofSurface / 4.5) * 0.775, 15);
    const newGenPanels = Math.ceil(newGenPower * 1000 / 775);
    const newGenSurface = newGenPanels * 2.2;
    const newGenProductionMin = Math.round(newGenPower * 1000 * irradiationFactor * orientationFactor * 1.25);
    const newGenProductionMax = Math.round(newGenPower * 1000 * irradiationFactor * orientationFactor * 1.30);
    const newGenSavingsMin = Math.round(newGenProductionMin * 0.75 * 0.17);
    const newGenSavingsMax = Math.round(newGenProductionMax * 0.75 * 0.17);

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
    setFormData({
      city: '',
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

  // Simulation de carte simple (sans react-leaflet pour éviter les dépendances)
  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Conversion approximative pixel vers coordonnées (France)
    const lat = 50.5 - (y / rect.height) * 10; // Approximation
    const lng = -5 + (x / rect.width) * 15; // Approximation
    
    setSelectedLocation({ lat, lng });
    fetchLocationData(lat, lng);
  };

  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-3 flex items-center justify-center gap-3">
            <Sun className="w-10 h-10" />
            Simulateur Panneaux Solaires
          </h1>
          <p className="text-xl opacity-90">
            Découvrez la puissance des panneaux nouvelle génération !
          </p>
          <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mt-3">
            <Zap className="w-4 h-4 mr-2" />
            700-850W | Rendement +30%
          </div>
        </div>

        {/* Progress Bar */}
        <div className="p-8">
          <div className="h-2 bg-gray-200 rounded-full mb-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Étape 1: Localisation */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-orange-500" />
                Localisez votre logement
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Sélectionnez votre ville
                  </label>
                  <select 
                    value={formData.city} 
                    onChange={(e) => {
                      setFormData({...formData, city: e.target.value});
                      if (e.target.value) handleCitySelect(e.target.value);
                    }}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">-- Choisissez votre ville --</option>
                    <option value="paris">Paris (75)</option>
                    <option value="marseille">Marseille (13)</option>
                    <option value="lyon">Lyon (69)</option>
                    <option value="toulouse">Toulouse (31)</option>
                    <option value="nice">Nice (06)</option>
                    <option value="nantes">Nantes (44)</option>
                    <option value="montpellier">Montpellier (34)</option>
                    <option value="strasbourg">Strasbourg (67)</option>
                    <option value="bordeaux">Bordeaux (33)</option>
                    <option value="lille">Lille (59)</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Ou saisissez votre code postal
                  </label>
                  <input 
                    type="text" 
                    value={formData.postalCode}
                    onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                    placeholder="Ex: 13000" 
                    maxLength={5}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              <p className="text-center text-gray-600">
                Puis cliquez sur la carte pour affiner votre position exacte
              </p>

              {/* Carte simulée */}
              <div 
                className="h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-green-100 to-blue-100 cursor-crosshair relative"
                onClick={handleMapClick}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-semibold">Cliquez pour sélectionner votre position</p>
                    <p className="text-sm text-gray-500 mt-2">(Carte interactive - France)</p>
                  </div>
                </div>
                {selectedLocation && (
                  <div 
                    className="absolute w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: '50%',
                      top: '50%'
                    }}
                  />
                )}
              </div>

              {/* Données de localisation */}
              {locationData && (
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="font-bold text-lg mb-4">📍 Localisation sélectionnée</h4>
                  <p className="text-gray-700 mb-4">{locationData.address}</p>
                  
                  <div className="grid grid-cols-3 gap-4">
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
                  </div>
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
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-all"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 2: Caractéristiques du logement */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <Home className="w-8 h-8 text-orange-500" />
                Caractéristiques de votre logement
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Type de logement
                  </label>
                  <select 
                    value={formData.houseType}
                    onChange={(e) => setFormData({...formData, houseType: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                  >
                    <option value="maison">Maison individuelle</option>
                    <option value="appartement">Appartement</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Surface habitable
                  </label>
                  <select 
                    value={formData.houseSurface}
                    onChange={(e) => setFormData({...formData, houseSurface: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                  >
                    <option value="80">Moins de 80 m²</option>
                    <option value="100">80 - 100 m²</option>
                    <option value="150">100 - 150 m²</option>
                    <option value="200">150 - 200 m²</option>
                    <option value="250">Plus de 200 m²</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Orientation principale du toit
                  </label>
                  <select 
                    value={formData.roofOrientation}
                    onChange={(e) => setFormData({...formData, roofOrientation: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
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
                  <label className="block text-sm font-semibold text-gray-700">
                    Inclinaison du toit
                  </label>
                  <select 
                    value={formData.roofInclination}
                    onChange={(e) => setFormData({...formData, roofInclination: e.target.value})}
                    className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
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

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Surface disponible sur le toit: {formData.roofSurface} m²
                </label>
                <input 
                  type="range" 
                  min="20" 
                  max="200" 
                  value={formData.roofSurface}
                  onChange={(e) => setFormData({...formData, roofSurface: parseInt(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center font-semibold text-orange-500">
                  {formData.roofSurface} m²
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={prevStep}
                  className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all"
                >
                  Retour
                </button>
                <button 
                  onClick={nextStep}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 3: Consommation */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <Zap className="w-8 h-8 text-orange-500" />
                Votre consommation électrique
              </h2>

              <div className="space-y-6">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-gray-700">
                    Montant de votre facture électrique mensuelle: {formData.monthlyBill} €/mois
                  </label>
                  <input 
                    type="range" 
                    min="50" 
                    max="400" 
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({...formData, monthlyBill: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center font-semibold text-orange-500">
                    {formData.monthlyBill} €/mois
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-700">
                      Nombre de personnes dans le foyer
                    </label>
                    <select 
                      value={formData.residents}
                      onChange={(e) => setFormData({...formData, residents: e.target.value})}
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                    >
                      <option value="1">1 personne</option>
                      <option value="2">2 personnes</option>
                      <option value="3">3 personnes</option>
                      <option value="4">4 personnes</option>
                      <option value="5">5 personnes ou plus</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-gray-700">
                      Mode de chauffage
                    </label>
                    <select 
                      value={formData.heating}
                      onChange={(e) => setFormData({...formData, heating: e.target.value})}
                      className="w-full p-3 border-2 border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
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
                <h3 className="text-2xl font-bold text-gray-800 mt-8">
                  🔬 Comparatif des technologies
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">🔶 Panneaux Classiques</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Puissance</span>
                        <span className="font-bold">300-400W</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Rendement</span>
                        <span className="font-bold">18-20%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Surface nécessaire</span>
                        <span className="font-bold">6-8 m²/kWc</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Durée de vie</span>
                        <span className="font-bold">20-25 ans</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">⚡ Nouvelle Génération</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Puissance</span>
                        <span className="font-bold">
                          700-850W 
                          <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">+100%</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Rendement</span>
                        <span className="font-bold">
                          25-30% 
                          <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">+30%</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Surface nécessaire</span>
                        <span className="font-bold">
                          4-5 m²/kWc 
                          <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">-40%</span>
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                        <span>Durée de vie</span>
                        <span className="font-bold">
                          30+ ans 
                          <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">+25%</span>
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
                        Les panneaux nouvelle génération produisent 2x plus d'énergie sur la même surface !
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button 
                    onClick={prevStep}
                    className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all"
                  >
                    Retour
                  </button>
                  <button 
                    onClick={calculateSolarResults}
                    disabled={loading}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50"
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
              <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-orange-500" />
                Votre simulation personnalisée
              </h2>

              {/* Comparatif des résultats */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">🔶 Résultats Technologie Classique</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Puissance installée</span>
                      <span className="font-bold">{results.classic.power} kWc</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Nombre de panneaux</span>
                      <span className="font-bold">{results.classic.panels}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Production annuelle</span>
                      <span className="font-bold">{results.classic.productionMin.toLocaleString()} - {results.classic.productionMax.toLocaleString()} kWh</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Surface utilisée</span>
                      <span className="font-bold">{results.classic.surface} m²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Économies annuelles</span>
                      <span className="font-bold">{results.classic.savingsMin} - {results.classic.savingsMax} €</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">⚡ Résultats Nouvelle Génération</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Puissance installée</span>
                      <span className="font-bold">{results.newGen.power} kWc</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Nombre de panneaux</span>
                      <span className="font-bold">{results.newGen.panels}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Production annuelle</span>
                      <span className="font-bold">{results.newGen.productionMin.toLocaleString()} - {results.newGen.productionMax.toLocaleString()} kWh</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Surface utilisée</span>
                      <span className="font-bold">{results.newGen.surface} m²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                      <span>Économies annuelles</span>
                      <span className="font-bold">{results.newGen.savingsMin} - {results.newGen.savingsMax} €</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
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
              <h3 className="text-2xl font-bold text-gray-800">💎 Avantages de la nouvelle génération</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
                  <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    +{results.advantages.productionGainMin.toLocaleString()} à +{results.advantages.productionGainMax.toLocaleString()}
                  </div>
                  <div className="text-gray-600 font-medium">kWh/an supplémentaires</div>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
                  <div className="text-4xl mb-4">💰</div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    +{results.advantages.savingsGainMin} à +{results.advantages.savingsGainMax} €
                  </div>
                  <div className="text-gray-600 font-medium">d'économies annuelles</div>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
                  <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {results.advantages.efficiency}
                  </div>
                  <div className="text-gray-600 font-medium">de rendement supérieur</div>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
                  <Sun className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {results.advantages.spaceSaved} m²
                  </div>
                  <div className="text-gray-600 font-medium">d'espace libre en plus</div>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
                  <Battery className="w-12 h-12 text-red-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {results.advantages.autonomy}%
                  </div>
                  <div className="text-gray-600 font-medium">d'autonomie énergétique</div>
                </div>

                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-orange-500">
                  <Leaf className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {results.advantages.co2Saved} kg
                  </div>
                  <div className="text-gray-600 font-medium">CO₂ évité/an</div>
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
                  className="bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-all"
                >
                  Nouvelle simulation
                </button>
                <button 
                  onClick={() => alert('Merci pour votre intérêt ! Un expert vous contactera sous 24h pour établir votre devis personnalisé avec nos panneaux nouvelle génération.')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Demander un devis gratuit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolarSimulator;