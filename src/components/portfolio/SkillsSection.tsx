import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Brain, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "bg-gradient-primary",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 75 },
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      color: "bg-gradient-accent",
      skills: [
        { name: "SQL", level: 90 },
        { name: "Excel", level: 88 },
        { name: "Data Analysis", level: 85 },
        { name: "MongoDB", level: 80 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "bg-gradient-primary",
      skills: [
        { name: "Automation", level: 88 },
        { name: "Machine Learning", level: 85 },
        { name: "Data Science", level: 82 },
        { name: "AI/ML", level: 80 },
      ]
    },
    {
      title: "Development & Tools",
      icon: Wrench,
      color: "bg-gradient-accent",
      skills: [
        { name: "Web Development", level: 95 },
        { name: "Git/GitHub", level: 85 },
        { name: "Linux", level: 78 },
        { name: "Robotics", level: 70 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously learning and exploring advanced frameworks, cloud technologies, and automation tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-gradient p-8 hover-lift">
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-muted/50 [&>div]:bg-gradient-primary [&>div]:shadow-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Learning Note */}
        <div className="mt-16 text-center">
          <Card className="card-gradient p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Continuous Learning</h3>
            </div>
            <p className="text-muted-foreground text-lg">
              Currently exploring advanced AI/ML frameworks including <strong className="text-primary">TensorFlow</strong>, 
              <strong className="text-primary"> PyTorch</strong>, cloud technologies like <strong className="text-primary">AWS</strong>, 
              <strong className="text-primary"> Azure</strong>, and automation tools for DevOps and data processing. 
              Always eager to learn new technologies and improve existing skills.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}