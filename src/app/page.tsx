import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="#" className="flex items-center space-x-2">
              <User />
              <span className="inline-block font-bold">Suchetan Chakraborty</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Suchetan Chakraborty
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Aspiring Full-Stack Developer | UI/UX Enthusiast | Open Source Contributor
              </p>
            </div>
            <div className="space-x-4">
              <Link href="https://github.com/ZotacMaster" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:suchetan005@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            I'm a student at the University of Engineering and Management (UEM) in Kolkata, India. In 
            addition to my studies i also enjoy building projects and contributing to open source.
            I'm always excited to explore new opportunities to apply my skills and gain
            real-world experience through projects, internships, or collaborations.
            <br />
            This portfolio showcases my early projects, skills, and aspirations as I work towards building a 
            successful career in Computer Science. Feel free to browse my work and get in touch!
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">My Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Blocks.io</CardTitle>
                <CardDescription>A simple blocks game made using React, still under development</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Technologies used: React, Node.js, TailwindCSS, ShadCN</p>
                <Link href="https://github.com/ZotacMaster/blocks.io" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4">View Project</Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Turtle Crossing game</CardTitle>
                <CardDescription>A simple turtle crossing game made ussing just the turtle python library</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Language used: Python</p>
                <Link href="https://github.com/ZotacMaster/TurtleCrossingGame" target="_blank" rel="noopener noreferrer">
                  <Button className="mt-4">View Project</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Contact Me</h2>
          <form className="max-w-md mx-auto space-y-4">
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            © 2023 Suchetan Chakraborty. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}