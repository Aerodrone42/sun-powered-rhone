import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StickyCTA from "@/components/StickyCTA";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import autoconsommationProHero from "@/assets/autoconsommation-pro-hero.jpg";
import { 
  Building2,
  Zap, 
  TrendingDown, 
  Battery, 
  Factory, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Lightbulb,
  Leaf,
  Euro,
  Settings,
  Users
} from "lucide-react";

const InstallationConsommationPro = () => {
  const company = "WN Energies";
  const title = `Installation & Autoconsommation professionnelle | ${company}`;
  const description = "Solutions d'autoconsommation solaire pour entreprises et industries. Optimisation énergétique, stockage et pilotage intelligent des consommations.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/professionnels/installation-consommation";

  const advantages = [
    {
      icon: TrendingDown,
      title: "Réduction des coûts",
      desc: "Diminuez votre facture énergétique professionnelle significativement",
      metric: "Coûts optimisés"
    },
    {
      icon: Battery,
      title: "Pilotage intelligent",
      desc: "Gestion automatisée des consommations selon les besoins métier",
      metric: "Smart energy"
    },
    {
      icon: BarChart3,
      title: "Monitoring avancé",
      desc: "Suivi en temps réel de la production et consommation énergétique",
      metric: "Contrôle total"
    },
    {
      icon: Leaf,
      title: "Bilan carbone",
      desc: "Réduisez votre empreinte environnementale et valorisez votre RSE",
      metric: "Impact positif"
    }
  ];

  const solutions = [
    {
      title: "Autoconsommation industrielle",
      description: "Optimisation pour sites de production et industries énergivores",
      features: ["Production massive", "Synchronisation process", "Monitoring 24/7", "Maintenance prédictive"],
      ideal: "Sites industriels"
    },
    {
      title: "Autoconsommation tertiaire",
      description: "Solutions adaptées aux bureaux, commerces et services",
      features: ["Pilotage intelligent", "Intégration domotique", "Reporting RSE", "Formation équipes"],
      ideal: "Secteur tertiaire",
      popular: true
    },
    {
      title: "Autoconsommation collective",
      description: "Partage d'énergie entre plusieurs bâtiments ou entités",
      features: ["Répartition automatique", "Facturation dédiée", "Gestion multi-sites", "Optimisation globale"],
      ideal: "Groupes d'entreprises"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit énergétique",
      description: "Analyse complète des consommations et potentiel d'optimisation",
      icon: BarChart3
    },
    {
      number: "02", 
      title: "Conception système",
      description: "Dimensionnement optimal selon vos usages professionnels",
      icon: Settings
    },
    {
      number: "03",
      title: "Installation & intégration",
      description: "Mise en place avec minimal d'interruption d'activité",
      icon: Factory
    },
    {
      number: "04",
      title: "Pilotage & optimisation",
      description: "Suivi permanent et amélioration continue des performances",
      icon: Smartphone
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
              src={autoconsommationProHero} 
              alt="Installation autoconsommation professionnelle" 
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
                  <Lightbulb className="w-4 h-4" />
                  Autoconsommation pro
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Installation &</span>
                  <span className="text-primary block">Autoconsommation</span>
                  <span className="block">professionnelle</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Optimisez votre consommation énergétique avec nos solutions d'autoconsommation 
                  intelligentes dédiées aux entreprises et industries.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <Link to="/contact" className="flex items-center gap-2">
                      Audit gratuit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <Link to="/simulateur">Calculer mes économies</Link>
                  </Button>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Pro</div>
                    <div className="text-sm text-muted-foreground">Solutions</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Smart</div>
                    <div className="text-sm text-muted-foreground">Pilotage</div>
                  </div>
                </div>
              </div>

              {/* Business Energy Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Factory className="w-3 h-3 mr-1" />
                        Site industriel
                      </Badge>
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Centre de production</h3>
                      <p className="text-muted-foreground">Exemple d'autoconsommation optimisée</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Production actuelle</span>
                        <span className="font-semibold text-primary">Optimale</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Consommation site</span>
                        <span className="font-semibold">Synchronisée</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Autoconsommation</span>
                        <span className="font-semibold text-primary">Maximisée</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Économies mensuelles</span>
                        <span className="font-semibold text-primary">Significatives</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="w-full">
                        Voir le détail
                      </Button>
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
                    Autoconsommation solaire professionnelle : optimiser sa consommation d'énergie
                  </h2>
                </header>
                
                <p>
                  L'autoconsommation solaire professionnelle consiste à consommer directement l'électricité produite par ses panneaux photovoltaïques, 
                  permettant aux entreprises de réduire leur facture énergétique tout en sécurisant leur approvisionnement. 
                  Chez WN Energies, nous concevons des solutions d'autoconsommation sur mesure pour optimiser la rentabilité de votre installation solaire professionnelle.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Avantages de l'autoconsommation pour les entreprises
                </h3>
                <p>
                  L'autoconsommation solaire professionnelle présente de nombreux avantages : réduction immédiate de la facture électrique, 
                  indépendance énergétique accrue, prévisibilité des coûts énergétiques sur 25 ans, et valorisation de l'image d'entreprise responsable. 
                  Les entreprises dont les consommations sont synchronisées avec la production solaire (activité diurne) optimisent naturellement leur taux d'autoconsommation.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Pilotage intelligent des consommations
                </h3>
                <p>
                  Nos systèmes de pilotage intelligent permettent d'optimiser l'autoconsommation en déclenchant automatiquement certains équipements 
                  (climatisation, pompes, process industriels) lors des pics de production solaire. Cette gestion smart des charges permet d'atteindre 
                  des taux d'autoconsommation supérieurs à 80% dans l'industrie et 60% dans le tertiaire.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Stockage d'énergie et continuité d'activité
                </h3>
                <p>
                  Pour les entreprises nécessitant une alimentation électrique continue, nous intégrons des solutions de stockage par batteries lithium. 
                  Ces systèmes permettent de stocker le surplus de production solaire pour le consommer en décalé, 
                  d'assurer une alimentation de secours en cas de coupure réseau, et de participer aux services de flexibilité du réseau électrique.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Monitoring et reporting énergétique
                </h3>
                <p>
                  Nos plateformes de monitoring professionnelles offrent un suivi en temps réel de la production, consommation et injection sur le réseau. 
                  Les rapports énergétiques permettent d'identifier les gisements d'économies, de valoriser les actions RSE, 
                  et de piloter finement la performance énergétique de l'entreprise.
                </p>
              </article>
              
              <aside className="space-y-8">
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Services professionnels</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Audit énergétique complet
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Pilotage intelligent des charges
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Monitoring professionnel 24/7
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Maintenance préventive
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Reporting RSE et performance
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Taux d'autoconsommation</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Industrie</span>
                      <span className="font-semibold">Optimisé</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tertiaire</span>
                      <span className="font-semibold">Élevé</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Avec stockage</span>
                      <span className="font-semibold">Maximal</span>
                    </div>
                  </div>
                </Card>
              </aside>
            </div>
          </div>
        </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              L'autoconsommation professionnelle : maîtrisez votre énergie
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 not-prose">
              <div>
                <h3 className="text-xl font-semibold mb-4">Qu'est-ce que l'autoconsommation industrielle ?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  L'autoconsommation consiste à consommer directement l'électricité produite par 
                  vos panneaux solaires. Cette approche permet de maximiser la rentabilité de 
                  votre installation en évitant les coûts de transport et taxes liés à l'achat 
                  d'électricité sur le réseau.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Couplée à des systèmes de stockage intelligents, l'autoconsommation peut 
                  atteindre des taux de 80% ou plus, garantissant une indépendance énergétique 
                  quasi-totale pour votre entreprise.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Optimisation et gestion intelligente</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Nos systèmes de gestion énergétique analysent en temps réel vos consommations 
                  et la production solaire pour optimiser automatiquement les flux d'énergie. 
                  Les équipements énergivores sont pilotés pour fonctionner prioritairement 
                  lors des pics de production.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L'intégration de batteries de stockage permet de lisser la consommation et 
                  d'utiliser l'énergie solaire même en dehors des heures de production, 
                  maximisant ainsi votre autonomie énergétique.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-center">
                <Zap className="inline mr-2 h-5 w-5 text-secondary" />
                Bénéfices de l'autoconsommation professionnelle
              </h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                L'autoconsommation permet de réduire la facture énergétique de 60 à 80%, 
                de sécuriser les coûts énergétiques sur 25 ans et de valoriser l'engagement 
                environnemental de l'entreprise auprès des clients et partenaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Pourquoi optimiser votre
                <span className="text-primary block">autoconsommation professionnelle ?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transformez votre consommation énergétique en avantage concurrentiel durable
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos solutions d'autoconsommation pro</h2>
              <p className="text-xl text-muted-foreground">Adaptées à chaque secteur d'activité et besoin énergétique</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className={`group border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up ${solution.popular ? 'ring-2 ring-primary/20 scale-105' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {solution.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      <Building2 className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  )}
                  
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Badge variant="outline" className="w-full justify-center py-2">
                        Idéal pour: {solution.ideal}
                      </Badge>
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
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Notre approche d'optimisation</h2>
              <p className="text-xl text-muted-foreground">Un accompagnement expert pour maximiser votre autoconsommation</p>
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
                Optimisez votre
                <span className="text-primary block">autoconsommation professionnelle</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Maîtrisez vos coûts énergétiques et valorisez votre démarche RSE. 
                Audit énergétique gratuit et personnalisé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Euro className="w-5 h-5" />
                    Audit énergétique gratuit
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

      <StickyCTA phone="07 71 41 85 68" quoteHref="/contact" />
      <Footer />
    </>
  );
};

export default InstallationConsommationPro;