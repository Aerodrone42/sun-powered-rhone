import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

interface ContactFormData {
  prenom: string
  nom: string
  email: string
  telephone: string
  ville: string
  typeProjet: string
  message: string
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const { toast } = useToast()
  
  // Vérifier si on revient après un envoi réussi via formsubmit
  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      toast({
        title: "Demande envoyée !",
        description: "Nous vous contacterons dans les 24h pour votre projet solaire.",
      })
      // Nettoyer l'URL en retirant le paramètre success
      setSearchParams({})
    }
  }, [searchParams, setSearchParams, toast])
  
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les 24h pour votre projet solaire.",
    })
    
    reset()
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "07 71 41 85 68",
      description: "Du lundi au vendredi, 8h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@wn-energies.fr",
      description: "Réponse sous 24h garantie"
    },
    {
      icon: MapPin,
      title: "Zone d'intervention",
      content: "Toute la France",
      description: "Interventions partout en France"
    },
    {
      icon: Clock,
      title: "Rendez-vous",
      content: "Déplacement gratuit",
      description: "Étude sur site incluse"
    }
  ]

  const advantages = [
    "Devis 100% gratuit et sans engagement",
    "Étude personnalisée de votre projet",
    "Simulation de rentabilité détaillée",
    "Accompagnement dans les démarches",
    "Garanties fabricant et pose incluses"
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contactez <span className="text-primary">WN Energies</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Obtenez votre devis personnalisé gratuit et découvrez combien vous pouvez économiser 
              avec une installation solaire adaptée à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="hover:shadow-glow transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl">Demande de devis gratuit</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour recevoir votre étude personnalisée
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form action="https://formsubmit.co/contact@wn-energies.fr" method="POST" className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom *</Label>
                        <Input 
                          id="prenom"
                          name="prenom"
                          className="solar-hover"
                          required
                        />
                        {errors.prenom && (
                          <p className="text-sm text-destructive">{errors.prenom.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input 
                          id="nom"
                          name="nom"
                          className="solar-hover"
                          required
                        />
                        {errors.nom && (
                          <p className="text-sm text-destructive">{errors.nom.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          className="solar-hover"
                          required
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input 
                          id="telephone"
                          name="telephone"
                          type="tel"
                          className="solar-hover"
                          required
                        />
                        {errors.telephone && (
                          <p className="text-sm text-destructive">{errors.telephone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="ville">Ville *</Label>
                        <Input 
                          id="ville"
                          name="ville"
                          className="solar-hover"
                          required
                        />
                        {errors.ville && (
                          <p className="text-sm text-destructive">{errors.ville.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="typeProjet">Type de projet *</Label>
                        <select name="typeProjet" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 solar-hover" required>
                          <option value="">Sélectionnez votre projet</option>
                          <option value="particulier-panneaux">Particulier - Panneaux solaires</option>
                          <option value="particulier-autoconsommation">Particulier - Autoconsommation</option>
                          <option value="particulier-borne">Particulier - Borne de recharge</option>
                          <option value="particulier-batterie">Particulier - Batterie solaire</option>
                          <option value="professionnel-commerce">Professionnel - Commerce</option>
                          <option value="professionnel-entreprise">Professionnel - Entreprise</option>
                          <option value="professionnel-agriculteur">Professionnel - Agriculteur</option>
                          <option value="professionnel-collectivite">Professionnel - Collectivité</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Décrivez votre projet, vos besoins spécifiques..."
                        className="solar-hover"
                      />
                    </div>

                    {/* Champs cachés pour formsubmit */}
                    <input type="hidden" name="_subject" value="Nouvelle demande de devis - WN Energies" />
                    <input type="hidden" name="_next" value={window.location.origin + "/contact?success=true"} />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_autoresponse" value="Merci pour votre demande de devis ! Nous vous recontacterons dans les plus brefs délais pour étudier votre projet." />
                    
                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full btn-solar"
                    >
                      Demander mon devis gratuit
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Advantages */}
            <div className="space-y-8">
              {/* Contact Info */}
              <Card variant="gradient">
                <CardHeader>
                  <CardTitle>Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">{info.title}</div>
                        <div className="font-medium text-primary">{info.content}</div>
                        <div className="text-sm text-muted-foreground">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Advantages */}
              <Card variant="solar">
                <CardHeader>
                  <CardTitle>Pourquoi nous choisir ?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions fréquentes
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les réponses aux questions les plus courantes sur nos installations solaires
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                question: "Combien coûte une installation solaire ?",
                answer: "Le coût varie selon la puissance et le type d'installation. Pour une maison individuelle, comptez entre 8 000€ et 20 000€ avant aides. Notre devis gratuit vous donnera un prix précis."
              },
              {
                question: "Quelle est la rentabilité des panneaux solaires ?",
                answer: "En moyenne, une installation se rentabilise en 8-12 ans et produit de l'électricité pendant 25-30 ans. Les économies peuvent atteindre 70% de votre facture électrique."
              },
              {
                question: "Quelles sont les aides disponibles ?",
                answer: "Prime à l'autoconsommation, tarif de rachat garanti, TVA réduite, et parfois aides locales. Nous vous accompagnons dans toutes vos démarches."
              },
              {
                question: "Quelle maintenance est nécessaire ?",
                answer: "Les panneaux solaires nécessitent très peu de maintenance. Un nettoyage occasionnel et un contrôle annuel suffisent. Nous proposons des contrats de maintenance."
              }
            ].map((faq, index) => (
              <Card key={index} className="hover:shadow-glow transition-all duration-500 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact