import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu, Sun, Phone, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

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
        { title: "Entreprise", href: "/professionnels/entreprise", description: "Installations solaires pour entreprises industrielles" },
        { title: "Agriculteur", href: "/professionnels/agriculteur", description: "Solutions agrivoltaïques et toitures agricoles" },
        { title: "Collectivité", href: "/professionnels/collectivite", description: "Projets solaires pour collectivités territoriales" },
      ]
    },
    {
      title: "Zone d'intervention",
      href: "/zone-intervention",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Sun className="h-8 w-8 text-accent" />
          <span className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent">
            WN Energies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.items ? (
                  <>
                    <NavigationMenuTrigger className={cn(
                      "text-sm font-medium transition-colors hover:text-primary",
                      isActivePath(item.href) && "text-primary"
                    )}>
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <div className="row-span-3">
                          <NavigationMenuLink asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-hero-gradient p-6 no-underline outline-none focus:shadow-md"
                              to={item.href}
                            >
                              <Sun className="h-6 w-6 text-white" />
                              <div className="mb-2 mt-4 text-lg font-medium text-white">
                                {item.title}
                              </div>
                              <p className="text-sm leading-tight text-white/90">
                                Découvrez nos solutions énergétiques durables
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                        {item.items.map((subItem) => (
                          <NavigationMenuLink key={subItem.title} asChild>
                            <Link
                              to={subItem.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{subItem.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
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
                        "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
                        isActivePath(item.href) && "text-primary"
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
          <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>07 71 41 85 68</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>contact@wn-energies.fr</span>
            </div>
          </div>
          
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