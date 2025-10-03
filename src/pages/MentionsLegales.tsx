import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Scale, Shield, Eye, Phone } from "lucide-react";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Mentions Légales | WN Energies</title>
        <meta name="description" content="Mentions légales du site WN Energies, spécialiste en solutions photovoltaïques et énergies renouvelables." />
        <link rel="canonical" href="https://www.wn-energies.fr/mentions-legales" />
      </Helmet>

      <Header />

      <main className="py-20">
        <div className="container max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">Informations légales</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Mentions Légales</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Informations légales relatives au site internet WN Energies
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Éditeur du site */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Éditeur du site
              </h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p><strong>Dénomination sociale :</strong> WN Energies</p>
                <p><strong>Forme juridique :</strong> Entreprise individuelle</p>
                <p><strong>Activité :</strong> Installation et maintenance de systèmes photovoltaïques</p>
                <p><strong>Email :</strong> <a href="mailto:contact@wn-energies.fr" className="text-primary hover:underline">contact@wn-energies.fr</a></p>
                <p><strong>Téléphone :</strong> <a href="tel:0765561050" className="text-primary hover:underline">07 65 56 10 50</a></p>
                <p><strong>Zone d'intervention :</strong> Rhône-Alpes, France</p>
              </div>
            </section>

            {/* Hébergement */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Hébergement du site</h2>
              <div className="bg-muted/30 p-6 rounded-lg">
                <p><strong>Hébergeur :</strong> Lovable</p>
                <p><strong>Type :</strong> Plateforme de développement web</p>
                <p>Le site est hébergé sur l'infrastructure cloud de Lovable, garantissant une disponibilité et des performances optimales.</p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-primary" />
                Propriété intellectuelle
              </h2>
              <div className="space-y-4">
                <p>
                  L'ensemble des contenus présents sur le site WN Energies (textes, images, graphismes, logo, icônes, sons, logiciels, etc.) 
                  sont la propriété exclusive de WN Energies, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés 
                  partenaires ou auteurs.
                </p>
                <p>
                  Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents 
                  éléments est strictement interdite sans l'accord exprès par écrit de WN Energies.
                </p>
                <p>
                  Cette représentation ou reproduction, par quelque procédé que ce soit, constitue une contrefaçon sanctionnée par les 
                  articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </div>
            </section>

            {/* Protection des données */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Protection des données personnelles</h2>
              <div className="space-y-4">
                <p>
                  Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection 
                  des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité des données vous concernant.
                </p>
                <p>
                  Les données collectées via notre site sont utilisées uniquement dans le cadre de nos services (devis, contact, newsletter) 
                  et ne sont jamais transmises à des tiers sans votre consentement explicite.
                </p>
                <p>
                  Pour exercer vos droits ou pour toute question relative au traitement de vos données personnelles, 
                  vous pouvez nous contacter à l'adresse : <a href="mailto:contact@wn-energies.fr" className="text-primary hover:underline">contact@wn-energies.fr</a>
                </p>
                <p>
                  Pour plus d'informations, consultez notre <Link to="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</Link>.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <div className="space-y-4">
                <p>
                  Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. Ces cookies permettent notamment :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>De mémoriser vos préférences de navigation</li>
                  <li>D'analyser l'utilisation du site pour l'améliorer</li>
                  <li>De vous proposer des contenus adaptés</li>
                </ul>
                <p>
                  Vous pouvez à tout moment modifier vos préférences cookies via la barre de consentement ou les paramètres de votre navigateur.
                </p>
              </div>
            </section>

            {/* Responsabilité */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Limitation de responsabilité</h2>
              <div className="space-y-4">
                <p>
                  WN Energies s'efforce de fournir des informations aussi précises que possible sur le site. Toutefois, elle ne pourra 
                  être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait 
                  ou du fait des tiers partenaires qui lui fournissent ces informations.
                </p>
                <p>
                  WN Energies ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l'utilisateur, 
                  lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant pas aux spécifications indiquées, 
                  soit de l'apparition d'un bug ou d'une incompatibilité.
                </p>
              </div>
            </section>

            {/* Droit applicable */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Droit applicable et juridiction</h2>
              <div className="space-y-4">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, 
                  le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-12">
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Phone className="h-6 w-6 text-primary" />
                  Contact
                </h2>
                <p className="mb-4">
                  Pour toute question concernant ces mentions légales ou le site internet, vous pouvez nous contacter :
                </p>
                <div className="space-y-2">
                  <p><strong>Email :</strong> <a href="mailto:contact@wn-energies.fr" className="text-primary hover:underline">contact@wn-energies.fr</a></p>
                  <p><strong>Téléphone :</strong> <a href="tel:0765561050" className="text-primary hover:underline">07 65 56 10 50</a></p>
                  <p><strong>Formulaire de contact :</strong> <Link to="/contact" className="text-primary hover:underline">Nous écrire</Link></p>
                </div>
              </div>
            </section>

            <div className="text-center text-sm text-muted-foreground mt-12 pt-8 border-t">
              <p>Dernière mise à jour : 8 août 2026</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MentionsLegales;