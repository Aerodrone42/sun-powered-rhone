import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Shield, Eye, Lock, User, Database, Mail, FileText, Phone } from "lucide-react";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <Helmet>
        <title>Politique de Confidentialité | WN Energies - Protection de vos données</title>
        <meta 
          name="description" 
          content="Découvrez comment WN Energies protège et traite vos données personnelles. Notre politique de confidentialité détaille nos pratiques en matière de protection des données." 
        />
        <link rel="canonical" href="https://wn-energies.fr/politique-confidentialite" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Shield className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Politique de Confidentialité
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Chez WN Energies, la protection de vos données personnelles est notre priorité. 
                Découvrez comment nous collectons, utilisons et protégeons vos informations.
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              
              {/* Section 1 */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">1. Collecte des données</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Nous collectons les informations que vous nous fournissez directement, notamment :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nom, prénom, adresse e-mail, numéro de téléphone</li>
                    <li>Adresse postale et informations de localisation</li>
                    <li>Informations sur votre projet photovoltaïque</li>
                    <li>Préférences de communication</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Database className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">2. Utilisation des données</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Vos données personnelles sont utilisées pour :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Répondre à vos demandes de devis et de renseignements</li>
                    <li>Vous proposer des solutions adaptées à vos besoins</li>
                    <li>Assurer le suivi de votre projet d'installation</li>
                    <li>Vous envoyer des informations sur nos services (avec votre consentement)</li>
                    <li>Améliorer la qualité de nos services</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">3. Protection des données</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos données :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Chiffrement des données sensibles</li>
                    <li>Accès restreint aux données personnelles</li>
                    <li>Sauvegardes sécurisées régulières</li>
                    <li>Formation de notre personnel à la protection des données</li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">4. Vos droits</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Conformément au RGPD, vous disposez des droits suivants :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                    <li><strong>Droit de rectification :</strong> Corriger vos données inexactes</li>
                    <li><strong>Droit d'effacement :</strong> Demander la suppression de vos données</li>
                    <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                    <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">5. Conservation des données</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Données de prospection : 3 ans maximum</li>
                    <li>Données clients : Durée de la relation contractuelle + 5 ans</li>
                    <li>Données de facturation : 10 ans (obligation légale)</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">6. Cookies</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Notre site utilise des cookies pour améliorer votre expérience de navigation :
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cookies essentiels :</strong> Nécessaires au fonctionnement du site</li>
                    <li><strong>Cookies analytiques :</strong> Pour comprendre l'utilisation du site</li>
                    <li><strong>Cookies de préférences :</strong> Pour mémoriser vos choix</li>
                  </ul>
                  <p>
                    Vous pouvez gérer vos préférences de cookies via le bandeau de consentement ou les paramètres de votre navigateur.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground m-0">7. Contact</h2>
                </div>
                <div className="text-muted-foreground space-y-4">
                  <p>
                    Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité, contactez-nous :
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4 space-y-2">
                    <p><strong>WN Energies</strong></p>
                    <p>Email : <a href="mailto:contact@wn-energies.fr" className="text-primary hover:underline">contact@wn-energies.fr</a></p>
                    <p>Téléphone : <a href="tel:0771418568" className="text-primary hover:underline">07 71 41 85 68</a></p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-center mt-16 p-8 bg-muted/50 rounded-2xl">
                <p className="text-sm text-muted-foreground">
                  Cette politique de confidentialité a été mise à jour le 18 août 2026.
                </p>
                <div className="mt-4 flex justify-center gap-4">
                  <Link 
                    to="/mentions-legales" 
                    className="text-primary hover:underline text-sm"
                  >
                    Mentions légales
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-primary hover:underline text-sm"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PolitiqueConfidentialite;