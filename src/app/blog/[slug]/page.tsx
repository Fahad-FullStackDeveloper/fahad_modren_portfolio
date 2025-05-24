"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MotionWrapper } from "@/components/motion-wrapper";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  category: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Building a Modern Web Application with Next.js and TypeScript",
    excerpt:
      "Learn how to build a modern web application using Next.js and TypeScript, with a focus on performance and developer experience.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=600&width=1200",
    slug: "building-modern-web-app-nextjs-typescript",
    category: "Web Development",
    content: `
      # Building a Modern Web Application with Next.js and TypeScript

      Next.js has become one of the most popular React frameworks for building modern web applications. Combined with TypeScript, it provides a powerful and type-safe development experience.

      ## Why Next.js?

      Next.js offers several advantages for modern web development:

      - **Server-Side Rendering (SSR)**: Improves performance and SEO
      - **Static Site Generation (SSG)**: Pre-renders pages at build time
      - **API Routes**: Build API endpoints as part of your Next.js application
      - **File-based Routing**: Simplified routing based on file structure
      - **Built-in CSS and Sass Support**: Easy styling options
      - **Fast Refresh**: Instant feedback during development

      ## Getting Started

      To create a new Next.js project with TypeScript, you can use the following command:

      \`\`\`bash
      npx create-next-app@latest my-app --typescript
      \`\`\`

      This will set up a new Next.js project with TypeScript configuration.

      ## Project Structure

      A typical Next.js project structure looks like this:

      \`\`\`
      ├── pages/
      │   ├── _app.tsx
      │   ├── _document.tsx
      │   ├── index.tsx
      │   └── api/
      ├── public/
      ├── styles/
      ├── components/
      ├── lib/
      ├── types/
      ├── next.config.js
      ├── tsconfig.json
      └── package.json
      \`\`\`

      ## Building Components

      Let's create a simple component in TypeScript:

      \`\`\`tsx
      // components/Button.tsx
      import React from 'react';

      interface ButtonProps {
        text: string;
        onClick?: () => void;
        variant?: 'primary' | 'secondary' | 'outline';
        disabled?: boolean;
      }

      export const Button: React.FC<ButtonProps> = ({
        text,
        onClick,
        variant = 'primary',
        disabled = false
      }) => {
        return (
          <button
            onClick={onClick}
            disabled={disabled}
            className={\`px-4 py-2 rounded-md \${
              variant === 'primary'
                ? 'bg-blue-500 text-white'
                : variant === 'secondary'
                ? 'bg-gray-200 text-gray-800'
                : 'border border-gray-300 bg-transparent'
            }\`}
          >
            {text}
          </button>
        );
      };
      \`\`\`

      ## Routing in Next.js

      Next.js uses a file-based routing system. Each file in the \`pages\` directory becomes a route.

      \`\`\`tsx
      // pages/index.tsx - accessible at /
      // pages/about.tsx - accessible at /about
      // pages/blog/[slug].tsx - accessible at /blog/:slug
      \`\`\`

      ## Data Fetching

      Next.js provides several methods for data fetching:

      ### getStaticProps

      \`\`\`tsx
      // pages/blog/index.tsx
      import { GetStaticProps } from 'next';

      interface Post {
        id: string;
        title: string;
        excerpt: string;
      }

      interface BlogProps {
        posts: Post[];
      }

      export const getStaticProps: GetStaticProps<BlogProps> = async () => {
        // Fetch data from an API
        const res = await fetch('https://api.example.com/posts');
        const posts = await res.json();

        return {
          props: {
            posts,
          },
          revalidate: 60, // Regenerate page every 60 seconds
        };
      };

      export default function Blog({ posts }: BlogProps) {
        return (
          <div>
            <h1>Blog</h1>
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        );
      }
      \`\`\`

      ## Conclusion

      Next.js and TypeScript provide a powerful combination for building modern web applications. With features like server-side rendering, static site generation, and type safety, you can create fast, reliable, and maintainable applications.

      In future articles, we'll explore more advanced topics like authentication, state management, and deployment strategies.
    `,
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post =
    blogPosts.find((post) => post.slug === params.slug) || blogPosts[0];

  return (
    <main className="flex-1">
      <article className="py-8 md:py-12">
        <div className="container max-w-4xl">
          <MotionWrapper>
            <Button asChild variant="ghost" className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="relative aspect-[16/9] mb-10 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {post.content.split("\n").map((line, index) => {
                if (line.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {line.replace("# ", "")}
                    </h1>
                  );
                } else if (line.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                      {line.replace("## ", "")}
                    </h2>
                  );
                } else if (line.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                      {line.replace("### ", "")}
                    </h3>
                  );
                } else if (line.startsWith("```")) {
                  return null; // Skip code block markers, we'll handle them separately
                } else if (line.trim() === "") {
                  return <br key={index} />;
                } else {
                  return (
                    <p key={index} className="mb-4">
                      {line}
                    </p>
                  );
                }
              })}
            </div>
          </MotionWrapper>
        </div>
      </article>
    </main>
  );
}
