import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("All")

  const projects = [
    {
      title: "Greenhouse Gas Emission Prediction",
      description: "ML model predicting emissions with high accuracy using Python & scikit-learn",
      category: "AI",
      tags: ["Python", "Machine Learning", "scikit-learn", "Data Analysis"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive C++ system for patient/staff management with secure authentication",
      category: "Software",
      tags: ["C++", "Database", "Authentication", "System Design"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Email Spam Detection",
      description: "NLP-powered spam classifier with high precision and recall rates",
      category: "AI",
      tags: ["Python", "NLP", "Machine Learning", "Classification"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Data Analysis Dashboard",
      description: "Real-time KPI visualization dashboard built with Python and modern frameworks",
      category: "Data",
      tags: ["Python", "Dashboard", "Data Visualization", "Real-time"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Automated Testing Framework",
      description: "Robust testing framework using Selenium & Pytest for web application testing",
      category: "Software",
      tags: ["Python", "Selenium", "Pytest", "Automation"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Stock Market Predictor",
      description: "ML model with TensorFlow for accurate stock price forecasting",
      category: "AI",
      tags: ["Python", "TensorFlow", "Time Series", "Finance"],
      image: "/api/placeholder/400/250",
      githubUrl: "#",
      liveUrl: "#"
    }
  ]

  const filters = ["All", "AI", "Data", "Software", "Web"]

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative projects that demonstrate my technical expertise and problem-solving abilities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "hero" : "ghost"}
              size="sm"
              onClick={() => setActiveFilter(filter)}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="card-gradient overflow-hidden hover-lift group">
              {/* Project Image */}
              <div className="h-48 bg-gradient-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold">Project Preview</div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button variant="ghost" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}