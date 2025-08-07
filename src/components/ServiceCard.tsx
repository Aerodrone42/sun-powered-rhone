import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  benefits: string[]
  variant?: 'default' | 'solar'
}

const ServiceCard = ({ title, description, icon: Icon, href, benefits, variant = 'default' }: ServiceCardProps) => {
  return (
    <Card 
      variant={variant} 
      className="group h-full flex flex-col relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm hover:bg-white/95"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="h-full w-full rounded-lg bg-white/90 backdrop-blur-sm" />
      </div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300 group-hover:scale-110">
            {/* Icon background glow */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
            <Icon className="h-7 w-7 text-primary relative z-10 group-hover:text-primary transition-colors duration-300 drop-shadow-sm" />
          </div>
          <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </div>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col relative z-10">
        <ul className="space-y-3 mb-8 flex-1">
          {benefits.map((benefit, index) => (
            <li 
              key={index} 
              className="flex items-start space-x-3 text-sm group/item animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm" />
              <span className="group-hover:text-foreground transition-colors duration-300">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          asChild 
          variant="outline" 
          className="w-full relative overflow-hidden bg-white/50 border-primary/20 hover:bg-primary hover:text-white hover:border-primary group-hover:shadow-lg transition-all duration-300 hover:scale-105"
        >
          <Link to={href}>
            <span className="relative z-10">En savoir plus</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default ServiceCard