"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with Wavy Dog Design transformed our brand. Their attention to detail and creative solutions exceeded our expectations.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Founder, GreenEats",
    content: "The team delivered an amazing website that perfectly captures our restaurant's atmosphere. Our online orders have increased significantly.",
    rating: 5
  },
  {
    name: "Emily Brown",
    role: "Marketing Director, FitLife",
    content: "Their social media management has been game-changing for our fitness brand. Engagement is up and we're seeing real growth.",
    rating: 5
  }
]

export default function WorkPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Link href="/">
              <Image
                src="/wavydog long logo.svg"
                width={250}
                height={50}
                alt="logo"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/#services" className="transition-colors hover:text-foreground/80">
                Services
              </Link>
              <Link href="/work" className="transition-colors hover:text-foreground/80">
                Work
              </Link>
              <Link href="/about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="/#pricing" className="transition-colors hover:text-foreground/80">
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Projects Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Work</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Check out some of our recent projects
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 mt-12 md:gap-16">
              {/* Project 1 */}
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/project1.jpg"
                    alt="Project 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Local Restaurant Website</h2>
                  <p className="text-muted-foreground">
                    Complete brand refresh and website redesign for a popular local restaurant. 
                    Included custom photography, menu design, and online ordering integration.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/project2.jpg"
                    alt="Project 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Fitness Brand Identity</h2>
                  <p className="text-muted-foreground">
                    Brand identity development and social media strategy for a growing fitness brand.
                    Resulted in 200% increase in social media engagement.
                  </p>
                </div>
              </div>

              {/* Project 3 */}
              <div className="grid gap-6 lg:grid-cols-2 items-center">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src="/project3.jpg"
                    alt="Project 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Tech Startup Marketing</h2>
                  <p className="text-muted-foreground">
                    Comprehensive marketing campaign including website design, digital advertising,
                    and content strategy for a tech startup launch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Client Testimonials</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  What our clients say about working with us
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl mt-12">
              <div className="relative bg-background rounded-lg p-8 shadow-sm">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg">{testimonials[currentTestimonial].content}</p>
                  <div>
                    <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={previousTestimonial}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 