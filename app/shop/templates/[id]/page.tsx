"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useCart } from "@/app/context/cart"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CartDisplay } from "@/components/cart-display"

// This would typically come from a database
const templateData = {
  "1": {
    id: "1",
    title: "Restaurant Pro",
    description: "A premium template for restaurants and cafes with online ordering capabilities.",
    fullDescription: `Create an impressive online presence for your restaurant with our Restaurant Pro template. This fully-featured solution includes everything you need to showcase your menu, handle reservations, and manage online orders.

Features:
• Modern, responsive design
• Online ordering system
• Menu management
• Reservation system
• Photo gallery
• Contact form
• SEO optimized
• Mobile-first approach`,
    price: 79,
    featured: true,
    demoUrl: "https://restaurant-pro-demo.example.com",
  }
}

export default function TemplateDetails({ params }: { params: { id: string } }) {
  const { dispatch } = useCart()
  const template = templateData[params.id as keyof typeof templateData]
  
  if (!template) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-6">
          <div className="flex items-center justify-between w-full">
            <Link href="/shop" className="flex items-center text-sm font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
            <Link href="/shop/cart">
              <CartDisplay />
            </Link>
          </div>
        </div>
      </nav>

      {/* Template Details */}
      <div className="container px-4 py-8 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {/* Preview Section */}
          <div className="space-y-4">
            <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/30">
              <div className="flex h-full items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
                    <line x1="6" y1="17" x2="18" y2="17" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full"
              >
                <Button className="w-full">View Live Demo</Button>
              </a>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-3xl font-bold">{template.title}</h1>
                {template.featured && (
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                )}
              </div>

              <div className="text-3xl font-bold">${template.price}</div>
            </div>
            
            <div className="space-y-4">
              <div className="prose max-w-none">
                <p className="text-muted-foreground">{template.fullDescription}</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <Button
                size="lg"
                className="w-full"
                onClick={() => {
                  dispatch({
                    type: "ADD_ITEM",
                    payload: {
                      id: template.id,
                      title: template.title,
                      price: template.price,
                      quantity: 1
                    }
                  })
                }}
              >
                Add to Cart
              </Button>
              <Link href="/shop/cart" className="w-full">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
