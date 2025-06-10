"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Database,
  Globe,
  Calendar,
  MapPin,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "REST APIs",
    "Git",
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and analytics.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation platform using machine learning for automated content generation.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Python", "OpenAI API", "FastAPI", "React"],
      github: "#",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.",
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications, collaborated with design teams, and optimized application performance.",
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2020",
      description:
        "Built web applications using modern frameworks, participated in code reviews, and learned industry best practices.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 scroll-smooth">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="ml-4 flex py-4">
            <Link href="/" className="mr-6 flex items-center space-x-2 text-lg font-bold group">
              <Code className="h-6 w-6 transition-transform duration-500 ease-in-out group-hover:rotate-12" />
              <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Taha's Portfolio</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {["About", "Projects", "Experience", "Contact"].map((item) => {
                const sectionId = item.toLowerCase()
                const isActive = activeSection === sectionId
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-600 after:to-purple-600 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full ${
                      isActive ? "after:w-full text-blue-600" : "text-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32 relative overflow-hidden mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center relative">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Muhammad Taha
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-purple-600" />
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                Full Stack Developer passionate about creating exceptional digital experiences. I specialize in modern
                web technologies and love turning ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <a href="/files/Resume.pdf" download>
                <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-500 ease-in-out transform hover:scale-105">
                  <Download className="h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-y-1" />
                  Download Resume
                </Button>
              </a>
              <Button variant="outline" size="lg" asChild className="border-2 hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-500 ease-in-out transform hover:scale-105">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/tahaxd77" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-taha-ayaz/" },
                { icon: Mail, href: "mailto:tahapices@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <Button key={href} variant="ghost" size="icon" asChild className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-500 ease-in-out transform hover:scale-110">
                  <Link href={href} target="_blank">
                    <Icon className="h-5 w-5 transition-transform duration-500 ease-in-out group-hover:scale-110" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse transition-all duration-700 ease-in-out" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse transition-all duration-700 ease-in-out" />
                <Avatar className="h-64 w-64 border-4 border-background shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/20 hover:border-blue-500/20">
                  <AvatarImage src="/placeholder.svg?height=256&width=256" alt="Muhammad Taha" className="transition-transform duration-500 ease-in-out" />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-white transition-all duration-500 ease-in-out">MT</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-10 py-24 relative mx-auto transition-all duration-500 ease-in-out">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-blue-500/5 to-transparent blur-3xl" />
        <div className="space-y-8 relative">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Passionate developer with 5+ years of experience building scalable web applications
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-600">
                  <Code className="h-5 w-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-600/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-600">
                  <Palette className="h-5 w-5" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 group/item">
                  <Globe className="h-5 w-5 mt-0.5 text-blue-600 group-hover/item:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold">Web Development</h4>
                    <p className="text-sm text-muted-foreground">Building responsive and performant web applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group/item">
                  <Database className="h-5 w-5 mt-0.5 text-purple-600 group-hover/item:scale-110 transition-transform duration-300" />
                  <div>
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="text-sm text-muted-foreground">Creating robust APIs and database architectures</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24 bg-muted/50 relative mx-auto transition-all duration-500 ease-in-out">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl" />
        <div className="space-y-8 relative">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600/20">
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1 group-hover:text-blue-600 transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-600/20 hover:to-purple-600/20 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300">
                      <Link href={project.github} target="_blank">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      <Link href={project.live} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 bg-muted/50 relative mx-auto transition-all duration-500 ease-in-out">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl" />
        <div className="space-y-8 relative">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-600/20">
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    {[
                      { icon: Mail, text: "Email", value: "tahapices@gmail.com", color: "text-blue-600" },
                      { icon: Phone, text: "Phone", value: "+92-305-5800377", color: "text-green-600" },
                      { icon: MapPin, text: "Location", value: "Lahore, Pakistan", color: "text-red-600" },
                    ].map(({ icon: Icon, text, value, color }) => (
                      <div key={text} className="flex items-center space-x-3 group/item">
                        <Icon className={`h-5 w-5 ${color} group-hover/item:scale-110 transition-transform duration-300`} />
                        <div>
                          <p className="font-semibold">{text}</p>
                          <p className="text-sm text-muted-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300" size="lg" asChild>
                      <Link href="mailto:tahapices@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </Link>
                    </Button>
                    <div className="flex justify-center space-x-4">
                      {[
                        { icon: Github, href: "https://github.com/tahaxd77" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-taha-ayaz/" },
                      ].map(({ icon: Icon, href }) => (
                        <Button key={href} variant="outline" size="icon" asChild className="hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-300">
                          <Link href={href} target="_blank">
                            <Icon className="h-5 w-5" />
                          </Link>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl" />
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row relative">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6 text-blue-600" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {new Date().getFullYear()} Muhammad Taha.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
