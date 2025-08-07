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
