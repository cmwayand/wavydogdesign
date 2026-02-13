"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import {
	ArrowRight,
	Palette,
	Globe,
	MessageSquare,
	PenTool,
	Linkedin,
	Star,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";

const testimonials = [
	{
		name: "Brook Henley",
		role: "Henley's Orchard",
		content: "Claire was wonderful to work with. She is very responsive and gave us timely feedback and quotes. Her work is impeccable and helped us grow our online presence.",
		rating: 5,
	},
	{
		name: "Cindy Stillwell",
		role: "Core Health",
		content: "I enjoyed working with Claire. Her attention to detail and empathy towards my needs is just what I was looking for!",
		rating: 5,
	},
	{
		name: "Philip Hamilton",
		role: "Hamilton Legal Services",
		content: "I did not know that I needed to update my branding and website, but Claire exceeded my expectations and delivered the best solution!",
		rating: 5,
	},
];

const portfolioProjects = [
	{
		title: "Ads and Marketing",
		description: "Strategic advertising and marketing campaigns that drive engagement, increase visibility, and grow your business.",
		image: "/henleypost3.png",
		category: "Marketing and Growth",
		slug: "ads-and-marketing",
	},
	{
		title: "Logos, Branding, Packaging",
		description: "Complete brand identity design including logos, color palettes, typography, and visual identity systems.",
		image: "/gardenlogo.jpg",
		category: "Branding and Web Design",
		slug: "logos-and-branding",
	},
	{
		title: "Print and Production",
		description: "Complete brand identity design including logos, color palettes, typography, and visual identity systems.",
		image: "/printcover.png",
		category: "Branding and Web Design",
		slug: "print-and-production",
	},
	{
		title: "UX/UI, Websites, Apps",
		description: "UX audits, web design, and digital designs that create intuitive user experiences and beautiful interfaces.",
		image: "/iphoneslanding.png",
		category: "Web Design and Development",
		slug: "ux-and-websites",
	},
	{
		title: "Illustrations and Art",
		description: "Hand-drawn logos, custom illustrations, and artistic designs that bring unique character and personality to your brand.",
		image: "/manatee.jpg",
		category: "Art and Design",
		slug: "illustrations-and-art",
	},
];

export default function Home() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	
	// Generate particle positions once
	const particles = useMemo(() => {
		return Array.from({ length: 20 }).map((_, i) => ({
			id: i,
			size: Math.random() * 8 + 4,
			left: Math.random() * 100,
			top: Math.random() * 100,
			duration: Math.random() * 3 + 2,
			delay: Math.random() * 2,
		}));
	}, []);
	
	const purpleParticles = useMemo(() => {
		return Array.from({ length: 15 }).map((_, i) => ({
			id: i,
			size: Math.random() * 12 + 6,
			left: Math.random() * 100,
			top: Math.random() * 100,
			duration: Math.random() * 4 + 3,
			delay: Math.random() * 2,
		}));
	}, []);

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const previousTestimonial = () => {
		setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full">
				<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
					<div className="flex gap-2 items-center text-xl font-bold">
						<Image
							src="/wavydoglogo.svg"
							width={250}
							height={50}
							alt="Wavy Dog Design Logo"
							priority
						/>
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
						{/* Shop button - commented out for now
						<Button asChild>
							<Link href="/shop" rel="noopener noreferrer">
								Shop
							</Link>
						</Button>
						*/}
					</div>
				</div>
			</header>
			<main className="flex-1">
				<section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 min-h-[90vh] flex items-center">
					{/* Dark gradient background */}
					<div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
					
					{/* Abstract glowing lines and particles radiating outward */}
					<div className="absolute inset-0 overflow-hidden">
						{/* Central glowing orb */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>
						
						{/* Radiating lines effect */}
						<div className="absolute inset-0">
							{/* Multiple radiating lines */}
							{[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
								<div
									key={i}
									className="absolute top-1/2 left-1/2 origin-center w-0.5 h-full opacity-30"
									style={{
										transform: `translate(-50%, -50%) rotate(${angle}deg)`,
										background: 'linear-gradient(to bottom, transparent, hsl(217.2 91.2% 59.8% / 0.3), transparent)',
										animation: `pulse 3s ease-in-out infinite`,
										animationDelay: `${i * 0.2}s`,
									}}
								/>
							))}
						</div>
						
						{/* Glowing particles */}
						{particles.map((particle) => (
							<div
								key={particle.id}
								className="absolute rounded-full bg-primary/20 blur-sm"
								style={{
									width: `${particle.size}px`,
									height: `${particle.size}px`,
									left: `${particle.left}%`,
									top: `${particle.top}%`,
									animation: `float ${particle.duration}s ease-in-out infinite`,
									animationDelay: `${particle.delay}s`,
								}}
							/>
						))}
						
						{/* Purple accent particles */}
						{purpleParticles.map((particle) => (
							<div
								key={`purple-${particle.id}`}
								className="absolute rounded-full bg-purple-500/15 blur-md"
								style={{
									width: `${particle.size}px`,
									height: `${particle.size}px`,
									left: `${particle.left}%`,
									top: `${particle.top}%`,
									animation: `float ${particle.duration}s ease-in-out infinite`,
									animationDelay: `${particle.delay}s`,
								}}
							/>
						))}
						
						{/* Subtle circular light effects */}
						<div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
						<div className="absolute bottom-32 left-32 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
					</div>

					{/* Centered content */}
					<div className="relative container px-4 md:px-6 mx-auto z-10">
						<div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
							{/* Badge/Tagline */}
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-primary/20">
								<span className="text-sm md:text-base font-semibold text-primary/90 uppercase tracking-wider">
									Design / Brand / Grow
								</span>
							</div>
							
							{/* Main Headline */}
							<h1 className="font-hero text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white">
								Your business partner in
								<br />
								<span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
									print and digital design
								</span>
							</h1>
							
							{/* Descriptive Paragraph */}
							<p className="max-w-4xl text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
								We're a full-service creative engine specializing in everything from seamless UX/UI and web builds to bold logos and high-end editorial print.<br />
								If it's digital or physical, we make it move.
							</p>
							
							{/* CTA Button */}
							<div className="pt-4">
								<Button 
									size="lg" 
									className="font-display bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 px-8 py-6 text-lg" 
									asChild
								>
									<Link href="#work" className="flex items-center gap-2">
										View our work
										<ArrowRight className="w-5 h-5" />
									</Link>
								</Button>
							</div>
						</div>
					</div>

					{/* Bottom gradient fade */}
					<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
				</section>

				<section
					id="services"
					className="w-full py-8 md:py-16 lg:py-20 bg-gradient-to-b from-muted via-muted/95 to-muted scroll-mt-16 relative overflow-hidden"
				>
					{/* Subtle gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none"></div>
					<div className="container px-4 md:px-6 relative z-10">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
									Our Services
								</h2>
								<p className="max-w-[700px] text-muted-foreground md:text-xl">
									Comprehensive design and marketing solutions for businesses of
									all sizes
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center space-y-2 rounded-xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
								<div className="rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 p-3">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-display text-xl font-semibold">Website Design & Updates</h3>
								<p className="text-center text-muted-foreground">
									Modern, responsive websites that convert visitors into
									customers
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
								<div className="rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 p-3">
									<PenTool className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-display text-xl font-semibold">Branding & Logo Design</h3>
								<p className="text-center text-muted-foreground">
									Distinctive visual identities that make your brand memorable
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
								<div className="rounded-full bg-gradient-to-br from-blue-500/10 to-primary/10 p-3">
									<MessageSquare className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-display text-xl font-semibold">Social Media Management</h3>
								<p className="text-center text-muted-foreground">
									Engaging content and strategy to grow your online presence
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
								<div className="rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10 p-3">
									<Palette className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-display text-xl font-semibold">Marketing Materials</h3>
								<p className="text-center text-muted-foreground">
									Eye-catching print and digital collateral that drives results
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
								<div className="rounded-full bg-gradient-to-br from-purple-500/10 to-primary/10 p-3">
									<ArrowRight className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-display text-xl font-semibold">Marketing Strategy</h3>
								<p className="text-center text-muted-foreground">
									Data-driven approaches to reach your target audience
									effectively
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
								<div className="rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-3">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="font-display text-xl font-semibold">Custom Solutions</h3>
								<p className="text-center text-muted-foreground">
									Tailored design and marketing services for your specific needs
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Metrics Section */}
				<section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-muted/30 via-muted/20 to-muted/30 relative overflow-hidden">
					{/* Subtle gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-transparent to-purple-900/5 pointer-events-none"></div>
					<div className="container px-4 md:px-6 relative z-10">
						<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
							<div className="space-y-2">
								<h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
									Results That Speak
								</h2>
								<p className="max-w-[700px] text-muted-foreground md:text-xl">
									Measurable impact for our clients
								</p>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
							<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300">
								<div className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent mb-2">
									10+
								</div>
								<h3 className="font-display text-xl font-semibold mb-2">Clients Helped</h3>
								<p className="text-muted-foreground text-sm">
									Successful projects delivered
								</p>
							</div>
							<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm hover:border-purple-500/30 transition-all">
								<div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-primary to-purple-400 bg-clip-text text-transparent mb-2">
									900+
								</div>
								<h3 className="font-display text-xl font-semibold mb-2">Total Followers Gained</h3>
								<p className="text-muted-foreground text-sm">
									For our clients across platforms
								</p>
							</div>
							<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm hover:border-blue-500/30 transition-all">
								<div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent mb-2">
									+46%
								</div>
								<h3 className="font-display text-xl font-semibold mb-2">Engagement Increase</h3>
								<p className="text-muted-foreground text-sm">
									Average engagement growth
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Our Work & Testimonials Section */}
				<section
					id="work"
					className="w-full py-16 md:py-24 lg:py-32 bg-background scroll-mt-16"
				>
					<div className="container px-4 md:px-6">
						{/* Our Work Section */}
						<div className="mb-20">
							<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
								<div className="space-y-2">
									<h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
										Our Work
									</h2>
									<p className="max-w-[700px] text-muted-foreground md:text-xl">
										Check out some of our recent projects and see the impact we've made
									</p>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
								{portfolioProjects.map((project, index) => {
									const isComingSoon = (project as any).comingSoon;
									
									if (isComingSoon) {
										return (
											<div
												key={index}
												className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card opacity-75 transition-all duration-300"
											>
												<div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
													<Image
														src={project.image}
														alt={project.title}
														fill
														className="object-cover"
													/>
													<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
														<span className="text-2xl font-display font-bold text-white bg-primary/80 px-6 py-3 rounded-lg">
															Coming Soon
														</span>
													</div>
												</div>
												<div className="p-6">
													<span className="text-xs font-semibold text-primary mb-2 block">
														{project.category}
													</span>
													<h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
													<p className="text-muted-foreground text-sm leading-relaxed">
														{project.description}
													</p>
												</div>
											</div>
										);
									}
									
									return (
										<Link
											key={index}
											href={`/projects/${project.slug}`}
											className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 block"
										>
											<div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
												<Image
													src={project.image}
													alt={project.title}
													fill
													className={`group-hover:scale-105 transition-transform duration-500 ${
														project.image === "/manatee.jpg" 
															? "object-cover object-top" 
															: "object-cover"
													}`}
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
											</div>
											<div className="p-6">
												<span className="text-xs font-semibold text-primary mb-2 block">
													{project.category}
												</span>
												<h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
												<p className="text-muted-foreground text-sm leading-relaxed">
													{project.description}
												</p>
											</div>
										</Link>
									);
								})}
							</div>
						</div>

						{/* Testimonials Section */}
						<div className="relative">
							<div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
								<div className="space-y-2">
									<h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
										Happy Clients
									</h2>
									<p className="max-w-[700px] text-muted-foreground md:text-xl">
										Hear from our satisfied clients about their experience working with us
									</p>
								</div>
							</div>

							<div className="max-w-4xl mx-auto">
								<div className="relative bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg">
									{/* Testimonial Content */}
									<div className="text-center space-y-6">
										{/* Stars */}
										<div className="flex justify-center gap-1">
											{[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
												<Star
													key={i}
													className="h-5 w-5 fill-primary text-primary"
												/>
											))}
										</div>

										{/* Quote */}
										<blockquote className="text-lg md:text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
											"{testimonials[currentTestimonial].content}"
										</blockquote>

										{/* Author */}
										<div className="pt-4">
											<p className="font-semibold text-lg">
												{testimonials[currentTestimonial].name}
											</p>
											<p className="text-sm text-muted-foreground">
												{testimonials[currentTestimonial].role}
											</p>
										</div>
									</div>

									{/* Navigation Buttons */}
									<div className="flex justify-center items-center gap-4 mt-8">
										<Button
											variant="outline"
											size="icon"
											onClick={previousTestimonial}
											className="rounded-full"
											aria-label="Previous testimonial"
										>
											<ChevronLeft className="h-4 w-4" />
										</Button>

										{/* Dots indicator */}
										<div className="flex gap-2">
											{testimonials.map((_, index) => (
												<button
													key={index}
													onClick={() => setCurrentTestimonial(index)}
													className={`h-2 rounded-full transition-all ${
														index === currentTestimonial
															? "w-8 bg-primary"
															: "w-2 bg-muted-foreground/30"
													}`}
													aria-label={`Go to testimonial ${index + 1}`}
												/>
											))}
										</div>

										<Button
											variant="outline"
											size="icon"
											onClick={nextTestimonial}
											className="rounded-full"
											aria-label="Next testimonial"
										>
											<ChevronRight className="h-4 w-4" />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="pricing"
					className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 scroll-mt-16"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Flexible Pricing
								</h2>
								<p className="max-w-[900px] text-muted-foreground md:text-lg mt-2">
									All packages can be customized to meet your specific needs.
									Contact us for a personalized quote for your project.
								</p>
								<div className="pt-4 pb-8">
									<Button size="lg" asChild>
										<Link href="/pricing">View Detailed Pricing</Link>
									</Button>
								</div>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3 md:gap-6 lg:gap-8">
							<div className="flex flex-col rounded-lg border p-6 shadow-sm">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Basic</h3>
									<p className="text-muted-foreground">
										Perfect for small businesses just getting started
									</p>
								</div>
								<div className="mt-6 space-y-4">
									<ul className="space-y-2">
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Logo design or refresh</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Basic website updates</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Social media setup</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="flex flex-col rounded-lg border-2 border-primary p-6 shadow-md relative bg-primary/5 scale-105 md:translate-y-[-1rem]">
								<div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
									Recommended
								</div>
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Professional</h3>
									<p className="text-muted-foreground">
										Comprehensive solutions for established businesses
									</p>
								</div>
								<div className="mt-6 space-y-4">
									<ul className="space-y-2">
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Complete brand identity</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Website redesign or optimization</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Marketing strategy development</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Monthly social media management</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="flex flex-col rounded-lg border p-6 shadow-sm">
								<div className="space-y-2">
									<h3 className="text-2xl font-bold">Enterprise</h3>
									<p className="text-muted-foreground">
										Full-service design and marketing partnership
									</p>
								</div>
								<div className="mt-6 space-y-4">
									<ul className="space-y-2">
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Custom design solutions</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Comprehensive marketing campaigns</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Ongoing website maintenance</span>
										</li>
										<li className="flex items-start gap-2">
											<ArrowRight className="h-4 w-4 text-primary mt-1" />
											<span>Priority support and consulting</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="contact"
					className="w-full py-12 md:py-24 lg:py-32 bg-muted"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
									Get in Touch
								</h2>
								<p className="max-w-[700px] text-muted-foreground md:text-xl">
									Ready to start your project? Contact us today for a free
									consultation.
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
							<div className="flex flex-col space-y-4">
								<div className="space-y-2">
									<h3 className="font-display text-xl font-semibold">Contact Information</h3>
									<p className="text-muted-foreground">
										Please reach out, we'd love to hear from you!
									</p>
								</div>
								<div className="space-y-2">
									<p className="flex items-center gap-2">
										<MessageSquare className="h-4 w-4 text-primary" />
										<span>lmwayand@gmail.com</span>
									</p>
									<p className="flex items-center gap-2">
										<MessageSquare className="h-4 w-4 text-primary" />
										<span>cmwayand@gmail.com</span>
									</p>
								</div>
								<div className="flex space-x-4">
									{/* <Link
										href="#"
										target="_blank"
										className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20"
									>
										<Instagram className="h-5 w-5" />
										<span className="sr-only">Instagram</span>
									</Link> */}
									{/* <Link
										href="#"
										target="_blank"
										className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20"
									>
										<Facebook className="h-5 w-5" />
										<span className="sr-only">Facebook</span>
									</Link> */}
									<Link
										href="https://www.linkedin.com/company/wavydogdesign/about/"
										target="_blank"
										className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20"
									>
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">LinkedIn</span>
									</Link>
								</div>
							</div>
							<div className="rounded-lg border bg-background p-6 shadow-sm">
								<ContactForm />
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="w-full py-6 md:py-0">
				<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						&copy; {new Date().getFullYear()} Wavy Dog Design LLC. All rights
						reserved.
					</p>
					{/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
						<Link
							href="#"
							className="underline underline-offset-4 hover:text-foreground"
						>
							Terms
						</Link>
						<Link
							href="#"
							className="underline underline-offset-4 hover:text-foreground"
						>
							Privacy
						</Link>
					</div> */}
				</div>
			</footer>
		</div>
	);
}
