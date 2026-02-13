"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft, X, Palette, PenTool, Type, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export default function LogosAndBrandingPage() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [currentCarouselType, setCurrentCarouselType] = useState<"logos" | "branding" | null>(null);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setExpandedImage(null);
			}
		};
		const handleArrowKeys = (e: KeyboardEvent) => {
			if (expandedImage && currentCarouselType) {
				if (e.key === "ArrowLeft") {
					e.preventDefault();
					previousImage();
				} else if (e.key === "ArrowRight") {
					e.preventDefault();
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
	}, [expandedImage, currentImageIndex, currentCarouselType]);

	const brandingServices = [
		{
			icon: PenTool,
			title: "Logo Design",
			description: "Custom logo designs that capture your brand's essence and make a lasting impression.",
		},
		{
			icon: Palette,
			title: "Color Palettes",
			description: "Strategic color schemes that evoke the right emotions and resonate with your target audience.",
		},
		{
			icon: Type,
			title: "Typography",
			description: "Carefully selected fonts that enhance readability and reinforce your brand personality.",
		},
		{
			icon: Sparkles,
			title: "Brand Identity Systems",
			description: "Comprehensive visual identity systems that ensure consistency across all touchpoints.",
		},
	];

	const portfolioItems = [
		{
			title: "Logos",
			description: "Professional logo designs that capture your brand's essence and make a lasting impression.",
			image: "/gardenlogo.jpg",
			isCarousel: true,
			carouselType: "logos",
		},
		{
			title: "Branding and labels",
			description: "Complete brand identity systems including color palettes, typography, and visual guidelines.",
			image: "/rapidanriverlabel.jpg",
			isCarousel: true,
			carouselType: "branding",
		},
	];

	const logosGalleryImages = [
		{ src: "/gardenlogo.jpg", alt: "Garden Logo" },
		{ src: "/jjlogo.png", alt: "JJ Logo" },
		{ src: "/jjlogo2.png", alt: "JJ Logo 2" },
		{ src: "/rrlogo.jpg", alt: "RR Logo" },
	];

	const brandingGalleryImages = [
		{ src: "/rapidanriverlabel.jpg", alt: "Rapidan River Label" },
		{ src: "/winebottle.png", alt: "Wine Bottle" },
	];

	const openCarousel = (index: number, carouselType: "logos" | "branding") => {
		setCurrentCarouselType(carouselType);
		setCurrentImageIndex(index);
		if (carouselType === "logos") {
			setExpandedImage(logosGalleryImages[index].src);
		} else {
			setExpandedImage(brandingGalleryImages[index].src);
		}
	};

	const nextImage = () => {
		if (currentCarouselType === "logos") {
			const nextIndex = (currentImageIndex + 1) % logosGalleryImages.length;
			setCurrentImageIndex(nextIndex);
			setExpandedImage(logosGalleryImages[nextIndex].src);
		} else if (currentCarouselType === "branding") {
			const nextIndex = (currentImageIndex + 1) % brandingGalleryImages.length;
			setCurrentImageIndex(nextIndex);
			setExpandedImage(brandingGalleryImages[nextIndex].src);
		}
	};

	const previousImage = () => {
		if (currentCarouselType === "logos") {
			const prevIndex = (currentImageIndex - 1 + logosGalleryImages.length) % logosGalleryImages.length;
			setCurrentImageIndex(prevIndex);
			setExpandedImage(logosGalleryImages[prevIndex].src);
		} else if (currentCarouselType === "branding") {
			const prevIndex = (currentImageIndex - 1 + brandingGalleryImages.length) % brandingGalleryImages.length;
			setCurrentImageIndex(prevIndex);
			setExpandedImage(brandingGalleryImages[prevIndex].src);
		}
	};

	const getCurrentGallery = () => {
		if (currentCarouselType === "logos") return logosGalleryImages;
		if (currentCarouselType === "branding") return brandingGalleryImages;
		return null;
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
									Branding and Web Design
								</span>
								<h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
									Logos and Branding
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Creating distinctive visual identities that make your brand memorable and resonate with your audience. 
									From logo design to complete brand identity systems, we help businesses establish a strong, cohesive presence.
								</p>
							</div>

							{/* Services Grid */}
							<div className="mb-12">
								<h2 className="font-display text-2xl font-bold mb-6">Our Branding Services</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{brandingServices.map((service, index) => {
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
								<h2 className="font-display text-2xl font-bold mb-6">Examples</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{portfolioItems.map((item, index) => (
										<button
											key={index}
											onClick={() => {
												if (item.isCarousel && item.carouselType) {
													openCarousel(0, item.carouselType as "logos" | "branding");
												} else {
													setExpandedImage(item.image);
												}
											}}
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
									onClick={() => {
										setExpandedImage(null);
										setCurrentCarouselType(null);
									}}
								>
									<button
										onClick={() => {
											setExpandedImage(null);
											setCurrentCarouselType(null);
										}}
										className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
										aria-label="Close carousel"
									>
										<X className="w-8 h-8" />
									</button>
									
									{/* Previous Button - Show for both carousels */}
									{getCurrentGallery() && getCurrentGallery()!.length > 1 && (
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
											alt={getCurrentGallery()?.find(img => img.src === expandedImage)?.alt || "Expanded view"}
											fill
											className="object-contain"
											priority
										/>
									</div>
									
									{/* Next Button - Show for both carousels */}
									{getCurrentGallery() && getCurrentGallery()!.length > 1 && (
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
									
									{/* Image Counter - Show for both carousels */}
									{getCurrentGallery() && getCurrentGallery()!.length > 1 && (
										<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 rounded-full px-4 py-2 text-sm z-10">
											{currentImageIndex + 1} / {getCurrentGallery()!.length}
										</div>
									)}
								</div>
							)}

							{/* What We Do Section */}
							<div className="prose prose-invert max-w-none space-y-8">
								<div>
									<h2 className="font-display text-2xl font-bold mb-4">What We Do</h2>
									<p className="text-muted-foreground leading-relaxed">
										At Wavy Dog Design, we specialize in creating comprehensive brand identities that tell your story 
										and connect with your audience. Our branding process begins with understanding your business, 
										values, and goals, then translates that into a cohesive visual identity system.
									</p>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Our Process</h2>
									<ul className="space-y-4 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Discovery & Research:</strong>
												<p className="mt-1">We start by learning about your business, target audience, competitors, and market positioning to inform our design decisions.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Concept Development:</strong>
												<p className="mt-1">We create multiple logo concepts and brand directions, exploring different visual styles that align with your brand personality.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Refinement:</strong>
												<p className="mt-1">We refine the chosen direction, developing color palettes, typography selections, and establishing brand guidelines.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Brand Identity System:</strong>
												<p className="mt-1">We deliver a complete brand identity package including logo variations, color codes, typography guidelines, and usage examples.</p>
											</div>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Why Branding Matters</h2>
									<p className="text-muted-foreground leading-relaxed">
										A strong brand identity is more than just a logo—it's the visual foundation of your business. 
										It helps you stand out from competitors, build trust with customers, and create a memorable 
										impression that drives recognition and loyalty. Whether you're launching a new business or 
										refreshing an existing brand, we'll help you create an identity that truly represents who you are.
									</p>
								</div>
							</div>

							{/* CTA Section */}
							<div className="mt-12 p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 text-center">
								<h2 className="font-display text-2xl font-bold mb-4">Ready to Build Your Brand?</h2>
								<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
									Let's work together to create a brand identity that sets you apart and resonates with your audience.
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
