import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceCard from "@/components/ServiceCard"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallbackForm from "@/components/CallbackForm"
import { Sun, Home, Building, Zap, Battery, Car } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"
import teamWorkImage from "@/assets/team-work.jpg"
import happyFamilyImage from "@/assets/happy-family.jpg"
import commercialBuildingImage from "@/assets/commercial-building.jpg"

const Index = () => {
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent" />
        </div>
        
        <div className="relative container mx-auto px-4 text-center lg:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                L'énergie solaire
              </span>
              <br />
              pour votre avenir
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Spécialiste de l'installation de panneaux solaires en Rhône-Alpes. 
              Réduisez vos factures et participez à la transition énergétique.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Devis gratuit</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/simulateur">Simulateur</Link>
              </Button>
            </div>
            
            {/* Target Audience Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto lg:mx-0">
              <Link to="/particuliers" className="group">
                <div className="bg-white/90 backdrop-blur-sm border border-white rounded-lg p-6 text-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg">
                  <Home className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <span className="text-gray-800 font-medium text-sm md:text-base">Je suis un particulier</span>
                </div>
              </Link>
              
              <Link to="/professionnels" className="group">
                <div className="bg-white/90 backdrop-blur-sm border border-white rounded-lg p-6 text-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg">
                  <Building className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <span className="text-gray-800 font-medium text-sm md:text-base">Je suis un professionnel</span>
                </div>
              </Link>
              
              <Link to="/agriculteurs" className="group">
                <div className="bg-white/90 backdrop-blur-sm border border-white rounded-lg p-6 text-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg">
                  <Sun className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <span className="text-gray-800 font-medium text-sm md:text-base">Je suis un agriculteur</span>
                </div>
              </Link>
              
              <Link to="/marches-publics" className="group">
                <div className="bg-white/90 backdrop-blur-sm border border-white rounded-lg p-6 text-center hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg">
                  <Zap className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <span className="text-gray-800 font-medium text-sm md:text-base">Marché public</span>
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
