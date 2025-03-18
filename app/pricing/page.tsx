import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
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
              <Link 
                href="/#services"
                className="transition-colors hover:text-foreground/80"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-foreground/80"
              >
                About
              </Link>
              <Link
                href="/#pricing"
                className="transition-colors hover:text-foreground/80"
              >
                Pricing
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services & Pricing</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Transparent pricing for our core services. All packages can be customized to meet your specific needs.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 mt-12">
              {/* Logo & Branding */}
              <div className="rounded-lg border p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Logo & Branding</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">What's Included:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Logo design with multiple concepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Brand style guide</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Business card & letterhead design</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-lg font-bold">Starting at $750</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Perfect for new businesses or rebranding projects
                    </p>
                  </div>
                </div>
              </div>

              {/* Website Design & Build */}
              <div className="rounded-lg border p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Website Design & Build</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">What's Included:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Custom responsive design</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Up to 5 core pages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Basic SEO setup</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-lg font-bold">Starting at $2,500</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Professional websites that convert visitors into customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Design & Management */}
              <div className="rounded-lg border p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Social Media Management</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">What's Included:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>3-5 posts per week</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Content creation & scheduling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Monthly analytics reports</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-lg font-bold">Starting at $500/month</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Consistent social media presence and growth
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing Design & Growth */}
              <div className="rounded-lg border p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">Marketing Design & Growth</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">What's Included:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Marketing strategy development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Digital & print materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Campaign management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-lg font-bold">Starting at $1,000/month</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Comprehensive marketing solutions for business growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Ready to start your project? Contact us for a personalized quote.
              </p>
              <Button asChild size="lg">
                <Link href="/#contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 