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
      <Card className="relative h-full flex flex-col bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-medium">
        {/* Clean, minimal header */}
        <CardHeader className="pb-6">
          <div className="flex items-center space-x-4 mb-4">
            {/* Simple, clean icon container */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
              <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold text-card-foreground mb-1">
                {title}
              </CardTitle>
            </div>
          </div>
          
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col pt-0">
          <div className="flex-1">
            <ul className="space-y-2.5 mb-6">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start space-x-3 text-sm"
                >
                  <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Clean, readable button */}
          <Button 
            asChild 
            variant="outline"
            className="w-full bg-card hover:bg-accent hover:text-accent-foreground border-border hover:border-border transition-all duration-200"
          >
            <Link to={href} className="flex items-center justify-center space-x-2">
              <span>En savoir plus</span>
              <div className="w-4 h-4 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-current" />
              </div>
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default ServiceCard