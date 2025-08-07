import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceCard from "@/components/ServiceCard"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallbackForm from "@/components/CallbackForm"
import { Sun, Home, Building, Zap, Battery, Car, Factory, Users } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"
import teamWorkImage from "@/assets/team-work.jpg"
import happyFamilyImage from "@/assets/happy-family.jpg"
import commercialBuildingImage from "@/assets/commercial-building.jpg"

const Index = () => {
  const professionnelServices = [
    {
      title: "Solutions industrielles",
      description: "Installations solaires pour entreprises et industries",
      icon: Factory,
      href: "/professionnels/industrielles",
      benefits: [
        "Réduction des coûts énergétiques",
        "Amélioration du bilan carbone",
        "Avantages fiscaux",
        "Maintenance professionnelle"
      ]
    },
    {
      title: "Ombrières photovoltaïques",
      description: "Parkings solaires et ombrières pour entreprises",
      icon: Building,
      href: "/professionnels/ombrieres",
      benefits: [
        "Double fonction : ombrage et production",
        "Valorisation des espaces de parking",
        "Installation sur mesure",
        "Rentabilité optimisée"
      ]
    },
    {
      title: "Toitures commerciales",
      description: "Couverture photovoltaïque pour bâtiments commerciaux",
      icon: Sun,
      href: "/professionnels/toitures",
      benefits: [
        "Exploitation optimale des toitures",
        "Revente d'électricité",
        "Amélioration de l'image d'entreprise",
        "Contrats de maintenance inclus"
      ]
    },
    {
      title: "Centrales au sol",
      description: "Parcs photovoltaïques et centrales de grande envergure",
      icon: Zap,
      href: "/professionnels/centrales",
      benefits: [
        "Production d'énergie à grande échelle",
        "Investissement rentable",
        "Étude de faisabilité complète",
        "Gestion administrative complète"
      ]
    }
  ]

  const particulierServices = [
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

  const collectiviteServices = [
    {
      title: "Équipements publics",
      description: "Solutions solaires pour bâtiments et équipements municipaux",
      icon: Building,
      href: "/collectivites/equipements-publics",
      benefits: [
        "Réduction des coûts publics",
        "Exemplarité environnementale",
        "Sensibilisation citoyenne",
        "Financement adapté"
      ]
    },
    {
      title: "Éclairage solaire",
      description: "Systèmes d'éclairage public autonome",
      icon: Sun,
      href: "/collectivites/eclairage",
      benefits: [
        "Autonomie énergétique complète",
        "Réduction des coûts d'électricité",
        "Installation sans travaux lourds",
        "Maintenance simplifiée"
      ]
    },
    {
      title: "Mobilité électrique",
      description: "Bornes de recharge publiques alimentées par le solaire",
      icon: Car,
      href: "/collectivites/mobilite",
      benefits: [
        "Développement de la mobilité verte",
        "Attractivité du territoire",
        "Revenus complémentaires",
        "Service public innovant"
      ]
    },
    {
      title: "Projets participatifs",
      description: "Centrales solaires citoyennes et participatives",
      icon: Users,
      href: "/collectivites/participatifs",
      benefits: [
        "Implication citoyenne",
        "Revenus pour la collectivité",
        "Transition énergétique locale",
        "Animation territoriale"
      ]
    }
  ]

  const stats = [
    { number: "500+", label: "Installations réalisées" },
    { number: "10+", label: "Années d'expérience" },
    { number: "98%", label: "Clients satisfaits" },
    { number: "50+", label: "Villes en Rhône-Alpes" }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-4 text-center lg:text-left z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
              <span className="bg-hero-gradient bg-clip-text text-transparent drop-shadow-lg">
                L'énergie solaire
              </span>
              <br />
              <span className="text-white drop-shadow-xl">pour votre avenir</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Spécialiste de l'installation de panneaux solaires en Rhône-Alpes. 
              <br className="hidden lg:block" />
              Réduisez vos factures et participez à la transition énergétique.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <Button asChild variant="glass" size="xl" className="shadow-premium">
                <Link to="/contact">Devis gratuit</Link>
              </Button>
              <Button asChild variant="glass" size="xl" className="bg-white/20 border-white/30 text-white hover:bg-white/30">
                <Link to="/simulateur">Simulateur</Link>
              </Button>
            </div>
            
            {/* Target Audience Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto lg:mx-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <Link to="/particuliers" className="group">
                <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:bg-white/20 shadow-2xl h-[140px] flex flex-col justify-center items-center hover:shadow-glow group-hover:rotate-1 hover:border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Home className="h-10 w-10 mb-4 text-white group-hover:text-blue-100 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
                  <span className="text-white font-semibold text-base leading-tight drop-shadow-md relative z-10">Je suis un<br/>particulier</span>
                </div>
              </Link>
              
              <Link to="/professionnels" className="group">
                <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:bg-white/20 shadow-2xl h-[140px] flex flex-col justify-center items-center hover:shadow-glow group-hover:-rotate-1 hover:border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Building className="h-10 w-10 mb-4 text-white group-hover:text-blue-100 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
                  <span className="text-white font-semibold text-base leading-tight drop-shadow-md relative z-10">Je suis un<br/>professionnel</span>
                </div>
              </Link>
              
              <Link to="/agriculteurs" className="group">
                <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:bg-white/20 shadow-2xl h-[140px] flex flex-col justify-center items-center hover:shadow-glow group-hover:rotate-1 hover:border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Sun className="h-10 w-10 mb-4 text-white group-hover:text-yellow-100 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
                  <span className="text-white font-semibold text-base leading-tight drop-shadow-md relative z-10">Je suis un<br/>agriculteur</span>
                </div>
              </Link>
              
              <Link to="/marches-publics" className="group">
                <div className="relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/30 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:bg-white/20 shadow-2xl h-[140px] flex flex-col justify-center items-center hover:shadow-glow group-hover:-rotate-1 hover:border-white/50">
                  <div className="absolute inset-0 bg-gradient-to-tl from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Zap className="h-10 w-10 mb-4 text-white group-hover:text-purple-100 transition-all duration-300 group-hover:scale-110 drop-shadow-lg" />
                  <span className="text-white font-semibold text-base leading-tight drop-shadow-md relative z-10">Marché<br/>public</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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


      {/* Services Professionnels */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Solutions Professionnelles
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nos services pour <span className="text-primary relative">
                professionnels
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-60"></div>
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Solutions photovoltaïques professionnelles adaptées aux entreprises et industries
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {professionnelServices.map((service, index) => (
              <div 
                key={index}
                className="animate-fade-in hover-scale"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <ServiceCard
                  {...service}
                  variant={index % 2 === 0 ? 'solar' : 'default'}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </section>

      {/* Services Particuliers */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos services pour <span className="text-primary">particuliers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos solutions solaires adaptées à vos besoins énergétiques domestiques
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {particulierServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                variant={index % 2 === 0 ? 'solar' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Collectivités */}
      <section className="py-20 bg-gradient-to-br from-green-50/50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos services pour <span className="text-primary">collectivités</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Accompagnement des collectivités dans leurs projets de transition énergétique
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collectiviteServices.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                variant={index % 2 === 0 ? 'solar' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pourquoi choisir <span className="text-secondary">WN Energies</span> ?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Entreprise spécialisée dans la vente et pose de panneaux solaires, 
                nous accompagnons particuliers et professionnels dans leur transition énergétique 
                en Rhône-Alpes depuis plus de 10 ans.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Expertise technique reconnue</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Installation et maintenance complètes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Accompagnement administratif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Garanties fabricant et pose</span>
                </div>
              </div>
              
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">Contactez-nous</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={teamWorkImage} 
                alt="Équipe professionnelle WN Energies au travail"
                className="rounded-lg shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Callback Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Parlons de votre projet
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Planifiez un appel avec nos experts pour une étude personnalisée de votre projet solaire
            </p>
          </div>
          <CallbackForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card variant="solar" className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à passer au solaire ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Obtenez votre devis personnalisé gratuit et découvrez combien vous pouvez économiser 
              avec une installation solaire adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Devis gratuit</Link>
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
  );
};

export default Index;
