import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import profileImage from "@/assets/sandesh-profile.jpg"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Available for opportunities
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              Hello, I'm
              <span className="block bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                Sandesh Kakade
              </span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-white/90 mb-2">
              Full Stack Developer
            </div>
            <div className="text-lg text-white/80 mb-6">
              AI & ML Enthusiast | Data Analyst
            </div>
            
            <p className="text-lg text-white/90 mb-8 max-w-2xl">
              Learning, Building, and Improving Step by Step. Passionate about creating innovative solutions 
              and pushing the boundaries of technology.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 text-white/80 mb-8">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>sandeshkakade35@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 8799948909</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pune, Maharashtra</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => scrollToSection('portfolio')}
              >
                View My Work
              </Button>
              <Button 
                variant="glass" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Button variant="glass" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 max-w-md animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-6 transform scale-105 opacity-20"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-1 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Sandesh Kakade" 
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold animate-float">
                CGPA: 9.52
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold animate-float" style={{ animationDelay: "1s" }}>
                B.Tech CSBS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}