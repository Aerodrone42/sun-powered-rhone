import { Link } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

import SolarCallButton from "@/components/SolarCallButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Helmet } from "react-helmet-async"
import { 
  Building, 
  TrendingUp, 
  Shield, 
  Users, 
  Euro,
  BarChart3,
  Leaf,
  Clock,
  CheckCircle,
  ArrowRight,
  Zap,
  Calculator,
  Award
} from "lucide-react"
import commercialBuildingImage from "@/assets/commercial-building.jpg"

const CommercePro = () => {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Réduction immédiate des coûts",
      description: "Jusqu'à 70% d'économies sur vos factures d'électricité dès la mise en service de votre installation solaire commerciale.",
      metric: "Jusqu'à 70%"
    },
    {
      icon: Shield,
      title: "Sécurité d'investissement",
      description: "Tarif de rachat garanti sur 20 ans et performance assurée des panneaux solaires pendant 25 ans minimum.",
      metric: "25 ans"
    },
    {
      icon: Users,
      title: "Image éco-responsable",
      description: "Valorisez votre engagement environnemental auprès de vos clients et partenaires commerciaux.",
      metric: "Impact positif"
    },
    {
      icon: Euro,
      title: "Rentabilité optimisée",
      description: "Retour sur investissement entre 6 et 8 ans selon la configuration de votre commerce.",
      metric: "6-8 ans"
    }
  ]

  const solutions = [
    {
      title: "Commerce de détail",
      description: "Supermarchés, magasins, centres commerciaux",
      features: ["Toiture photovoltaïque", "Ombrières de parking", "Autoconsommation optimisée"],
      ideal: "Surfaces > 500m²",
      power: "50-500 kWc",
      usage: "Jour principalement"
    },
    {
      title: "Restauration & Hôtellerie",
      description: "Restaurants, hôtels, cafés, traiteurs",
      features: ["Panneaux haute performance", "Stockage batterie", "Monitoring temps réel"],
      ideal: "Consommation continue",
      power: "20-200 kWc", 
      usage: "7j/7 - 24h/24"
    },
    {
      title: "Services & Bureaux",
      description: "Bureaux, cabinets, agences, coworking",
      features: ["Installation discrète", "Intégration architecturale", "Gestion intelligente"],
      ideal: "Horaires de bureau",
      power: "10-100 kWc",
      usage: "Lun-Ven 8h-18h"
    }
  ]

  const processSteps = [
    {
      number: "1",
      title: "Audit commercial",
      description: "Analyse de vos consommations, étude de faisabilité technique et financière adaptée à votre activité commerciale.",
      icon: BarChart3
    },
    {
      number: "2", 
      title: "Conception sur-mesure",
      description: "Dimensionnement optimal selon vos besoins et contraintes, intégration architecturale respectueuse.",
      icon: Award
    },
    {
      number: "3",
      title: "Installation certifiée",
      description: "Pose par nos équipes qualifiées RGE, respect des normes commerciales, interruption minimale d'activité.",
      icon: CheckCircle
    },
    {
      number: "4",
      title: "Exploitation & suivi",
      description: "Mise en service, formation de vos équipes, maintenance préventive et monitoring des performances.",
      icon: Zap
    }
  ]

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Panneaux Solaires Commerce - Installation Photovoltaïque Professionnelle</title>
        <meta name="description" content="Installation de panneaux solaires pour commerces, magasins, restaurants. Réduisez vos coûts énergétiques jusqu'à 70%. Devis gratuit et installation certifiée RGE." />
        <link rel="canonical" href="/professionnels/commerce" />
        <meta property="og:title" content="Panneaux Solaires Commerce - Installation Photovoltaïque Professionnelle" />
        <meta property="og:description" content="Installation de panneaux solaires pour commerces, magasins, restaurants. Réduisez vos coûts énergétiques jusqu'à 70%. Devis gratuit et installation certifiée RGE." />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-fade-in">
              <Badge variant="secondary" className="mb-4">
                Solutions Commerciales
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Panneaux solaires pour 
                <span className="block text-primary">votre commerce</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Réduisez drastiquement vos coûts énergétiques avec une installation photovoltaïque 
                adaptée à votre activité commerciale. Rentabilité garantie et image éco-responsable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="hero" size="xl" className="hover-scale">
                  <Link to="/contact">Étude gratuite</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/simulateur">Simuler mes économies</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
               <img 
                 src={commercialBuildingImage} 
                 alt="Installation panneaux solaires sur commerce avec ombrières parking"
                 className="rounded-lg shadow-strong w-full solar-hover"
               />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white p-4 rounded-lg shadow-strong">
                <div className="text-2xl font-bold">70%</div>
                <div className="text-sm">d'économies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              L'énergie solaire : un atout majeur pour votre commerce
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 not-prose">
              <div>
                <h3 className="text-xl font-semibold mb-4">Pourquoi choisir le solaire pour votre commerce ?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Les commerces consomment de l'électricité principalement en journée, période où la production 
                  solaire est maximale. Cette synchronisation naturelle permet d'optimiser l'autoconsommation 
                  et de maximiser les économies réalisées.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Une installation photovoltaïque sur votre commerce vous permet également de valoriser 
                  votre engagement environnemental auprès de vos clients, un critère de plus en plus 
                  important dans les décisions d'achat.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Solutions techniques adaptées</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Nos installations respectent les contraintes architecturales et esthétiques de votre 
                  commerce. Nous proposons des solutions discrètes et élégantes : panneaux intégrés, 
                  ombrières de parking photovoltaïques, ou installations sur toitures plates.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Chaque projet bénéficie d'une étude personnalisée prenant en compte vos horaires 
                  d'ouverture, votre profil de consommation et vos objectifs de rentabilité.
                </p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-center">
                <Leaf className="inline mr-2 h-5 w-5 text-primary" />
                Impact environnemental positif
              </h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                Une installation de 100 kWc évite l'émission de 40 tonnes de CO² par an, 
                soit l'équivalent de 200 000 km parcourus en voiture. Un argument de poids 
                pour votre communication environnementale.
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
              Les avantages du solaire commercial
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des bénéfices concrets pour votre activité et votre rentabilité
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover-scale animate-fade-in hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 rounded-full bg-secondary/10">
                    <advantage.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{advantage.metric}</div>
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

      {/* Solutions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solutions par <span className="text-primary">secteur commercial</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Installations sur-mesure selon votre activité
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <Card key={index} variant="gradient" className="hover-scale hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Caractéristiques :</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                    <div>
                      <div className="text-sm text-muted-foreground">Idéal pour</div>
                      <div className="font-medium">{solution.ideal}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Puissance</div>
                      <div className="font-medium">{solution.power}</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-muted-foreground">Usage type</div>
                    <div className="font-medium">{solution.usage}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Notre processus d'installation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un accompagnement professionnel de A à Z
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center hover-scale hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="mx-auto mb-4 p-2 rounded-full bg-secondary/10 w-fit">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Card variant="solar" className="p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à réduire vos coûts énergétiques ?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Obtenez une étude personnalisée gratuite et découvrez le potentiel solaire de votre commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="hero" size="xl">
                  <Link to="/contact">Demander mon étude</Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link to="/simulateur">Simulateur en ligne</Link>
                </Button>
              </div>
              
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  Étude en 48h
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  Certifié RGE
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Garantie 25 ans
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <SolarCallButton />
      <Footer />
    </div>
  )
}

export default CommercePro