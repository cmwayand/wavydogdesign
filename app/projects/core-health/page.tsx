import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft } from "lucide-react";

export default function CoreHealthPage() {
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
						<Link
							href="/#work"
							className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
						>
							<ArrowLeft className="w-4 h-4" />
							Back to Our Work
						</Link>

						<div className="max-w-4xl mx-auto">
							<div className="mb-12">
								<span className="text-sm font-semibold text-primary mb-4 block">
									Optimizing Online Presence and Scaling Clients
								</span>
								<h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
									Core Health
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Comprehensive strategy for optimizing online presence and scaling client growth. 
									We will develop website optimization, brand positioning, and growth strategies to 
									significantly increase their digital footprint and client acquisition.
								</p>
							</div>

							<div className="prose prose-invert max-w-none space-y-6">
								<div>
									<h2 className="font-display text-2xl font-bold mb-4">What the Client Wanted</h2>
									<p className="text-muted-foreground leading-relaxed">
										Core Health needed to increase awareness and bookings for their thermography services. 
										They wanted to grow their niche revenue streams by reaching more potential patients 
										interested in thermography and establishing their practice as a trusted provider in 
										this specialized field. The goal was to drive a surge in thermography patients 
										through targeted digital marketing and improved online presence.
									</p>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Project Overview</h2>
									<p className="text-muted-foreground leading-relaxed">
										Core Health needs to optimize their online presence and scale their client 
										base. We will work with them to develop a comprehensive strategy that will improve 
										their website performance, brand positioning, and overall digital presence 
										to attract and convert more clients.
									</p>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Services to be Provided</h2>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Website Optimization:</strong> Will improve site performance, user experience, and conversion rates through strategic design and development updates.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Brand Positioning:</strong> Will develop a clear brand positioning strategy that differentiates them in the health and wellness market.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Growth Strategy:</strong> Will create comprehensive growth strategies focused on client acquisition and retention.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Digital Presence Enhancement:</strong> Will improve their overall digital footprint across multiple platforms and channels.</span>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Expected Results</h2>
									<p className="text-muted-foreground leading-relaxed">
										Through our optimization and scaling strategy, we expect Core Health to see a significant 
										increase in their digital footprint and client acquisition. The improved 
										website performance and brand positioning will help them attract more qualified 
										leads and convert them into long-term clients.
									</p>
									<p className="text-primary font-display text-lg font-semibold mt-4">
										Coming soon!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
