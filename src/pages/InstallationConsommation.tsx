import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StickyCTA from "@/components/StickyCTA";
import { Helmet } from "react-helmet-async";
import { 
  Sun, 
  Zap, 
  TrendingDown, 
  Battery, 
  Home, 
  Smartphone, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Lightbulb,
  Leaf,
  Euro
} from "lucide-react";

const InstallationConsommation = () => {
  const company = "WN Energies";
  const title = `Installation & Autoconsommation | ${company}`;
  const description = "Maximisez votre autoconsommation avec nos solutions solaires intelligentes. Installation optimisée, suivi en temps réel et économies garanties.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/particuliers/installation-consommation";

  const advantages = [
    {
      icon: TrendingDown,
      title: "Réduction immédiate",
      desc: "Baissez votre facture d'électricité dès le premier jour",
      metric: "Jusqu'à -70%"
    },
    {
      icon: Battery,
      title: "Stockage intelligent",
      desc: "Solutions de batteries pour optimiser votre autoconsommation",
      metric: "95% efficacité"
    },
    {
      icon: BarChart3,
      title: "Suivi en temps réel",
      desc: "Monitoring avancé de votre production et consommation",
      metric: "24h/7j"
    },
    {
      icon: Leaf,
      title: "Impact écologique",
      desc: "Réduisez votre empreinte carbone significativement",
      metric: "4 tonnes CO2/an"
    }
  ];

  const solutions = [
    {
      title: "Autoconsommation simple",
      description: "Consommez directement l'électricité produite par vos panneaux",
      features: ["Production en journée", "Revente du surplus", "Monitoring inclus"],
      ideal: "Maisons avec consommation diurne"
    },
    {
      title: "Autoconsommation + Stockage",
      description: "Stockez l'énergie pour la consommer le soir et la nuit",
      features: ["Batterie domestique", "Autonomie maximale", "Gestion intelligente"],
      ideal: "Familles avec forte consommation"
    },
    {
      title: "Installation premium",
      description: "Solution complète avec domotique et pilotage avancé",
      features: ["Domotique intégrée", "Pilotage à distance", "Optimisation IA"],
      ideal: "Maisons connectées"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Étude personnalisée",
      description: "Analyse de vos habitudes de consommation et dimensionnement optimal",
      icon: BarChart3
    },
    {
      number: "02", 
      title: "Installation sur mesure",
      description: "Pose professionnelle adaptée à votre toiture et vos besoins",
      icon: Home
    },
    {
      number: "03",
      title: "Mise en service",
      description: "Configuration du système et formation à l'utilisation",
      icon: Zap
    },
    {
      number: "04",
      title: "Suivi & optimisation",
      description: "Monitoring continu et conseils pour maximiser vos économies",
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
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/91db44eb-52ce-4cdf-a819-0aed669de5e2.png"
              alt="Maison moderne avec installation solaire complète"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
            <div className="absolute inset-0 bg-hero-gradient opacity-15" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Lightbulb className="w-4 h-4" />
                  Autoconsommation intelligente
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="block">Installation &</span>
                  <span className="text-primary block">Autoconsommation</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Optimisez votre autoconsommation avec nos solutions solaires sur mesure. 
                  Production, stockage et suivi intelligent pour une indépendance énergétique maximale.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <a href="/contact" className="flex items-center gap-2">
                      Étude gratuite
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <a href="/simulateur">Simuler mes économies</a>
                  </Button>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">40-70%</div>
                    <div className="text-sm text-muted-foreground">Autoconsommation</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">90%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction client</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">25 ans</div>
                    <div className="text-sm text-muted-foreground">Garantie</div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Sun className="w-3 h-3 mr-1" />
                        En temps réel
                      </Badge>
                      <BarChart3 className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Maison connectée</h3>
                      <p className="text-muted-foreground">Exemple d'autoconsommation optimisée</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Production actuelle</span>
                        <span className="font-semibold text-primary">4.2 kW</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Consommation</span>
                        <span className="font-semibold">3.1 kW</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Autoconsommation</span>
                        <span className="font-semibold text-primary">74%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Économies aujourd'hui</span>
                        <span className="font-semibold text-primary">8.50€</span>
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

        {/* Advantages Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Pourquoi optimiser votre
                <span className="text-primary block">autoconsommation ?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Maximisez la valeur de votre installation solaire avec nos solutions intelligentes
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos solutions d'autoconsommation</h2>
              <p className="text-xl text-muted-foreground">Choisissez la solution adaptée à vos besoins et votre mode de vie</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <Card key={index} className="group border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>

                    <ul className="space-y-3">
                      {solution.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4 border-t border-border">
                      <Badge variant="outline" className="w-full justify-center py-2">
                        Idéal pour: {solution.ideal}
                      </Badge>
                    </div>

                    <Button variant="outline" className="w-full group">
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos installations premium</h2>
              <p className="text-xl text-muted-foreground">Découvrez nos réalisations d'autoconsommation optimisée</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  img: "/lovable-uploads/6c08c70f-0432-48b9-bbd4-9b598d387e1f.png", 
                  title: "Carport solaire premium", 
                  subtitle: "5kWc - Protection véhicule + production",
                  features: ["Double fonction", "Design moderne", "Autoconsommation 65%"]
                },
                { 
                  img: "/lovable-uploads/81a4fd09-b599-4342-a70d-6dfa7ab12e3b.png", 
                  title: "Pergola solaire terrasse", 
                  subtitle: "4kWc - Ombrage + énergie",
                  features: ["Espace de vie", "Structure bois", "Production optimisée"]
                },
                { 
                  img: "/lovable-uploads/3ec375c4-799b-4562-b557-7f7833332644.png", 
                  title: "Carport solaire design", 
                  subtitle: "6kWc - Solution élégante",
                  features: ["Intégration parfaite", "Monitoring inclus", "ROI 7 ans"]
                },
                { 
                  img: "/lovable-uploads/91db44eb-52ce-4cdf-a819-0aed669de5e2.png", 
                  title: "Installation toiture complète", 
                  subtitle: "9kWc - Autonomie maximale",
                  features: ["Couverture totale", "Batterie 10kWh", "Autoconsommation 85%"]
                }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Card className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow">
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.img} 
                        alt={item.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Notre processus d'installation</h2>
              <p className="text-xl text-muted-foreground">Un accompagnement complet pour optimiser votre autoconsommation</p>
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
                Maximisez votre
                <span className="text-primary block">autoconsommation</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Rejoignez les milliers de foyers qui ont optimisé leur consommation d'énergie. 
                Étude personnalisée gratuite en 48h.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <a href="/contact" className="flex items-center gap-2">
                    <Euro className="w-5 h-5" />
                    Calculer mes économies
                  </a>
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

export default InstallationConsommation;