import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { AnimatedBackground } from "@/components/animated-background";

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AnimatedBackground />

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper>
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Fahad Khakwani"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
            </MotionWrapper>

            <div>
              <MotionWrapper delay={0.1}>
                <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                  About Me
                </h1>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <p className="text-muted-foreground mb-6">
                  Hello! I'm Fahad Khakwani, a passionate Full Stack Developer
                  with expertise in building modern web applications. I
                  specialize in creating responsive, accessible, and performant
                  websites that provide exceptional user experiences.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.3}>
                <p className="text-muted-foreground mb-6">
                  With a strong foundation in both frontend and backend
                  technologies, I enjoy tackling complex problems and turning
                  ideas into reality. I'm constantly learning and exploring new
                  technologies to stay at the forefront of web development.
                </p>
              </MotionWrapper>

              <MotionWrapper delay={0.4}>
                <h2 className="text-2xl font-bold mb-4">My Skills</h2>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "PostgreSQL",
                    "Tailwind CSS",
                    "HTML/CSS",
                    "Git",
                    "AWS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.5}>
                <Button asChild className="rounded-full">
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container">
          <MotionWrapper>
            <h2 className="font-heading text-3xl font-bold tracking-tighter mb-8 text-center">
              My Journey
            </h2>
          </MotionWrapper>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <MotionWrapper delay={0.1}>
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-1">
                    Senior Full Stack Developer
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Company Name • 2022 - Present
                  </p>
                  <p>
                    Leading development of web applications, mentoring junior
                    developers, and implementing best practices for code quality
                    and performance.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.2}>
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-1">
                    Full Stack Developer
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Company Name • 2020 - 2022
                  </p>
                  <p>
                    Developed and maintained web applications using React,
                    Node.js, and MongoDB. Collaborated with design and product
                    teams to deliver high-quality features.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.3}>
                <div className="relative pl-8 border-l-2 border-primary/20">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-1">Frontend Developer</h3>
                  <p className="text-muted-foreground mb-2">
                    Company Name • 2018 - 2020
                  </p>
                  <p>
                    Built responsive user interfaces using HTML, CSS, and
                    JavaScript. Worked with React to create interactive web
                    applications.
                  </p>
                </div>
              </MotionWrapper>

              <MotionWrapper delay={0.4}>
                <div className="relative pl-8">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-bold mb-1">
                    Computer Science Degree
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    University Name • 2014 - 2018
                  </p>
                  <p>
                    Bachelor's degree in Computer Science with focus on software
                    development and algorithms.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
