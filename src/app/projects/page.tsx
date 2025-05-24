import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { AnimatedBackground } from "@/components/animated-background";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  category: "basic" | "advanced" | "ai";
}

const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/fahadkhakwani/ecommerce",
    featured: true,
    category: "advanced",
  },
  {
    id: "project-2",
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates blog posts, social media content, and marketing copy.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "OpenAI API", "Express", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/fahadkhakwani/ai-content",
    featured: true,
    category: "ai",
  },
  {
    id: "project-3",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/fahadkhakwani/task-app",
    featured: false,
    category: "basic",
  },
  {
    id: "project-4",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current and forecasted weather data for multiple locations.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["JavaScript", "HTML/CSS", "Weather API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/fahadkhakwani/weather-app",
    featured: false,
    category: "basic",
  },
  {
    id: "project-5",
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with private messaging, group chats, and file sharing capabilities.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/fahadkhakwani/chat-app",
    featured: false,
    category: "advanced",
  },
  {
    id: "project-6",
    title: "AI Image Generator",
    description:
      "An application that generates images based on text prompts using AI models.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/fahadkhakwani/ai-image-generator",
    featured: false,
    category: "ai",
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured);
  const basicProjects = projects.filter(
    (project) => project.category === "basic"
  );
  const advancedProjects = projects.filter(
    (project) => project.category === "advanced" && !project.featured
  );
  const aiProjects = projects.filter(
    (project) => project.category === "ai" && !project.featured
  );

  return (
    <main className="flex-1">
      <AnimatedBackground />

      <section className="py-16 md:py-24">
        <div className="container">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
              My Projects
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="text-muted-foreground text-center mb-12 max-w-[700px] mx-auto">
              Explore my portfolio of web development projects, from simple
              applications to complex full-stack solutions and AI-powered tools.
            </p>
          </MotionWrapper>

          {/* Featured Projects */}
          <div className="mb-16">
            <MotionWrapper delay={0.2}>
              <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <MotionWrapper key={project.id} delay={0.2 + index * 0.1}>
                  <div className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6 relative">
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Button asChild size="sm" className="rounded-full">
                          <Link href={project.demoUrl} target="_blank">
                            Live Demo
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-1 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* Basic Projects */}
          <div className="mb-16">
            <MotionWrapper delay={0.3}>
              <h2 className="text-2xl font-bold mb-8">Basic Projects</h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {basicProjects.map((project, index) => (
                <MotionWrapper key={project.id} delay={0.3 + index * 0.1}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3"
                        >
                          <Link href={project.demoUrl} target="_blank">
                            Demo
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* Advanced Projects */}
          <div className="mb-16">
            <MotionWrapper delay={0.4}>
              <h2 className="text-2xl font-bold mb-8">Advanced Projects</h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedProjects.map((project, index) => (
                <MotionWrapper key={project.id} delay={0.4 + index * 0.1}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3"
                        >
                          <Link href={project.demoUrl} target="_blank">
                            Demo
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>

          {/* AI Projects */}
          <div>
            <MotionWrapper delay={0.5}>
              <h2 className="text-2xl font-bold mb-8">AI Projects</h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiProjects.map((project, index) => (
                <MotionWrapper key={project.id} delay={0.5 + index * 0.1}>
                  <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3"
                        >
                          <Link href={project.demoUrl} target="_blank">
                            Demo
                            <ArrowUpRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          variant="ghost"
                          className="h-8 px-3"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github className="mr-1 h-3 w-3" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
