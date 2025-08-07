import { useState } from "react"
import { useForm } from "react-hook-form"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
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
  const { toast } = useToast()
  
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
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Demande de devis gratuit</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire pour recevoir votre étude personnalisée
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="prenom">Prénom *</Label>
                        <Input 
                          id="prenom"
                          {...register("prenom", { required: "Le prénom est requis" })}
                          className={errors.prenom ? "border-destructive" : ""}
                        />
                        {errors.prenom && (
                          <p className="text-sm text-destructive">{errors.prenom.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nom">Nom *</Label>
                        <Input 
                          id="nom"
                          {...register("nom", { required: "Le nom est requis" })}
                          className={errors.nom ? "border-destructive" : ""}
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
                          type="email"
                          {...register("email", { 
                            required: "L'email est requis",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Email invalide"
                            }
                          })}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input 
                          id="telephone"
                          type="tel"
                          {...register("telephone", { required: "Le téléphone est requis" })}
                          className={errors.telephone ? "border-destructive" : ""}
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
                          {...register("ville", { required: "La ville est requise" })}
                          className={errors.ville ? "border-destructive" : ""}
                        />
                        {errors.ville && (
                          <p className="text-sm text-destructive">{errors.ville.message}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="typeProjet">Type de projet *</Label>
                        <Select onValueChange={(value) => setValue("typeProjet", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre projet" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="particulier-panneaux">Particulier - Panneaux solaires</SelectItem>
                            <SelectItem value="particulier-autoconsommation">Particulier - Autoconsommation</SelectItem>
                            <SelectItem value="particulier-borne">Particulier - Borne de recharge</SelectItem>
                            <SelectItem value="particulier-batterie">Particulier - Batterie solaire</SelectItem>
                            <SelectItem value="professionnel-commerce">Professionnel - Commerce</SelectItem>
                            <SelectItem value="professionnel-entreprise">Professionnel - Entreprise</SelectItem>
                            <SelectItem value="professionnel-agriculteur">Professionnel - Agriculteur</SelectItem>
                            <SelectItem value="professionnel-collectivite">Professionnel - Collectivité</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea 
                        id="message"
                        rows={4}
                        placeholder="Décrivez votre projet, vos besoins spécifiques..."
                        {...register("message")}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Demander mon devis gratuit"}
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
              <Card key={index}>
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