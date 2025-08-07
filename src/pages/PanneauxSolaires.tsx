import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import hero from "@/assets/hero-image.jpg";
import { Helmet } from "react-helmet-async";

const PanneauxSolaires = () => {
  const title = "Panneaux solaires pour particuliers | Étude et pose";
  const description = "Panneaux solaires: étude, installation et garanties. Devis gratuit, production optimisée et autoconsommation clé en main.";
  const canonical = "https://example.com/particuliers/panneaux-solaires";

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
                  src={hero}
                  alt="Panneaux solaires sur une maison - installation photovoltaïque pour particuliers"
                  className="w-full h-72 md:h-96 object-cover rounded-xl border border-border"
                  loading="lazy"
                />
              </div>
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

        {/* CTA final */}
        <section className="py-12 md:py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Passez au solaire en toute sérénité</h2>
            <p className="text-muted-foreground mb-8">Un conseiller vous rappelle sous 24h pour une estimation gratuite et rapide.</p>
            <Button size="lg" className="bg-primary text-primary-foreground">Je démarre mon projet</Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PanneauxSolaires;
