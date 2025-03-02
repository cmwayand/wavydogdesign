"use client";

import Link from "next/link";
import Image from "next/image";
import {
	ArrowRight,
	Palette,
	Globe,
	MessageSquare,
	PenTool,
	Linkedin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
					<div className="flex gap-2 items-center text-xl font-bold">
						<Image
							src="/wavydog long logo.svg"
							width={250}
							height={50}
							alt="logo"
						/>
					</div>
					<div className="flex flex-1 items-center justify-end space-x-4">
						<nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
							<Link
								href="#services"
								className="transition-colors hover:text-foreground/80"
							>
								Services
							</Link>
							{/* <Link
								href="#portfolio"
								className="transition-colors hover:text-foreground/80"
							>
								Portfolio
							</Link> */}
							<Link
								href="#about"
								className="transition-colors hover:text-foreground/80"
							>
								About
							</Link>
							<Link
								href="#pricing"
								className="transition-colors hover:text-foreground/80"
							>
								Pricing
							</Link>
						</nav>
						<Button asChild>
							<Link href="#contact">Get in Touch</Link>
						</Button>
					</div>
				</div>
			</header>
			<main className="flex-1">
				<section className="w-full py-6 md:py-12 lg:py-16 xl:py-24">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
										Creative Design Solutions for Your Business
									</h1>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										Elevate your brand with custom design and marketing
										strategies tailored to your unique business needs.
									</p>
								</div>
								<div className="flex flex-col gap-2 min-[400px]:flex-row">
									<Button asChild size="lg">
										<Link href="#contact">
											Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
										</Link>
									</Button>
									<Button variant="outline" size="lg" asChild>
										<Link href="#portfolio">View Portfolio</Link>
									</Button>
								</div>
							</div>
							<div className="flex items-center justify-center">
								<Image
									src="/heroimage.jpg"
									width={550}
									height={550}
									alt="Hero Image"
									className="rounded-lg object-cover"
									priority
								/>
							</div>
						</div>
					</div>
				</section>

				<section
					id="services"
					className="w-full py-12 md:py-24 lg:py-32 bg-muted"
				>
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Our Services
								</h2>
								<p className="max-w-[700px] text-muted-foreground md:text-xl">
									Comprehensive design and marketing solutions for businesses of
									all sizes
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="rounded-full bg-primary/10 p-3">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Website Design & Updates</h3>
								<p className="text-center text-muted-foreground">
									Modern, responsive websites that convert visitors into
									customers
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="rounded-full bg-primary/10 p-3">
									<PenTool className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Branding & Logo Design</h3>
								<p className="text-center text-muted-foreground">
									Distinctive visual identities that make your brand memorable
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="rounded-full bg-primary/10 p-3">
									<MessageSquare className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Social Media Management</h3>
								<p className="text-center text-muted-foreground">
									Engaging content and strategy to grow your online presence
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="rounded-full bg-primary/10 p-3">
									<Palette className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Marketing Materials</h3>
								<p className="text-center text-muted-foreground">
									Eye-catching print and digital collateral that drives results
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="rounded-full bg-primary/10 p-3">
									<ArrowRight className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Marketing Strategy</h3>
								<p className="text-center text-muted-foreground">
									Data-driven approaches to reach your target audience
									effectively
								</p>
							</div>
							<div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
								<div className="rounded-full bg-primary/10 p-3">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="text-xl font-bold">Custom Solutions</h3>
								<p className="text-center text-muted-foreground">
									Tailored design and marketing services for your specific needs
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Will add back when more images are available */}
				{/* <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Our Work
								</h2>
								<p className="max-w-[700px] text-muted-foreground md:text-xl">
									Showcasing creative solutions across various industries
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
							{Array.from({ length: 6 }).map((_, i) => (
								<div key={i} className="overflow-hidden rounded-lg">
									<Image
										src={`/placeholder.svg?height=300&width=400&text=Project+${
											i + 1
										}`}
										width={400}
										height={300}
										alt={`Portfolio Project ${i + 1}`}
										className="aspect-video object-cover transition-all hover:scale-105"
									/>
								</div>
							))}
						</div>
						<div className="flex justify-center">
							<Button variant="outline" size="lg">
								View All Projects
							</Button>
						</div>
					</div>
				</section> */}

				<section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
							<div className="flex items-center justify-center">
								<Image
									src="/placeholder.svg?height=400&width=400&text=About+Us"
									width={400}
									height={400}
									alt="About Wavy Dog Design"
									className="rounded-lg object-cover"
								/>
							</div>
							<div className="flex flex-col justify-center space-y-4">
								<div className="space-y-2">
									<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
										About Wavy Dog Design
									</h2>
									<p className="max-w-[600px] text-muted-foreground md:text-xl">
										We're passionate about helping businesses of all sizes stand
										out with exceptional design and effective marketing
										strategies.
									</p>
								</div>
								<ul className="grid gap-2">
									<li className="flex items-center gap-2">
										<ArrowRight className="h-4 w-4 text-primary" />
										<span>Years of experience across multiple industries</span>
									</li>
									<li className="flex items-center gap-2">
										<ArrowRight className="h-4 w-4 text-primary" />
										<span>Personalized approach to every project</span>
									</li>
									<li className="flex items-center gap-2">
										<ArrowRight className="h-4 w-4 text-primary" />
										<span>
											Commitment to delivering results that exceed expectations
										</span>
									</li>
									<li className="flex items-center gap-2">
										<ArrowRight className="h-4 w-4 text-primary" />
										<span>
											Focus on creating designs that drive business growth
										</span>
									</li>
								</ul>
								<div>
									<Button asChild>
										<Link href="#contact">Work With Us</Link>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Flexible Pricing
								</h2>
								<p className="max-w-[700px] text-muted-foreground md:text-xl">
									Customized packages tailored to your specific project needs
								</p>
							</div>
						</div>
						<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
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
							<div className="flex flex-col rounded-lg border p-6 shadow-sm bg-primary/5 border-primary/20">
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
						<div className="mx-auto max-w-3xl text-center">
							<p className="text-muted-foreground">
								All packages are customizable based on your specific needs.
								Contact us for a personalized quote tailored to your project
								requirements.
							</p>
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
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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
									<h3 className="text-xl font-bold">Contact Information</h3>
									<p className="text-muted-foreground">
										We'd love to hear from you. Reach out through any of these
										channels.
									</p>
								</div>
								<div className="space-y-2">
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
			<footer className="w-full border-t py-6 md:py-0">
				<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
					<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
						© {new Date().getFullYear()} Wavy Dog Design. All rights reserved.
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
