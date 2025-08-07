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
    <div className="group relative h-full">
      {/* Glow effect background */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-700 group-hover:blur-sm" />
      
      <Card className="relative h-full flex flex-col bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border-0 rounded-2xl overflow-hidden transition-all duration-500 group-hover:bg-white/80 dark:group-hover:bg-gray-900/80 group-hover:scale-[1.02] group-hover:shadow-2xl">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        
        {/* Floating orb effect */}
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary/30 animate-pulse" />
        <div className="absolute top-6 right-8 w-1 h-1 rounded-full bg-secondary/40 animate-pulse" style={{animationDelay: '0.5s'}} />
        
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between mb-6">
            <div className="relative">
              {/* Icon container with modern styling */}
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Icon className="w-7 h-7 text-primary relative z-10 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
              </div>
              
              {/* Subtle glow under icon */}
              <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
          </div>
          
          <div>
            <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
              {title}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col pt-0">
          <div className="flex-1">
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-3 text-sm opacity-90 group-hover:opacity-100 transition-all duration-300"
                  style={{ 
                    transform: 'translateY(4px)',
                    animation: `fade-in 0.6s ease-out ${index * 0.1}s forwards`
                  }}
                >
                  <div className="relative mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-secondary animate-ping opacity-20" />
                  </div>
                  <span className="leading-relaxed text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Modern CTA button */}
          <div className="relative">
            <Button 
              asChild 
              className="w-full h-12 rounded-xl border-0 bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary hover:to-secondary text-primary hover:text-white font-medium transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm relative overflow-hidden"
            >
              <Link to={href} className="relative z-10 flex items-center justify-center space-x-2">
                <span>En savoir plus</span>
                <div className="w-4 h-4 rounded-full bg-current/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </div>
              </Link>
            </Button>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-50 blur transition-opacity duration-300" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ServiceCard