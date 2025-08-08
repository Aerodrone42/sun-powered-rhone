import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LucideIcon, ArrowRight } from "lucide-react"

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
    <Card className="group relative h-full border-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden rounded-2xl solar-hover">
      {/* Modern gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
      <div className="absolute inset-[1px] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-[calc(1rem-1px)]" />
      
      <div className="relative z-10 h-full flex flex-col">
        <CardHeader className="pb-4">
          {/* Modern icon with accent */}
          <div className="mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[calc(1rem-2px)] bg-white dark:bg-gray-900 flex items-center justify-center">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" strokeWidth={2} />
              </div>
            </div>
          </div>
          
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col pt-0">
          {/* Benefits list */}
          <div className="flex-1">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-1.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}

export default ServiceCard