import { Link } from "react-router-dom"
import { Sun, Phone, Mail, MapPin, ArrowRight, Star } from "lucide-react"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="container relative z-10 py-16 md:py-20">
        {/* Top Section with CTA */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">Experts certifiés RGE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Prêt à réduire votre facture d'électricité ?
              </h2>
              <p className="text-xl text-white/80 mb-6">
                Obtenez votre devis personnalisé gratuit en moins de 24h
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl" className="group">
                <Link to="/contact">
                  Devis gratuit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/simulateur">
                  Simuler mes économies
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/9df28706-b68f-46d6-8389-66ff785af37b.png" 
                  alt="WN Energies Logo" 
                  className="h-10 w-10 object-contain transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 h-10 w-10 bg-primary/20 rounded-full blur-xl transition-all duration-300 group-hover:bg-primary/40"></div>
              </div>
              <span className="text-2xl font-bold text-primary">
                WN Energies
              </span>
            </Link>
            <p className="text-white/80 leading-relaxed">
              Votre expert en solutions photovoltaïques en Rhône-Alpes. 
              Installation, maintenance et accompagnement pour votre transition énergétique.
            </p>
            
            {/* Contact Info Cards */}
            <div className="space-y-3">
              <a 
                href="tel:0771418568" 
                className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium">07 71 41 85 68</span>
              </a>
              <a 
                href="mailto:contact@wn-energies.fr" 
                className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium">contact@wn-energies.fr</span>
              </a>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Rhône-Alpes, France</span>
              </div>
            </div>
          </div>

          {/* Services Particuliers */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Services Particuliers</h3>
            <nav className="space-y-3">
              {[
                { to: "/particuliers/panneaux-solaires", label: "Panneaux solaires" },
                { to: "/particuliers/installation-consommation", label: "Autoconsommation" },
                { to: "/particuliers/borne-recharge", label: "Borne de recharge" },
                { to: "/particuliers/batterie-solaire", label: "Batterie solaire" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    {link.label}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Professionnels */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Services Professionnels</h3>
            <nav className="space-y-3">
              {[
                { to: "/professionnels/commerce", label: "Commerce" },
                { to: "/professionnels/panneaux-solaires", label: "Industrie" },
                { to: "/agriculteurs", label: "Agriculteurs" },
                { to: "/marches-publics", label: "Marchés publics" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    {link.label}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Informations */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Informations</h3>
            <nav className="space-y-3">
              {[
                { to: "/simulateur", label: "Simulateur solaire" },
                { to: "/contact", label: "Contact & Devis" },
                { to: "/", label: "Zone d'intervention" }
              ].map((link) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className="block text-white/70 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                >
                  <span className="flex items-center">
                    {link.label}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                </Link>
              ))}
            </nav>
            
            {/* Trust Indicators */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <Sun className="h-4 w-4 text-yellow-400" />
                <span>Certifié RGE QualiPV</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>+1000 installations</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/60">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>Garantie 25 ans</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © 2025 WN Energies. Tous droits réservés. | Expert en solutions photovoltaïques
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/mentions-legales" className="text-white/60 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-white/60 hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer