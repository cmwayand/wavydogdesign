import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/#pricing">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
      </div>
      
      <h1 className="text-4xl font-bold mb-8">Service Packages & Pricing</h1>
      
      <div className="grid gap-12">
        {/* Website Design */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Website Design</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Basic Website</h3>
              <p className="text-muted-foreground mb-4">Starting at $2,000</p>
              <ul className="space-y-2 mb-6">
                <li>• Up to 5 pages</li>
                <li>• Mobile responsive design</li>
                <li>• Basic SEO setup</li>
                <li>• Contact form</li>
                <li>• Basic analytics</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-6 border-primary bg-primary/5">
              <h3 className="text-xl font-bold mb-2">Business Website</h3>
              <p className="text-muted-foreground mb-4">Starting at $8,000</p>
              <ul className="space-y-2 mb-6">
                <li>• Up to 10 pages</li>
                <li>• Advanced responsive design</li>
                <li>• Advanced SEO optimization</li>
                <li>• Custom forms and integrations</li>
            
                <li>• Reporting and analytics</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Custom Solution</h3>
              <p className="text-muted-foreground mb-4">Starting at $12,000</p>
              <ul className="space-y-2 mb-6">
                <li>• 10+ pages</li>
                <li>• Custom functionality</li>
                <li>• Full SEO strategy</li>
                <li>• Custom integrations</li>
                <li>• Advanced e-commerce</li>
                <li>• Maintenance plans available</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Social Media Management */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Social Media Management</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Starter Package</h3>
              <p className="text-muted-foreground mb-4">$600/month</p>
              <ul className="space-y-2 mb-6">
                <li>• 3 posts per week</li>
                <li>• 2 platforms</li>
                <li>• Basic engagement</li>
                <li>• Monthly analytics</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-6 border-primary bg-primary/5">
              <h3 className="text-xl font-bold mb-2">Growth Package</h3>
              <p className="text-muted-foreground mb-4">$1,000/month</p>
              <ul className="space-y-2 mb-6">
                <li>• 5 posts per week</li>
                <li>• 3 platforms</li>
                <li>• Story/Reel creation</li>
                <li>• Community management</li>
                <li>• Bi-weekly analytics</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Enterprise Package</h3>
              <p className="text-muted-foreground mb-4">$1,500+/mo</p>
              <ul className="space-y-2 mb-6">
                <li>• Custom posting schedule</li>
                <li>• All major platforms</li>
                <li>• Premium content creation</li>
                <li>• Full community management</li>
                <li>• Weekly analytics & strategy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Marketing Services */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Marketing Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Basic Marketing</h3>
              <p className="text-muted-foreground mb-4">Starting at $750/month</p>
              <ul className="space-y-2 mb-6">
                <li>• Brand strategy</li>
                <li>• Email marketing setup</li>
                <li>• Basic content creation</li>
                <li>• Monthly reporting</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-6 border-primary bg-primary/5">
              <h3 className="text-xl font-bold mb-2">Growth Marketing</h3>
              <p className="text-muted-foreground mb-4">Starting at $1,500/month</p>
              <ul className="space-y-2 mb-6">
                <li>• Comprehensive strategy</li>
                <li>• Content calendar</li>
                <li>• Email campaigns</li>
                <li>• Ad management</li>
                <li>• Bi-weekly reporting</li>
              </ul>
            </div>
            
            <div className="rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-2">Full Service Marketing</h3>
              <p className="text-muted-foreground mb-4">Custom Pricing</p>
              <ul className="space-y-2 mb-6">
                <li>• Full marketing strategy</li>
                <li>• Premium content creation</li>
                <li>• Marketing automation</li>
                <li>• Advanced analytics</li>
                <li>• UX/UI design improvements</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-6">
          All packages can be customized to meet your specific needs. Contact us for a personalized quote.
        </p>
        <Button asChild size="lg">
          <Link href="/#contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
} 