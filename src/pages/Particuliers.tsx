import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServiceCard from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Home, Zap, Battery, Car, CheckCircle } from "lucide-react"
import happyFamilyImage from "@/assets/happy-family.jpg"

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
      description: "Garantie fabricant 25 ans sur les panneaux et garantie pose 10 ans"
    },
    {
      title: "Suivi et maintenance",
      description: "Monitoring de votre installation et maintenance préventive incluse"
    }
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
                <span className="block text-primary">particuliers</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Produisez votre propre électricité verte et réduisez durablement vos factures énergétiques. 
                Nos experts vous accompagnent dans votre projet solaire de A à Z.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Devis gratuit</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="#services">Découvrir nos services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={happyFamilyImage} 
                alt="Famille satisfaite devant leur maison équipée de panneaux solaires"
                className="rounded-lg shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir le solaire ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez tous les avantages d'une installation solaire pour votre domicile
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Card key={index} variant="gradient" className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
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
      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos services <span className="text-secondary">particuliers</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solutions complètes pour répondre à tous vos besoins énergétiques domestiques
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
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre processus en 4 étapes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement complet pour votre projet solaire
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Étude personnalisée",
                description: "Analyse de votre consommation et étude de faisabilité gratuite"
              },
              {
                step: "2", 
                title: "Devis détaillé",
                description: "Proposition technique et financière adaptée à vos besoins"
              },
              {
                step: "3",
                title: "Installation",
                description: "Pose professionnelle par nos équipes certifiées"
              },
              {
                step: "4",
                title: "Mise en service",
                description: "Raccordement, démarches administratives et formation"
              }
            ].map((process, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-white text-xl font-bold">
                    {process.step}
                  </div>
                  <CardTitle className="text-xl">{process.title}</CardTitle>
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card variant="solar" className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Votre projet solaire commence ici
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Obtenez votre étude personnalisée gratuite et découvrez le potentiel solaire de votre domicile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Demander un devis</Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/zone-intervention">Vérifier ma zone</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Particuliers