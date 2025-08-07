import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ShieldCheck, Clock, PiggyBank, Sun, Battery, Zap, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-image.jpg";
import familyImg from "@/assets/happy-family.jpg";
import teamImg from "@/assets/team-work.jpg";
import buildingImg from "@/assets/commercial-building.jpg";

const phone = "07 71 41 85 68";
const tel = `tel:${phone.replace(/\s+/g, "")}`;

const faqs = [
  {
    q: "Combien puis-je économiser avec l'autoconsommation ?",
    a: "Selon votre profil, jusqu'à 40–60% de votre facture peut être compensée. Une étude gratuite affine l'estimation en kWh et en € annuels.",
  },
  {
    q: "Quelles garanties ?",
    a: "Garantie produit 25 ans sur les panneaux, performance linéaire, et installateur certifié RGE pour l'éligibilité aux aides.",
  },
  {
    q: "Quel délai pour une installation ?",
    a: "Étude sous 48h, visite technique sous 7 jours ouvrés en moyenne, puis pose sous 2 à 4 semaines selon disponibilités.",
  },
  {
    q: "Ai-je besoin de batteries ?",
    a: "Pas forcément. Les batteries augmentent l'autonomie mais ne sont pas obligatoires. Nous dimensionnons selon vos usages.",
  },
];

const PanneauxSolaires2025 = () => {
  const canonical =
    typeof window !== "undefined"
      ? `${window.location.origin}/particuliers/panneaux-solaires-2025`
      : "/particuliers/panneaux-solaires-2025";

  return (
    <>
      <Helmet>
        <title>Panneaux solaires 2025 • Devis et installation</title>
        <meta
          name="description"
          content="Page 2025: panneaux solaires, autoconsommation, prix et devis gratuit. Installation certifiée RGE, garanties 25 ans."
        />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          })}
        </script>
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-primary/5 to-background" />
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Panneaux solaires 2025: devis, installation RGE
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Passez à l'énergie solaire avec un design moderne, une pose certifiée et des garanties de référence. Estimation gratuite en 48h.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild size="lg" variant="hero">
                    <a href="/contact" aria-label="Demander un devis gratuit">Devis gratuit</a>
                  </Button>
                  <Button asChild size="lg" variant="glass" className="text-foreground">
                    <a href={tel} aria-label={`Appeler le ${phone}`}>Appeler {phone}</a>
                  </Button>
                </div>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> RGE & QualiPV</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><Clock className="h-4 w-4 text-primary" /> Étude 48h</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><PiggyBank className="h-4 w-4 text-primary" /> Économies</div>
                  <div className="flex items-center gap-2 text-muted-foreground"><ShieldCheck className="h-4 w-4 text-primary" /> 25 ans</div>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border bg-card shadow-soft overflow-hidden hover:shadow-medium transition-smooth">
                  <img
                    src={familyImg}
                    alt="Famille heureuse avec panneaux solaires - installation RGE"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-semibold mb-2">Pourquoi choisir le solaire maintenant ?</h2>
            <p className="text-muted-foreground">Des équipements performants, des garanties solides et un accompagnement clé en main.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: "Autoconsommation optimisée",
              desc: "Dimensionnement précis pour maximiser votre taux d'autonomie.",
              Icon: Sun,
            }, {
              title: "Batteries en option",
              desc: "Stockez l'excédent pour le soir et les jours nuageux.",
              Icon: Battery,
            }, {
              title: "Pose certifiée RGE",
              desc: "Installation réalisée par des équipes qualifiées et assurées.",
              Icon: ShieldCheck,
            }, {
              title: "Aides et primes",
              desc: "Nous gérons les démarches et optimisons les subventions.",
              Icon: PiggyBank,
            }, {
              title: "Matériel premium",
              desc: "Panneaux haut rendement et onduleurs intelligents.",
              Icon: Zap,
            }, {
              title: "Garantie jusqu'à 25 ans",
              desc: "Sur les panneaux et la performance linéaire.",
              Icon: CheckCircle2,
            }].map(({ title, desc, Icon }, i) => (
              <Card key={i} variant="solar" className="hover-scale">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{title}</CardTitle>
                  </div>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Showcase / Carousel */}
        <section className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-3xl font-semibold mb-2">Réalisations et intégration</h2>
            <p className="text-muted-foreground">Un rendu esthétique et performant, en toiture ou au sol.</p>
          </div>
          <Carousel>
            <CarouselContent>
              {[heroImg, buildingImg, teamImg, familyImg].map((src, i) => (
                <CarouselItem key={i} className="basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="rounded-xl overflow-hidden border bg-card shadow-soft">
                      <img src={src} alt={`Installation solaire ${i + 1}`} loading="lazy" className="w-full h-64 object-cover" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Tarifs */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-semibold mb-2">Offres et tarifs indicatifs</h2>
            <p className="text-muted-foreground">Exemples d'offres clés en main. Un devis personnalisé affinera le dimensionnement.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              name: "Essentiel",
              power: "3 kWc",
              price: "À partir de 5 990€",
              features: ["Étude et pose RGE", "Onduleur string", "Suivi production"],
            }, {
              name: "Recommandé",
              power: "6 kWc",
              price: "À partir de 9 990€",
              features: ["Micro-onduleurs", "Autoconsommation optimisée", "Garantie étendue"],
              featured: true,
            }, {
              name: "Autonomie",
              power: "6 kWc + batterie",
              price: "Sur devis",
              features: ["Stockage 5–10 kWh", "Pilotage intelligent", "Back-up optionnel"],
            }].map((o, i) => (
              <Card key={i} variant={o.featured ? "gradient" : "default"} className={o.featured ? "shadow-solar-glow" : ""}>
                <CardHeader>
                  <CardTitle className="flex items-baseline justify-between">
                    <span>{o.name}</span>
                    <span className="text-sm text-muted-foreground">{o.power}</span>
                  </CardTitle>
                  <CardDescription className="text-base">{o.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {o.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" /> {f}</li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button asChild variant={o.featured ? "hero" : "secondary"} className="w-full">
                      <a href="/contact" aria-label={`Demander un devis pour l'offre ${o.name}`}>Demander un devis</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl font-semibold mb-2">Questions fréquentes</h2>
            <p className="text-muted-foreground">Tout savoir avant de vous lancer.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CTA finale */}
        <section className="container mx-auto px-4 pb-24">
          <div className="rounded-3xl border bg-card p-8 md:p-12 text-center shadow-soft">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">Prêt à passer au solaire ?</h3>
            <p className="text-muted-foreground mb-6">Recevez une estimation gratuite et personnalisée sous 48h.</p>
            <div className="flex items-center justify-center gap-3 flex-col sm:flex-row">
              <Button asChild size="lg" variant="hero"><a href="/contact">Devis gratuit</a></Button>
              <Button asChild size="lg" variant="glass" className="text-foreground"><a href={tel}>Appeler {phone}</a></Button>
            </div>
          </div>
        </section>
      </main>

      <StickyCTA />
      <Footer />
    </>
  );
};

export default PanneauxSolaires2025;
