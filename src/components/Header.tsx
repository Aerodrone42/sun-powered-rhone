import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import wneLogoImage from "@/assets/wne-logo.webp"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActivePath = (path: string) => {
    if (path === "/" && location.pathname === "/") return true
    if (path !== "/" && location.pathname.startsWith(path)) return true
    return false
  }

  const navigation = [
    {
      title: "Accueil",
      href: "/",
    },
    {
      title: "Services Particuliers",
      href: "/particuliers",
      items: [
        { title: "Panneaux solaires", href: "/particuliers/panneaux-solaires", description: "Installation de panneaux solaires photovoltaïques" },
        { title: "Installation en consommation", href: "/particuliers/installation-consommation", description: "Solutions d'autoconsommation solaire" },
        { title: "Borne de recharge", href: "/particuliers/borne-recharge", description: "Installation de bornes de recharge électrique" },
        { title: "Batterie solaire", href: "/particuliers/batterie-solaire", description: "Solutions de stockage d'énergie solaire" },
      ]
    },
    {
      title: "Services Professionnels",
      href: "/professionnels",
      items: [
        { title: "Commerce", href: "/professionnels/commerce", description: "Solutions solaires pour commerces et magasins" },
        { title: "Industrie & Agricoles", href: "/professionnels/industrie-agricoles", description: "Solutions pour industries et exploitations agricoles" },
        { title: "Panneaux solaires", href: "/professionnels/panneaux-solaires", description: "Installations solaires pour entreprises" },
        { title: "Installation consommation", href: "/professionnels/installation-consommation", description: "Solutions d'autoconsommation professionnelle" },
        { title: "Batterie solaire", href: "/professionnels/batterie-solaire", description: "Solutions de stockage pour professionnels" },
      ]
    },
    {
      title: "Simulateur",
      href: "/simulateur",
    },
    {
      title: "Tarifs & Aides",
      href: "/tarifs-aides",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-background/70 backdrop-blur-2xl supports-[backdrop-filter]:bg-background/70 shadow-lg shadow-primary/5">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={wneLogoImage} 
            alt="WNE - World Network Energies" 
            className="h-14 w-auto transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="space-x-2">
            {navigation.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className={cn(
                      "h-12 px-6 text-sm font-medium bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-glow hover:scale-105",
                      isActivePath(item.href) && "bg-primary/10 border-primary/30 text-primary shadow-glow"
                    )}>
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-4 p-8 md:w-[500px] lg:w-[600px] lg:grid-cols-[.75fr_1fr] bg-background/95 backdrop-blur-2xl border border-border/20 rounded-3xl shadow-2xl shadow-primary/10">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-2xl bg-gradient-to-br from-primary via-primary-glow to-accent p-8 no-underline outline-none focus:shadow-glow transition-all duration-500 hover:scale-[1.02] hover:shadow-glow group relative overflow-hidden"
                              to={item.href}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <img 
                                src={wneLogoImage} 
                                alt="WNE" 
                                className="h-12 w-auto relative z-10 transition-transform duration-500 group-hover:scale-110 brightness-0 invert"
                              />
                              <div className="mb-2 mt-6 text-xl font-bold text-white relative z-10">
                                {item.title}
                              </div>
                              <p className="text-sm leading-relaxed text-white/90 relative z-10">
                                Découvrez nos solutions énergétiques durables et innovantes
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.title} asChild>
                            <Link
                              to={subItem.href}
                              className="group block select-none space-y-2 rounded-2xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:shadow-glow hover:scale-[1.02] border border-transparent hover:border-border/20"
                            >
                              <div className="text-sm font-semibold leading-none text-foreground group-hover:text-primary transition-colors duration-300">{subItem.title}</div>
                              <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                                {subItem.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "group inline-flex h-12 w-max items-center justify-center rounded-2xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-medium backdrop-blur-lg transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:shadow-glow hover:scale-105 focus:bg-white/10 focus:border-white/20 focus:outline-none",
                        isActivePath(item.href) && "bg-primary/10 border-primary/30 text-primary shadow-glow"
                      )}
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Info & Mobile Menu */}
        <div className="flex items-center space-x-4">
          
          <Button asChild variant="hero" size="sm" className="hidden md:inline-flex">
            <Link to="/contact">Devis gratuit</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <div key={item.title}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-2 py-1 text-lg font-semibold",
                        isActivePath(item.href) && "text-primary"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                    {item.items && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.href}
                            className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t">
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Devis gratuit</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header