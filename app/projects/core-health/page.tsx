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
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
									Core Health
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Comprehensive strategy for optimizing online presence and scaling client growth. 
									Developed website optimization, brand positioning, and growth strategies that 
									significantly increased their digital footprint and client acquisition.
								</p>
							</div>

							{/* Before and After Website Section */}
							<div className="mb-16 space-y-8">
								<div className="text-center mb-8">
									<h2 className="text-2xl font-bold mb-2">Website Transformation</h2>
									<p className="text-muted-foreground">Before & After</p>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-3">
										<h3 className="text-lg font-semibold text-muted-foreground">BEFORE</h3>
										<div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
											<Image
												src="/headerimage2.png"
												alt="Core Health - Before"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<div className="space-y-3">
										<h3 className="text-lg font-semibold text-primary">AFTER</h3>
										<div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/30 bg-muted/20">
											<Image
												src="/corehealth.png"
												alt="Core Health - After"
												fill
												className="object-cover"
											/>
										</div>
									</div>
								</div>
							</div>

							{/* Logo and Branding Section */}
							<div className="mb-16 space-y-8">
								<div className="text-center mb-8">
									<h2 className="text-2xl font-bold mb-2">Logo & Branding Redesign</h2>
									<p className="text-muted-foreground">Improved visual identity</p>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-3">
										<h3 className="text-lg font-semibold text-muted-foreground">BEFORE</h3>
										<div className="relative aspect-square rounded-2xl overflow-hidden border border-border/50 bg-muted/20 flex items-center justify-center">
											<div className="text-center p-8">
												<div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 border border-border/50 flex items-center justify-center">
													<span className="text-2xl font-bold text-slate-400">CH</span>
												</div>
												<p className="text-sm text-muted-foreground">Old Logo</p>
											</div>
										</div>
									</div>
									<div className="space-y-3">
										<h3 className="text-lg font-semibold text-primary">AFTER</h3>
										<div className="relative aspect-square rounded-2xl overflow-hidden border border-primary/30 bg-muted/20 flex items-center justify-center">
											<div className="text-center p-8">
												<div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/20 to-purple-500/20 border-2 border-primary/30 flex items-center justify-center">
													<span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">CH</span>
												</div>
												<p className="text-sm text-muted-foreground">New Logo</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="prose prose-invert max-w-none space-y-6">
								<div>
									<h2 className="text-2xl font-bold mb-4">Project Overview</h2>
									<p className="text-muted-foreground leading-relaxed">
										Core Health needed to optimize their online presence and scale their client 
										base. We worked with them to develop a comprehensive strategy that improved 
										their website performance, brand positioning, and overall digital presence 
										to attract and convert more clients.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Services Provided</h2>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Website Optimization:</strong> Improved site performance, user experience, and conversion rates through strategic design and development updates.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Brand Positioning:</strong> Developed a clear brand positioning strategy that differentiates them in the health and wellness market.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Growth Strategy:</strong> Created comprehensive growth strategies focused on client acquisition and retention.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Digital Presence Enhancement:</strong> Improved their overall digital footprint across multiple platforms and channels.</span>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Results</h2>
									<p className="text-muted-foreground leading-relaxed">
										Through our optimization and scaling strategy, Core Health saw a significant 
										increase in their digital footprint and client acquisition. The improved 
										website performance and brand positioning helped them attract more qualified 
										leads and convert them into long-term clients.
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
