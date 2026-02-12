"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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
		title: "Henleys Orchard",
		description: "Drove increase in page views, wedding bookings, and improved social media following and engagement.",
		image: "/henleysorchard.png",
		category: "Marketing and Growth",
		slug: "henleys-orchard",
	},
	{
		title: "Core Health",
		description: "Increasing thermography bookings and awareness through website optimization, brand positioning, and growth strategies.",
		image: "/corehealth.png",
		category: "Optimizing Online Presence and Scaling Clients",
		slug: "core-health",
	},
	{
		title: "Hamilton Legal Services",
		description: "Complete brand identity and website design for a legal services firm.",
		image: "/hamiltonnew.png",
		category: "Branding and Web Design",
		slug: "hamilton-legal",
		comingSoon: true,
	},
];

export default function Home() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
				<section className="relative w-full overflow-hidden py-12 md:py-20 lg:py-28">
					{/* Animated gradient background */}
					<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"></div>
					
					{/* Animated geometric shapes */}
					<div className="absolute inset-0 overflow-hidden">
						{/* Large glowing shape - bottom left */}
						<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
						{/* Medium glowing shape - top right */}
						<div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
						{/* Small accent shape - center right */}
						<div className="absolute top-1/2 right-10 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
						
						{/* Abstract geometric shapes */}
						<div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rotate-45 rounded-lg blur-sm animate-pulse"></div>
						<div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-purple-400/30 rotate-12 rounded-lg blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
						<div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/20 rounded-full blur-md animate-pulse" style={{ animationDelay: '0.5s' }}></div>
					</div>

					<div className="relative container px-4 md:px-6 mx-auto">
						<div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center min-h-[600px]">
							{/* Left content */}
							<div className="flex flex-col gap-6 z-10">
								<div className="inline-block">
									<span className="text-sm md:text-base font-semibold text-primary/80 uppercase tracking-wider">
										Web Design & Branding Agency
									</span>
								</div>
								<h1 className="font-hero text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
									<span className="block text-white">Scaling Businesses Through</span>
									<span className="block bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent animate-gradient">
										Beautiful Web Design
									</span>
									<span className="block text-white">and Branding</span>
								</h1>
								<p className="max-w-[600px] text-lg md:text-xl text-gray-300 leading-relaxed">
									We grow businesses through exceptional branding and beautiful web UX/UI design. 
									Fully custom websites and brand identities that help you scale and connect with your audience.
								</p>
								<div className="flex flex-col gap-4 min-[400px]:flex-row mt-2">
									<Button size="lg" className="font-display bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105" asChild>
										<Link href="#contact" className="flex items-center gap-2">
											Start Your Project
											<ArrowRight className="w-4 h-4" />
										</Link>
									</Button>
									<Button size="lg" variant="outline" className="font-display border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105" asChild>
										<Link href="/about">Learn More</Link>
									</Button>
								</div>
							</div>

							{/* Right visual - Animated portfolio showcase */}
							<div className="relative flex justify-center lg:justify-end items-center z-10">
								<div className="relative w-full max-w-[900px]">
									{/* Glowing backdrop effect */}
									<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-3xl scale-110 animate-pulse"></div>
									
									{/* Hero image */}
									<div className="relative rounded-2xl overflow-hidden">
										<Image
											src="/headerimage.png"
											alt="Wavy Dog Design"
											width={900}
											height={600}
											className="object-cover w-full h-auto"
											priority
											quality={100}
										/>
									</div>

									{/* Floating decorative elements with gradients */}
									<div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-primary/30 to-purple-500/30 rounded-full blur-xl animate-pulse"></div>
									<div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
									<div className="absolute top-1/2 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
								</div>
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

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
													className="object-cover group-hover:scale-105 transition-transform duration-500"
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
										<span>claire@wavydogdesign.com</span>
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
