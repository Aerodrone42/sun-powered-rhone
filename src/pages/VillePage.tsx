import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Sun, Zap, Phone, Mail, CheckCircle, ArrowRight, Calculator, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SolarCallButton from '../components/SolarCallButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { getCityBySlug } from '../data/cities';
import lyonHero from '../assets/lyon-hero.jpg';
import villeurbaneHero from '../assets/villeurbanne-hero.jpg';
import venissieuxHero from '../assets/venissieux-hero.jpg';
import ecullyHero from '../assets/ecully-hero.jpg';
import grenobleHero from '../assets/grenoble-hero.jpg';
import tassinHero from '../assets/tassin-hero.jpg';

const VillePage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  if (!citySlug) {
    return <Navigate to="/zone-intervention" replace />;
  }

  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return <Navigate to="/zone-intervention" replace />;
  }

  const getHeroImage = (citySlug: string) => {
    switch(citySlug) {
      case 'lyon': return lyonHero;
      case 'villeurbanne': return villeurbaneHero;
      case 'venissieux': return venissieuxHero;
      case 'ecully': return ecullyHero;
      case 'grenoble': return grenobleHero;
      case 'tassin-la-demi-lune': return tassinHero;
      default: return lyonHero;
    }
  };

  const heroImage = getHeroImage(city.slug);

  const services = [
    {
      title: "Panneaux solaires",
      description: `Installation et maintenance de systèmes photovoltaïques à ${city.name}`,
      icon: <Sun className="w-6 h-6" />,
      link: "/particuliers/panneaux-solaires",
      benefits: ["Économies jusqu'à 70%", "Revente surplus", "Aide locale disponible"]
    },
    {
      title: "Batteries solaires",
      description: "Stockage intelligent pour maximiser votre autoconsommation",
      icon: <Zap className="w-6 h-6" />,
      link: "/particuliers/batterie-solaire",
      benefits: ["Autonomie énergétique", "Backup électrique", "Optimisation tarifaire"]
    },
    {
      title: "Bornes de recharge",
      description: "Rechargez votre véhicule électrique avec l'énergie solaire",
      icon: <CheckCircle className="w-6 h-6" />,
      link: "/particuliers/borne-recharge",
      benefits: ["Recharge gratuite", "Installation rapide", "Compatible tous véhicules"]
    }
  ];

  const faqItems = [
    {
      question: `Quelle est la rentabilité du solaire à ${city.name} ?`,
      answer: `Avec ${city.ensoleillement} d'ensoleillement, votre installation sera rentabilisée en 8-12 ans. Le potentiel de production est ${city.potentielSolaire}, garantissant un excellent retour sur investissement.`
    },
    {
      question: "Quelles aides financières puis-je obtenir ?",
      answer: "Vous bénéficiez de la prime à l'autoconsommation (jusqu'à 500€/kWc), du taux de TVA réduit à 10%, et des aides locales de la Métropole de Lyon."
    },
    {
      question: "Combien de temps dure l'installation ?",
      answer: `Pour une maison standard à ${city.name}, l'installation complète se fait en 1-2 jours. Les démarches administratives sont gérées par nos équipes.`
    }
  ];

  return (
    <>
      <Helmet>
        <title>Installation panneaux solaires à {city.name} ({city.department}) - Devis gratuit | WN Energies</title>
        <meta name="description" content={`✓ Installateur panneaux solaires certifié RGE à ${city.name} ✓ ${city.ensoleillement} d'ensoleillement ✓ Potentiel ${city.potentielSolaire} ✓ Devis gratuit ✓ Installation professionnelle ✓ Garantie 20 ans ✓ Maintenance locale ✓ Financement disponible`} />
        <meta name="keywords" content={`panneaux solaires ${city.name}, installation photovoltaïque ${city.name}, devis solaire gratuit ${city.department}, installateur RGE ${city.name}, autoconsommation ${city.name}, énergie solaire ${city.name}, batterie solaire ${city.name}, borne recharge ${city.name}`} />
        <link rel="canonical" href={`https://wn-energies.fr/ville/${city.slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://wn-energies.fr/ville/${city.slug}`} />
        <meta property="og:title" content={`Installation panneaux solaires à ${city.name} - WN Energies`} />
        <meta property="og:description" content={`Installateur solaire certifié à ${city.name}. ${city.ensoleillement} d'ensoleillement. Devis gratuit.`} />
        <meta property="og:image" content={`https://wn-energies.fr${heroImage}`} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://wn-energies.fr/ville/${city.slug}`} />
        <meta property="twitter:title" content={`Installation panneaux solaires à ${city.name} - WN Energies`} />
        <meta property="twitter:description" content={`Installateur solaire certifié à ${city.name}. ${city.ensoleillement} d'ensoleillement. Devis gratuit.`} />
        <meta property="twitter:image" content={`https://wn-energies.fr${heroImage}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `WN Energies - ${city.name}`,
            "image": `https://wn-energies.fr${heroImage}`,
            "description": `Installation panneaux solaires à ${city.name}. ${city.description}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": city.name,
              "addressRegion": city.department,
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": city.latitude,
              "longitude": city.longitude
            },
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "addressRegion": city.department
            },
            "serviceType": "Installation panneaux solaires",
            "telephone": "+33771418568",
            "email": "contact@wn-energies.fr",
            "url": `https://wn-energies.fr/ville/${city.slug}`,
            "priceRange": "€€",
            "openingHours": "Mo-Fr 08:00-18:00",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            }
          })}
        </script>
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section avec image */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
            }}
          />
          <div className="absolute inset-0 bg-grid-white/10 bg-grid opacity-20" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/90 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <MapPin className="w-4 h-4" />
                {city.name} - {city.department}
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Installation panneaux solaires à <span className="text-yellow-400">{city.name}</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {city.description.substring(0, 200)}... Profitez de notre expertise locale pour votre projet d'énergie solaire.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold" asChild>
                  <Link to="/contact">
                    <Calculator className="w-4 h-4 mr-2" />
                    Devis gratuit
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white/80 bg-white/10 text-white hover:bg-white hover:text-primary backdrop-blur-sm" asChild>
                  <Link to="/simulateur">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Simuler mon projet
                  </Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-white/90">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">Installateur RGE certifié</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">Nouvelle entreprise locale</span>
                </div>
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
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                      <Link to={service.link}>
                        En savoir plus
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
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

        {/* Section FAQ */}
        <section className="py-20 bg-secondary/5">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Questions fréquentes sur le solaire à <span className="text-primary">{city.name}</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Nos experts répondent à vos questions les plus courantes.
                </p>
              </div>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-semibold text-foreground mb-3 flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        {item.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed ml-7">
                        {item.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section avantages locaux */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Les avantages du solaire à <span className="text-primary">{city.name}</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Découvrez pourquoi {city.name} est une ville idéale pour votre installation photovoltaïque.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sun className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Ensoleillement optimal</h3>
                    <p className="text-sm text-muted-foreground">
                      {city.ensoleillement} garantissent une production maximale
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Economies importantes</h3>
                    <p className="text-sm text-muted-foreground">
                      Jusqu'à 70% d'économies sur votre facture électrique
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Installation certifiée</h3>
                    <p className="text-sm text-muted-foreground">
                      Équipe locale RGE avec garantie 20 ans
                    </p>
                  </CardContent>
                </Card>
              </div>
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