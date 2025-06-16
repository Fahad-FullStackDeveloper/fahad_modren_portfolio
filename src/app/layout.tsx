import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import localFont from "next/font/local"
import "@/app/globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = localFont({
  src: "../assets/fonts/Britney-Regular.woff2",
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Fahad Khakwani | Full Stack Developer",
  description: "Full Stack Developer specializing in modern web technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahadkhakwani.com",
    title: "Fahad Khakwani | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    siteName: "Fahad Khakwani",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Khakwani | Full Stack Developer",
    description: "Full Stack Developer specializing in modern web technologies",
    creator: "@fahadkhakwani",
  },
  icons: {
    icon: "/favicon.ico", // Main tab icon
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // Optional for Apple devices
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <Suspense>
              <div className="flex-1">{children}</div>
            </Suspense>
            <SiteFooter />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
