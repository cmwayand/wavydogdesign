"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft, X, Palette, PenTool, Type, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function PrintAndProductionPage() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setExpandedImage(null);
			}
		};
		const handleArrowKeys = (e: KeyboardEvent) => {
			if (expandedImage) {
				if (e.key === "ArrowLeft") {
					previousImage();
				} else if (e.key === "ArrowRight") {
					nextImage();
				}
			}
		};
		if (expandedImage) {
			document.addEventListener("keydown", handleEscape);
			document.addEventListener("keydown", handleArrowKeys);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.removeEventListener("keydown", handleArrowKeys);
			document.body.style.overflow = "unset";
		};
	}, [expandedImage, currentImageIndex]);

	const printServices = [
		{
			icon: PenTool,
			title: "Business Cards",
			description: "Professional business cards that make a memorable first impression and reflect your brand identity.",
		},
		{
			icon: Palette,
			title: "Marketing Materials",
			description: "Brochures, flyers, and promotional materials designed to engage and convert your audience.",
		},
		{
			icon: Type,
			title: "Stationery Design",
			description: "Letterheads, envelopes, and branded stationery that maintain consistency across all communications.",
		},
		{
			icon: Sparkles,
			title: "Print Production",
			description: "High-quality print production services ensuring your materials look professional and polished.",
		},
	];

	const portfolioItems = [
		{
			title: "Wine & Country Magazine Spreads",
			description: "Professional print and production services including business cards, marketing materials, and branded stationery.",
			image: "/printcover.png",
		},
	];

	const galleryImages = [
		{ src: "/printcover.png", alt: "Wine & Country Magazine Cover" },
		{ src: "/magazinespread.png", alt: "Wine & Country Magazine Spread" },
		{ src: "/covers.png", alt: "Wine & Country Magazine Covers" },
	];

	const openCarousel = (index: number) => {
		setCurrentImageIndex(index);
		setExpandedImage(galleryImages[index].src);
	};

	const nextImage = () => {
		const nextIndex = (currentImageIndex + 1) % galleryImages.length;
		setCurrentImageIndex(nextIndex);
		setExpandedImage(galleryImages[nextIndex].src);
	};

	const previousImage = () => {
		const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
		setCurrentImageIndex(prevIndex);
		setExpandedImage(galleryImages[prevIndex].src);
	};

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
									Print and Production
								</span>
								<h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
									Print and Production
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Professional print and production services that bring your brand to life. 
									From business cards to marketing materials, we deliver high-quality printed collateral that makes a lasting impression.
								</p>
							</div>

							{/* Hero Image */}
							<div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-border/50">
								<Image
									src="/printcover.png"
									alt="Print and Production"
									fill
									className="object-cover"
								/>
							</div>

							{/* Services Grid */}
							<div className="mb-12">
								<h2 className="font-display text-2xl font-bold mb-6">Our Print Services</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{printServices.map((service, index) => {
										const Icon = service.icon;
										return (
											<div
												key={index}
												className="flex flex-col space-y-3 rounded-xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
											>
												<div className="rounded-full bg-gradient-to-br from-primary/10 to-purple-500/10 p-3 w-fit">
													<Icon className="h-6 w-6 text-primary" />
												</div>
												<h3 className="font-display text-xl font-semibold">{service.title}</h3>
												<p className="text-muted-foreground leading-relaxed">
													{service.description}
												</p>
											</div>
										);
									})}
								</div>
							</div>

							{/* Portfolio Examples */}
							<div className="mb-12">
								<h2 className="font-display text-2xl font-bold mb-6">Print Portfolio</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{portfolioItems.map((item, index) => (
										<button
											key={index}
											onClick={() => openCarousel(0)}
											className="group relative overflow-hidden rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 text-left"
										>
											<div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
												<Image
													src={item.image}
													alt={item.title}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-500"
												/>
											</div>
											<div className="p-6">
												<h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
												<p className="text-muted-foreground text-sm leading-relaxed">
													{item.description}
												</p>
											</div>
										</button>
									))}
								</div>
							</div>

							{/* Image Carousel Modal */}
							{expandedImage && (
								<div
									className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
									onClick={() => setExpandedImage(null)}
								>
									<button
										onClick={() => setExpandedImage(null)}
										className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
										aria-label="Close carousel"
									>
										<X className="w-8 h-8" />
									</button>
									
									{/* Previous Button */}
									{galleryImages.length > 1 && (
										<button
											onClick={(e) => {
												e.stopPropagation();
												previousImage();
											}}
											className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
											aria-label="Previous image"
										>
											<ChevronLeft className="w-8 h-8" />
										</button>
									)}
									
									{/* Image */}
									<div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
										<Image
											src={expandedImage}
											alt={galleryImages[currentImageIndex].alt}
											fill
											className="object-contain"
											priority
										/>
									</div>
									
									{/* Next Button */}
									{galleryImages.length > 1 && (
										<button
											onClick={(e) => {
												e.stopPropagation();
												nextImage();
											}}
											className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10 bg-black/50 rounded-full p-2"
											aria-label="Next image"
										>
											<ChevronRight className="w-8 h-8" />
										</button>
									)}
									
									{/* Image Counter */}
									{galleryImages.length > 1 && (
										<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 rounded-full px-4 py-2 text-sm z-10">
											{currentImageIndex + 1} / {galleryImages.length}
										</div>
									)}
								</div>
							)}

							{/* What We Do Section */}
							<div className="prose prose-invert max-w-none space-y-8">
								<div>
									<h2 className="font-display text-2xl font-bold mb-4">What We Do</h2>
									<p className="text-muted-foreground leading-relaxed">
										At Wavy Dog Design, we specialize in professional print and production services that bring your brand to life. 
										From business cards to comprehensive marketing materials, we ensure every printed piece reflects your brand's quality 
										and professionalism.
									</p>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Our Process</h2>
									<ul className="space-y-4 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Design & Layout:</strong>
												<p className="mt-1">We create professional designs optimized for print, ensuring your materials look polished and professional.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Material Selection:</strong>
												<p className="mt-1">We help you choose the right paper stock, finishes, and printing techniques to match your brand's quality standards.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Quality Control:</strong>
												<p className="mt-1">We review proofs and ensure color accuracy, print quality, and finishing meet our high standards before production.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Production & Delivery:</strong>
												<p className="mt-1">We manage the entire production process and ensure timely delivery of your finished printed materials.</p>
											</div>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Why Print Matters</h2>
									<p className="text-muted-foreground leading-relaxed">
										In a digital world, high-quality printed materials create a tangible connection with your audience. 
										Professional business cards, brochures, and marketing materials leave a lasting impression and demonstrate 
										your attention to detail. Whether you need materials for networking, events, or client presentations, 
										we'll help you create printed collateral that elevates your brand.
									</p>
								</div>
							</div>

							{/* CTA Section */}
							<div className="mt-12 p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 text-center">
								<h2 className="font-display text-2xl font-bold mb-4">Ready to Print Your Materials?</h2>
								<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
									Let's work together to create professional printed materials that make a lasting impression and elevate your brand.
								</p>
								<Link
									href="/#contact"
									className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
								>
									Get Started
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
