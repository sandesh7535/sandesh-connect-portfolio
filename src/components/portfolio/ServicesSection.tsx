import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Code2, ArrowRight } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive, modern interfaces for digital platforms with a focus on user experience and accessibility.",
      features: [
        "User-centered design approach",
        "Modern and responsive layouts", 
        "Prototyping and wireframing",
        "Cross-platform compatibility"
      ],
      color: "bg-gradient-primary"
    },
    {
      icon: Code2,
      title: "Software Development",
      description: "Building scalable, robust web and software applications using cutting-edge technologies and best practices.",
      features: [
        "Full-stack web development",
        "Database design and optimization",
        "API development and integration",
        "Testing and quality assurance"
      ],
      color: "bg-gradient-accent"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offering comprehensive solutions to bring your digital ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="card-gradient p-8 hover-lift group">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What I offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary font-semibold"
                    onClick={scrollToContact}
                  >
                    Let's work together
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss how I can help bring your ideas to life with innovative solutions and clean, efficient code.
            </p>
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}