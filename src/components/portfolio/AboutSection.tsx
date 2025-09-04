import { Card } from "@/components/ui/card"
import { GraduationCap, Briefcase, User, Award } from "lucide-react"

export function AboutSection() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Business Systems",
      institution: "JSPM Rajarshi Shahu College of Engineering",
      year: "2022 - 2026",
      grade: "CGPA: 9.52",
      status: "Currently 3rd Year"
    },
    {
      degree: "Diploma in Computer Engineering", 
      institution: "Pimpri Chinchwad Polytechnic",
      year: "2019 - 2022",
      grade: "91%",
      status: "Completed"
    },
    {
      degree: "10th Grade",
      institution: "Vidya Niketan English Medium School",
      year: "2019",
      grade: "90%", 
      status: "Completed"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Bio */}
          <div className="space-y-6">
            <Card className="card-gradient p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Personal Introduction</h3>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hi! I'm <strong className="text-foreground">Sandesh Gorakhnath Kakade</strong>, a passionate 
                  B.Tech Computer Science and Business Systems student with an unwavering enthusiasm for 
                  technology, coding, and continuous learning.
                </p>
                <p>
                  My journey in technology started during my diploma, where I discovered my love for 
                  problem-solving through programming. Since then, I've been on a mission to learn, 
                  build, and improve step by step, embracing every challenge as an opportunity to grow.
                </p>
                <p>
                  Beyond coding, I maintain a healthy lifestyle through fitness, believe in the power 
                  of continuous learning, and enjoy exploring the intersection of technology and business 
                  to create meaningful solutions.
                </p>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="card-gradient p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="text-lg font-semibold">Intern - Software Development</h4>
                  <p className="text-primary font-medium">MRND Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">
                    Gained hands-on experience in software development practices, 
                    working with real-world projects and contributing to the development team.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <Card className="card-gradient p-8 hover-lift">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Education Timeline</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    {index !== education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-16 bg-primary/20"></div>
                    )}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            edu.status === 'Currently 3rd Year' 
                              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                              : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        <p className="text-primary font-medium">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{edu.year}</span>
                          <span className="font-semibold text-accent">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}