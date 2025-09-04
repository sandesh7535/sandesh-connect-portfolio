import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "#",
      color: "hover:text-blue-500"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:sandeshkakade35@gmail.com",
      color: "hover:text-red-500"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Sandesh Kakade
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full Stack Developer passionate about AI/ML, data analysis, and creating innovative solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`h-9 w-9 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left text-sm"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left text-sm"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left text-sm"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left text-sm"
              >
                Portfolio
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-muted-foreground text-sm">UI/UX Design</span>
              <span className="text-muted-foreground text-sm">Web Development</span>
              <span className="text-muted-foreground text-sm">AI/ML Solutions</span>
              <span className="text-muted-foreground text-sm">Data Analysis</span>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>sandeshkakade35@gmail.com</p>
              <p>+91 8799948909</p>
              <p>Pune, Maharashtra, India</p>
            </div>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Sandesh Kakade. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and React</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}