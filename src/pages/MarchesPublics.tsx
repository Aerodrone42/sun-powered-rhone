import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import StickyCTA from "@/components/StickyCTA"
import ServiceCard from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Helmet } from "react-helmet-async"
import { MapPin, Building2, Sun, Landmark, TrendingUp, Shield, Users, FileText, Globe, Zap } from "lucide-react"

const MarchesPublics = () => {
  const services = [
    {
      title: "Bâtiments publics",
      description: "Équipement solaire des mairies, écoles, gymnases",
      icon: Building2,
      href: "/professionnels/batiments-publics",
      benefits: [
        "Réduction des coûts énergétiques publics",
        "Exemplarité environnementale",
        "Sensibilisation citoyenne",
        "Valorisation du patrimoine public"
      ]
    },
    {
      title: "Centrales solaires",
      description: "Projets de grande envergure sur terrains communaux",
      icon: Sun,
      href: "/professionnels/centrales-solaires",
      benefits: [
        "Revenus locatifs pour la collectivité",
        "Production d'énergie verte locale",
        "Valorisation de terrains inutilisés",
        "Indépendance énergétique territoriale"
      ]
    },
    {
      title: "Éclairage public solaire",
      description: "Solutions autonomes pour l'éclairage urbain",
      icon: Zap,
      href: "/professionnels/eclairage-public",
      benefits: [
        "Réduction des coûts d'éclairage",
        "Installation sans tranchées",
        "Fonctionnement autonome",
        "Technologie LED efficace"
      ]
    },
    {
      title: "Ombrières publiques",
      description: "Parking et espaces publics avec production solaire",
      icon: Landmark,
      href: "/professionnels/ombrieres-publiques",
      benefits: [
        "Double fonctionnalité",
        "Amélioration du confort usagers",
        "Revenus pour la collectivité",
        "Image moderne et durable"
      ]
    }
  ]

  const advantages = [
    {
      title: "Expertise publique",
      description: "Connaissance des procédures et contraintes des marchés publics",
      icon: Shield
    },
    {
      title: "Accompagnement administratif",
      description: "Support complet dans les démarches et réglementations",
      icon: FileText
    },
    {
      title: "Solutions clé en main",
      description: "De l'étude à l'exploitation, nous gérons l'intégralité du projet",
      icon: Users
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Consultation publique",
      description: "Réponse aux appels d'offres et marchés publics"
    },
    {
      step: "2", 
      title: "Étude de faisabilité",
      description: "Analyse technique et financière du projet"
    },
    {
      step: "3",
      title: "Conception",
      description: "Plans techniques et dossiers réglementaires"
    },
    {
      step: "4",
      title: "Réalisation",
      description: "Installation et mise en service"
    },
    {
      step: "5",
      title: "Exploitation",
      description: "Maintenance et suivi de performance"
    }
  ]

  const stats = [
    { number: "50+", label: "Collectivités partenaires" },
    { number: "15MW", label: "Puissance publique installée" },
    { number: "8", label: "Ans d'expérience publique" },
    { number: "100%", label: "Projets publics réussis" }
  ]

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Solutions Solaires Marchés Publics | WN Energies</title>
        <meta name="description" content="Spécialiste du photovoltaïque pour collectivités : bâtiments publics, centrales solaires, éclairage public. Expert des marchés publics et procédures administratives." />
        <link rel="canonical" href="https://wn-energies.fr/marches-publics" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Solutions solaires pour 
                <span className="block text-blue-600">marchés publics</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Accompagnons les collectivités dans leur transition énergétique avec des solutions photovoltaïques adaptées aux contraintes des marchés publics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Consultation publique</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="#services">Nos références</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-blue-100 rounded-3xl p-8 text-center shadow-xl">
                <MapPin className="h-20 w-20 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-800 mb-2">Territoire durable</h3>
                <p className="text-blue-700">L'énergie au service des citoyens</p>
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
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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
              Pourquoi nous choisir pour vos projets publics ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une expertise reconnue au service des collectivités
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="gradient" className="text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-blue-100">
                    <advantage.icon className="h-8 w-8 text-blue-600" />
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
              Nos solutions pour <span className="text-blue-600">collectivités</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des installations adaptées aux besoins du secteur public
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre processus marché public
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une approche structurée pour garantir la réussite de votre projet
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((process, index) => (
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

      {/* SEO Content Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Le photovoltaïque au service des territoires
            </h2>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                Les collectivités territoriales jouent un rôle clé dans la transition énergétique française. 
                En équipant leurs bâtiments et terrains de solutions photovoltaïques, elles réduisent leurs coûts, 
                sensibilisent les citoyens et génèrent des revenus pour financer d'autres projets publics.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="border-l-4 border-l-blue-500 hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-blue-500" />
                      Économies budgétaires
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Réduction significative des charges énergétiques publiques et génération de revenus 
                      complémentaires via les locations de toitures et terrains.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-500 hover:shadow-glow transition-all duration-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-6 w-6 text-green-500" />
                      Exemplarité territoriale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Affirmation de l'engagement environnemental de la collectivité et sensibilisation 
                      des citoyens aux enjeux de la transition énergétique.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Avantages spécifiques aux marchés publics</h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span><strong>Transparence :</strong> Procédures d'appels d'offres respectant le code des marchés publics</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span><strong>Financement :</strong> Solutions sans apport initial pour les collectivités</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span><strong>Garanties :</strong> Assurances et garanties renforcées pour le secteur public</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                  <span><strong>Maintenance :</strong> Contrats de maintenance longue durée adaptés aux contraintes publiques</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card variant="solar" className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre projet territorial commence ici
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez nos experts des marchés publics pour une consultation personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Consultation publique</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/references">Nos références</Link>
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

export default MarchesPublics