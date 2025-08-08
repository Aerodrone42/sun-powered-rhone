import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StickyCTA from "@/components/StickyCTA";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import { Sun, Zap, Shield, TrendingUp, Home, Users, Leaf, CheckCircle, Star, Award, Activity } from "lucide-react";

const pergolaImg = "/lovable-uploads/37aeed72-e13c-4dd8-8b9d-f27d07561353.png";
const roofImg = "/lovable-uploads/5c91c045-c4a2-4d82-9a66-4912676183ca.png";
const auventImg = "/lovable-uploads/f4a3939c-b11e-44f3-99fd-e108ad2001cf.png";
const carportImg = "/lovable-uploads/f6f02fb8-79ac-461b-bfc2-257aea388457.png";

const PanneauxSolaires = () => {
  const company = "WN Energies";
  const title = `Panneaux solaires | ${company}`;
  const description = "Installation photovoltaïque clé en main: étude, pose RGE, garanties jusqu'à 25 ans, aides et simulation. Devis gratuit sous 24h.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/particuliers/panneaux-solaires";

  const faqs = [
    {
      q: "Quelle économie puis-je espérer avec des panneaux solaires ?",
      a: "En moyenne, nos clients réduisent leur facture d'électricité de 50 à 70%. Pour une maison consommant 4000 kWh/an, cela représente entre 600€ et 1000€ d'économies annuelles selon votre profil de consommation.",
    },
    {
      q: "Combien de temps dure l'installation ?",
      a: "L'installation physique prend généralement 1 à 2 jours pour une maison individuelle. Le processus complet (étude, démarches administratives, pose, raccordement) s'étale sur 4 à 8 semaines.",
    },
    {
      q: "Quelles sont les garanties offertes ?",
      a: "Nos panneaux bénéficient de 25 ans de garantie de performance (minimum 80% de rendement), 12 ans de garantie produit. Les onduleurs sont garantis 10 à 20 ans selon les modèles. Notre installation est garantie 10 ans.",
    },
    {
      q: "Mon toit est-il adapté aux panneaux solaires ?",
      a: "La plupart des toitures sont compatibles. Nous étudions l'orientation, l'inclinaison, les ombrages et l'état de la charpente. Une exposition sud, sud-est ou sud-ouest avec une pente de 15° à 60° est idéale.",
    },
    {
      q: "Que se passe-t-il quand il n'y a pas de soleil ?",
      a: "Vos panneaux produisent même par temps nuageux (30 à 50% du rendement). Quand la production est insuffisante, vous consommez l'électricité du réseau normalement. C'est pourquoi nous dimensionnons selon votre profil annuel.",
    },
    {
      q: "Puis-je stocker l'électricité produite ?",
      a: "Oui, avec une batterie domestique (option). Sans batterie, le surplus est revendu à EDF OA au tarif réglementé (13 centimes/kWh en 2025). Beaucoup de nos clients choisissent d'abord l'autoconsommation simple.",
    },
    {
      q: "Quelles aides financières puis-je obtenir ?",
      a: "Prime à l'autoconsommation (jusqu'à 500€/kWc), TVA réduite à 10%, tarif d'achat garanti 20 ans pour le surplus. Certaines régions proposent des aides complémentaires. Nous nous occupons de tous les dossiers.",
    },
    {
      q: "Les panneaux nécessitent-ils beaucoup d'entretien ?",
      a: "Très peu ! Un nettoyage annuel (pluie souvent suffisante) et une vérification visuelle. Nous proposons un contrat de maintenance optionnel avec suivi de performance et nettoyage professionnel.",
    },
    {
      q: "Que devient l'installation en cas de déménagement ?",
      a: "Les panneaux solaires valorisent votre bien immobilier (+4% en moyenne selon les notaires). L'installation reste liée au logement et constitue un argument de vente fort, surtout avec les nouvelles réglementations énergétiques.",
    },
    {
      q: "Comment suivre la production de mes panneaux ?",
      a: "Vous recevez une application mobile/web pour suivre la production en temps réel, les économies réalisées, et détecter d'éventuels dysfonctionnements. Nous surveillons aussi à distance vos installations.",
    },
    {
      q: "Quelle puissance installer pour ma maison ?",
      a: "Cela dépend de votre consommation annuelle et de vos objectifs. Pour une famille de 4 personnes (4000 kWh/an), nous recommandons généralement entre 3 et 6 kWc. Notre étude personnalisée détermine la puissance optimale.",
    },
    {
      q: "Les panneaux résistent-ils aux intempéries ?",
      a: "Absolument ! Nos panneaux sont certifiés pour résister à la grêle (jusqu'à 25mm), aux vents violents (180 km/h), et aux variations de température (-40°C à +85°C). Ils sont conçus pour durer plus de 30 ans.",
    }
  ];

  const advantages = [
    { icon: TrendingUp, title: "Économies immédiates", desc: "Réduction de votre facture d'électricité dès le premier mois" },
    { icon: Shield, title: "Garanties premium", desc: "Jusqu'à 25 ans de garantie sur les panneaux solaires" },
    { icon: Zap, title: "Performance optimale", desc: "Technologie de pointe pour un rendement maximal" },
    { icon: Home, title: "Installation clé en main", desc: "Prise en charge complète de A à Z par nos experts RGE" },
    { icon: Leaf, title: "Énergie verte", desc: "Production d'électricité 100% propre et renouvelable" },
    { icon: Activity, title: "Suivi en temps réel", desc: "Monitoring intelligent via application mobile" }
  ];

  const steps = [
    { number: "01", title: "Étude personnalisée", desc: "Analyse de votre toiture et estimation de production" },
    { number: "02", title: "Devis sur mesure", desc: "Proposition technique et financière détaillée" },
    { number: "03", title: "Installation RGE", desc: "Pose professionnelle par nos équipes certifiées" },
    { number: "04", title: "Mise en service", desc: "Activation et suivi de votre installation" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main className="bg-background text-foreground overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0">
             <img
               src={pergolaImg}
               alt="Pergola solaire moderne"
               className="w-full h-full object-cover solar-hover"
             />
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/70 to-transparent" />
            <div className="absolute inset-0 bg-hero-gradient opacity-20" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-medium text-primary">
                  <Sun className="w-4 h-4" />
                  Révolution énergétique 2025
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Panneaux solaires
                  <span className="text-primary block">nouvelle génération</span>
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  Transformez votre toiture en centrale électrique avec nos solutions photovoltaïques ultra-performantes. Installation RGE garantie 25 ans.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button asChild size="xl" variant="hero" className="group">
                    <a href="/contact" className="flex items-center gap-2">
                      Devis gratuit
                      <Zap className="w-5 h-5 group-hover:animate-pulse" />
                    </a>
                  </Button>
                  <Button asChild size="xl" variant="outline" className="backdrop-blur-sm">
                    <a href="/simulateur">Calculer mes économies</a>
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">25 ans</div>
                    <div className="text-sm text-muted-foreground">Garantie</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">-70%</div>
                    <div className="text-sm text-muted-foreground">Facture</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">48h</div>
                    <div className="text-sm text-muted-foreground">Étude</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold text-primary">RGE</div>
                    <div className="text-sm text-muted-foreground">Certifié</div>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <div className="relative animate-fade-in-up">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl animate-pulse" />
                <Card className="relative bg-background/80 backdrop-blur-sm border-border/50 overflow-hidden shadow-glow hover:shadow-strong transition-all duration-500 hover:scale-105">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Star className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                      <Sun className="w-8 h-8 text-primary animate-pulse" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Installation 6kWc</h3>
                      <p className="text-muted-foreground">Solution complète pour maison familiale</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Production annuelle</span>
                        <span className="font-semibold">7 800 kWh</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Économies/an</span>
                        <span className="font-semibold text-primary">1 450€</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">ROI</span>
                        <span className="font-semibold text-primary">8 ans</span>
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

        {/* Advantages Section */}
        <section className="py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Pourquoi choisir nos
                <span className="text-primary block">panneaux solaires ?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Une technologie de pointe pour des performances exceptionnelles et une rentabilité optimale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="group bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-8 text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                      <div className="relative w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-500">
                        <advantage.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">{advantage.title}</h3>
                    <p className="text-muted-foreground">{advantage.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Nos réalisations</h2>
              <p className="text-xl text-muted-foreground">Découvrez nos installations premium partout en France</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { img: roofImg, title: "Toiture résidentielle", subtitle: "6kWc - Maison familiale" },
                { img: pergolaImg, title: "Pergola solaire", subtitle: "4kWc - Terrasse moderne" },
                { img: auventImg, title: "Auvent design", subtitle: "3kWc - Protection optimale" },
                { img: carportImg, title: "Carport solaire", subtitle: "5kWc - Double usage" }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative overflow-hidden rounded-2xl bg-muted/20 border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-glow">
                    <img 
                      src={item.img} 
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 solar-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <h3 className="font-semibold text-background">{item.title}</h3>
                      <p className="text-sm text-background/80">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Notre processus en 4 étapes</h2>
              <p className="text-xl text-muted-foreground">Un accompagnement complet pour votre projet solaire</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="relative bg-background border border-border rounded-2xl p-8 text-center hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="pt-4 space-y-4">
                      <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                        {step.number}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.desc}</p>
                    </div>

                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-border" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Questions fréquentes</h2>
              <p className="text-xl text-muted-foreground">Tout ce que vous devez savoir sur les panneaux solaires</p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background border border-border/50 rounded-2xl px-6 hover:shadow-soft transition-all duration-300">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-fade-in space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Prêt à passer au
                <span className="text-primary block">solaire ?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Rejoignez les milliers de foyers qui ont choisi l'indépendance énergétique. 
                Votre devis personnalisé en 48h chrono.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="xl" variant="hero" className="group">
                  <a href="/contact" className="flex items-center gap-2">
                    <Sun className="w-5 h-5 group-hover:animate-spin" />
                    Obtenir mon devis gratuit
                  </a>
                </Button>
                <Button asChild size="xl" variant="outline">
                  <a href="tel:0771418568">Appeler maintenant</a>
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

export default PanneauxSolaires;
