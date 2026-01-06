"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import AnimatedBackground from "@/components/AnimatedBackground";
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
  Gamepad2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const skills = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    Backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    "Game Dev": ["Unity", "C#", "Game Design", "2D/3D Graphics"],
    Tools: ["Git", "Figma", "VS Code", "Docker"],
  };

  // ...existing code...
  const projects = [
    {
      title: "Ricochet Detective",
      description:
        "Ricochet Detective is a top-down puzzle shooter where precision is your only weapon. Set in a gritty noir world, you must clear the room of enemies using a single bullet. The catch? You have to bounce your shot off walls to hit targets hiding behind cover.",
      image: "/images/ricochet-detective.png",
      technologies: ["Unity", "C#", "Game Design", "2D Graphics"],
      github: "https://github.com/tahaxd77/ricochet-detective",
      live: "https://tahaxd77.itch.io/ricochet-detective",
    },
    {
      title: "Onyx Renders",
      description:
        "A high-converting website for a 3D architectural visualization company designed to generate quality leads through portfolio showcases and clear CTAs.",
      image: "/images/onyxrenders.png",
      technologies: ["Next.js", "Figma", "MongoDB", "Express.js", "React"],
      github: "https://github.com/MuhammadUmar7831/Onyxrenders",
      live: "www.onyxrenders.com",
    },
    {
      title: "Linkedin Caption Generator",
      description:
        "A generative AI web application that creates engaging LinkedIn post captions based on user-provided topics, enhancing social media presence and interaction.",
      image: "/images/caption.png",
      technologies: ["Next.js", "Gemini AI", "React"],
      github: "https://github.com/tahaxd77/linkedin_caption_generator",
      live: "https://linkedin-caption-generator.vercel.app/",
    },
    {
      title: "Movie Recommendation System",
      description:
        "Personalized movie recommendation system using Spark MLlib (ALS algorithm), Flask REST APIs, and a JavaScript frontend for interactive user experience. Scalable on large datasets.",
      image: "/images/2816015.jpg",
      technologies: [
        "Python",
        "Jupyter Notebook",
        "Spark MLlib",
        "Flask",
        "JavaScript",
      ],
      github: "https://github.com/tahaxd77/movie_reccomendation_system",
      live: "",
    },
    {
      title: "Real Estate Price Predictor",
      description:
        "Predictive tool using machine learning models to estimate real estate prices based on user input and historical data. Includes data preprocessing, model training, and performance visualization.",
      image: "/images/104970.jpg",
      technologies: [
        "Python",
        "scikit-learn",
        "pandas",
        "matplotlib",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/tahaxd77/housepricepredictor",
      live: "",
    },

    {
      title: "BuilderPro",
      description:
        "Cross-platform e-commerce mobile app for building materials. Features product browsing, search, purchase, user authentication, and real-time database operations with Supabase.",
      image: "/images/builder-pro.jpg",
      technologies: ["React Native", "JavaScript", "Supabase"],
      github: "https://github.com/tahaxd77/builder-pro",
      live: "",
    },
    {
      title: "RealTime Chat Application",
      description:
        "Real-time chat app enabling users to connect and message friends instantly with a responsive and intuitive UI.",
      image: "/images/chat.jpg",
      technologies: ["React", "JavaScript"],
      github: "https://github.com/tahaxd77/realtime-chat",
      live: "",
    },
  ];

  return (
    <div className="min-h-screen gradient-bg cyber-grid scroll-smooth overflow-hidden relative">
      <AnimatedBackground />
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b glass backdrop-blur-xl border-blue-500/20">
        <div className="container flex h-16 items-center">
          <div className="ml-4 flex py-4">
            <Link
              href="/"
              className="mr-6 flex items-center space-x-2 text-lg font-bold group"
            >
              <Code className="h-6 w-6 neon-glow transition-transform duration-500 ease-in-out group-hover:rotate-12 text-blue-400" />
              <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
                Taha's Portfolio
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {["About", "Projects", "Contact"].map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative px-3 py-1 rounded-md transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-blue-400 after:to-purple-400 after:transition-all after:duration-500 after:ease-in-out hover:after:w-full hover:bg-white/5 ${
                      isActive
                        ? "after:w-full text-blue-400 neon-border"
                        : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container px-4 py-24 md:py-32 relative overflow-hidden mx-auto scan-line">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-purple-500/20 to-transparent blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none animate-in slide-in-from-left duration-1000">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent neon-text">
                    Muhammad Taha
                  </span>
                  <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-purple-400 neon-border animate-pulse" />
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed animate-in slide-in-from-left duration-1000 delay-200">
                Full Stack Developer passionate about creating exceptional
                digital experiences. I specialize in modern web technologies and
                love turning ideas into reality.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row animate-in slide-in-from-left duration-1000 delay-300">
              <a href="/files/Resume.pdf" download>
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 neon-border shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
                >
                  <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
                  Download Resume
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-blue-500/30 hover:border-blue-500/60 glass hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-105 hover:neon-border"
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/tahaxd77" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/muhammad-taha-ayaz/",
                },
                { icon: Mail, href: "mailto:tahapices@gmail.com" },
              ].map(({ icon: Icon, href }, idx) => (
                <Button
                  key={href}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-blue-500/10 transition-all duration-300 transform hover:scale-110 hover:neon-glow animate-in fade-in duration-500"
                  style={{ animationDelay: `${(idx + 4) * 100}ms` }}
                >
                  <Link href={href} target="_blank">
                    <Icon className="h-5 w-5 transition-all duration-300 hover:text-blue-400" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex justify-center animate-in fade-in-50 duration-1000 delay-500">
            <div className="relative float">
              <div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse"
                style={{ animation: "glow-pulse 3s ease-in-out infinite" }}
              />
              <div className="relative">
                <Avatar className="h-64 w-64 border-4 border-blue-500/30 shadow-2xl shadow-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 hover:border-purple-500/30 neon-border">
                  <AvatarImage
                    src="/images/taha2.png"
                    alt="Muhammad Taha"
                    className="object-cover w-full h-full transition-transform duration-500"
                    loading="eager"
                  />
                  <AvatarFallback className="text-4xl bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    MT
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container px-10 py-24 relative mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-blue-500/10 to-transparent blur-3xl" />
        <div className="space-y-8 relative z-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              About Me
            </h2>
            <p className="text-muted-foreground/80 max-w-[600px] mx-auto">
              Passionate developer with experience of building scalable web
              applications and interactive games.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="group glass-card card-hover card-3d hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-500/20 hover:border-blue-400/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-400">
                  <Code className="h-5 w-5 neon-glow" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(skills).map(
                    ([category, skillList], catIdx) => (
                      <div
                        key={category}
                        className="space-y-2 animate-in slide-in-from-left duration-500"
                        style={{ animationDelay: `${catIdx * 100}ms` }}
                      >
                        <h4 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-400 neon-glow" />
                          {category}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill, idx) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="glass border border-blue-500/20 hover:border-blue-400/40 hover:neon-border transition-all duration-300 hover:scale-110 animate-in fade-in hover:bg-blue-500/20"
                              style={{
                                animationDelay: `${
                                  (catIdx * skillList.length + idx) * 30
                                }ms`,
                              }}
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card className="group glass-card card-hover card-3d hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border-2 border-purple-500/20 hover:border-purple-400/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-400">
                  <Palette className="h-5 w-5 neon-glow" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 group/item">
                  <Globe className="h-5 w-5 mt-0.5 text-blue-400 group-hover/item:scale-110 group-hover/item:neon-glow transition-all duration-300" />
                  <div>
                    <h4 className="font-semibold">Web Development</h4>
                    <p className="text-sm text-muted-foreground/80">
                      Building responsive and performant web applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group/item">
                  <Database className="h-5 w-5 mt-0.5 text-purple-400 group-hover/item:scale-110 group-hover/item:neon-glow transition-all duration-300" />
                  <div>
                    <h4 className="font-semibold">Backend Development</h4>
                    <p className="text-sm text-muted-foreground/80">
                      Creating robust APIs and database architectures
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 group/item">
                  <Gamepad2 className="h-5 w-5 mt-0.5 text-green-400 group-hover/item:scale-110 group-hover/item:neon-glow transition-all duration-300" />
                  <div>
                    <h4 className="font-semibold">Game Development</h4>
                    <p className="text-sm text-muted-foreground/80">
                      Designing interactive and engaging gaming experiences
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container px-4 py-24 relative mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />
        <div className="space-y-8 relative z-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text py-3">
              Featured Projects
            </h2>
            <p className="text-muted-foreground/80 max-w-[600px] mx-auto">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group glass-card card-hover card-3d overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-500/20 hover:border-blue-400/40"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFlMjkzYiIvPjwvc3ZnPg=="
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-1 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/80">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs glass border border-blue-500/20 hover:border-blue-400/40 hover:neon-border transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {/* Only show buttons if links are provided */}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="glass border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300"
                      >
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </Link>
                      </Button>
                    )}
                    {project.live && (
                      <Button
                        size="sm"
                        asChild
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 neon-border shadow-lg shadow-blue-500/30"
                      >
                        <Link href={project.live} target="_blank">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container px-4 py-24 relative mx-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent blur-3xl" />
        <div className="space-y-8 relative z-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent neon-text">
              Get In Touch
            </h2>
            <p className="text-muted-foreground/80 max-w-[600px] mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="group glass-card card-hover hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border-2 border-blue-500/20 hover:border-blue-400/40">
              <CardContent className="pt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    {[
                      {
                        icon: Mail,
                        text: "Email",
                        value: "tahaayaz7722@gmail.com",
                        color: "text-blue-400",
                      },
                      {
                        icon: Phone,
                        text: "Phone",
                        value: "+92-305-5800377",
                        color: "text-green-400",
                      },
                      {
                        icon: MapPin,
                        text: "Location",
                        value: "Lahore, Pakistan",
                        color: "text-red-400",
                      },
                    ].map(({ icon: Icon, text, value, color }) => (
                      <div
                        key={text}
                        className="flex items-center space-x-3 group/item"
                      >
                        <Icon
                          className={`h-5 w-5 ${color} group-hover/item:scale-110 group-hover/item:neon-glow transition-all duration-300`}
                        />
                        <div>
                          <p className="font-semibold">{text}</p>
                          <p className="text-sm text-muted-foreground/80">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4">
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 neon-border shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
                      size="lg"
                      asChild
                    >
                      <Link href="mailto:tahaayaz7722@gmail.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Email
                      </Link>
                    </Button>
                    <div className="flex justify-center space-x-4">
                      {[
                        { icon: Github, href: "https://github.com/tahaxd77" },
                        {
                          icon: Linkedin,
                          href: "https://www.linkedin.com/in/muhammad-taha-ayaz/",
                        },
                      ].map(({ icon: Icon, href }) => (
                        <Button
                          key={href}
                          variant="outline"
                          size="icon"
                          asChild
                          className="glass border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:neon-glow"
                        >
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
      <footer className="border-t border-blue-500/20 py-6 md:py-0 relative glass">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/5 via-purple-500/5 to-transparent blur-3xl" />
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row relative z-10">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Code className="h-6 w-6 text-blue-400 neon-glow" />
            <p className="text-center text-sm leading-loose text-muted-foreground/80 md:text-left">
              © {new Date().getFullYear()} Muhammad Taha.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
