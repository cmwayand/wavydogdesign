import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";

export default function AboutPage() {
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
							{/* Hidden for now
							<Link
								href="/work"
								className="text-white transition-colors hover:text-white/80"
							>
								Work
							</Link>
							*/}
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
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						{/* Hero Section */}
						<div className="flex flex-col items-center justify-center space-y-8 text-center mb-20">
							<h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
								About Wavy Dog Design
							</h1>
							<p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
								Transforming brands and websites through exceptional design, creative ideas and personality.
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
												className="object-contain scale-110"
											/>
										</div>
										<h2 className="font-display text-2xl font-bold mb-2">Claire Wayand</h2>
										<p className="text-lg text-primary mb-4">UX/UI, Web and Product Expert</p>
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
										<h2 className="font-display text-2xl font-bold mb-2">Lisa Wayand</h2>
										<p className="text-lg text-primary mb-4">Art Director, Space Planner, Branding and Print Production</p>
										<p className="text-muted-foreground leading-relaxed text-sm">
											With 30+ years of experience in print, production, and art direction, Lisa brings 
											expertise in art direction and customer experience design to Wavy Dog Design. She focuses 
											on creating cohesive visual narratives and ensuring every touchpoint delivers an 
											exceptional user experience.
										</p>
									</div>
								</div>
							</div>
						</div>


						{/* Services Focus Section */}
						<div className="max-w-[1000px] mx-auto space-y-8">
							<div className="text-center mb-12">
								<h2 className="font-display text-3xl font-bold mb-4">What We Do</h2>
								<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
									We specialize in creating exceptional websites and building strong brand identities 
									that help businesses stand out and connect with their audience.
								</p>
							</div>

							<div className="grid md:grid-cols-2 gap-8 mb-12">
								<div className="p-6 rounded-lg border bg-card">
									<h3 className="font-display text-xl font-semibold mb-3">Website Design & Development</h3>
									<p className="text-muted-foreground leading-relaxed">
										Modern, responsive websites optimized for performance and user experience. 
										From simple business sites to complex web applications.
									</p>
								</div>
								<div className="p-6 rounded-lg border bg-card">
									<h3 className="font-display text-xl font-semibold mb-3">Brand Identity & Logo Design</h3>
									<p className="text-muted-foreground leading-relaxed">
										Distinctive visual identities that capture your essence and resonate with your audience. 
										From logo design to complete brand guidelines.
									</p>
								</div>
							</div>

							{/* Detailed About Section */}
							<div className="prose prose-invert max-w-none space-y-6">
								<div className="bg-card border rounded-lg p-6">
									<h3 className="font-display text-xl font-semibold mb-4">Why Work With Us</h3>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Personalized Service:</strong> Direct collaboration with Claire ensures your vision is understood and executed perfectly.</span>
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
									</ul>
								</div>

								<div className="text-center mt-12">
									<p className="text-lg text-muted-foreground mb-6">
										Ready to transform your online presence? Let's create something extraordinary together.
									</p>
									<Link 
										href="/#contact" 
										className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
									>
										Get Started
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
