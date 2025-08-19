import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

import SolarCallButton from "@/components/SolarCallButton";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import borneRechargeProHero from "@/assets/borne-recharge-pro-hero.jpg";
import { 
  Zap,
  Building2, 
  Car, 
  Shield, 
  Users, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  Battery,
  Wifi,
  Leaf,
  Euro,
  Timer,
  Settings,
  Factory
} from "lucide-react";

const BorneRechargePro = () => {
  const company = "WN Energies";
  const title = `Borne de recharge professionnelle et flotte d'entreprise | ${company}`;
  const description = "Installation de bornes de recharge pour entreprises, flottes professionnelles et collectivités. Solutions IRVE certifiées avec gestion centralisée.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/professionnels/borne-recharge";

  const advantages = [
    {
      icon: Users,
      title: "Service employés",
      desc: "Proposez la recharge électrique comme avantage salarié attractif",
      metric: "Satisfaction RH"
    },
    {
      icon: Leaf,
      title: "Flotte verte",
      desc: "Accompagnez la transition de votre parc véhicules vers l'électrique",
      metric: "Mobilité durable"
    },
    {
      icon: Euro,
      title: "Optimisation fiscale",
      desc: "Bénéficiez des avantages fiscaux et amortissements dédiés",
      metric: "Fiscalité optimisée"
    },
    {
      icon: Shield,
      title: "Gestion centralisée",
      desc: "Pilotez l'ensemble de vos bornes depuis une interface unique",
      metric: "Contrôle total"
    }
  ];

  const solutions = [
    {
      title: "Bornes employés",
      description: "Solutions pour parking d'entreprise et collaborateurs",
      features: ["Contrôle d'accès RFID", "Facturation automatique", "Reporting usage", "Gestion horaires"],
      ideal: "Sièges sociaux et bureaux",
      power: "Adaptée",
      usage: "Usage quotidien"
    },
    {
      title: "Bornes flotte",
      description: "Infrastructure dédiée aux véhicules de service et commerciaux",
      features: ["Recharge rapide", "Planification charges", "Supervision 24/7", "Maintenance prédictive"],
      ideal: "Flottes professionnelles",
      power: "Haute puissance",
      usage: "Usage intensif",
      popular: true
    },
    {
      title: "Bornes publiques",
      description: "Stations de recharge pour clients et visiteurs",
      features: ["Paiement par carte", "Application mobile", "Supervision distante", "Branding personnalisé"],
      ideal: "Commerces et services",
      power: "Modulable",
      usage: "Usage public"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Audit infrastructure",
      description: "Évaluation électrique et analyse des besoins de mobilité",
      icon: Settings
    },
    {
      number: "02", 
      title: "Conception réseau",
      description: "Dimensionnement optimal selon vos usages professionnels",
      icon: Zap
    },
    {
      number: "03",
      title: "Installation certifiée",
      description: "Pose par électriciens IRVE avec mise en service complète",
      icon: Building2
    },
    {
      number: "04",
      title: "Gestion & supervision",
      description: "Plateforme de pilotage et maintenance préventive",
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
              src={borneRechargeProHero} 
              alt="Borne de recharge professionnelle" 
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
                  <Car className="w-4 h-4" />
                  Mobilité professionnelle
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Borne de recharge</span>
                  <span className="text-primary block">professionnelle</span>
                </h1>
                
                <p className="text-xl text-foreground max-w-lg leading-relaxed">
                  Équipez vos locaux professionnels de bornes de recharge intelligentes. 
                  Solutions complètes pour employés, flottes d'entreprise et clients.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <Link to="/contact" className="flex items-center gap-2">
                      Devis professionnel
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <Link to="/simulateur">Étudier mon projet</Link>
                  </Button>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">IRVE</div>
                    <div className="text-sm text-muted-foreground">Certifié</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Supervision</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Pro</div>
                    <div className="text-sm text-muted-foreground">Gestion</div>
                  </div>
                </div>
              </div>

              {/* Fleet Charging Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Factory className="w-3 h-3 mr-1" />
                        Flotte pro
                      </Badge>
                      <Battery className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Parc véhicules</h3>
                      <p className="text-muted-foreground">Gestion centralisée des recharges</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Véhicules en charge</span>
                        <span className="font-semibold text-primary">Actifs</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Planification</span>
                        <span className="font-semibold">Optimisée</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Disponibilité flotte</span>
                        <span className="font-semibold text-primary">Maximale</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Coût de recharge</span>
                        <span className="font-semibold text-primary">Optimisé</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
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

        {/* SEO Content Section */}
        <section className="py-24 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <article className="lg:col-span-2 space-y-6 text-muted-foreground">
                <header>
                  <h2 className="text-3xl md:text-4xl font-semibent text-foreground mb-4">
                    Borne de recharge professionnelle : équiper son entreprise pour la mobilité électrique
                  </h2>
                </header>
                
                <p>
                  L'installation de bornes de recharge professionnelles accompagne la transition énergétique des entreprises en proposant des solutions de mobilité électrique 
                  adaptées aux collaborateurs, flottes de véhicules et visiteurs. Chez WN Energies, nous concevons des infrastructures de recharge sur mesure, 
                  certifiées IRVE et intégrées dans une démarche de Responsabilité Sociétale des Entreprises (RSE).
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Pourquoi installer des bornes de recharge en entreprise ?
                </h3>
                <p>
                  Les bornes de recharge professionnelles répondent à plusieurs enjeux stratégiques : attirer et fidéliser les talents en proposant un service valorisé, 
                  accompagner l'électrification du parc automobile d'entreprise, réduire l'empreinte carbone des déplacements professionnels, 
                  et anticiper les évolutions réglementaires en matière de mobilité durable. C'est également un argument commercial fort vis-à-vis des clients et partenaires.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Solutions pour flottes d'entreprise
                </h3>
                <p>
                  Nos solutions de recharge pour flottes professionnelles intègrent une gestion intelligente des recharges avec planification automatique, 
                  load balancing pour optimiser la puissance disponible, supervision en temps réel de l'état des véhicules, 
                  et reporting détaillé pour le suivi des coûts énergétiques. Ces systèmes garantissent la disponibilité opérationnelle de la flotte.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Gestion des accès et facturation
                </h3>
                <p>
                  Nos bornes professionnelles intègrent des systèmes de contrôle d'accès RFID, application mobile dédiée, 
                  et facturation automatisée selon les profils utilisateurs (employés, visiteurs, clients). 
                  La plateforme de gestion centralisée permet de paramétrer les droits d'accès, suivre les consommations, 
                  et éditer des rapports d'usage détaillés pour la comptabilité et le contrôle de gestion.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Conformité réglementaire et certification IRVE
                </h3>
                <p>
                  Toutes nos installations respectent la réglementation en vigueur, notamment le décret IRVE pour les installations de plus de 3,7 kW. 
                  Nos électriciens certifiés IRVE garantissent une installation conforme aux normes de sécurité, 
                  condition indispensable pour l'obtention des aides publiques et la prise en charge par les assurances professionnelles.
                </p>
              </article>
              
              <aside className="space-y-8">
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Services professionnels</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Audit infrastructure électrique
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Installation IRVE certifiée
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Gestion centralisée multi-sites
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Maintenance et télésurveillance
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Formation équipes techniques
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Types d'installation</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Parking employés</span>
                      <span className="font-semibold">Standard</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Flotte véhicules</span>
                      <span className="font-semibold">Rapide</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accès public</span>
                      <span className="font-semibold">Modulaire</span>
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
              Bornes de recharge professionnelles : l'avenir de la mobilité
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 not-prose">
              <div>
                <h3 className="text-xl font-semibold mb-4">L'électromobilité en entreprise</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  L'installation de bornes de recharge en entreprise répond à un double enjeu : 
                  faciliter la transition vers les véhicules électriques pour vos collaborateurs 
                  et optimiser la gestion de votre flotte professionnelle.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Couplées à une installation solaire, les bornes permettent de recharger 
                  les véhicules avec une énergie verte et locale, réduisant considérablement 
                  les coûts de carburant et l'empreinte carbone de l'entreprise.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Solutions techniques avancées</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Nos bornes de recharge intelligentes s'adaptent à la puissance disponible 
                  et gèrent automatiquement la répartition de charge entre plusieurs véhicules. 
                  Le système de pilotage optimise la recharge selon la production solaire 
                  et les tarifs électriques.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  L'interface de gestion permet de contrôler les accès, suivre les consommations 
                  par utilisateur et optimiser les coûts énergétiques en temps réel.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-center">
                <Car className="inline mr-2 h-5 w-5 text-primary" />
                Impact environnemental et économique
              </h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Une borne alimentée par l'énergie solaire permet d'éviter l'émission de 2 tonnes 
                de CO² par an et par véhicule, tout en réduisant les coûts de carburant de 70% 
                par rapport aux véhicules thermiques.
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
                Avantages pour votre
                <span className="text-primary block">entreprise</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Accompagnez la transition vers la mobilité électrique de votre organisation
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos solutions professionnelles</h2>
              <p className="text-xl text-muted-foreground">Infrastructures adaptées à chaque usage professionnel</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className={`group border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up ${solution.popular ? 'ring-2 ring-primary/20 scale-105' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                  {solution.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      <Zap className="w-3 h-3 mr-1" />
                      Populaire
                    </Badge>
                  )}
                  
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                        <Badge variant="outline" className="text-primary border-primary/20">
                          {solution.power}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>

                    <div className="space-y-3 p-4 bg-muted/20 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm">Type d'usage</span>
                        <span className="font-semibold text-primary">{solution.usage}</span>
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
                      Choisir cette solution
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Déploiement professionnel</h2>
              <p className="text-xl text-muted-foreground">Un processus éprouvé pour équiper votre entreprise</p>
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
                Équipez votre entreprise pour
                <span className="text-primary block">la mobilité électrique</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Accompagnez vos collaborateurs et optimisez votre flotte avec nos solutions de recharge professionnelles. 
                Étude technique gratuite et personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Devis professionnel
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

export default BorneRechargePro;