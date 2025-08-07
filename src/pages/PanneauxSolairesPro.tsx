import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StickyCTA from "@/components/StickyCTA";
import { Helmet } from "react-helmet-async";
import panneauxSolairesProHero from "@/assets/panneaux-solaires-pro-hero.jpg";
import { 
  Sun, 
  Building2,
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  ArrowRight,
  CheckCircle,
  Factory,
  Leaf,
  Euro,
  Award,
  BarChart3
} from "lucide-react";

const PanneauxSolairesPro = () => {
  const company = "WN Energies";
  const title = `Panneaux solaires professionnels et industriels | ${company}`;
  const description = "Installation photovoltaïque pour entreprises, bâtiments industriels et commerciaux. Solutions sur mesure, financement et maintenance inclus.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/professionnels/panneaux-solaires";

  const advantages = [
    {
      icon: Euro,
      title: "Réduction des coûts",
      desc: "Diminuez drastiquement votre facture énergétique professionnelle",
      metric: "Économies majeures"
    },
    {
      icon: Leaf,
      title: "Image éco-responsable",
      desc: "Valorisez votre engagement environnemental auprès de vos clients",
      metric: "Impact positif"
    },
    {
      icon: Shield,
      title: "Investissement sécurisé",
      desc: "Amortissement rapide et revenus garantis sur le long terme",
      metric: "ROI optimal"
    },
    {
      icon: Award,
      title: "Certification RSE",
      desc: "Renforcez votre politique de responsabilité sociétale",
      metric: "Conformité"
    }
  ];

  const solutions = [
    {
      title: "Toiture industrielle",
      description: "Installation sur hangars, entrepôts et bâtiments industriels",
      features: ["Grande surface", "Structure renforcée", "Maintenance incluse", "Monitoring pro"],
      ideal: "Industrie et logistique",
      type: "Toiture",
      benefits: "Production massive"
    },
    {
      title: "Ombrières parking",
      description: "Protection véhicules et production d'énergie combinées",
      features: ["Double fonction", "Étanchéité garantie", "Éclairage LED", "Bornes recharge"],
      ideal: "Centres commerciaux",
      type: "Ombrière",
      benefits: "Optimisation espace",
      popular: true
    },
    {
      title: "Centrale au sol",
      description: "Installation sur terrain dédié pour production maximale",
      features: ["Suiveurs solaires", "Haute puissance", "Raccordement HTA", "Télésurveillance"],
      ideal: "Exploitation agricole",
      type: "Sol",
      benefits: "Rendement maximal"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Étude de faisabilité",
      description: "Analyse technique, financière et réglementaire de votre projet",
      icon: BarChart3
    },
    {
      number: "02", 
      title: "Financement & démarches",
      description: "Montage financier et gestion administrative complète",
      icon: Euro
    },
    {
      number: "03",
      title: "Installation professionnelle",
      description: "Réalisation par équipes spécialisées certifiées",
      icon: Building2
    },
    {
      number: "04",
      title: "Exploitation & maintenance",
      description: "Suivi de production et maintenance préventive",
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
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={panneauxSolairesProHero} 
              alt="Installation panneaux solaires professionnels" 
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
                  <Building2 className="w-4 h-4" />
                  Solutions professionnelles
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Panneaux solaires</span>
                  <span className="text-primary block">professionnels</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Réduisez vos coûts énergétiques et valorisez votre image avec nos solutions photovoltaïques 
                  sur mesure pour entreprises, industries et collectivités.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <a href="/contact" className="flex items-center gap-2">
                      Étude gratuite
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <a href="/simulateur">Simuler mon projet</a>
                  </Button>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Pro</div>
                    <div className="text-sm text-muted-foreground">Solutions</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Sur-mesure</div>
                    <div className="text-sm text-muted-foreground">Adaptation</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Clé en main</div>
                    <div className="text-sm text-muted-foreground">Service</div>
                  </div>
                </div>
              </div>

              {/* Business ROI Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Factory className="w-3 h-3 mr-1" />
                        Entreprise type
                      </Badge>
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Entrepôt logistique</h3>
                      <p className="text-muted-foreground">Exemple de rentabilité</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Surface toiture</span>
                        <span className="font-semibold">Grande</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Production annuelle</span>
                        <span className="font-semibold text-primary">Optimale</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Économies/an</span>
                        <span className="font-semibold text-primary">Significatives</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">ROI</span>
                        <span className="font-semibold text-primary">Rapide</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="w-full">
                        Calculer mon ROI
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
                    Panneaux solaires professionnels : le guide pour les entreprises
                  </h2>
                </header>
                
                <p>
                  L'installation de panneaux solaires photovoltaïques représente un investissement stratégique pour les entreprises soucieuses de maîtriser leurs coûts énergétiques. 
                  Chez WN Energies, nous accompagnons les professionnels dans leurs projets solaires, depuis l'étude de faisabilité jusqu'à la maintenance, 
                  en passant par le financement et l'exploitation des installations.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Pourquoi installer des panneaux solaires en entreprise ?
                </h3>
                <p>
                  Les panneaux solaires professionnels permettent aux entreprises de réduire significativement leur facture électrique, 
                  particulièrement adaptés aux activités consommatrices en journée. Au-delà de l'aspect financier, 
                  une installation photovoltaïque valorise l'image de l'entreprise et s'inscrit dans une démarche RSE 
                  (Responsabilité Sociétale des Entreprises) de plus en plus recherchée par les clients et partenaires.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Types d'installations solaires professionnelles
                </h3>
                <p>
                  Nous proposons différents types d'installations selon la configuration de vos bâtiments : toitures industrielles pour les hangars et entrepôts, 
                  ombrières de parking pour optimiser l'espace tout en protégeant les véhicules, centrales au sol pour les terrains disponibles, 
                  et intégration architecturale pour les bâtiments tertiaires. Chaque solution est dimensionnée selon vos besoins énergétiques et contraintes techniques.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Financement et rentabilité des projets solaires
                </h3>
                <p>
                  Plusieurs modèles de financement s'offrent aux entreprises : achat direct avec amortissement, crédit-bail, 
                  ou tiers-financement sans apport initial. Les installations professionnelles bénéficient d'un tarif de rachat de l'électricité 
                  ou peuvent opter pour l'autoconsommation avec vente du surplus. Le retour sur investissement varie selon la taille et le secteur, 
                  généralement entre 8 et 12 ans pour un fonctionnement garanti sur plus de 25 ans.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">
                  Réglementation et démarches administratives
                </h3>
                <p>
                  Nos équipes gèrent l'intégralité des démarches administratives : déclaration préalable ou permis de construire selon la puissance, 
                  demande de raccordement au réseau électrique, contrat d'achat de l'électricité si applicable. 
                  Nous veillons au respect des normes en vigueur et accompagnons nos clients dans leurs relations avec les administrations et gestionnaires de réseau.
                </p>
              </article>
              
              <aside className="space-y-8">
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Services inclus</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Étude de faisabilité complète
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Montage financier personnalisé
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Démarches administratives
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Installation clé en main
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Maintenance et supervision
                    </li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-border/50">
                  <h3 className="text-xl font-semibold mb-4">Secteurs d'activité</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Industrie</span>
                      <span className="font-semibold">Adapté</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Logistique</span>
                      <span className="font-semibold">Idéal</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Commerce</span>
                      <span className="font-semibold">Rentable</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Agriculture</span>
                      <span className="font-semibold">Optimisé</span>
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
              L'énergie solaire industrielle : une révolution énergétique
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 not-prose">
              <div>
                <h3 className="text-xl font-semibold mb-4">Pourquoi choisir le solaire industriel ?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Les installations photovoltaïques industrielles représentent aujourd'hui le moyen le plus 
                  efficace et rentable de réduire les coûts énergétiques des entreprises. Avec des prix 
                  de l'électricité en constante augmentation, l'énergie solaire offre une solution 
                  pérenne et prévisible.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Une installation de 500 kWc peut générer jusqu'à 600 000 kWh par an, permettant 
                  des économies substantielles sur les factures d'électricité tout en valorisant 
                  l'engagement environnemental de l'entreprise.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Technologies et performance</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Nos installations utilisent des panneaux photovoltaïques de dernière génération 
                  avec des rendements supérieurs à 21%. Les onduleurs de puissance et systèmes 
                  de monitoring permettent une optimisation maximale de la production.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque projet bénéficie d'une étude d'ombrage précise, d'une analyse structurelle 
                  complète et d'un dimensionnement optimal selon les contraintes techniques 
                  et les objectifs de rentabilité.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-center">
                <TrendingUp className="inline mr-2 h-5 w-5 text-secondary" />
                Rentabilité et performance garanties
              </h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Nos installations industrielles affichent un retour sur investissement entre 5 et 8 ans, 
                avec une production garantie pendant 25 ans. Les économies générées sur la durée de vie 
                de l'installation représentent généralement 3 à 4 fois l'investissement initial.
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
                Transformez votre consommation énergétique en avantage concurrentiel
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
              <p className="text-xl text-muted-foreground">Installations adaptées à chaque type de bâtiment professionnel</p>
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
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                        <Badge variant="outline" className="text-primary border-primary/20">
                          {solution.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </div>

                    <div className="space-y-3 p-4 bg-muted/20 rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm">Avantage</span>
                        <span className="font-semibold text-primary">{solution.benefits}</span>
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Notre approche professionnelle</h2>
              <p className="text-xl text-muted-foreground">Un accompagnement complet de A à Z pour votre projet solaire</p>
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
                Développez votre projet
                <span className="text-primary block">solaire professionnel</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Réduisez vos coûts énergétiques et valorisez votre image d'entreprise responsable. 
                Étude de faisabilité gratuite et sans engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <a href="/contact" className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Étude gratuite
                  </a>
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

export default PanneauxSolairesPro;