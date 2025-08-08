import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StickyCTA from "@/components/StickyCTA";
import SolarCallButton from "@/components/SolarCallButton";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import batterieSolaireProHero from "@/assets/batterie-solaire-pro-hero.jpg";
import { 
  Battery, 
  Building2, 
  TrendingUp, 
  Shield, 
  Zap, 
  Factory, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Leaf,
  Euro,
  Settings,
  Users,
  Clock,
  Wifi,
  Power,
  AlertTriangle,
  Smartphone
} from "lucide-react";

const BatterieSolairePro = () => {
  const company = "WN Energies";
  const title = `Batterie solaire professionnelle et stockage industriel | ${company}`;
  const description = "Solutions de stockage d'énergie pour entreprises et industries. Batteries haute capacité, gestion de charge et continuité d'activité.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/professionnels/batterie-solaire";

  const advantages = [
    {
      icon: Shield,
      title: "Continuité d'activité",
      desc: "Sécurisez votre production avec une alimentation de secours fiable",
      metric: "Disponibilité garantie"
    },
    {
      icon: TrendingUp,
      title: "Optimisation coûts",
      desc: "Stockez l'énergie en heures creuses et consommez aux heures pleines",
      metric: "ROI optimisé"
    },
    {
      icon: Leaf,
      title: "Autonomie énergétique",
      desc: "Maximisez l'autoconsommation de votre production solaire",
      metric: "Indépendance accrue"
    },
    {
      icon: BarChart3,
      title: "Gestion intelligente",
      desc: "Pilotage automatique et monitoring en temps réel des batteries",
      metric: "Performance maximale"
    }
  ];

  const solutions = [
    {
      title: "Stockage industriel",
      description: "Batteries haute capacité pour sites de production énergivores",
      features: ["Capacité modulaire", "Refroidissement actif", "Monitoring 24/7", "Redondance système"],
      ideal: "Industries manufacturières",
      capacity: "Haute puissance",
      usage: "Usage intensif"
    },
    {
      title: "Stockage tertiaire", 
      description: "Solutions adaptées aux bureaux, commerces et services",
      features: ["Installation compacte", "Intégration discrète", "Gestion intelligente", "Maintenance simplifiée"],
      ideal: "Secteur tertiaire",
      capacity: "Dimensionnement optimal",
      usage: "Usage quotidien",
      popular: true
    },
    {
      title: "Stockage collectif",
      description: "Partage d'énergie entre plusieurs bâtiments professionnels",
      features: ["Répartition automatique", "Facturation individuelle", "Optimisation globale", "Gestion multi-sites"],
      ideal: "Groupes d'entreprises",
      capacity: "Évolutive",
      usage: "Usage mutualisé"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit énergétique",
      description: "Analyse des consommations et besoins de continuité d'activité",
      icon: BarChart3
    },
    {
      number: "02", 
      title: "Dimensionnement",
      description: "Calcul de la capacité optimale selon vos contraintes techniques",
      icon: Settings
    },
    {
      number: "03",
      title: "Installation certifiée",
      description: "Mise en place par équipes spécialisées en systèmes de stockage",
      icon: Factory
    },
    {
      number: "04",
      title: "Supervision & maintenance",
      description: "Monitoring continu et maintenance préventive garantie",
      icon: Smartphone
    }
  ];

  const applications = [
    {
      icon: Factory,
      title: "Industrie manufacturière",
      description: "Continuité des process critiques, écrêtage des pics de consommation, optimisation tarifaire",
      benefits: ["Aucune interruption", "Réduction des coûts", "Qualité production"]
    },
    {
      icon: Building2,
      title: "Centres de données",
      description: "Alimentation de secours instantanée, gestion des pics de charge, redondance totale",
      benefits: ["Uptime garanti", "Performance stable", "Sécurité données"]
    },
    {
      icon: Users,
      title: "Établissements de santé",
      description: "Alimentation critique pour équipements médicaux, éclairage de sécurité, systèmes vitaux",
      benefits: ["Sécurité patients", "Conformité réglementaire", "Fiabilité totale"]
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
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={batterieSolaireProHero} 
              alt="Batterie solaire professionnelle" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
            <div className="absolute inset-0 bg-hero-gradient opacity-20" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid xl:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 animate-fade-in xl:max-w-none max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Battery className="w-4 h-4" />
                  Stockage professionnel
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Batterie solaire</span>
                  <span className="text-primary block">professionnelle</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Sécurisez votre approvisionnement énergétique avec nos solutions de stockage 
                  haute performance pour entreprises et industries.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <Link to="/contact" className="flex items-center gap-2">
                      Étude technique
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <Link to="/simulateur">Calculer ma capacité</Link>
                  </Button>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Pro</div>
                    <div className="text-sm text-muted-foreground">Solutions</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Haute</div>
                    <div className="text-sm text-muted-foreground">Capacité</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Disponibilité</div>
                  </div>
                </div>
              </div>

              {/* Industrial Battery Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Factory className="w-3 h-3 mr-1" />
                        Site industriel
                      </Badge>
                      <Battery className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Stockage industriel</h3>
                      <p className="text-muted-foreground">Système haute capacité en fonctionnement</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Capacité installée</span>
                        <span className="font-semibold text-primary">500 kWh</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">État de charge</span>
                        <span className="font-semibold text-primary">85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Puissance active</span>
                        <span className="font-semibold text-primary">125 kW</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mode</span>
                        <span className="font-semibold text-primary">Optimisé</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Autonomie restante</span>
                        <span className="font-semibold">4h 20min</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Pourquoi choisir nos batteries professionnelles ?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nos solutions de stockage d'énergie garantissent la continuité de votre activité 
                tout en optimisant vos coûts énergétiques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <advantage.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {advantage.desc}
                    </p>
                    <div className="text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                      {advantage.metric}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Solutions de stockage sur mesure
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Chaque entreprise a des besoins spécifiques. Nos solutions s'adaptent 
                à votre secteur d'activité et vos contraintes techniques.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className={`group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/20 ${solution.popular ? 'border-primary/40 shadow-lg' : ''}`}>
                  <CardContent className="p-8 space-y-6">
                    {solution.popular && (
                      <Badge className="bg-primary text-primary-foreground">
                        Populaire
                      </Badge>
                    )}
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Secteur idéal</span>
                        <span className="font-semibold">{solution.ideal}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Capacité</span>
                        <span className="font-semibold text-primary">{solution.capacity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Type d'usage</span>
                        <span className="font-semibold">{solution.usage}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Caractéristiques incluses :</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      En savoir plus
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Applications professionnelles
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nos batteries s'adaptent aux exigences spécifiques de chaque secteur d'activité.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50">
                  <CardContent className="p-8 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <app.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {app.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Bénéfices clés :</h4>
                      <ul className="space-y-2">
                        {app.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Notre processus d'installation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                De l'analyse de vos besoins à la maintenance préventive, nous vous accompagnons à chaque étape.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center space-y-6">
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                      {step.number}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border transform -translate-y-1/2" />
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
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
                    Batterie solaire professionnelle : stockage d'énergie pour entreprises
                  </h2>
                </header>
                
                <p>
                  Les batteries solaires professionnelles représentent une solution stratégique pour les entreprises souhaitant optimiser leur gestion énergétique, 
                  sécuriser leur approvisionnement électrique et maximiser la rentabilité de leurs installations photovoltaïques. 
                  Chez WN Energies, nous proposons des systèmes de stockage industriels sur mesure, adaptés aux contraintes techniques et économiques de votre activité.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Avantages du stockage d'énergie en entreprise
                </h3>
                <p>
                  Le stockage d'énergie professionnel offre de multiples bénéfices : continuité d'activité en cas de coupure réseau, 
                  optimisation tarifaire par stockage en heures creuses et déstockage en heures pleines, écrêtage des pics de consommation pour réduire les pénalités, 
                  et maximisation de l'autoconsommation solaire. Ces avantages se traduisent par une réduction significative des coûts énergétiques 
                  et une sécurisation de l'approvisionnement électrique.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Technologies de batteries professionnelles
                </h3>
                <p>
                  Nos solutions utilisent des batteries lithium-ion de dernière génération, offrant une densité énergétique élevée, 
                  une durée de vie supérieure à 15 ans et plus de 6000 cycles de charge/décharge. Les systèmes de gestion intelligente (BMS) 
                  optimisent automatiquement les flux d'énergie selon les besoins de production, les tarifs électriques et les contraintes opérationnelles. 
                  L'intégration avec les installations solaires existantes permet une synergie optimale entre production et stockage.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Dimensionnement et installation sur site
                </h3>
                <p>
                  Le dimensionnement d'un système de stockage professionnel nécessite une analyse approfondie des consommations, 
                  des contraintes de continuité d'activité et des objectifs d'autonomie énergétique. Nos ingénieurs réalisent une étude technique complète 
                  incluant l'analyse des courbes de charge, l'évaluation de la puissance de pointe requise, et le calcul de la capacité optimale. 
                  L'installation respecte les normes de sécurité électrique industrielle et intègre tous les dispositifs de protection nécessaires.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Monitoring et maintenance préventive
                </h3>
                <p>
                  Nos systèmes de stockage incluent un monitoring avancé avec supervision 24/7, alertes en temps réel, 
                  et rapports de performance détaillés. La maintenance préventive garantit la fiabilité et optimise la durée de vie des batteries. 
                  Les contrats de maintenance incluent les vérifications périodiques, la mise à jour des logiciels de gestion, 
                  et le remplacement préventif des composants selon les recommandations constructeur.
                </p>
              </article>
              
              <aside className="space-y-8">
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Technologies disponibles</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Batteries lithium-ion industrielles
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Système de gestion intelligent (BMS)
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Onduleurs bidirectionnels
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Monitoring et télésurveillance
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Intégration solaire et réseau
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Capacités disponibles</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Tertiaire</span>
                      <span className="font-semibold">50-200 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Industrie</span>
                      <span className="font-semibold">200-1000 kWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Grande industrie</span>
                      <span className="font-semibold">1+ MWh</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Puissance</span>
                      <span className="font-semibold">Jusqu'à 1 MW</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Applications critiques</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Centres de données</span>
                      <span className="font-semibold">Prioritaire</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Établissements de santé</span>
                      <span className="font-semibold">Critique</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Process industriels</span>
                      <span className="font-semibold">Essentiel</span>
                    </div>
                  </div>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Sécurisez votre
                <span className="text-primary block">approvisionnement énergétique</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Garantissez la continuité de votre activité avec nos solutions de stockage professionnelles. 
                Étude technique gratuite et personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Battery className="w-5 h-5" />
                    Étude technique gratuite
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href="tel:0771418568">Conseil expert immédiat</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SolarCallButton />
      <StickyCTA phone="07 71 41 85 68" quoteHref="/contact" />
      <Footer />
    </>
  );
};

export default BatterieSolairePro;