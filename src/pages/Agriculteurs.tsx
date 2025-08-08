import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyCTA from "@/components/StickyCTA"
import ServiceCard from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Helmet } from "react-helmet-async"
import { Tractor, Sun, Factory, Wheat, TrendingUp, Shield, Users, Euro, Leaf, Zap } from "lucide-react"

const Agriculteurs = () => {
  const services = [
    {
      title: "Panneaux solaires agricoles",
      description: "Installation sur toitures de bâtiments agricoles",
      icon: Sun,
      href: "/professionnels/panneaux-solaires",
      benefits: [
        "Réduction des coûts électriques",
        "Revenu complémentaire via revente",
        "Protection du matériel agricole",
        "Amélioration du bilan énergétique"
      ]
    },
    {
      title: "Ombrières photovoltaïques",
      description: "Protection du bétail et des équipements avec production d'énergie",
      icon: Factory,
      href: "/professionnels/ombrieres",
      benefits: [
        "Double fonction : ombrage et production",
        "Protection des animaux et machines",
        "Valorisation des espaces inutilisés",
        "Installation adaptée à l'activité"
      ]
    },
    {
      title: "Agrivoltaïsme",
      description: "Panneaux solaires compatibles avec l'agriculture",
      icon: Wheat,
      href: "/professionnels/agrivoltaisme",
      benefits: [
        "Continuité de l'activité agricole",
        "Protection des cultures",
        "Réduction de l'évaporation",
        "Innovation et durabilité"
      ]
    },
    {
      title: "Autoconsommation agricole",
      description: "Solutions de stockage et gestion énergétique",
      icon: Zap,
      href: "/professionnels/installation-consommation",
      benefits: [
        "Autonomie énergétique renforcée",
        "Gestion intelligente des consommations",
        "Stockage pour irrigation",
        "Monitoring et optimisation"
      ]
    }
  ]

  const advantages = [
    {
      title: "Rentabilité optimisée",
      description: "ROI attractif avec des installations dimensionnées pour vos besoins agricoles",
      icon: TrendingUp
    },
    {
      title: "Expertise agricole",
      description: "Connaissance spécifique des contraintes et besoins du secteur agricole",
      icon: Shield
    },
    {
      title: "Accompagnement dédié",
      description: "Support technique et administratif adapté aux exploitations agricoles",
      icon: Users
    }
  ]

  const stats = [
    { number: "150+", label: "Exploitations équipées" },
    { number: "25MW", label: "Puissance agricole installée" },
    { number: "12", label: "Ans d'expertise agricole" },
    { number: "95%", label: "Agriculteurs satisfaits" }
  ]

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Solutions Solaires pour Agriculteurs | WN Energies</title>
        <meta name="description" content="Spécialiste du photovoltaïque agricole : panneaux solaires sur bâtiments, ombrières, agrivoltaïsme. Réduisez vos coûts et générez des revenus complémentaires." />
        <link rel="canonical" href="https://wn-energies.fr/agriculteurs" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-amber-50">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Solutions solaires pour 
                <span className="block text-emerald-600">agriculteurs</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Optimisez vos coûts énergétiques et générez des revenus complémentaires avec des installations solaires adaptées à votre exploitation agricole.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Étude gratuite</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="#services">Nos solutions</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-emerald-100 rounded-3xl p-8 text-center shadow-xl">
                <Tractor className="h-20 w-20 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-emerald-800 mb-2">Agrivoltaïsme</h3>
                <p className="text-emerald-700">L'avenir de l'agriculture durable</p>
              </div>
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
                <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
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
              Pourquoi choisir le solaire agricole ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des avantages concrets pour votre exploitation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="gradient" className="text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
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
              Nos solutions <span className="text-emerald-600">agricoles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des installations adaptées à chaque type d'exploitation
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

      <StickyCTA />
      <Footer />
    </div>
  )
}

export default Agriculteurs