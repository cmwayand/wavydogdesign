import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Linkedin } from "lucide-react";

export default function AboutPage() {
	return (
		<div className="flex min-h-screen flex-col bg-white">
			<SiteHeader />

			<main className="flex-1">
				<section className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-28">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
						<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
							About Wavy Dog Design
						</h1>
						<p className="text-muted-foreground text-base md:text-lg leading-relaxed lg:pt-4">
							From UX/UI and web development to premium print production and brand identity, we bridge the gap between digital innovation and tangible craft.
						</p>
					</div>

						{/* Team Members Cards */}
						<div className="max-w-5xl mx-auto mb-20">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
								{/* Claire Card */}
								<div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
									<div className="flex flex-col items-center text-center">
										<div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-primary/30">
											<Image
												src="/claire.png"
												alt="Claire Wayand"
												fill
												className="object-cover"
											/>
										</div>
										<h2 className="font-serif text-2xl font-bold mb-2">Claire Wayand</h2>
										<p className="text-lg text-primary mb-4">UX/UI, web and digital expert</p>
										<div className="mb-4">
											<Link
												href="https://www.linkedin.com/in/clairewayand/"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors"
												aria-label="Claire's LinkedIn"
											>
												<Linkedin className="h-5 w-5" />
											</Link>
										</div>
										<p className="text-muted-foreground leading-relaxed text-sm">
											With 8 years in graphic design and 5 years in UX/UI product and marketing, 
											Claire leads Wavy Dog Design with a passion for creating stunning websites and 
											compelling brand identities. Her expertise spans from initial concept 
											development to final implementation, ensuring every project reflects 
											your unique vision and drives results.
										</p>
									</div>
								</div>

								{/* Lisa Card */}
								<div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
									<div className="flex flex-col items-center text-center">
										<div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-primary/30">
											<Image
												src="/lisaabout.png"
												alt="Lisa Wayand"
												fill
												className="object-cover"
											/>
										</div>
										<h2 className="font-serif text-2xl font-bold mb-2">Lisa Wayand</h2>
										<p className="text-lg text-primary mb-4">Art director, print /production specialist</p>
										<div className="mb-4">
											<Link
												href="https://www.linkedin.com/in/lisa-wayand-65a530b/"
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors"
												aria-label="Lisa's LinkedIn"
											>
												<Linkedin className="h-5 w-5" />
											</Link>
										</div>
										<p className="text-muted-foreground leading-relaxed text-sm">
											With 30+ years of experience in print, production, and art direction, Lisa brings 
											expertise in art direction and customer experience design to Wavy Dog Design. She focuses 
											on creating cohesive visual narratives and ensuring every touchpoint delivers an 
											exceptional user experience.
										</p>
									</div>
								</div>
							</div>
							
							{/* Image Section */}
							<div className="max-w-4xl mx-auto mt-16 mb-20">
								<div className="relative aspect-[3/1] rounded-2xl overflow-hidden border border-border/50">
									<Image
										src="/cvillesign.jpg"
										alt="Charlottesville Sign"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>

						{/* Detailed About Section */}
						<div className="max-w-[1000px] mx-auto space-y-8">
							<div className="prose max-w-none space-y-6">
								<div className="bg-card border rounded-lg p-6">
									<h3 className="font-serif text-xl font-semibold mb-4">Why Work With Us</h3>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Personalized Service:</strong> Direct collaboration with Claire and Lisa ensures your vision is understood and executed perfectly.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Proven Expertise:</strong> Years of experience creating websites and brand identities that deliver results.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Modern Design:</strong> We stay current with the latest design trends and web technologies.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Client-Focused:</strong> Clear communication, transparency, and a deep understanding of your business objectives.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Production and Print Specialist:</strong> 20+ years of experience in print production and art direction.</span>
										</li>
									</ul>
								</div>

								<div className="text-center mt-12">
									<p className="text-lg text-muted-foreground mb-6">
										Ready to transform your online presence? Let's create something extraordinary together.
									</p>
									<Link 
										href="/#contact" 
										className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-medium hover:opacity-90 transition-opacity"
									>
										Get Started
									</Link>
								</div>
							</div>
						</div>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
