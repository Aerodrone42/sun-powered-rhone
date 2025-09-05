import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Sun, Zap, Phone, Mail, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolarCallButton from '../components/SolarCallButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { getCityBySlug } from '../data/cities';

const VillePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  if (!citySlug) {
    return <Navigate to="/zone-intervention" replace />;
  }

  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return <Navigate to="/zone-intervention" replace />;
  }

  const services = [
    {
      title: "Panneaux solaires",
      description: `Installation de panneaux photovoltaïques à ${city.name}`,
      icon: <Sun className="w-6 h-6" />,
      link: "/particuliers/panneaux-solaires"
    },
    {
      title: "Batteries solaires",
      description: "Stockage d'énergie pour autoconsommation",
      icon: <Zap className="w-6 h-6" />,
      link: "/particuliers/batterie-solaire"
    },
    {
      title: "Bornes de recharge",
      description: "Installation de bornes électriques",
      icon: <CheckCircle className="w-6 h-6" />,
      link: "/particuliers/borne-recharge"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Installation panneaux solaires à {city.name} ({city.department}) - WN Energies</title>
        <meta name="description" content={`Spécialiste de l'installation de panneaux solaires à ${city.name}. ${city.ensoleillement} d'ensoleillement, ${city.potentielSolaire}. Devis gratuit et installation professionnelle.`} />
        <link rel="canonical" href={`https://wn-energies.fr/ville/${city.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "WN Energies",
            "image": "https://wn-energies.fr/logo.png",
            "description": `Installation panneaux solaires à ${city.name}`,
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "addressRegion": city.department
            },
            "serviceType": "Installation panneaux solaires",
            "telephone": "+33771418568",
            "email": "contact@wn-energies.fr",
            "url": `https://wn-energies.fr/ville/${city.slug}`
          })}
        </script>
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
                {city.name} - {city.department}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Installation panneaux solaires à <span className="text-primary">{city.name}</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                {city.description} Profitez de notre expertise locale pour votre projet d'énergie solaire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact">Devis gratuit</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/simulateur">Simuler mon projet</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Données techniques */}
        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{city.ensoleillement}</div>
                  <div className="text-muted-foreground">Ensoleillement annuel</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{city.potentielSolaire.split('(')[0]}</div>
                  <div className="text-muted-foreground">Potentiel solaire</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{city.population.toLocaleString()}</div>
                  <div className="text-muted-foreground">Habitants</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Nos services à <span className="text-primary">{city.name}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                WN Energies vous accompagne dans tous vos projets d'énergie renouvelable à {city.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={service.link}>En savoir plus</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Particularités de la ville */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
                Pourquoi choisir le solaire à <span className="text-primary">{city.name}</span> ?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sun className="w-5 h-5 text-primary" />
                      Potentiel solaire exceptionnel
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Avec {city.ensoleillement}, {city.name} bénéficie d'un potentiel solaire {city.potentielSolaire}. 
                      Conditions idéales pour rentabiliser votre installation photovoltaïque.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Spécificités locales
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {city.particularites.map((particularite, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{particularite}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {city.projetsRealises && (
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      Nos réalisations à {city.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {city.projetsRealises.map((projet, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{projet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Contact local */}
        <section className="py-20 bg-primary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Votre installateur solaire à <span className="text-primary">{city.name}</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Intervention rapide sur {city.name} et ses environs. Équipe locale certifiée RGE.
              </p>
              
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Demandez votre devis gratuit
                </h3>
                <p className="text-muted-foreground mb-6">
                  Étude personnalisée, installation professionnelle et SAV local à {city.name}.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4" />
                    <span>07 71 41 85 68</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4" />
                    <span>contact@wn-energies.fr</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <Link to="/contact">Demander un devis</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/simulateur">Simulateur en ligne</Link>
                  </Button>
                </div>
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

export default VillePage;