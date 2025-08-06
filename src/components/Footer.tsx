import { Link } from "react-router-dom"
import { Sun, Phone, Mail, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <Sun className="h-6 w-6 text-accent" />
              <span className="text-lg font-bold bg-hero-gradient bg-clip-text text-transparent">
                WN Energies
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Spécialisé dans la vente et pose de panneaux solaires en Rhône-Alpes. 
              Votre partenaire pour une transition énergétique réussie.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-accent" />
                <span>07 71 41 85 68</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <span>contact@wn-energies.fr</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span>Rhône-Alpes, France</span>
              </div>
            </div>
          </div>

          {/* Services Particuliers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services Particuliers</h3>
            <nav className="space-y-2">
              <Link to="/particuliers/panneaux-solaires" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Panneaux solaires
              </Link>
              <Link to="/particuliers/installation-consommation" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Installation en consommation
              </Link>
              <Link to="/particuliers/borne-recharge" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Borne de recharge
              </Link>
              <Link to="/particuliers/batterie-solaire" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Batterie solaire
              </Link>
            </nav>
          </div>

          {/* Services Professionnels */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services Professionnels</h3>
            <nav className="space-y-2">
              <Link to="/professionnels/commerce" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Commerce
              </Link>
              <Link to="/professionnels/entreprise" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Entreprise
              </Link>
              <Link to="/professionnels/agriculteur" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Agriculteur
              </Link>
              <Link to="/professionnels/collectivite" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Collectivité
              </Link>
            </nav>
          </div>

          {/* Informations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Informations</h3>
            <nav className="space-y-2">
              <Link to="/zone-intervention" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Zone d'intervention
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link to="/devis" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Devis gratuit
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 WN Energies. Tous droits réservés.
            </p>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <Link to="/mentions-legales" className="hover:text-foreground transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-foreground transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer