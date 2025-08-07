import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StickyCTA from "@/components/StickyCTA";
import { Helmet } from "react-helmet-async";
import { 
  Battery, 
  Building2, 
  TrendingUp, 
  Shield, 
  Zap, 
  Factory, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Leaf,
  Euro,
  Settings,
  Users
} from "lucide-react";

const BatterieSolairePro = () => {
  const company = "WN Energies";
  const title = `Batterie solaire professionnelle et stockage industriel | ${company}`;
  const description = "Solutions de stockage d'énergie pour entreprises et industries. Batteries haute capacité, gestion de charge et continuité d'activité.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/professionnels/batterie-solaire";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <Header />

      <main className="bg-background text-foreground overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0">
            <div className="w-full h-full bg-gradient-to-br from-primary/10 via-secondary/5 to-background" />
            <div className="absolute inset-0 bg-hero-gradient opacity-10" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid xl:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in xl:max-w-none max-w-4xl">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Battery className="w-4 h-4" />
                  Stockage professionnel
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block">Batterie solaire</span>
                  <span className="text-primary block">professionnelle</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Sécurisez votre approvisionnement énergétique avec nos solutions de stockage 
                  haute performance pour entreprises et industries.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <a href="/contact" className="flex items-center gap-2">
                      Étude technique
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <a href="/simulateur">Simuler mon projet</a>
                  </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Pro</div>
                    <div className="text-sm text-muted-foreground">Solutions</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">Haute</div>
                    <div className="text-sm text-muted-foreground">Capacité</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Disponibilité</div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/90 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Factory className="w-3 h-3 mr-1" />
                        Site industriel
                      </Badge>
                      <Battery className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Stockage industriel</h3>
                      <p className="text-muted-foreground">Système haute capacité</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Capacité installée</span>
                        <span className="font-semibold text-primary">Élevée</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Autonomie</span>
                        <span className="font-semibold">Étendue</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Disponibilité</span>
                        <span className="font-semibold text-primary">Continue</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Mode</span>
                        <span className="font-semibold text-primary">Optimisé</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" size="sm" className="w-full">
                        Voir le détail
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Sécurisez votre
                <span className="text-primary block">approvisionnement énergétique</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Garantissez la continuité de votre activité avec nos solutions de stockage professionnelles. 
                Étude technique gratuite et personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <a href="/contact" className="flex items-center gap-2">
                    <Battery className="w-5 h-5" />
                    Étude technique
                  </a>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href="tel:0771418568">Conseil expert</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA phone="07 71 41 85 68" quoteHref="/contact" />
      <Footer />
    </>
  );
};

export default BatterieSolairePro;