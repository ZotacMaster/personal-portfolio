import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Projects() {
    return (
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
    )
}