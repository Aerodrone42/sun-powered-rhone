import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceCard from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Factory, Wheat, Building2, TrendingUp, Shield, Users } from "lucide-react"
import commercialBuildingImage from "@/assets/commercial-building.jpg"

const Professionnels = () => {
  const services = [
    {
      title: "Commerce",
      description: "Réduisez vos coûts énergétiques et valorisez votre image écologique",
      icon: Building,
      href: "/professionnels/commerce",
      benefits: [
        "Réduction significative des factures électriques",
        "Image de marque éco-responsable",
        "Valorisation immobilière du local commercial",
        "Possibilité de vente du surplus d'énergie"
      ]
    },
    {
      title: "Entreprise", 
      description: "Installations de grande envergure pour optimiser vos coûts de production",
      icon: Factory,
      href: "/professionnels/entreprise",
      benefits: [
        "ROI attractif pour les grandes installations",
        "Réduction des coûts de production",
        "Engagement RSE renforcé",
        "Solutions de financement adaptées"
      ]
    },
    {
      title: "Agriculteur",
      description: "Combinez production agricole et production d'énergie solaire",
      icon: Wheat,
      href: "/professionnels/agriculteur",
      benefits: [
        "Double source de revenus",
        "Protection des cultures",
        "Optimisation de l'utilisation des terres",
        "Soutien aux pratiques durables"
      ]
    },
    {
      title: "Collectivité",
      description: "Accompagnement des collectivités dans leur transition énergétique",
      icon: Building2,
      href: "/professionnels/collectivite",
      benefits: [
        "Réduction des dépenses publiques",
        "Exemple d'éco-responsabilité citoyenne",
        "Projets participatifs possibles",
        "Expertise réglementaire et administrative"
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
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Solutions solaires pour 
                <span className="block text-secondary">professionnels</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Optimisez vos coûts énergétiques avec des installations solaires industrielles. 
                Solutions sur-mesure pour entreprises, commerces, agriculteurs et collectivités.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Étude de faisabilité</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="#services">Nos solutions</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={commercialBuildingImage} 
                alt="Installation solaire sur bâtiment commercial"
                className="rounded-lg shadow-strong w-full"
              />
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
              <Card key={index} variant="gradient" className="text-center">
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
              <Card key={index} className="text-center">
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
              
              <Button asChild variant="accent" size="lg">
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