"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft, X } from "lucide-react";

export default function HenleysOrchardPage() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setExpandedImage(null);
			}
		};
		if (expandedImage) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "unset";
		};
	}, [expandedImage]);

	const galleryImages = [
		{ src: "/Henleys.png", alt: "Henleys Orchard" },
		{ src: "/Henleys2.png", alt: "Henleys Orchard" },
		{ src: "/henleypost2.png", alt: "Henleys Orchard Social Media Post" },
		{ src: "/henleypost3.png", alt: "Henleys Orchard Social Media Post" },
	];

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
									Henleys Orchard
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Comprehensive marketing strategy focused on wedding venue growth, awareness, 
									and increasing bookings through strategic social media and event promotion.
								</p>
							</div>

							<div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-border/50">
								<Image
									src="/henleysorchard.png"
									alt="Henleys Orchard"
									fill
									className="object-cover"
								/>
							</div>

							{/* Results Metrics Section */}
							<div className="mb-12">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
									<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
										<div className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent mb-2">
											+423.9%
										</div>
										<h3 className="font-display text-xl font-semibold mb-2">Views Increase</h3>
										<p className="text-muted-foreground text-sm">
											Significant growth in content views
										</p>
									</div>
									<div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-gradient-to-br from-card/50 via-card/40 to-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
										<div className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-primary to-purple-400 bg-clip-text text-transparent mb-2">
											+141.9%
										</div>
										<h3 className="font-display text-xl font-semibold mb-2">More Views</h3>
										<p className="text-muted-foreground text-sm">
											Additional view growth achieved
										</p>
									</div>
								</div>
							</div>

							{/* Additional Images Gallery */}
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
								{galleryImages.map((img, index) => (
									<button
										key={index}
										onClick={() => setExpandedImage(img.src)}
										className="relative h-64 rounded-xl overflow-hidden border border-border/50 bg-muted/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-105"
									>
										<Image
											src={img.src}
											alt={img.alt}
											fill
											className="object-contain p-2"
										/>
									</button>
								))}
							</div>

							{/* Image Lightbox Modal */}
							{expandedImage && (
								<div
									className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
									onClick={() => setExpandedImage(null)}
								>
									<button
										onClick={() => setExpandedImage(null)}
										className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
										aria-label="Close image"
									>
										<X className="w-8 h-8" />
									</button>
									<div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
										<Image
											src={expandedImage}
											alt="Expanded view"
											fill
											className="object-contain"
											priority
										/>
									</div>
								</div>
							)}

							<div className="prose prose-invert max-w-none space-y-8">
								<div>
									<h2 className="font-display text-2xl font-bold mb-4">What the Client Wanted</h2>
									<p className="text-muted-foreground leading-relaxed">
										Henleys Orchard Estate Cidery needed to grow awareness of their wedding venue 
										and increase bookings. They wanted to reach more couples looking for a 
										picturesque wedding location and ensure their upcoming events were well-promoted 
										to drive attendance. The goal was to establish their venue as a premier 
										destination for weddings and special events.
									</p>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Services Provided</h2>
									<ul className="space-y-4 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Wedding Venue Growth & Awareness:</strong>
												<p className="mt-1">Developed comprehensive marketing strategies to increase visibility of their wedding venue. Created targeted campaigns to reach engaged couples and showcase the beautiful ceremony settings, reception tent, and catering facilities.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Social Media Posts:</strong>
												<p className="mt-1">Designed and created engaging social media content including beautiful imagery of the venue, behind-the-scenes content, client testimonials, and promotional posts. Developed a consistent posting schedule to maintain engagement and reach new audiences.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Event Promotion:</strong>
												<p className="mt-1">Designed promotional materials and social media campaigns to tell people about upcoming events including their Fall Festival, seasonal activities, and special cidery events. Created eye-catching graphics and content that drive attendance and engagement.</p>
											</div>
										</li>
									</ul>
								</div>
							</div>

							{/* Results and Data Section */}
							<div className="mt-12">
								<h2 className="font-display text-2xl font-bold mb-6">Results and Data</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
									<button
										onClick={() => setExpandedImage("/henleydata.png")}
										className="relative h-80 rounded-xl overflow-hidden border border-border/50 bg-muted/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-105"
									>
										<Image
											src="/henleydata.png"
											alt="Henleys Orchard Data and Results"
											fill
											className="object-contain p-2"
										/>
									</button>
									<button
										onClick={() => setExpandedImage("/henleydata2.png")}
										className="relative h-80 rounded-xl overflow-hidden border border-border/50 bg-muted/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-105"
									>
										<Image
											src="/henleydata2.png"
											alt="Henleys Orchard Data and Results"
											fill
											className="object-contain p-2"
										/>
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
