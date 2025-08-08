import heroImage from "@/assets/batterie-solaire-hero.jpg";
import installationImage from "@/assets/installation-batterie.jpg";
import monitoringImage from "@/assets/monitoring-batterie.jpg";
import systemeIntegre from "@/assets/systeme-integre-solaire.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import SolarCallButton from "@/components/SolarCallButton";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Battery, 
  Sun, 
  Home, 
  Shield, 
  Zap, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Leaf,
  Euro,
  Settings,
  BarChart3
} from "lucide-react";

const BatterieSolaire = () => {
  const company = "WN Energies";
  const title = `Batterie solaire et stockage d'énergie | ${company}`;
  const description = "Solutions de stockage d'énergie solaire pour maximiser votre autoconsommation. Batteries lithium haute performance, installation et maintenance incluses.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/particuliers/batterie-solaire";

  const advantages = [
    {
      icon: Battery,
      title: "Autonomie énergétique",
      desc: "Stockez l'énergie solaire pour la consommer 24h/24, même sans soleil",
      metric: "Autonomie max"
    },
    {
      icon: TrendingUp,
      title: "Rentabilité optimisée",
      desc: "Maximisez la valeur de votre production solaire en évitant la revente",
      metric: "ROI amélioré"
    },
    {
      icon: Shield,
      title: "Sécurité d'approvisionnement",
      desc: "Continuez à alimenter vos équipements essentiels en cas de coupure",
      metric: "Backup intégré"
    },
    {
      icon: Leaf,
      title: "Impact environnemental",
      desc: "Réduisez votre empreinte carbone avec une énergie 100% verte stockée",
      metric: "Énergie verte"
    }
  ];

  const solutions = [
    {
      title: "Batterie compacte",
      description: "Solution d'entrée pour optimiser l'autoconsommation",
      features: ["Lithium-ion", "Garantie longue durée", "Installation murale", "Monitoring inclus"],
      ideal: "Petites installations",
      capacity: "Compact",
      autonomy: "Usage quotidien"
    },
    {
      title: "Batterie résidentielle",
      description: "La solution adaptée pour une famille",
      features: ["Technologie avancée", "Garantie étendue", "Modulaire", "App intelligente"],
      ideal: "Maisons familiales",
      capacity: "Standard",
      autonomy: "Autonomie étendue",
      popular: true
    },
    {
      title: "Batterie haute capacité",
      description: "Autonomie maximale pour grandes installations",
      features: ["Haute performance", "Onduleur hybride", "Backup complet", "Gestion intelligente"],
      ideal: "Grandes propriétés",
      capacity: "Premium",
      autonomy: "Autonomie maximale"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit énergétique",
      description: "Analyse de votre consommation et dimensionnement optimal",
      icon: BarChart3
    },
    {
      number: "02", 
      title: "Installation système",
      description: "Pose de la batterie et connexion à votre installation solaire",
      icon: Settings
    },
    {
      number: "03",
      title: "Configuration intelligente",
      description: "Paramétrage et optimisation du système de stockage",
      icon: Smartphone
    },
    {
      number: "04",
      title: "Suivi & maintenance",
      description: "Monitoring continu et maintenance préventive",
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Header />

      <main className="bg-background text-foreground overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background */}
          <div className="absolute inset-0">
             <img
               src={heroImage}
               alt="Système de stockage d'énergie moderne"
               className="w-full h-full object-cover solar-hover"
             />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
            <div className="absolute inset-0 bg-hero-gradient opacity-15" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid xl:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 animate-fade-in xl:max-w-none max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Battery className="w-4 h-4" />
                  Stockage intelligent
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Batterie solaire &</span>
                  <span className="text-primary block">Stockage d'énergie</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Maximisez votre autonomie énergétique avec nos solutions de stockage haute performance. 
                  Batteries lithium intelligentes pour une autoconsommation optimale 24h/24.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <Link to="/contact" className="flex items-center gap-2">
                      Devis gratuit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <Link to="/simulateur">Simuler mes économies</Link>
                  </Button>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Premium</div>
                    <div className="text-sm text-muted-foreground">Technologie</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Longue</div>
                    <div className="text-sm text-muted-foreground">Garantie</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Max</div>
                    <div className="text-sm text-muted-foreground">Autonomie</div>
                  </div>
                </div>
              </div>

              {/* Battery Status Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Sun className="w-3 h-3 mr-1" />
                        Charge solaire
                      </Badge>
                      <Battery className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Batterie domestique</h3>
                      <p className="text-muted-foreground">Système de stockage intelligent</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Niveau de charge</span>
                        <span className="font-semibold text-primary">En cours</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Capacité disponible</span>
                        <span className="font-semibold">Optimale</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Autonomie restante</span>
                        <span className="font-semibold text-primary">Étendue</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mode</span>
                        <span className="font-semibold text-primary">Auto-optimisé</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="w-full bg-muted rounded-full h-3">
                        <div className="bg-gradient-to-r from-primary to-primary/80 h-3 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2 space-y-6 text-muted-foreground">
                <header>
                  <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                    Batterie solaire et stockage d'énergie : le guide complet
                  </h2>
                </header>
                
                <p>
                  L'installation d'une batterie solaire domestique révolutionne votre consommation d'énergie en permettant de stocker l'électricité produite par vos panneaux photovoltaïques. 
                  Chez WN Energies, nous proposons des solutions de stockage d'énergie lithium haute performance, conçues pour maximiser votre autoconsommation et réduire votre dépendance au réseau électrique.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Pourquoi installer une batterie de stockage solaire ?
                </h3>
                <p>
                  Une batterie solaire domestique permet de stocker l'électricité produite en journée pour la consommer le soir et la nuit, 
                  quand votre installation photovoltaïque ne produit plus. Cela augmente votre taux d'autoconsommation de 30% à 80%, 
                  optimisant ainsi la rentabilité de votre installation solaire tout en vous offrant une autonomie énergétique accrue.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Technologies de batteries : lithium-ion et LFP
                </h3>
                <p>
                  Nous privilégions les batteries lithium-ion et LFP (Lithium Fer Phosphate) pour leur durée de vie exceptionnelle (15-20 ans), 
                  leur efficacité énergétique supérieure à 95% et leur sécurité optimale. Ces technologies offrent plus de 6000 cycles de charge/décharge, 
                  garantissant un retour sur investissement optimal pour votre système de stockage d'énergie.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Dimensionnement et capacité de stockage
                </h3>
                <p>
                  Le dimensionnement de votre batterie solaire dépend de votre profil de consommation, de la puissance de vos panneaux solaires et de vos objectifs d'autonomie. 
                  Nos experts analysent vos données de consommation pour proposer une capacité optimale, généralement entre 5 kWh pour un couple et 15 kWh pour une famille nombreuse.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Installation et intégration système
                </h3>
                <p>
                  L'installation d'une batterie de stockage nécessite l'expertise de professionnels qualifiés pour l'intégration avec votre installation photovoltaïque existante. 
                  Nous utilisons des onduleurs hybrides ou des systèmes AC couplés selon votre configuration, assurant une compatibilité parfaite et des performances optimales.
                </p>
              </article>
              
              <aside className="space-y-8">
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Avantages du stockage</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Autoconsommation jusqu'à 80%
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Autonomie énergétique 24h/24
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Backup en cas de coupure
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Optimisation heures creuses
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Valorisation surplus solaire
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Capacités types</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Petite installation</span>
                      <span className="font-semibold">Compact</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Installation standard</span>
                      <span className="font-semibold">Résidentiel</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grande installation</span>
                      <span className="font-semibold">Premium</span>
                    </div>
                  </div>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Pourquoi choisir une
                <span className="text-primary block">batterie solaire ?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Maximisez la valeur de votre installation solaire avec un stockage intelligent
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="group bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                        <advantage.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary">{advantage.metric}</div>
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm">{advantage.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos solutions de stockage</h2>
              <p className="text-xl text-muted-foreground">Choisissez la capacité adaptée à vos besoins énergétiques</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className={`group border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up ${solution.popular ? 'ring-2 ring-primary/20 scale-105' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {solution.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      <Battery className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  )}
                  
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                        <Badge variant="outline" className="text-primary border-primary/20">
                          {solution.capacity}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>

                    <div className="space-y-3 p-4 bg-muted/20 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm">Autonomie</span>
                        <span className="font-semibold text-primary">{solution.autonomy}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Idéal pour: {solution.ideal}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant={solution.popular ? "hero" : "outline"} className="w-full group">
                      Choisir cette batterie
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section - placeholder for generated images */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos installations de stockage</h2>
              <p className="text-xl text-muted-foreground">Découvrez nos systèmes de batteries intégrés</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  img: installationImage, 
                  title: "Installation professionnelle", 
                  subtitle: "Système de stockage intégré",
                  features: ["Installation certifiée", "Garantie 15 ans", "Monitoring inclus"]
                },
                { 
                  img: monitoringImage, 
                  title: "Monitoring intelligent", 
                  subtitle: "Suivi en temps réel",
                  features: ["App mobile", "Alertes auto", "Optimisation IA"]
                },
                { 
                  img: systemeIntegre, 
                  title: "Système intégré", 
                  subtitle: "Solaire + stockage",
                  features: ["Solution complète", "Autonomie max", "ROI optimisé"]
                }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 solar-hover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    <CardContent className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.subtitle}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Installation en 4 étapes</h2>
              <p className="text-xl text-muted-foreground">Un processus optimisé pour intégrer votre système de stockage</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <Card className="relative bg-background border border-border/50 hover:border-primary/20 hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                    <CardContent className="p-8 text-center space-y-6">
                      <div className="relative">
                        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                          <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Stockez votre énergie
                <span className="text-primary block">solaire</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Maximisez votre autonomie énergétique avec nos solutions de stockage haute performance. 
                Étude personnalisée gratuite en 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Battery className="w-5 h-5" />
                    Obtenir mon devis
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href="tel:0771418568">Conseil expert</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SolarCallButton />
      <Footer />
    </>
  );
};

export default BatterieSolaire;