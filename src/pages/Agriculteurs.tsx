import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgriculturePortfolio from "@/components/AgriculturePortfolio";
import SolarCallButton from "@/components/SolarCallButton";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { Tractor, Sun, Factory, Wheat, TrendingUp, Shield, Users, Euro, Leaf, Zap } from "lucide-react";
const Agriculteurs = () => {
  const services = [{
    title: "Panneaux solaires agricoles",
    description: "Installation sur toitures de bâtiments agricoles",
    icon: Sun,
    href: "/professionnels/panneaux-solaires",
    benefits: ["Réduction des coûts électriques", "Revenu complémentaire via revente", "Protection du matériel agricole", "Amélioration du bilan énergétique"]
  }, {
    title: "Ombrières photovoltaïques",
    description: "Protection du bétail et des équipements avec production d'énergie",
    icon: Factory,
    href: "/professionnels/ombrieres",
    benefits: ["Double fonction : ombrage et production", "Protection des animaux et machines", "Valorisation des espaces inutilisés", "Installation adaptée à l'activité"]
  }, {
    title: "Agrivoltaïsme",
    description: "Panneaux solaires compatibles avec l'agriculture",
    icon: Wheat,
    href: "/professionnels/agrivoltaisme",
    benefits: ["Continuité de l'activité agricole", "Protection des cultures", "Réduction de l'évaporation", "Innovation et durabilité"]
  }, {
    title: "Autoconsommation agricole",
    description: "Solutions de stockage et gestion énergétique",
    icon: Zap,
    href: "/professionnels/installation-consommation",
    benefits: ["Autonomie énergétique renforcée", "Gestion intelligente des consommations", "Stockage pour irrigation", "Monitoring et optimisation"]
  }];
  const advantages = [{
    title: "Rentabilité optimisée",
    description: "ROI attractif avec des installations dimensionnées pour vos besoins agricoles",
    icon: TrendingUp
  }, {
    title: "Expertise agricole",
    description: "Connaissance spécifique des contraintes et besoins du secteur agricole",
    icon: Shield
  }, {
    title: "Accompagnement dédié",
    description: "Support technique et administratif adapté aux exploitations agricoles",
    icon: Users
  }];
  const stats = [{
    number: "150+",
    label: "Exploitations équipées"
  }, {
    number: "25MW",
    label: "Puissance agricole installée"
  }, {
    number: "10",
    label: "Ans d'expertise agricole"
  }, {
    number: "95%",
    label: "Agriculteurs satisfaits"
  }];
  return <div className="min-h-screen">
      <Helmet>
        <title>Solutions Solaires pour Agriculteurs | WN Energies</title>
        <meta name="description" content="Spécialiste du photovoltaïque agricole : panneaux solaires sur bâtiments, ombrières, agrivoltaïsme. Réduisez vos coûts et générez des revenus complémentaires." />
        <link rel="canonical" href="https://wn-energies.fr/agriculteurs" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0">
          <img src="/lovable-uploads/be80a198-7de3-4811-a266-aa904b6cd664.png" alt="Serre agricole équipée de panneaux solaires photovoltaïques" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-emerald-400 rounded-full animate-ping opacity-70" />
        <div className="absolute top-40 right-40 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute bottom-40 right-10 w-3 h-3 bg-yellow-400 rounded-full animate-bounce opacity-50" />

        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-100 font-medium">Spécialiste agrivoltaïsme</span>
            </div>

            {/* Main title */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none animate-fade-in">
              <span className="block text-white mb-4">
                L'énergie solaire
              </span>
              <span className="block bg-gradient-to-r from-emerald-400 via-green-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                au service de
              </span>
              <span className="block text-white">
                l'agriculture
              </span>
            </h1>

            {/* Animated line */}
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full mb-8 animate-pulse" />

            {/* Description */}
            <p className="text-2xl text-emerald-100 mb-12 leading-relaxed max-w-3xl animate-fade-in">
              Transformez votre exploitation en centrale énergétique durable. 
              <span className="block mt-2 text-white font-semibold">
                Réduisez vos coûts • Générez des revenus • Protégez l'environnement
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-start animate-fade-in">
              <Button asChild variant="hero" size="xl" className="hover-scale shadow-2xl">
                <Link to="/contact">
                  <Tractor className="h-6 w-6 mr-2" />
                  Étude gratuite personnalisée
                </Link>
              </Button>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">150+</div>
                <div className="text-emerald-100 text-sm">Exploitations équipées</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25MW</div>
                <div className="text-emerald-100 text-sm">Installés en agricole</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-emerald-100 text-sm">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      

      {/* Portfolio Section */}
      <AgriculturePortfolio />

      {/* Financial Slogan Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-yellow-500/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-green-500/10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Réduisez vos charges
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-green-600 to-yellow-600 bg-clip-text text-transparent">
            et générez des revenus complémentaires
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-lg md:text-xl text-foreground/80">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="font-semibold">Moins de factures</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="font-semibold">Plus de revenus</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <span className="font-semibold">Exploitation rentable sur 25 ans</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Photovoltaïque agricole : optimisez vos coûts énergétiques
            </h2>
            
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="text-lg mb-6">
                L'agriculture française connaît une révolution énergétique avec l'installation de panneaux solaires photovoltaïques. 
                Les exploitations agricoles disposent d'atouts uniques : grandes surfaces de toitures, espaces disponibles, 
                et consommation électrique importante pour l'irrigation, la ventilation, la traite et le séchage.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Solutions photovoltaïques adaptées à l'agriculture</h3>
              <p className="mb-6">
                Nos installations solaires agricoles s'adaptent parfaitement aux contraintes de votre exploitation. 
                Que ce soit sur toitures de stabulations, hangars de stockage, ou en ombrières pour protéger le bétail, 
                chaque projet est dimensionné selon vos besoins énergétiques spécifiques.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Rentabilité et revenus complémentaires</h3>
              <p className="mb-6">
                Réduisez jusqu'à 80% vos factures électriques et générez des revenus complémentaires grâce à la revente 
                d'électricité. Nos installations offrent un retour sur investissement attractif de 8 à 12 ans selon la configuration, 
                avec une durée de vie garantie de 25 ans minimum.
              </p>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Agrivoltaïsme : l'innovation au service de l'agriculture</h3>
              <p className="mb-6">
                L'agrivoltaïsme permet de maintenir votre activité agricole tout en produisant de l'énergie renouvelable. 
                Cette technologie innovante protège vos cultures des intempéries, réduit l'évaporation et optimise 
                les rendements agricoles tout en générant de l'électricité verte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir le solaire agricole ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des avantages concrets pour votre exploitation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {advantages.map((advantage, index) => <Card key={index} variant="gradient" className="text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-emerald-100">
                    <advantage.icon className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {advantage.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos solutions <span className="text-emerald-600">agricoles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des installations adaptées à chaque type d'exploitation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => <ServiceCard key={index} {...service} variant="solar" />)}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Le photovoltaïque agricole : une révolution énergétique
            </h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                L'agriculture française connaît une transformation majeure avec l'intégration du photovoltaïque. 
                Les exploitations agricoles disposent d'atouts uniques : grandes surfaces de toitures, espaces disponibles, 
                et consommation électrique importante pour les systèmes d'irrigation, de ventilation et de traite.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-l-4 border-l-emerald-500 hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Euro className="h-6 w-6 text-emerald-500" />
                      Rentabilité agricole
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Réduction jusqu'à 80% des factures électriques et génération de revenus complémentaires 
                      via la revente d'électricité. ROI moyen de 8-12 ans selon la configuration.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Leaf className="h-6 w-6 text-green-500" />
                      Agriculture durable
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Contribution à la transition énergétique du secteur agricole tout en maintenant 
                      la production alimentaire. Solutions d'agrivoltaïsme respectueuses des cultures.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Types d'installations photovoltaïques agricoles</h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span><strong>Toitures de bâtiments :</strong> Stabulations, hangars, serres, bâtiments de stockage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span><strong>Ombrières :</strong> Protection du bétail, des machines agricoles et des aires de stockage</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span><strong>Agrivoltaïsme :</strong> Panneaux surélevés permettant la continuité de l'activité agricole</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                  <span><strong>Centrales au sol :</strong> Sur terres non cultivables ou en conversion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Card variant="solar" className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre projet agricole commence ici
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bénéficiez d'une étude gratuite et découvrez le potentiel de votre exploitation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Étude gratuite</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/simulateur">Simuler mon projet</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <SolarCallButton />
      <Footer />
    </div>;
};
export default Agriculteurs;