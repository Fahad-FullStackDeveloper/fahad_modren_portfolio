import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Briefcase, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MotionWrapper } from "@/components/motion-wrapper"
import { AnimatedBackground } from "@/components/animated-background"

export default function HomePage() {
  return (
    <main className="flex-1">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36">
        <div className="container flex flex-col items-center text-center">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl tracking-widest mb-6">
              <span className="text-gradient">Fahad Khakwani</span>
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-[700px]">
              Full Stack Developer crafting modern web experiences with cutting-edge technologies
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="relative w-full max-w-[900px] aspect-video rounded-lg overflow-hidden glass-effect">
              <Image
                src="/Featured Project.png?height=600&width=900"
                alt="Fahad Khakwani's Projects"
                width={900}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                <h3 className="text-xl font-bold mb-2">Featured Project</h3>
                <p className="text-muted-foreground">AI-Powered Web Application</p>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <MotionWrapper>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tighter mb-8 text-center">What I Do</h2>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionWrapper delay={0.1}>
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-muted-foreground">
                  Building responsive, accessible, and performant web applications using modern frameworks and
                  technologies.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.2}>
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Full Stack Solutions</h3>
                <p className="text-muted-foreground">
                  Developing end-to-end solutions with robust backends, efficient APIs, and intuitive frontends.
                </p>
              </div>
            </MotionWrapper>

            <MotionWrapper delay={0.3}>
              <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Technical Writing</h3>
                <p className="text-muted-foreground">
                  Sharing knowledge through detailed blog posts, tutorials, and documentation on web development topics.
                </p>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <MotionWrapper>
            <div className="rounded-lg p-8 md:p-12 glossy-gradient text-white">
              <div className="max-w-[600px] mx-auto text-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
                <p className="text-white/80 mb-8">
                  Have a project in mind? I'm available for freelance work and collaborations.
                </p>
                <Button asChild size="lg" variant="secondary" className="rounded-full">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </main>
  )
}
