import React, { useState, useEffect, useRef } from 'react';
import { Sun, Zap, Home, Calculator, MapPin, Battery, Leaf, TrendingUp, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
      // Maison: calcul selon données réelles du tableau estimatif
      const houseSurfaceNum = parseInt(formData.houseSurface) || 70;
      // Données basées sur le tableau officiel de moyennes nationales françaises
      if (houseSurfaceNum <= 50) {
        maxPanels = 3; // 2 à 3 panneaux pour 50m²
        availableSurface = 9.28; // 3 panneaux × 3.094m²
      } else if (houseSurfaceNum <= 75) {
        maxPanels = 4; // 3 à 4 panneaux pour 75m²
        availableSurface = 12.38; // 4 panneaux × 3.094m²
      } else if (houseSurfaceNum <= 100) {
        maxPanels = 5; // 4 à 5 panneaux pour 100m²
        availableSurface = 15.47; // 5 panneaux × 3.094m²
      } else if (houseSurfaceNum <= 120) {
        maxPanels = 6; // 5 à 6 panneaux pour 120m²
        availableSurface = 18.56; // 6 panneaux × 3.094m²
      } else if (houseSurfaceNum <= 150) {
        maxPanels = 7; // 6 à 7 panneaux pour 150m²
        availableSurface = 21.66; // 7 panneaux × 3.094m²
      } else if (houseSurfaceNum <= 180) {
        maxPanels = 9; // 8 à 9 panneaux pour 180m²
        availableSurface = 27.85; // 9 panneaux × 3.094m²
      } else if (houseSurfaceNum <= 200) {
        maxPanels = 10; // 9 à 10 panneaux pour 200m²
        availableSurface = 30.94; // 10 panneaux × 3.094m²
      } else {
        maxPanels = 12; // 11 à 12 panneaux pour 250m² et plus
        availableSurface = 37.13; // 12 panneaux × 3.094m² max
      }
    }
    
    const classicPower = Math.min(maxPanels * 0.775, 15.5); // 775W moyenne, max 15.5kWc
    const classicPanels = Math.ceil(classicPower * 1000 / 775);
    const classicSurface = classicPanels * 3.094; // Panneaux 2380mm×1300mm = 3.094m²
    const classicProductionMin = Math.round(classicPower * 1000 * irradiationFactor * orientationFactor * 0.98);
    const classicProductionMax = Math.round(classicPower * 1000 * irradiationFactor * orientationFactor * 1.02);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-br from-primary/5 via-blue-50/50 to-white overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-primary opacity-20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-accent opacity-20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Simulateur Solaire
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              Découvrez le potentiel solaire de votre toiture avec notre technologie nouvelle génération
            </p>
            <div className="inline-flex items-center bg-white/80 backdrop-blur-md border border-white/30 text-primary px-6 py-3 rounded-2xl text-lg font-semibold shadow-soft">
              <Zap className="w-5 h-5 mr-2" />
              Panneaux 700-850W | Rendement +30%
            </div>
          </div>
        </div>
      </div>

      {/* Main Simulator */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-premium overflow-hidden">
          
          {/* Progress Bar */}
          <div className="p-8 pb-0">
            <div className="h-3 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl mb-8 overflow-hidden shadow-inner">
              <div 
                className="h-full bg-hero-gradient rounded-2xl transition-all duration-700 ease-out shadow-glow"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          {/* Étape 1: Localisation */}
          {currentStep === 1 && (
            <div className="p-8 space-y-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-medium">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Où se situe votre logement ?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nous utilisons l'API PVGIS (Commission Européenne) pour des données d'irradiation précises
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Form */}
                <div className="space-y-6">
                  <Card className="bg-white/50 backdrop-blur-md border-white/30">
                    <CardHeader>
                      <CardTitle className="text-xl">Recherche par adresse</CardTitle>
                      <CardDescription>Saisissez votre adresse exacte</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-3">
                        <input 
                          type="text" 
                          value={formData.address || ''}
                          onChange={(e) => setFormData({...formData, address: e.target.value})}
                          placeholder="Ex: 123 rue de la République 69000 Lyon" 
                          className="flex-1 p-4 bg-white/70 border border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                        <Button 
                          onClick={searchAddress}
                          disabled={loading}
                          className="px-6"
                        >
                          {loading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          ) : (
                            'Chercher'
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/50 backdrop-blur-md border-white/30">
                    <CardHeader>
                      <CardTitle className="text-xl">Ou sélectionnez une ville</CardTitle>
                      <CardDescription>Choisissez parmi les principales villes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { key: 'paris', name: 'Paris' },
                          { key: 'marseille', name: 'Marseille' },
                          { key: 'lyon', name: 'Lyon' },
                          { key: 'toulouse', name: 'Toulouse' },
                          { key: 'nice', name: 'Nice' },
                          { key: 'nantes', name: 'Nantes' },
                          { key: 'montpellier', name: 'Montpellier' },
                          { key: 'strasbourg', name: 'Strasbourg' },
                          { key: 'bordeaux', name: 'Bordeaux' },
                          { key: 'lille', name: 'Lille' }
                        ].map((city) => (
                          <Button
                            key={city.key}
                            variant="outline"
                            onClick={() => handleCitySelect(city.key)}
                            className="h-12 bg-white/70 hover:bg-white/90 border-gray-200 hover:border-primary transition-all"
                          >
                            {city.name}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Map and Location Data */}
                <div className="space-y-6">
                  <Card className="bg-white/50 backdrop-blur-md border-white/30">
                    <CardContent className="p-6">
                      <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                        <OpenStreetMap 
                          selectedLocation={selectedLocation}
                          onLocationSelect={(lat, lng) => {
                            setSelectedLocation({ lat, lng });
                            fetchLocationData(lat, lng);
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {locationData && (
                    <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <h3 className="font-semibold text-green-800">Localisation confirmée</h3>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div><strong>Adresse:</strong> {locationData.address}</div>
                          <div><strong>Irradiation:</strong> {locationData.irradiation} kWh/m²/an</div>
                          <div><strong>Score solaire:</strong> {locationData.solarScore}/10</div>
                          <div><strong>Source:</strong> {locationData.dataSource}</div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button 
                  onClick={nextStep}
                  disabled={!locationData}
                  size="lg"
                  className="px-8"
                >
                  Étape suivante
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Étape 2: Informations logement */}
          {currentStep === 2 && (
            <div className="p-8 space-y-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-medium">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Parlez-nous de votre logement
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ces informations nous permettent de calculer la solution optimale pour vous
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-white/50 backdrop-blur-md border-white/30">
                  <CardHeader>
                    <CardTitle>Type de logement</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { value: 'maison', label: 'Maison' },
                        { value: 'appartement', label: 'Appartement' }
                      ].map((type) => (
                        <button
                          key={type.value}
                          onClick={() => setFormData({...formData, houseType: type.value})}
                          className={`p-4 rounded-xl border-2 transition-all ${
                            formData.houseType === type.value 
                              ? 'border-primary bg-primary/5 text-primary' 
                              : 'border-gray-200 bg-white/70 hover:border-primary/50'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Surface habitable (m²)
                      </label>
                      <input 
                        type="number" 
                        value={formData.houseSurface}
                        onChange={(e) => setFormData({...formData, houseSurface: e.target.value})}
                        className="w-full p-4 bg-white/70 border border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="100"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-md border-white/30">
                  <CardHeader>
                    <CardTitle>Informations toiture</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Orientation principale
                      </label>
                      <select 
                        value={formData.roofOrientation}
                        onChange={(e) => setFormData({...formData, roofOrientation: e.target.value})}
                        className="w-full p-4 bg-white/70 border border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="sud">Sud (optimal)</option>
                        <option value="sud-est">Sud-Est</option>
                        <option value="sud-ouest">Sud-Ouest</option>
                        <option value="est">Est</option>
                        <option value="ouest">Ouest</option>
                        <option value="nord">Nord</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Surface toiture disponible (m²)
                      </label>
                      <input 
                        type="number" 
                        value={formData.roofSurface}
                        onChange={(e) => setFormData({...formData, roofSurface: parseFloat(e.target.value) || 0})}
                        className="w-full p-4 bg-white/70 border border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="60"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between pt-6 max-w-4xl mx-auto">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour
                </Button>
                <Button 
                  onClick={nextStep}
                  size="lg"
                  className="px-8"
                >
                  Étape suivante
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Étape 3: Consommation */}
          {currentStep === 3 && (
            <div className="p-8 space-y-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-medium">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Votre consommation énergétique
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Aidez-nous à dimensionner parfaitement votre installation
                </p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <Card className="bg-white/50 backdrop-blur-md border-white/30">
                  <CardHeader>
                    <CardTitle>Facture électricité</CardTitle>
                    <CardDescription>Montant mensuel moyen TTC</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <input 
                        type="number" 
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({...formData, monthlyBill: parseFloat(e.target.value) || 0})}
                        className="flex-1 p-4 bg-white/70 border border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-center text-2xl font-bold"
                        placeholder="120"
                      />
                      <span className="text-xl font-semibold text-gray-600">€/mois</span>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white/50 backdrop-blur-md border-white/30">
                    <CardHeader>
                      <CardTitle>Nombre d'habitants</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <select 
                        value={formData.residents}
                        onChange={(e) => setFormData({...formData, residents: e.target.value})}
                        className="w-full p-4 bg-white/70 border border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="1">1 personne</option>
                        <option value="2">2 personnes</option>
                        <option value="3">3 personnes</option>
                        <option value="4">4 personnes</option>
                        <option value="5">5+ personnes</option>
                      </select>
                    </CardContent>
                  </Card>

                  <Card className="bg-white/50 backdrop-blur-md border-white/30">
                    <CardHeader>
                      <CardTitle>Type de chauffage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <select 
                        value={formData.heating}
                        onChange={(e) => setFormData({...formData, heating: e.target.value})}
                        className="w-full p-4 bg-white/70 border border-gray-200 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="electrique">Électrique</option>
                        <option value="gaz">Gaz</option>
                        <option value="fioul">Fioul</option>
                        <option value="bois">Bois</option>
                        <option value="pompe-chaleur">Pompe à chaleur</option>
                      </select>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-br from-blue-50 to-green-50 border-blue-200">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-blue-800 mb-2">Estimation de votre consommation annuelle</h3>
                    <div className="text-3xl font-bold text-blue-600">
                      {Math.round(formData.monthlyBill * 12 / 0.17).toLocaleString()} kWh/an
                    </div>
                    <p className="text-sm text-blue-600 mt-2">Basé sur un tarif moyen de 0,17€/kWh</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between pt-6 max-w-2xl mx-auto">
                <Button 
                  onClick={prevStep}
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Retour
                </Button>
                <Button 
                  onClick={calculateSolarResults}
                  disabled={loading}
                  size="lg"
                  className="px-8"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Calcul en cours...
                    </>
                  ) : (
                    <>
                      Calculer mes résultats
                      <Calculator className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Étape 4: Résultats */}
          {currentStep === 4 && results && (
            <div className="p-8 space-y-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 shadow-medium">
                  <Sun className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                  Vos résultats personnalisés
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Découvrez les bénéfices de notre technologie nouvelle génération
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Solution Standard */}
                <Card className="bg-gradient-to-br from-gray-50 to-white border-gray-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-gray-700">Panneaux Standards</CardTitle>
                    <CardDescription>Technologie actuelle du marché</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-xl">
                        <div className="text-2xl font-bold text-gray-700">{results.classic.panels}</div>
                        <div className="text-sm text-gray-600">panneaux</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl">
                        <div className="text-2xl font-bold text-gray-700">{results.classic.power} kWc</div>
                        <div className="text-sm text-gray-600">puissance</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-gray-600">Production annuelle</span>
                        <span className="font-bold text-gray-700">
                          {results.classic.productionMin.toLocaleString()} - {results.classic.productionMax.toLocaleString()} kWh
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-gray-600">Économies annuelles</span>
                        <span className="font-bold text-green-600">
                          {results.classic.savingsMin}€ - {results.classic.savingsMax}€
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Solution Nouvelle Génération */}
                <Card className="bg-gradient-to-br from-primary/5 to-blue-50 border-primary/20 ring-2 ring-primary/10">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                      <Zap className="w-4 h-4 mr-2" />
                      RECOMMANDÉ
                    </div>
                    <CardTitle className="text-2xl text-primary">Panneaux Nouvelle Génération</CardTitle>
                    <CardDescription>Technologie haute performance</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-xl">
                        <div className="text-2xl font-bold text-primary">{results.newGen.panels}</div>
                        <div className="text-sm text-primary/70">panneaux</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-xl">
                        <div className="text-2xl font-bold text-primary">{results.newGen.power} kWc</div>
                        <div className="text-sm text-primary/70">puissance</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-gray-600">Production annuelle</span>
                        <span className="font-bold text-primary">
                          {results.newGen.productionMin.toLocaleString()} - {results.newGen.productionMax.toLocaleString()} kWh
                        </span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-white rounded-xl">
                        <span className="text-gray-600">Économies annuelles</span>
                        <span className="font-bold text-green-600">
                          {results.newGen.savingsMin}€ - {results.newGen.savingsMax}€
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Avantages */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-800">Avantages de la nouvelle génération</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-white/70 rounded-xl">
                      <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        +{results.advantages.productionGainMin.toLocaleString()} kWh/an
                      </div>
                      <div className="text-sm text-green-700">Production supplémentaire</div>
                    </div>
                    <div className="text-center p-6 bg-white/70 rounded-xl">
                      <Leaf className="w-8 h-8 text-green-600 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {results.advantages.co2Saved} kg
                      </div>
                      <div className="text-sm text-green-700">CO₂ évité par an</div>
                    </div>
                    <div className="text-center p-6 bg-white/70 rounded-xl">
                      <Battery className="w-8 h-8 text-green-600 mx-auto mb-4" />
                      <div className="text-2xl font-bold text-green-600 mb-2">
                        {results.advantages.autonomy}%
                      </div>
                      <div className="text-sm text-green-700">Autonomie énergétique</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-center gap-4 pt-6">
                <Button 
                  onClick={resetSimulator}
                  variant="outline"
                  size="lg"
                  className="px-8"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Nouvelle simulation
                </Button>
                <Button 
                  size="lg"
                  className="px-8"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SolarSimulator;
