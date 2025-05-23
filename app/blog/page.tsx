import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";
import { AnimatedBackground } from "@/components/animated-background";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Building a Modern Web Application with Next.js and TypeScript",
    excerpt:
      "Learn how to build a modern web application using Next.js and TypeScript, with a focus on performance and developer experience.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-modern-web-app-nextjs-typescript",
    category: "Web Development",
  },
  {
    id: "post-2",
    title: "Implementing Authentication in Next.js Applications",
    excerpt:
      "A comprehensive guide to implementing authentication in Next.js applications using NextAuth.js and various providers.",
    date: "April 22, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "implementing-authentication-nextjs",
    category: "Security",
  },
  {
    id: "post-3",
    title: "Creating Responsive Layouts with Tailwind CSS",
    excerpt:
      "Explore techniques for creating responsive layouts using Tailwind CSS, with practical examples and best practices.",
    date: "March 10, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "responsive-layouts-tailwind-css",
    category: "CSS",
  },
  {
    id: "post-4",
    title: "State Management in React: Context API vs. Redux",
    excerpt:
      "A comparison of state management approaches in React, focusing on the Context API and Redux, with use cases for each.",
    date: "February 28, 2023",
    readTime: "9 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "state-management-react-context-redux",
    category: "React",
  },
  {
    id: "post-5",
    title: "Building RESTful APIs with Node.js and Express",
    excerpt:
      "Learn how to build RESTful APIs using Node.js and Express, with a focus on best practices and performance optimization.",
    date: "January 15, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "building-restful-apis-nodejs-express",
    category: "Backend",
  },
  {
    id: "post-6",
    title: "Introduction to Web Accessibility (A11y)",
    excerpt:
      "An introduction to web accessibility principles and practices, with practical tips for making your websites more inclusive.",
    date: "December 5, 2022",
    readTime: "5 min read",
    image: "/placeholder.svg?height=400&width=600",
    slug: "introduction-web-accessibility",
    category: "Accessibility",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <main className="flex-1">
      <AnimatedBackground />

      <section className="py-16 md:py-24">
        <div className="container">
          <MotionWrapper>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-center">
              Blog
            </h1>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="text-muted-foreground text-center mb-12 max-w-[700px] mx-auto">
              Thoughts, tutorials, and insights on web development, programming,
              and technology.
            </p>
          </MotionWrapper>

          {/* Featured Post */}
          <MotionWrapper delay={0.2}>
            <div className="mb-16">
              <div className="group relative bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative aspect-video lg:aspect-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {featuredPost.date}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {featuredPost.readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <Button asChild className="w-fit rounded-full">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>

          {/* Recent Posts */}
          <div>
            <MotionWrapper delay={0.3}>
              <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            </MotionWrapper>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <MotionWrapper key={post.id} delay={0.3 + index * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="group">
                    <div className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                      <div className="aspect-video relative">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium">
                            {post.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {post.date}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
