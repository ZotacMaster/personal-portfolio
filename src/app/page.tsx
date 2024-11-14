import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, User } from "lucide-react"
import Link from "next/link"

import NavigationBar from "./website-components/navbar"
import HeroSection from "./website-components/hero-section"
import About from "./website-components/about"
import Projects from "./website-components/projects"
import Contact from "./website-components/contact"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <NavigationBar />
      <HeroSection />
      <About/>
      <Projects/>
      <Contact/>

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