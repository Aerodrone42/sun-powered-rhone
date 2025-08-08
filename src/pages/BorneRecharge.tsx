import heroImage from "@/assets/borne-recharge-hero.jpg";
import installationImage from "@/assets/installation-borne.jpg";
import borneIntelligente from "@/assets/borne-intelligente.jpg";
import rechargeSolaire from "@/assets/recharge-solaire.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StickyCTA from "@/components/StickyCTA";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Car, 
  Clock, 
  Shield, 
  Home, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  Battery,
  Wifi,
  Leaf,
  Euro,
  Timer,
  Settings
} from "lucide-react";

const BorneRecharge = () => {
  const company = "WN Energies";
  const title = `Borne de recharge électrique | ${company}`;
  const description = "Installation de bornes de recharge pour véhicules électriques. Solutions domestiques et professionnelles, installation certifiée IRVE.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/particuliers/borne-recharge";

  const advantages = [
    {
      icon: Zap,
      title: "Recharge rapide",
      desc: "Rechargez votre véhicule électrique jusqu'à 10x plus vite qu'une prise standard",
      metric: "22 kW max"
    },
    {
      icon: Shield,
      title: "Sécurité maximale",
      desc: "Protection contre les surtensions et système de verrouillage intégré",
      metric: "Certification IRVE"
    },
    {
      icon: Smartphone,
      title: "Contrôle intelligent",
      desc: "Pilotage via smartphone et programmation des heures creuses",
      metric: "App mobile"
    },
    {
      icon: Leaf,
      title: "Éco-responsable",
      desc: "Compatible avec vos panneaux solaires pour une recharge 100% verte",
      metric: "0% émission"
    }
  ];

  const solutions = [
    {
      title: "Borne domestique 3.7 kW",
      description: "Solution d'entrée de gamme pour usage quotidien",
      features: ["Prise Type 2", "Protection IP54", "Câble 5m", "LED d'état"],
      ideal: "Citadines et hybrides",
      power: "3.7 kW",
      time: "6-8h pour 100km"
    },
    {
      title: "Borne intelligente 7.4 kW",
      description: "La solution la plus populaire avec pilotage intelligent",
      features: ["Wifi intégré", "App mobile", "Programmation", "Compteur intégré"],
      ideal: "Véhicules familiaux",
      power: "7.4 kW",
      time: "3-4h pour 100km",
      popular: true
    },
    {
      title: "Borne rapide 22 kW",
      description: "Performance maximale pour recharge ultra-rapide",
      features: ["Triphasé", "Écran tactile", "RFID", "Load balancing"],
      ideal: "SUV et véhicules premium",
      power: "22 kW",
      time: "1h pour 100km"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Étude électrique",
      description: "Vérification de votre installation et dimensionnement optimal",
      icon: Settings
    },
    {
      number: "02", 
      title: "Installation IRVE",
      description: "Pose par électricien certifié avec mise aux normes",
      icon: Zap
    },
    {
      number: "03",
      title: "Configuration",
      description: "Paramétrage et formation à l'utilisation",
      icon: Smartphone
    },
    {
      number: "04",
      title: "Maintenance",
      description: "Suivi et maintenance préventive de votre borne",
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
               alt="Borne de recharge électrique moderne dans garage"
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
                  <Car className="w-4 h-4" />
                  Mobilité électrique
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Borne de recharge</span>
                  <span className="text-primary block">électrique</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Installez votre borne de recharge personnelle. 
                  Solutions certifiées IRVE pour une recharge sécurisée et intelligente de votre véhicule électrique.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <Link to="/contact" className="flex items-center gap-2">
                      Devis gratuit
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <Link to="/simulateur">Calculer le coût</Link>
                  </Button>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">22 kW</div>
                    <div className="text-sm text-muted-foreground">Puissance max</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">IRVE</div>
                    <div className="text-sm text-muted-foreground">Certifié</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">300€</div>
                    <div className="text-sm text-muted-foreground">Crédit d'impôt</div>
                  </div>
                </div>
              </div>

              {/* Charging Status Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Zap className="w-3 h-3 mr-1" />
                        En charge
                      </Badge>
                      <Battery className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Tesla Model 3</h3>
                      <p className="text-muted-foreground">Recharge en cours...</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Batterie</span>
                        <span className="font-semibold text-primary">78%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Puissance</span>
                        <span className="font-semibold">7.4 kW</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Temps restant</span>
                        <span className="font-semibold text-primary">45 min</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Coût session</span>
                        <span className="font-semibold text-primary">4.20€</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-3/4"></div>
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
                    Installation de borne de recharge électrique : tout ce qu'il faut savoir
                  </h2>
                </header>
                
                <p>
                  L'installation d'une borne de recharge électrique à domicile représente un investissement stratégique pour tout propriétaire de véhicule électrique. 
                  Chez WN Energies, nous proposons des solutions complètes d'installation de bornes de recharge certifiées IRVE (Infrastructure de Recharge pour Véhicules Électriques) 
                  pour particuliers et professionnels.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Pourquoi installer une borne de recharge à domicile ?
                </h3>
                <p>
                  Une borne de recharge domestique offre de nombreux avantages par rapport à une prise domestique classique. 
                  La puissance de charge peut atteindre 22 kW (contre 2,3 kW sur une prise standard), divisant par 10 le temps de recharge. 
                  De plus, nos bornes intelligentes permettent de programmer la recharge pendant les heures creuses, optimisant ainsi vos coûts énergétiques.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Certification IRVE : un gage de sécurité et de qualité
                </h3>
                <p>
                  Tous nos électriciens sont certifiés IRVE, garantissant une installation conforme aux normes de sécurité en vigueur. 
                  Cette certification est obligatoire pour l'installation de bornes de recharge de plus de 3,7 kW et conditionne l'obtention des aides financières. 
                  Elle assure également la prise en charge par votre assurance habitation en cas de sinistre.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Aides financières et crédit d'impôt
                </h3>
                <p>
                  L'installation d'une borne de recharge électrique ouvre droit à plusieurs dispositifs d'aide : crédit d'impôt de 300€, 
                  TVA réduite à 5,5%, et selon votre région, des subventions locales complémentaires. Nous vous accompagnons dans toutes vos démarches 
                  pour optimiser le financement de votre projet.
                </p>
              </article>
              
              <aside className="space-y-8">
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Nos prestations</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Étude électrique préalable
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Installation certifiée IRVE
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Mise aux normes électriques
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Configuration et formation
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      SAV et maintenance
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Temps de recharge</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Prise domestique</span>
                      <span className="font-semibold">20-30h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Borne 7,4 kW</span>
                      <span className="font-semibold">6-9h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Borne 22 kW</span>
                      <span className="font-semibold">2-4h</span>
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
                Pourquoi installer une
                <span className="text-primary block">borne de recharge ?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Rechargez votre véhicule électrique en toute sécurité et optimisez vos coûts
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos solutions de recharge</h2>
              <p className="text-xl text-muted-foreground">Choisissez la borne adaptée à votre véhicule et vos besoins</p>
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
                        <span className="text-sm">Temps de charge</span>
                        <span className="font-semibold text-primary">{solution.time}</span>
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
                      Choisir cette borne
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos installations</h2>
              <p className="text-xl text-muted-foreground">Découvrez nos réalisations de bornes de recharge</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  img: installationImage, 
                  title: "Installation professionnelle", 
                  subtitle: "Électricien certifié IRVE",
                  features: ["Mise aux normes", "Sécurité garantie", "Garantie 10 ans"]
                },
                { 
                  img: borneIntelligente, 
                  title: "Borne connectée", 
                  subtitle: "Pilotage smartphone",
                  features: ["App mobile", "Programmation", "Suivi conso"]
                },
                { 
                  img: rechargeSolaire, 
                  title: "Recharge solaire", 
                  subtitle: "100% énergie verte",
                  features: ["Autoconsommation", "Économies max", "Zéro émission"]
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
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Installation en 4 étapes</h2>
              <p className="text-xl text-muted-foreground">Un processus simple et sécurisé par nos électriciens certifiés IRVE</p>
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
                Passez à la mobilité
                <span className="text-primary block">électrique</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Installez votre borne de recharge et profitez des aides financières. 
                Devis personnalisé gratuit en 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Obtenir mon devis
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href="tel:0771418568">Conseil gratuit</a>
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

export default BorneRecharge;