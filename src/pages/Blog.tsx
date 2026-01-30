import { Helmet } from "react-helmet-async"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { FileText } from "lucide-react"

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | WNE - World Network Energies</title>
        <meta name="description" content="Découvrez nos articles sur l'énergie solaire, les panneaux photovoltaïques, les bornes de recharge et les solutions de stockage d'énergie." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Actualités, conseils et guides sur l'énergie solaire et les solutions durables
              </p>
            </div>
          </div>
        </section>

        {/* Empty State */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Articles à venir
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nous préparons des contenus passionnants sur l'énergie solaire, les innovations du secteur et des conseils pratiques pour optimiser votre installation.
              </p>
              <p className="text-sm text-muted-foreground">
                Revenez bientôt pour découvrir nos premiers articles !
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default Blog
