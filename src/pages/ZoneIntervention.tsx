import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolarCallButton from '../components/SolarCallButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ZoneIntervention = () => {
  // 50 villes principales du Rhône-Alpes
  const villesRhoneAlpes = [
    // Métropole de Lyon et environs
    "Lyon", "Villeurbanne", "Vénissieux", "Saint-Priest", "Caluire-et-Cuire", 
    "Bron", "Meyzieu", "Rillieux-la-Pape", "Décines-Charpieu", "Oullins",
    "Écully", "Tassin-la-Demi-Lune", "Saint-Fons", "Givors", "Genas",
    
    // Isère
    "Grenoble", "Saint-Martin-d'Hères", "Échirolles", "Fontaine", "Voiron",
    "Bourgoin-Jallieu", "Vienne", "Meylan", "Saint-Égrève", "Seyssinet-Pariset",
    "La Tour-du-Pin", "Villefontaine", "L'Isle-d'Abeau", "Sassenage", "Crolles",
    
    // Savoie
    "Chambéry", "Aix-les-Bains", "La Motte-Servolex", "Bourg-Saint-Maurice",
    "Albertville", "Saint-Jean-de-Maurienne", "Ugine", "Modane",
    
    // Haute-Savoie
    "Annecy", "Thonon-les-Bains", "Annemasse", "Cluses", "Bonneville",
    "Sallanches", "Rumilly", "Gaillard", "Seynod", "Cran-Gevrier",
    
    // Autres villes importantes
    "Saint-Étienne", "Roanne", "Montbrison"
  ];

  const servicesZone = [
    {
      title: "Installation panneaux solaires",
      description: "Pose et raccordement de systèmes photovoltaïques",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Bornes de recharge",
      description: "Installation de solutions de recharge électrique",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Batteries solaires",
      description: "Stockage d'énergie et autoconsommation",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: "Maintenance et SAV",
      description: "Service après-vente et maintenance préventive",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zone d'intervention - Rhône-Alpes et toute la France | WN Energies</title>
        <meta name="description" content="WN Energies intervient dans tout le Rhône-Alpes et la France entière. Découvrez notre zone de couverture pour vos projets solaires, bornes de recharge et batteries." />
        <link rel="canonical" href="https://wn-energies.fr/zone-intervention" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-grid" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Zone de couverture nationale
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">Rhône-Alpes</span> et toute la <span className="text-primary">France</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                WN Energies vous accompagne dans vos projets d'énergie renouvelable sur l'ensemble du territoire français, 
                avec une expertise renforcée en région Rhône-Alpes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Demander un devis</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/simulateur">Simuler mon projet</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Villes en Rhône-Alpes</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Couverture France</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">48h</div>
                <div className="text-muted-foreground">Délai d'intervention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services par zone */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Nos services dans votre région
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Que vous soyez particulier, professionnel ou collectivité, nous intervenons partout en France 
                pour vos projets d'énergie renouvelable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {servicesZone.map((service, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Villes Rhône-Alpes */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Principales villes d'intervention en <span className="text-primary">Rhône-Alpes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nous intervenons dans plus de 50 villes de la région Rhône-Alpes pour tous vos projets solaires.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {villesRhoneAlpes.slice(0, 10).map((ville, index) => {
                const citySlug = ville.toLowerCase()
                  .replace(/[àáâãäå]/g, 'a')
                  .replace(/[èéêë]/g, 'e')
                  .replace(/[ìíîï]/g, 'i')
                  .replace(/[òóôõö]/g, 'o')
                  .replace(/[ùúûü]/g, 'u')
                  .replace(/[ç]/g, 'c')
                  .replace(/[^a-z0-9]/g, '-')
                  .replace(/-+/g, '-')
                  .replace(/^-|-$/g, '');
                
                return (
                  <Link 
                    key={index}
                    to={`/ville/${citySlug}`}
                    className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-all hover:border-primary/50 group"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{ville}</span>
                    </div>
                  </Link>
                );
              })}
              {villesRhoneAlpes.slice(10).map((ville, index) => (
                <div 
                  key={index + 10}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{ville}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Couverture nationale */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Intervention dans toute la <span className="text-primary">France</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Au-delà de notre expertise en Rhône-Alpes, WN Energies étend ses services sur l'ensemble 
                du territoire français grâce à notre réseau de partenaires qualifiés.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Zone prioritaire</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Rhône-Alpes</strong> : Intervention directe avec nos équipes locales
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Délai d'intervention : 24-48h</li>
                      <li>• Équipes techniques locales</li>
                      <li>• Suivi personnalisé</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Couverture nationale</h3>
                    <p className="text-muted-foreground mb-4">
                      <strong>Toute la France</strong> : Réseau de partenaires certifiés
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Délai d'intervention : 3-7 jours</li>
                      <li>• Partenaires certifiés RGE</li>
                      <li>• Garantie WN Energies</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Contactez-nous pour votre projet
                </h3>
                <p className="text-muted-foreground mb-6">
                  Où que vous soyez en France, nous avons une solution pour votre projet d'énergie renouvelable.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>07 71 41 85 68</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>contact@wn-energies.fr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Prêt à démarrer votre projet ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Demandez votre étude gratuite et découvrez le potentiel solaire de votre région.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" asChild>
                  <Link to="/contact">Étude gratuite</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary" asChild>
                  <Link to="/simulateur">Simulateur en ligne</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <SolarCallButton />
    </>
  );
};

export default ZoneIntervention;