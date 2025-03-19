import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CartDisplay } from "@/components/cart-display"
import { MobileMenu } from "@/components/MobileMenu";

export default function ShopPage() {
  const navLinks = [
    { href: "/shop", label: "Shop" },
    { href: "/shop/cart", label: "Cart" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Shop Navigation */}
      <nav className="w-full border-b bg-background">
        <div className="container flex h-14 items-center justify-between px-4 md:px-6">
          <Link href="/shop" className="font-semibold">
            Shop
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/shop/cart" className="hidden md:flex">
              <CartDisplay />
            </Link>
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </nav>

      {/* Featured Templates */}
      <section className="w-full pt-12 pb-8 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Templates</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our most popular and newest website templates
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8 max-w-5xl mx-auto">
            {featuredTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden max-w-xs hover:shadow-lg transition-shadow">
                <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-primary/10 to-primary/30 group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      {template.id === "1" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" y1="17" x2="18" y2="17"></line></svg>
                      )}
                      {template.id === "2" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path></svg>
                      )}
                      {template.id === "3" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                      )}
                    </div>
                  </div>
                  {template.featured && (
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Featured</Badge>
                  )}
                </div>
                <CardHeader className="pt-3 pb-2">
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <div className="flex items-center space-x-1 text-amber-500">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < template.rating ? "fill-current" : "text-muted"}`} />
                      ))}
                    <span className="text-xs text-muted-foreground ml-2">({template.reviews} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{template.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <div className="font-bold">${template.price}</div>
                  <Link href={`/shop/templates/${template.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/shop/templates">
              <Button variant="outline" size="lg">
                View All Templates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why Choose Our Templates?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Premium quality templates built with the latest technologies
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mt-8">
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fully Responsive</h3>
              <p className="text-center text-muted-foreground">
                All templates are fully responsive and work perfectly on all devices.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Modern Design</h3>
              <p className="text-center text-muted-foreground">
                Clean, modern designs that follow the latest web design trends.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-background">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Well Documented</h3>
              <p className="text-center text-muted-foreground">
                Comprehensive documentation to help you customize and deploy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Sample data
const featuredTemplates = [
  {
    id: "1",
    title: "Restaurant Pro",
    description: "A premium template for restaurants and cafes with online ordering capabilities.",
    price: 79,
    rating: 5,
    reviews: 24,
    featured: true,
  },
  {
    id: "2",
    title: "Portfolio Plus",
    description: "Showcase your work with this elegant portfolio template for creatives.",
    price: 59,
    rating: 4,
    reviews: 18,
    featured: false,
  },
  {
    id: "3",
    title: "E-Commerce Starter",
    description: "Start selling online with this complete e-commerce solution.",
    price: 99,
    rating: 5,
    reviews: 32,
    featured: true,
  },
]
