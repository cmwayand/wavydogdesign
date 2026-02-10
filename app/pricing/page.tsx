import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center text-xl font-bold">
            <Link href="/">
              <Image
                src="/wavydoglogo.svg"
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
                className="text-white transition-colors hover:text-white/80"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-white transition-colors hover:text-white/80"
              >
                About
              </Link>
              <Link
                href="/#pricing"
                className="text-white transition-colors hover:text-white/80"
              >
                Pricing
              </Link>
            </nav>
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-6">
          <Button variant="ghost" size="sm" asChild className="mb-8">
            <Link href="/#pricing" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Overview
            </Link>
          </Button>
        </div>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">Our Services & Pricing</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Transparent pricing for our core services. All packages can be customized to meet your specific needs.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 mt-12">
              {/* Logo Design */}
              <div className="rounded-xl border border-border/50 p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h2 className="font-display text-2xl font-bold mb-4">Logo Design</h2>
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
                    <p className="text-lg font-bold">$90/hour</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      or based on per project
                    </p>
                  </div>
                </div>
              </div>

              {/* Website Design & Build */}
              <div className="rounded-xl border border-border/50 p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h2 className="font-display text-2xl font-bold mb-4">Fully Custom Website</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">What's Included:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-1" />
                        <span>Custom website using Cursor or website builder</span>
                      </li>
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
                    <p className="text-lg font-bold">Starting at $700</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Professional websites that convert visitors into customers
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Management */}
              <div className="rounded-xl border border-border/50 p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h2 className="font-display text-2xl font-bold mb-4">Social Media Management</h2>
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
                    <p className="text-lg font-bold">$75/hour</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      or custom plan for $300-$800/mo
                    </p>
                  </div>
                </div>
              </div>

              {/* Marketing & SEO Growth */}
              <div className="rounded-xl border border-border/50 p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <h2 className="font-display text-2xl font-bold mb-4">Marketing and SEO Growth</h2>
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
                        <span>SEO optimization and growth</span>
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
                    <p className="text-lg font-bold">$75/hour</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      or based on needs
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