import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ServiceCard from "@/components/ServiceCard"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CallbackForm from "@/components/CallbackForm"
import SolarCallButton from "@/components/SolarCallButton"
import { Sun, Home, Building, Zap, Battery, Car, Factory, Users, UserCheck, Briefcase, Tractor, MapPin } from "lucide-react"
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
    { number: "98%", label: "Clients satisfaits" },
    { number: "50+", label: "Villes en Rhône-Alpes" }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <video 
          className="absolute inset-0 w-full h-full object-cover object-center md:object-right"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster={heroImage}
          style={{ 
            filter: 'contrast(1.15) saturate(1.3) brightness(1.05) sharpen(1)',
            imageRendering: 'crisp-edges',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        >
          <source src="https://cdn.midjourney.com/video/f87b7039-d3ef-4bf4-a409-96b1ee509d06/0.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        
        <div className="absolute bottom-8 left-4 right-4 md:left-8 md:top-1/2 md:transform md:-translate-y-1/2 md:right-auto z-10">
          <div className="max-w-md md:max-w-lg">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight text-center md:text-left">
                <span className="bg-hero-gradient bg-clip-text text-transparent drop-shadow-lg">L'énergie solaire</span>
                <br />
                <span className="text-white drop-shadow-xl">pour votre avenir</span>
              </h1>
              <p className="text-sm md:text-lg lg:text-xl text-white/95 mb-6 md:mb-8 leading-relaxed text-center md:text-left drop-shadow-lg">
                Spécialiste de l'installation de panneaux solaires en Rhône-Alpes et dans toute la France.
                <br className="hidden lg:block" />
                Réduisez vos factures et participez à la transition énergétique.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
                <Button asChild variant="glass" size="lg" className="shadow-premium btn-solar">
                  <Link to="/contact">Devis gratuit</Link>
                </Button>
                <Button asChild variant="glass" size="lg" className="bg-white/15 border-white/20 text-white hover:bg-white/25 btn-solar">
                  <Link to="/simulateur">Simulateur</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
            
      </section>

      {/* Zone géographique et contenu SEO */}
      <section className="py-16 bg-gradient-to-br from-blue-50/50 via-white to-green-50/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Installateur de panneaux solaires en <span className="text-primary">France</span> - Expert Lyon & Rhône-Alpes
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Spécialiste de l'énergie solaire photovoltaïque depuis plus de 10 ans, WN Energies accompagne particuliers, professionnels et collectivités dans leur transition énergétique. 
              Basés en Rhône-Alpes avec intervention dans toute la France, nous sommes experts sur Lyon, Villeurbanne, Vénissieux, Vaulx-en-Velin, Saint-Priest et l'ensemble du territoire français.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-l-4 border-l-primary solar-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-6 w-6 text-primary" />
                  Expert en énergie solaire
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Installation de panneaux solaires photovoltaïques, systèmes d'autoconsommation et solutions de stockage d'énergie pour optimiser votre autonomie énergétique en Rhône-Alpes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary solar-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-secondary" />
                  Solutions complètes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  De l'étude de faisabilité à la maintenance, nous proposons des solutions clés en main : panneaux solaires, batteries de stockage, bornes de recharge électrique et optimiseurs de puissance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent solar-hover">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-6 w-6 text-accent" />
                  Intervention régionale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Intervention dans toute la France avec une expertise renforcée en Rhône-Alpes : Rhône (69), Isère (38), Loire (42), Ain (01), Savoie (73) et Haute-Savoie (74).
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border/50 shadow-lg solar-hover">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Pourquoi choisir le solaire photovoltaïque en Rhône-Alpes ?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Ensoleillement favorable :</strong> La région bénéficie de plus de 2000 heures de soleil par an, idéal pour la production photovoltaïque</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Économies substantielles :</strong> Réduction jusqu'à 70% de vos factures d'électricité grâce à l'autoconsommation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Aides financières :</strong> Bénéficiez des primes à l'autoconsommation, du tarif de rachat EDF et du crédit d'impôt</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span><strong>Valorisation immobilière :</strong> Augmentation de la valeur de votre bien immobilier avec un DPE amélioré</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="inline-block bg-gradient-to-br from-primary to-secondary p-8 rounded-3xl text-white shadow-xl">
                  <div className="text-4xl font-bold mb-2">2000+</div>
                  <div className="text-lg opacity-90 mb-4">heures de soleil/an</div>
                  <div className="text-sm opacity-75">en Rhône-Alpes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choix de profil */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-accent/25 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Choisissez votre profil
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des solutions sur-mesure pour chaque besoin énergétique
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Link to="/particuliers" className="group">
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-2 border-blue-200 dark:border-blue-800 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:shadow-[0_0_50px_rgba(59,130,246,0.6)] hover:-translate-y-4 h-[180px] flex flex-col justify-center items-center group-hover:border-blue-400">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-blue-400/40 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="mb-4 p-4 rounded-3xl bg-blue-500 group-hover:bg-blue-600 transition-all duration-500 inline-block shadow-lg">
                    <UserCheck className="h-14 w-14 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="font-bold text-xl leading-tight text-blue-800 dark:text-blue-200 group-hover:text-blue-900 dark:group-hover:text-blue-100 transition-colors duration-500">Je suis un<br/>particulier</span>
                </div>
              </div>
            </Link>
            
            <Link to="/professionnels" className="group">
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 border-2 border-emerald-200 dark:border-emerald-800 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-4 h-[180px] flex flex-col justify-center items-center group-hover:border-emerald-400">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-transparent to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-2xl group-hover:bg-emerald-400/40 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="mb-4 p-4 rounded-3xl bg-emerald-500 group-hover:bg-emerald-600 transition-all duration-500 inline-block shadow-lg">
                    <Briefcase className="h-14 w-14 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="font-bold text-xl leading-tight text-emerald-800 dark:text-emerald-200 group-hover:text-emerald-900 dark:group-hover:text-emerald-100 transition-colors duration-500">Je suis un<br/>professionnel</span>
                </div>
              </div>
            </Link>
            
            <Link to="/agriculteurs" className="group">
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-2 border-amber-200 dark:border-amber-800 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:-translate-y-4 h-[180px] flex flex-col justify-center items-center group-hover:border-amber-400">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-transparent to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-400/20 rounded-full blur-2xl group-hover:bg-amber-400/40 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="mb-4 p-4 rounded-3xl bg-amber-500 group-hover:bg-amber-600 transition-all duration-500 inline-block shadow-lg">
                    <Tractor className="h-14 w-14 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="font-bold text-xl leading-tight text-amber-800 dark:text-amber-200 group-hover:text-amber-900 dark:group-hover:text-amber-100 transition-colors duration-500">Je suis un<br/>agriculteur</span>
                </div>
              </div>
            </Link>
            
            <Link to="/marches-publics" className="group">
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-2 border-purple-200 dark:border-purple-800 rounded-3xl p-8 text-center transition-all duration-700 hover:scale-110 hover:shadow-[0_0_50px_rgba(147,51,234,0.6)] hover:-translate-y-4 h-[180px] flex flex-col justify-center items-center group-hover:border-purple-400">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-400/20 rounded-full blur-2xl group-hover:bg-purple-400/40 transition-all duration-700"></div>
                <div className="relative z-10">
                  <div className="mb-4 p-4 rounded-3xl bg-purple-500 group-hover:bg-purple-600 transition-all duration-500 inline-block shadow-lg">
                    <MapPin className="h-14 w-14 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <span className="font-bold text-xl leading-tight text-purple-800 dark:text-purple-200 group-hover:text-purple-900 dark:group-hover:text-purple-100 transition-colors duration-500">Marché<br/>public</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                Pourquoi choisir <span className="text-primary font-extrabold">WN Energies</span> ?
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
              
              <Button asChild variant="secondary" size="lg" className="btn-solar">
                <Link to="/contact">Contactez-nous</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src={teamWorkImage} 
                alt="Équipe professionnelle WN Energies au travail"
                className="rounded-lg shadow-strong w-full solar-hover"
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
          <Card variant="solar" className="p-12 text-center solar-hover">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à passer au solaire ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Obtenez votre devis personnalisé gratuit et découvrez combien vous pouvez économiser 
              avec une installation solaire adaptée à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl" className="btn-solar">
                <Link to="/contact">Devis gratuit</Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="btn-solar">
                <Link to="/zone-intervention">Zone d'intervention</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <SolarCallButton />
      <Footer />
    </div>
  );
};

export default Index;
