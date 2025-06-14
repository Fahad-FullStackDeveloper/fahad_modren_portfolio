import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Instagram } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Fahad Khakwani. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="https://github.com/Fahad-FullStackDeveloper"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-muted"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/FahadKhakwani25"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-muted"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/fahad-khakwani/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-muted"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://www.instagram.com/fahad.khakwani/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-muted"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="mailto:fahadyousufkhakwani@gmail.com"
            className="rounded-full p-2 transition-colors hover:bg-muted"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
