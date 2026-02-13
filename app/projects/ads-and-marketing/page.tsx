"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft } from "lucide-react";

export default function AdsAndMarketingPage() {

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
									Marketing and Growth
								</span>
								<h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
									Ads and Marketing
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Strategic advertising and marketing campaigns that drive engagement, increase visibility, 
									and grow your business through targeted social media, content creation, and promotional strategies.
								</p>
							</div>

							{/* Case Studies Section */}
							<div className="mb-12">
								<h2 className="font-display text-2xl font-bold mb-6">Case Studies</h2>
								
								{/* Henleys Orchard Case Study Card */}
								<Link
									href="/projects/henleys-orchard"
									className="group block max-w-2xl mx-auto rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
								>
									<div className="relative aspect-video overflow-hidden">
										<Image
											src="/henleysorchard.png"
											alt="Henleys Orchard"
											fill
											className="object-cover group-hover:scale-105 transition-transform duration-500"
										/>
									</div>
									<div className="p-4">
										<h3 className="font-display text-xl font-bold mb-2">Henleys Orchard</h3>
										<p className="text-muted-foreground text-sm">
											Comprehensive marketing strategy focused on wedding venue growth, awareness, 
											and increasing bookings through strategic social media and event promotion.
										</p>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
