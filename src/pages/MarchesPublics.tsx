import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PublicPortfolio from "@/components/PublicPortfolio";
import SolarCallButton from "@/components/SolarCallButton";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { MapPin, Building2, Sun, Landmark, TrendingUp, Shield, Users, FileText, Globe, Zap } from "lucide-react";
const MarchesPublics = () => {
  const services = [{
    title: "Bâtiments publics",
    description: "Équipement solaire des mairies, écoles, gymnases",
    icon: Building2,
    href: "/professionnels/batiments-publics",
    benefits: ["Réduction des coûts énergétiques publics", "Exemplarité environnementale", "Sensibilisation citoyenne", "Valorisation du patrimoine public"]
  }, {
    title: "Centrales solaires",
    description: "Projets de grande envergure sur terrains communaux",
    icon: Sun,
    href: "/professionnels/centrales-solaires",
    benefits: ["Revenus locatifs pour la collectivité", "Production d'énergie verte locale", "Valorisation de terrains inutilisés", "Indépendance énergétique territoriale"]
  }, {
    title: "Éclairage public solaire",
    description: "Solutions autonomes pour l'éclairage urbain",
    icon: Zap,
    href: "/professionnels/eclairage-public",
    benefits: ["Réduction des coûts d'éclairage", "Installation sans tranchées", "Fonctionnement autonome", "Technologie LED efficace"]
  }, {
    title: "Ombrières publiques",
    description: "Parking et espaces publics avec production solaire",
    icon: Landmark,
    href: "/professionnels/ombrieres-publiques",
    benefits: ["Double fonctionnalité", "Amélioration du confort usagers", "Revenus pour la collectivité", "Image moderne et durable"]
  }];
  const advantages = [{
    title: "Expertise publique",
    description: "Connaissance des procédures et contraintes des marchés publics",
    icon: Shield
  }, {
    title: "Accompagnement administratif",
    description: "Support complet dans les démarches et réglementations",
    icon: FileText
  }, {
    title: "Solutions clé en main",
    description: "De l'étude à l'exploitation, nous gérons l'intégralité du projet",
    icon: Users
  }];
  const processSteps = [{
    step: "1",
    title: "Consultation publique",
    description: "Réponse aux appels d'offres et marchés publics"
  }, {
    step: "2",
    title: "Étude de faisabilité",
    description: "Analyse technique et financière du projet"
  }, {
    step: "3",
    title: "Conception",
    description: "Plans techniques et dossiers réglementaires"
  }, {
    step: "4",
    title: "Réalisation",
    description: "Installation et mise en service"
  }, {
    step: "5",
    title: "Exploitation",
    description: "Maintenance et suivi de performance"
  }];
  const stats = [{
    number: "50+",
    label: "Collectivités partenaires"
  }, {
    number: "15MW",
    label: "Puissance publique installée"
  }, {
    number: "8",
    label: "Ans d'expérience publique"
  }, {
    number: "100%",
    label: "Projets publics réussis"
  }];
  return <div className="min-h-screen">
      <Helmet>
        <title>Solutions Solaires Marchés Publics | WN Energies</title>
        <meta name="description" content="Spécialiste du photovoltaïque pour collectivités : bâtiments publics, centrales solaires, éclairage public. Expert des marchés publics et procédures administratives." />
        <link rel="canonical" href="https://wn-energies.fr/marches-publics" />
      </Helmet>

      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/lovable-uploads/18c78bba-58a6-41a6-a39e-1aeed08d8e65.png" alt="Ombrière solaire urbaine moderne le long d'une rivière" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-yellow-500/20 rounded-full blur-xl animate-pulse delay-500" />

        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <Landmark className="h-4 w-4 text-white" />
                <span className="text-white text-sm font-medium">Expertise Marchés Publics</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                Solutions solaires pour 
                <span className="block bg-gradient-to-r from-blue-300 to-green-300 bg-clip-text text-transparent">
                  marchés publics
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
                Accompagnons les collectivités dans leur transition énergétique avec des solutions photovoltaïques adaptées aux contraintes des marchés publics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild variant="hero" size="xl" className="group">
                  <Link to="/contact" className="flex items-center gap-2">
                    <FileText className="h-5 w-5 transition-transform group-hover:scale-110" />
                    Consultation publique
                  </Link>
                </Button>
                <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                  
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-sm text-blue-200">Collectivités</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">15MW</div>
                  <div className="text-sm text-blue-200">Installés</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-200">Réussis</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in delay-300">
              {/* Modern Glass Card */}
              <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-20 h-20 bg-blue-500/20 backdrop-blur-sm rounded-full mb-6 mx-auto border border-white/30">
                    <Building2 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    Territoire durable
                  </h3>
                  <p className="text-blue-100 text-center mb-6">
                    L'énergie solaire au service des citoyens et des collectivités
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                      <span className="text-sm">Économies budgétaires publiques</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0" />
                      <span className="text-sm">Exemplarité environnementale</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                      <span className="text-sm">Valorisation du patrimoine public</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PublicPortfolio />

      {/* Stats Section */}
      

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
            {advantages.map((advantage, index) => <Card key={index} variant="gradient" className="text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
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
              </Card>)}
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
            {services.map((service, index) => <ServiceCard key={index} {...service} variant="solar" />)}
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
            {processSteps.map((process, index) => <Card key={index} className="text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
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
              </Card>)}
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
              
              
              <ul className="space-y-3 text-muted-foreground mb-6">
                
                
                
                
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

      <SolarCallButton />
      <Footer />
    </div>;
};
export default MarchesPublics;