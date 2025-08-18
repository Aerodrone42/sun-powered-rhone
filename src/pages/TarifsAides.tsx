import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Euro, TrendingUp, Users, Zap, CheckCircle, Factory, Sprout } from "lucide-react";
import SunParticles from "@/components/SunParticles";
import heroImage from "@/assets/tarifs-aides-hero.jpg";

const TarifsAides = () => {
  return (
    <>
      <Helmet>
        <title>Tarifs EDF OA & Aides Photovoltaïque 2025 | WNE</title>
        <meta name="description" content="Découvrez les tarifs de rachat EDF OA 2025, les aides et subventions disponibles pour l'installation de panneaux solaires. Guide complet pour particuliers, professionnels et agriculteurs." />
        <meta name="keywords" content="tarifs EDF OA, aides photovoltaïque, prime autoconsommation, agrivoltaïsme, rachat électricité, subventions solaires" />
      </Helmet>
      <Header />
      
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Panneaux solaires et tarifs EDF" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60 backdrop-blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/30"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="backdrop-blur-sm bg-background/20 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight animate-scale-in">
                Tarifs obligations d'achats 
                <span className="text-primary block mt-2 drop-shadow-lg solar-hover">vente électricité et subventions de l'état</span>
              </h1>
              <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in [animation-delay:200ms]">
                Découvrez les tarifs de rachat garantis pendant 20 ans et les aides de l'État pour votre installation solaire
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:400ms]">
                <Badge variant="secondary" className="text-lg px-6 py-3 bg-primary/20 text-primary border-primary/30 hover-scale transition-all duration-300 hover:shadow-glow">
                  <Euro className="w-5 h-5 mr-2" />
                  Tarifs 2025 Actualisés
                </Badge>
                <Badge variant="secondary" className="text-lg px-6 py-3 bg-accent/20 text-accent-foreground border-accent/30 hover-scale transition-all duration-300 hover:shadow-glow">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Aides de l'État
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl hover-scale transition-all duration-500 hover:shadow-2xl animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  Introduction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Lorsque vous installez des panneaux solaires photovoltaïques, vous avez la possibilité de revendre tout ou partie de votre électricité à EDF Obligation d'Achat (EDF OA). Ce contrat vous garantit un tarif de rachat fixé par l'État et valable pendant 20 ans, ce qui sécurise votre investissement.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  En parallèle, l'État propose des aides et subventions pour encourager l'autoconsommation solaire, que vous soyez particulier, commerce, industrie ou exploitant agricole (agrivoltaïsme).
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tarifs de rachat */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in solar-hover">
              Tarifs de rachat EDF OA – 3ᵉ trimestre 2025
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vente du surplus */}
              <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl hover-scale transition-all duration-500 hover:shadow-2xl animate-fade-in [animation-delay:200ms]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-primary" />
                    Vente du surplus (autoconsommation + vente)
                  </CardTitle>
                  <CardDescription>
                    Consommez votre production et revendez le surplus
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 bg-background/50 hover-scale transition-all duration-300 hover:shadow-lg hover:bg-background/70">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold">≤ 9 kWc</span>
                        <Badge variant="secondary" className="solar-hover">0 €/kWh</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Prime : 80 €/kWc</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-background/50 hover-scale transition-all duration-300 hover:shadow-lg hover:bg-background/70">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold">9 à 36 kWc</span>
                        <Badge variant="secondary" className="solar-hover">0,0731 €/kWh</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Prime : 180 €/kWc</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-background/50 hover-scale transition-all duration-300 hover:shadow-lg hover:bg-background/70">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold">36 à 100 kWc</span>
                        <Badge variant="secondary" className="solar-hover">0,0731 €/kWh</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Prime : 90 €/kWc</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-background/50 hover-scale transition-all duration-300 hover:shadow-lg hover:bg-background/70">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold">100 à 500 kWc</span>
                        <Badge variant="secondary" className="solar-hover">0,0886 €/kWh</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">Non éligible à la prime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vente en totalité */}
              <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl hover-scale transition-all duration-500 hover:shadow-2xl animate-fade-in [animation-delay:400ms]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Euro className="h-6 w-6 text-primary" />
                    Vente en totalité
                  </CardTitle>
                  <CardDescription>
                    Revendez toute votre production électrique
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4 bg-background/50 opacity-50">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold">≤ 9 kWc</span>
                        <Badge variant="outline">Non éligible</Badge>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-background/50">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold">9 à 36 kWc</span>
                        <Badge variant="secondary">0,1243 €/kWh</Badge>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-background/50">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold">36 à 100 kWc</span>
                        <Badge variant="secondary">0,1081 €/kWh</Badge>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-background/50">
                      <div className="flex justify-between items-start">
                        <span className="font-semibold">100 à 500 kWc</span>
                        <Badge variant="secondary">0,0886 €/kWh</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* L'agrivoltaïsme */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Sprout className="h-6 w-6 text-primary" />
                  L'agrivoltaïsme
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  L'agrivoltaïsme permet d'installer des panneaux solaires sur des terrains agricoles afin de produire de l'électricité tout en maintenant une activité agricole (culture, élevage).
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Euro className="h-4 w-4 text-primary" />
                      Coût d'installation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Un projet de 100 kWc coûte en moyenne <strong>80 000 € HT</strong> (environ 800 €/kWc).
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Taux d'autoconsommation
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Le taux d'autoconsommation est généralement autour de <strong>80 %</strong>, le reste étant revendu à EDF.
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-sm">
                    <strong>Important :</strong> Les tarifs de rachat appliqués sont identiques à ceux du photovoltaïque classique, selon la puissance de l'installation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Pour qui ? */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Pour qui ?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-primary" />
                    Particuliers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Possibilité d'autoconsommer l'énergie produite et de revendre le surplus, avec une prime à l'investissement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Factory className="h-6 w-6 text-primary" />
                    Commerces & industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Solutions adaptées aux toitures plus grandes avec rentabilité intéressante sur le long terme.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Sprout className="h-6 w-6 text-primary" />
                    Exploitants agricoles
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Double usage du sol avec production agricole + électricité (agrivoltaïsme).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Aides et subventions */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-lg bg-card/80 border-border/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  Aides et subventions de l'État
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  En plus des tarifs de rachat, plusieurs aides existent :
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 border rounded-lg bg-background/50">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Prime à l'autoconsommation</h4>
                      <p className="text-sm text-muted-foreground">Versée en une fois ou étalée sur 5 ans (jusqu'à 80 €/kWc)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border rounded-lg bg-background/50">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">TVA réduite à 10 %</h4>
                      <p className="text-sm text-muted-foreground">Pour les installations ≤ 3 kWc</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border rounded-lg bg-background/50">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Éco-PTZ</h4>
                      <p className="text-sm text-muted-foreground">Éco-prêt à taux zéro possible pour financer une partie de l'installation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 border rounded-lg bg-background/50">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Exonération d'impôt</h4>
                      <p className="text-sm text-muted-foreground">Exonération partielle d&apos;impôt sur les revenus issus de la revente pour les petites installations (&lt; 3 kWc)</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="backdrop-blur-lg bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <CheckCircle className="h-6 w-6" />
                  Conclusion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Investir dans le solaire photovoltaïque permet de réduire sa facture d'électricité, de bénéficier d'un revenu complémentaire garanti pendant 20 ans grâce au contrat EDF OA, et de profiter des aides de l'État.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  <strong>Que vous soyez particulier, professionnel ou agriculteur, l&apos;énergie solaire est une solution rentable et durable.</strong>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TarifsAides;
