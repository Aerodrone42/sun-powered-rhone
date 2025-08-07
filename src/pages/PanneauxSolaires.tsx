import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";

const pergolaImg = "/lovable-uploads/37aeed72-e13c-4dd8-8b9d-f27d07561353.png";
const roofImg = "/lovable-uploads/5c91c045-c4a2-4d82-9a66-4912676183ca.png";
const auventImg = "/lovable-uploads/f4a3939c-b11e-44f3-99fd-e108ad2001cf.png";
const carportImg = "/lovable-uploads/f6f02fb8-79ac-461b-bfc2-257aea388457.png";

const PanneauxSolaires = () => {
  const company = "WN Energies";
  const title = `Panneaux solaires | ${company}`;
  const description = "Installation photovoltaïque clé en main: étude, pose RGE, garanties jusqu’à 25 ans, aides et simulation. Devis gratuit sous 24h.";
  const canonical = (typeof window !== "undefined" ? window.location.origin : "") + "/particuliers/panneaux-solaires";

  const faqs = [
    {
      q: "Quels sont les avantages des panneaux solaires ?",
      a: "Réduction de la facture, valorisation du bien, indépendance énergétique et impact environnemental réduit.",
    },
    {
      q: "Combien produit une installation ?",
      a: "Selon l’orientation et la puissance, comptez 900 à 1 300 kWh par kWc par an en France métropolitaine.",
    },
    {
      q: "Quelles garanties ?",
      a: "Jusqu’à 25 ans sur la performance des panneaux et 10 ans sur l’onduleur selon les fabricants.",
    },
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

      <main className="bg-background text-foreground">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <article>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                  Panneaux solaires pour votre maison
                </h1>
                <p className="text-muted-foreground text-lg md:text-xl mb-8">
                  Étude personnalisée, installation certifiée et suivi complet pour une autoconsommation performante et durable.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-primary text-primary-foreground">
                    Demander un devis gratuit
                  </Button>
                  <Button variant="outline" size="lg">
                    Vérifier mon éligibilité
                  </Button>
                </div>
              </article>

              <div className="relative">
                <img
                  src={pergolaImg}
                  alt="Pergola solaire moderne pour terrasse - panneaux solaires intégrés"
                  className="w-full h-72 md:h-96 object-cover rounded-xl border border-border"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <article className="lg:col-span-2 space-y-4 text-muted-foreground">
                <p>
                  Chez WN Energies, nous concevons et installons des systèmes photovoltaïques fiables et esthétiques pour les maisons individuelles. Nos ingénieurs dimensionnent votre installation en fonction de vos usages réels, de l’orientation du toit et des contraintes locales afin de maximiser l’autoconsommation et le retour sur investissement.
                </p>
                <p>
                  Nos équipes RGE prennent en charge l’ensemble du projet: étude technique, démarches administratives, pose, mise en service et suivi. Vous disposez d’un accès de monitoring pour suivre la production en temps réel et optimiser vos consommations.
                </p>
                <p>
                  Résultat: une facture réduite, un bien valorisé et une énergie propre produite chez vous. La majorité de nos chantiers sont réalisés en 4 à 8 semaines après validation du devis.
                </p>
              </article>
              <aside className="space-y-3">
                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl">Chiffres clés</CardTitle>
                    <CardDescription className="text-muted-foreground">Des repères concrets pour votre décision</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Production annuelle moyenne: 900 à 1 300 kWh par kWc</p>
                    <p>• Taux d’autoconsommation visé: 40 à 70% selon profil</p>
                    <p>• Durée de vie des panneaux: > 30 ans</p>
                    <p>• Délais moyens: étude sous 48h, pose en 1 jour pour 3 kWc</p>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Nos réalisations en images</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <figure className="relative group overflow-hidden rounded-xl border border-border">
                <img src={roofImg} alt="Toiture photovoltaïque résidentielle - panneaux solaires sur maison" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur px-3 py-2 text-sm">Toiture photovoltaïque</figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl border border-border">
                <img src={pergolaImg} alt="Pergola solaire design - ombrage et production d’énergie" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur px-3 py-2 text-sm">Pergola solaire</figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl border border-border">
                <img src={auventImg} alt="Auvent solaire pour terrasse - modules semi-transparents" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur px-3 py-2 text-sm">Auvent solaire</figcaption>
              </figure>
              <figure className="relative group overflow-hidden rounded-xl border border-border">
                <img src={carportImg} alt="Carport solaire avec production d’électricité pour véhicule" className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-background/80 backdrop-blur px-3 py-2 text-sm">Carport solaire</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Pourquoi choisir nos panneaux solaires ?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Économies durables", d: "Baissez votre facture d’électricité dès le premier jour." },
                { t: "Installation clé en main", d: "Prise en charge complète: étude, pose, démarches." },
                { t: "Qualité et garanties", d: "Matériel premium et garanties jusqu’à 25 ans." },
                { t: "Suivi de production", d: "Application de monitoring et maintenance simplifiée." },
                { t: "Autoconsommation optimisée", d: "Dimensionnement précis selon vos usages." },
                { t: "Revente du surplus", d: "Contrat d’obligation d’achat au meilleur tarif." },
              ].map((item) => (
                <Card key={item.t} className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.t}</CardTitle>
                    <CardDescription className="text-muted-foreground">{item.d}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs et aides */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <article className="space-y-4 text-muted-foreground">
                <h2 className="text-2xl md:text-3xl font-semibold">Tarifs et aides disponibles</h2>
                <p>
                  Le coût dépend de la puissance installée, de la complexité du chantier et du type de matériel. À titre indicatif, une installation résidentielle de 3 à 6 kWc se situe généralement entre 6 000 et 12 000 € TTC posé, avant aides.
                </p>
                <p>
                  En France, vous pouvez bénéficier de la TVA réduite, de la prime à l’autoconsommation et d’un contrat d’achat pour la revente du surplus. Nous montons vos dossiers et vous accompagnons jusqu’à l’obtention des aides.
                </p>
              </article>
              <aside>
                <Card className="bg-card text-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-xl">Ce que comprend notre offre</CardTitle>
                    <CardDescription className="text-muted-foreground">Tout est inclus, sans surprise</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p>• Étude technique et dimensionnement</p>
                    <p>• Matériel premium (panneaux, onduleur/micro-onduleurs, câblage)</p>
                    <p>• Pose RGE et travaux de sécurité</p>
                    <p>• Démarches administratives et raccordement</p>
                    <p>• Mise en service et application de suivi</p>
                  </CardContent>
                </Card>
              </aside>
            </div>
          </div>
        </section>

        {/* Garanties et matériel */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
            <article className="space-y-4 text-muted-foreground">
              <h2 className="text-2xl md:text-3xl font-semibold">Garanties et matériel</h2>
              <p>
                Nous sélectionnons des fabricants reconnus pour la fiabilité et la traçabilité de leurs produits. Les panneaux sont généralement garantis 25 ans sur la performance et 12 ans sur le produit. Les onduleurs bénéficient de 5 à 10 ans de garantie, extensible selon les modèles.
              </p>
              <p>
                Nous privilégions les fixations adaptées à votre toiture (tuile, ardoise, bac acier) pour une intégration propre et durable, sans compromettre l’étanchéité.
              </p>
            </article>
            <article className="space-y-3 text-sm">
              <Card className="bg-card text-card-foreground">
                <CardHeader>
                  <CardTitle className="text-xl">Spécifications types</CardTitle>
                  <CardDescription className="text-muted-foreground">Exemple d’une installation 3 kWc</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>• 6 à 8 panneaux monocristallins haut rendement</p>
                  <p>• Micro-onduleurs ou onduleur central selon contexte</p>
                  <p>• Production annuelle estimée: 3 000 à 3 900 kWh</p>
                  <p>• Suivi via application mobile/web</p>
                </CardContent>
              </Card>
            </article>
          </div>
        </section>

        {/* Cas client */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Cas client: maison de 120 m²</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <p className="text-4xl font-semibold">-45%</p>
                  <p className="text-sm text-muted-foreground">de facture la 1ère année</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <p className="text-4xl font-semibold">1 050 kWh</p>
                  <p className="text-sm text-muted-foreground">autoconsommés par an</p>
                </CardContent>
              </Card>
              <Card className="bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <p className="text-4xl font-semibold">6 ans</p>
                  <p className="text-sm text-muted-foreground">ROI estimé</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Étapes */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8">Notre processus en 4 étapes</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { t: "1. Étude", d: "Analyse de votre toiture et de vos consommations." },
                { t: "2. Devis", d: "Dimensionnement, simulation de production et ROI." },
                { t: "3. Pose", d: "Installation par nos équipes qualifiées RGE." },
                { t: "4. Mise en service", d: "Raccordement, tests et suivi de la production." },
              ].map((s) => (
                <Card key={s.t} className="bg-card text-card-foreground h-full">
                  <CardContent className="pt-6">
                    <p className="font-medium mb-1">{s.t}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Questions fréquentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Passez au solaire en toute sérénité</h2>
            <p className="text-muted-foreground mb-8">Un conseiller vous rappelle sous 24h pour une estimation gratuite et rapide.</p>
            <Button size="lg" className="bg-primary text-primary-foreground">Je démarre mon projet</Button>
          </div>
        </section>
      </main>

      <div className="fixed bottom-4 inset-x-4 md:right-6 md:inset-x-auto z-40">
        <div className="bg-foreground text-background rounded-full shadow-xl border border-border/20 px-4 py-2 flex items-center justify-between gap-3">
          <span className="text-sm font-medium">Devis gratuit sous 24h</span>
          <Button size="sm" className="bg-primary text-primary-foreground">Obtenir un devis</Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PanneauxSolaires;
