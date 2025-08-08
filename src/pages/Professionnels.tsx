import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceCard from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Helmet } from "react-helmet-async"
import { Building, Factory, Wheat, Building2, TrendingUp, Shield, Users, Euro, Leaf, Zap, CheckCircle } from "lucide-react"
import commercialBuildingImage from "@/assets/commercial-building.jpg"

const Professionnels = () => {
  const services = [
    {
      title: "Commerce",
      description: "Solutions solaires pour magasins, restaurants et services",
      icon: Building,
      href: "/professionnels/commerce",
      benefits: [
        "Réduction jusqu'à 70% des factures électriques",
        "Image de marque éco-responsable",
        "Valorisation immobilière du local commercial",
        "Synchronisation parfaite production/consommation"
      ]
    },
    {
      title: "Autoconsommation", 
      description: "Optimisez votre consommation électrique industrielle",
      icon: Factory,
      href: "/professionnels/installation-consommation",
      benefits: [
        "Autonomie énergétique maximisée",
        "Réduction des coûts de production",
        "Stockage intelligent de l'énergie",
        "Solutions de monitoring avancées"
      ]
    },
    {
      title: "Borne de Recharge",
      description: "Infrastructure de recharge électrique pour véhicules d'entreprise",
      icon: Wheat,
      href: "/professionnels/borne-recharge",
      benefits: [
        "Bornes haute puissance",
        "Gestion intelligente des charges",
        "Solutions pour flottes professionnelles",
        "Intégration avec installation solaire"
      ]
    },
    {
      title: "Batterie Solaire",
      description: "Stockage d'énergie industriel et solutions de sauvegarde",
      icon: Building2,
      href: "/professionnels/batterie-solaire",
      benefits: [
        "Stockage haute capacité",
        "Sécurisation énergétique",
        "Optimisation des coûts énergétiques",
        "Solutions de sauvegarde professionnelles"
      ]
    }
  ]

  const advantages = [
    {
      title: "Rentabilité optimisée",
      description: "ROI attractif avec des installations dimensionnées pour vos besoins industriels",
      icon: TrendingUp
    },
    {
      title: "Expertise technique",
      description: "Études de faisabilité complètes et installations haute performance",
      icon: Shield
    },
    {
      title: "Accompagnement complet",
      description: "De l'étude à la maintenance, nous gérons tous les aspects de votre projet",
      icon: Users
    }
  ]

  const stats = [
    { number: "200+", label: "Projets professionnels réalisés" },
    { number: "50MW", label: "Puissance totale installée" },
    { number: "15", label: "Ans d'expertise industrielle" },
    { number: "100%", label: "Projets livrés en temps et en heure" }
  ]

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Solutions Solaires Professionnelles | WN Energies</title>
        <meta name="description" content="Installations solaires industrielles sur-mesure pour entreprises, commerces et collectivités. Réduisez vos coûts énergétiques avec nos solutions photovoltaïques professionnelles." />
        <link rel="canonical" href="https://wn-energies.fr/professionnels" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-900 via-slate-800 to-emerald-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full animate-ping opacity-70" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-secondary rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-accent rounded-full animate-bounce opacity-50" />

        <div className="container relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-medium">Solutions industrielles</span>
              </div>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none animate-fade-in">
                <span className="block text-white mb-4">
                  Énergie solaire
                </span>
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                  industrielle
                </span>
              </h1>

              {/* Animated line */}
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8 animate-pulse" />

              <p className="text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl animate-fade-in">
                Transformez vos coûts énergétiques en avantage concurrentiel.
                <span className="block mt-2 text-white font-semibold">
                  Installations sur-mesure • ROI optimisé • Support complet
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
                <Button asChild variant="hero" size="xl" className="hover-scale shadow-2xl">
                  <Link to="/contact">
                    <Building className="h-6 w-6 mr-2" />
                    Étude de faisabilité
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="hover-scale bg-white/90 border-white text-slate-900 hover:bg-white hover:text-slate-800 shadow-xl backdrop-blur-sm">
                  <Link to="#services">
                    <Factory className="h-6 w-6 mr-2" />
                    Nos solutions
                  </Link>
                </Button>
              </div>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">200+</div>
                  <div className="text-blue-100 text-sm">Projets réalisés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50MW</div>
                  <div className="text-blue-100 text-sm">Installés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">15</div>
                  <div className="text-blue-100 text-sm">Ans d'expertise</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src={commercialBuildingImage} 
                  alt="Installation solaire sur bâtiment commercial"
                  className="w-full h-[600px] object-cover hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl font-bold mb-3">Solutions industrielles</h3>
                  <p className="text-blue-100 text-lg">Optimisation énergétique sur-mesure</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir le solaire industriel ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des avantages concrets pour votre activité professionnelle
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="gradient" className="text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/10">
                    <advantage.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos solutions par <span className="text-primary">secteur</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions adaptées à chaque type d'activité professionnelle
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                variant="solar"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Photovoltaïque industriel : l'énergie au service de la performance
            </h2>
            
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg mb-6">
                L'industrie française fait face à des défis énergétiques majeurs : volatilité des prix de l'électricité, 
                exigences environnementales croissantes et nécessité d'optimiser les coûts de production. 
                Le photovoltaïque industriel offre une réponse concrète et rentable à ces enjeux.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-l-4 border-l-primary hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Euro className="h-6 w-6 text-primary" />
                      Rentabilité industrielle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Réduction de 30 à 70% des factures électriques selon la configuration. 
                      Amortissement rapide grâce aux volumes de consommation importants des sites industriels.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-6 w-6 text-secondary" />
                      Performance énergétique
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Solutions haute performance adaptées aux contraintes industrielles : toitures grands formats, 
                      ombrières de parking, centrales au sol dédiées.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Installations photovoltaïques par secteur</h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Commerce et distribution :</strong> Grandes surfaces, centres commerciaux, magasins spécialisés</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Industrie manufacturière :</strong> Usines, ateliers de production, entrepôts logistiques</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Secteur tertiaire :</strong> Bureaux, établissements de santé, établissements d'enseignement</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span><strong>Collectivités publiques :</strong> Mairies, équipements sportifs, établissements publics</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mb-4">Technologies et innovations</h3>
              <p className="mb-6">
                Nos installations utilisent les dernières innovations technologiques : panneaux haute efficacité, 
                onduleurs de puissance, systèmes de monitoring intelligents et solutions de stockage. 
                Chaque projet bénéficie d'une étude personnalisée pour optimiser la production et la rentabilité.
              </p>

              <Card className="bg-primary/5 border-primary/20 p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">Avantages concurrentiels</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Autoconsommation optimisée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Sécurisation énergétique</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Valorisation patrimoniale</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-primary" />
                    <span>Image éco-responsable</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre approche projet
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir le succès de votre installation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {[
              {
                step: "1",
                title: "Audit énergétique",
                description: "Analyse détaillée de vos consommations et besoins"
              },
              {
                step: "2", 
                title: "Étude de faisabilité",
                description: "Dimensionnement et simulation de rentabilité"
              },
              {
                step: "3",
                title: "Conception",
                description: "Plans techniques et dossiers administratifs"
              },
              {
                step: "4",
                title: "Installation",
                description: "Réalisation par nos équipes certifiées"
              },
              {
                step: "5",
                title: "Exploitation",
                description: "Mise en service, formation et maintenance"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-white text-xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solutions de <span className="text-accent">financement</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Nous vous accompagnons dans le financement de votre projet avec des solutions 
                adaptées à votre activité et votre situation financière.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Financement par tiers investisseur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Location avec option d'achat</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Crédit bancaire professionnel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Aides et subventions disponibles</span>
                </div>
              </div>
              
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Étudier mon financement</Link>
              </Button>
            </div>
            
            <Card variant="solar" className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Exemple de rentabilité</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span>Investissement initial</span>
                  <span className="font-semibold">100 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Économies annuelles</span>
                  <span className="font-semibold text-secondary">15 000 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Retour sur investissement</span>
                  <span className="font-semibold text-secondary">6-7 ans</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span>Bénéfices sur 25 ans</span>
                  <span className="font-bold text-2xl text-secondary">275 000 €</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card variant="solar" className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre projet industriel commence ici
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bénéficiez d'une étude de faisabilité gratuite et découvrez le potentiel de votre site.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Étude gratuite</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/zone-intervention">Zone d'intervention</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Professionnels