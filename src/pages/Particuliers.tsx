import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceCard from "@/components/ServiceCard"
import SolarPortfolio from "@/components/SolarPortfolio"

import SolarCallButton from "@/components/SolarCallButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sun, Home, Zap, Battery, Car, CheckCircle, ArrowRight, Leaf, Euro, Shield, Monitor, TrendingUp, Calendar } from "lucide-react"
import { Helmet } from "react-helmet-async"

const Particuliers = () => {
  const services = [
    {
      title: "Panneaux solaires",
      description: "Installation de panneaux solaires photovoltaïques pour particuliers",
      icon: Sun,
      href: "/particuliers/panneaux-solaires",
      benefits: [
        "Réduction des factures d'électricité",
        "Production d'énergie propre",
        "Valorisation du bien immobilier",
        "Aides financières disponibles"
      ]
    },
    {
      title: "Installation en consommation",
      description: "Solutions d'autoconsommation pour optimiser votre production solaire",
      icon: Zap,
      href: "/particuliers/installation-consommation",
      benefits: [
        "Consommation directe de l'énergie produite",
        "Réduction maximale des factures",
        "Indépendance énergétique",
        "Monitoring en temps réel"
      ]
    },
    {
      title: "Borne de recharge électrique",
      description: "Installation de bornes de recharge alimentées par l'énergie solaire",
      icon: Car,
      href: "/particuliers/borne-recharge",
      benefits: [
        "Recharge écologique et économique",
        "Intégration avec installation solaire",
        "Différentes puissances disponibles",
        "Installation professionnelle"
      ]
    },
    {
      title: "Batterie solaire",
      description: "Solutions de stockage pour une autonomie énergétique maximale",
      icon: Battery,
      href: "/particuliers/batterie-solaire",
      benefits: [
        "Stockage de l'énergie excédentaire",
        "Utilisation nocturne de l'énergie solaire",
        "Sécurité en cas de coupure réseau",
        "Optimisation de l'autoconsommation"
      ]
    }
  ]

  const advantages = [
    {
      title: "Économies garanties",
      description: "Réduisez vos factures d'électricité jusqu'à 70% dès la première année"
    },
    {
      title: "Installation clé en main",
      description: "Nous nous occupons de tout : étude, pose, raccordement et démarches administratives"
    },
    {
      title: "Garanties complètes",
      description: "Garantie fabricant 25 ans sur les panneaux et garantie pose complète"
    },
    {
      title: "Suivi et maintenance",
      description: "Monitoring de votre installation et maintenance préventive incluse"
    }
  ]

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Solutions Solaires pour Particuliers | Installations Photovoltaïques Domestiques</title>
        <meta name="description" content="Découvrez nos solutions solaires pour particuliers : panneaux photovoltaïques, autoconsommation, batteries et bornes de recharge. Devis gratuit et installation clé en main." />
        <link rel="canonical" href="https://www.wn-energies.fr/particuliers" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/20f3f96b-5cc8-48a0-ad82-1d775c339015.png"
            alt="Pergola solaire moderne avec panneaux photovoltaïques"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/30"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="mb-8 animate-fade-in">
              <Badge variant="secondary" className="px-6 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20">
                <Leaf className="w-4 h-4 mr-2" />
                Solutions Écologiques & Économiques
              </Badge>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
              L'énergie solaire
              <span className="block bg-gradient-to-r from-primary via-primary-variant to-accent bg-clip-text text-transparent">
                à votre domicile
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl leading-relaxed animate-fade-in">
              Transformez votre toit en centrale électrique. Produisez votre propre énergie verte, 
              réduisez vos factures jusqu'à 70% et valorisez votre patrimoine.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in">
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-primary mb-2">70%</div>
                <div className="text-muted-foreground">d'économies possibles</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-primary mb-2">25 ans</div>
                <div className="text-muted-foreground">de garantie fabricant</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">clé en main</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contact">
                  Devis gratuit immédiat
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/20 text-foreground hover:bg-white/10">
                <Link to="/simulateur">
                  Découvrir les avantages
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <SolarPortfolio />

      {/* Financial Slogan Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Jusqu'à <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">70%</span> d'économies
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-muted-foreground">
            sur vos factures d'électricité
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-lg md:text-xl text-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="font-semibold">Investissement rentable</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="font-semibold">Remboursement en 8-12 ans</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent"></div>
              <span className="font-semibold">25 ans de garantie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="avantages" className="py-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/3 to-background"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6">
              <Badge variant="outline" className="px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <TrendingUp className="w-4 h-4 mr-2" />
                Avantages Solaires
              </Badge>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pourquoi choisir le <span className="bg-gradient-to-r from-primary via-primary-variant to-accent bg-clip-text text-transparent">solaire</span> ?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Découvrez tous les avantages d'une installation solaire pour votre domicile et votre portefeuille
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Euro,
                title: "Économies garanties",
                description: "Réduisez vos factures d'électricité jusqu'à 70% dès la première année",
                gradient: "from-green-500/20 to-emerald-500/20",
                iconBg: "bg-gradient-to-br from-green-500 to-emerald-600",
                shadowColor: "group-hover:shadow-green-500/25"
              },
              {
                icon: Home,
                title: "Installation clé en main",
                description: "Nous nous occupons de tout : étude, pose, raccordement et démarches administratives",
                gradient: "from-blue-500/20 to-cyan-500/20",
                iconBg: "bg-gradient-to-br from-blue-500 to-cyan-600",
                shadowColor: "group-hover:shadow-blue-500/25"
              },
              {
                icon: Shield,
                title: "Garanties complètes",
                description: "Garantie fabricant 25 ans sur les panneaux et garantie pose complète",
                gradient: "from-purple-500/20 to-violet-500/20",
                iconBg: "bg-gradient-to-br from-purple-500 to-violet-600",
                shadowColor: "group-hover:shadow-purple-500/25"
              },
              {
                icon: Monitor,
                title: "Suivi et maintenance",
                description: "Monitoring de votre installation et maintenance préventive incluse",
                gradient: "from-orange-500/20 to-amber-500/20",
                iconBg: "bg-gradient-to-br from-orange-500 to-amber-600",
                shadowColor: "group-hover:shadow-orange-500/25"
              }
            ].map((advantage, index) => (
              <div key={index} className={`group relative`}>
                {/* Animated Background */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl group-hover:blur-none`}></div>
                
                <Card className={`relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-700 hover:-translate-y-4 hover:scale-105 ${advantage.shadowColor} hover:shadow-2xl rounded-3xl`}>
                  {/* Card Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <CardHeader className="relative text-center pb-6">
                    <div className="mx-auto mb-6 relative">
                      <div className={`w-16 h-16 rounded-2xl ${advantage.iconBg} shadow-lg flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <advantage.icon className="h-8 w-8" />
                      </div>
                      
                      {/* Floating particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700"></div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {advantage.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative text-center">
                    <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {advantage.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/simulateur">
                Calculer mes économies
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/20">
        <div className="container">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Sun className="w-4 h-4 mr-2" />
              Nos Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Services <span className="text-primary">particuliers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Solutions complètes et personnalisées pour répondre à tous vos besoins énergétiques domestiques
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
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

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Notre Méthode
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Votre projet en <span className="text-primary">4 étapes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Un accompagnement complet et transparent pour votre transition énergétique
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Étude personnalisée",
                description: "Analyse de votre consommation et étude de faisabilité gratuite sur votre toiture",
                icon: Home
              },
              {
                step: "02", 
                title: "Devis détaillé",
                description: "Proposition technique et financière adaptée à vos besoins avec simulation de production",
                icon: Euro
              },
              {
                step: "03",
                title: "Installation",
                description: "Pose professionnelle par nos équipes certifiées RGE avec matériel premium",
                icon: Sun
              },
              {
                step: "04",
                title: "Mise en service",
                description: "Raccordement, démarches administratives et formation à votre nouveau système",
                icon: CheckCircle
              }
            ].map((process, index) => (
              <Card key={index} className="group relative text-center overflow-hidden border-0 bg-white/70 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="mx-auto mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-variant flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {process.step}
                    </div>
                    <div className="absolute -top-2 -right-2 p-2 bg-white rounded-full shadow-md">
                      <process.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {process.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary-variant to-accent p-12 md:p-16 text-center text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 rounded-full bg-white/20"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 rounded-full bg-white/20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-white/10"></div>
            </div>
            
            <div className="relative z-10">
              <Badge variant="secondary" className="mb-6 px-6 py-2 bg-white/20 text-white border-white/30">
                <Leaf className="w-4 h-4 mr-2" />
                Démarrez Maintenant
              </Badge>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Votre projet solaire commence <span className="block">maintenant</span>
              </h2>
              
              <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Obtenez votre étude personnalisée gratuite et découvrez le potentiel solaire de votre domicile en moins de 24h.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button asChild variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90 shadow-lg group">
                  <Link to="/contact">
                    Devis gratuit en 24h
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="hero" size="xl" className="hover-scale">
                  <Link to="/zone-intervention">
                    Vérifier ma zone
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section aria-labelledby="seo-particuliers" className="py-20">
        <div className="container">
          <article className="max-w-5xl mx-auto">
            <h2 id="seo-particuliers" className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Installation panneaux solaires pour particuliers: guide complet
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WN Energies accompagne les particuliers dans leur transition énergétique avec des installations photovoltaïques performantes: étude personnalisée, pose certifiée RGE, garanties longues durées et suivi en temps réel. Notre objectif: maximiser votre <strong>autoconsommation</strong> et réduire durablement votre facture d’électricité.
            </p>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Pourquoi passer au solaire domestique ?</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Économies jusqu’à 70% sur la facture grâce à l’autoconsommation et au pilotage intelligent</li>
              <li>Valorisation de votre bien immobilier et indépendance énergétique accrue</li>
              <li>Technologies fiables: panneaux garantis 25 ans, onduleurs jusqu’à 20 ans</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Combien ça coûte et quel ROI ?</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Le coût dépend de la puissance (3 à 9 kWc le plus souvent). Le retour sur investissement se situe généralement entre 7 et 12 ans selon votre profil de consommation, l’orientation de la toiture et les aides en vigueur.
            </p>
            <h3 className="text-2xl font-semibold mb-3 text-foreground">Nos services pour particuliers</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Découvrez nos <Link to="/particuliers/panneaux-solaires" className="story-link">panneaux solaires</Link>, nos solutions <Link to="/particuliers/installation-consommation" className="story-link">d’autoconsommation</Link>, le <Link to="/particuliers/batterie-solaire" className="story-link">stockage par batterie</Link> et l’<Link to="/particuliers/borne-recharge" className="story-link">installation de borne de recharge</Link>. Besoin d’un chiffrage ? <Link to="/contact" className="story-link">Demandez votre devis gratuit</Link>.
            </p>
          </article>
        </div>
      </section>

      <SolarCallButton />
      <Footer />
    </div>
  )
}

export default Particuliers