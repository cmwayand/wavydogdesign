"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function IllustrationsAndArtPage() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Portfolio images
	const portfolioImages = useMemo(() => [
		{ src: "/manatee.jpg", alt: "Manatee Illustration" },
		{ src: "/drawing.jpg", alt: "Custom Drawing" },
		{ src: "/drawing1.png", alt: "Custom Drawing 1" },
	], []);

	const openCarousel = (index: number) => {
		setCurrentImageIndex(index);
		setExpandedImage(portfolioImages[index].src);
	};

	const nextImage = () => {
		setCurrentImageIndex((prev) => {
			const nextIndex = (prev + 1) % portfolioImages.length;
			setExpandedImage(portfolioImages[nextIndex].src);
			return nextIndex;
		});
	};

	const previousImage = () => {
		setCurrentImageIndex((prev) => {
			const prevIndex = (prev - 1 + portfolioImages.length) % portfolioImages.length;
			setExpandedImage(portfolioImages[prevIndex].src);
			return prevIndex;
		});
	};

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setExpandedImage(null);
			}
		};
		const handleArrowKeys = (e: KeyboardEvent) => {
			if (expandedImage) {
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
	}, [expandedImage, portfolioImages]);

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
									Art and Design
								</span>
								<h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
									Illustrations and Art
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Hand-drawn logos, custom illustrations, and artistic designs that bring unique character 
									and personality to your brand. From whimsical characters to elegant line work, we create 
									art that tells your story.
								</p>
							</div>

						{/* Portfolio Gallery */}
							<div className="mb-12">
								<h2 className="font-display text-2xl font-bold mb-6">Portfolio</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
									{portfolioImages.map((img, index) => (
										<button
											key={index}
											onClick={() => openCarousel(index)}
											className="relative h-64 rounded-xl overflow-hidden border border-border/50 bg-muted/30 hover:border-primary/50 transition-all cursor-pointer hover:scale-105 group"
										>
											<Image
												src={img.src}
												alt={img.alt}
												fill
												className="object-contain p-2 group-hover:opacity-90 transition-opacity"
											/>
										</button>
									))}
								</div>
							</div>

							{/* About Section */}
							<div className="prose prose-invert max-w-none space-y-8">
								<div>
									<h2 className="font-display text-2xl font-bold mb-4">What We Do</h2>
									<p className="text-muted-foreground leading-relaxed">
										Our illustrations and art services bring creativity and personality to your brand. 
										Whether you need a hand-drawn logo, custom character illustrations, or artistic 
										designs for print and digital media, we create unique artwork that captures your 
										brand's essence and resonates with your audience.
									</p>
								</div>

								<div>
									<h2 className="font-display text-2xl font-bold mb-4">Our Services</h2>
									<ul className="space-y-4 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Hand-Drawn Logos:</strong>
												<p className="mt-1">Custom logo designs created with traditional drawing techniques, bringing warmth and authenticity to your brand identity.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Custom Illustrations:</strong>
												<p className="mt-1">Original artwork and illustrations tailored to your brand, from character designs to detailed scenes and graphics.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Artistic Design:</strong>
												<p className="mt-1">Creative designs for print materials, digital media, and marketing collateral that showcase artistic flair.</p>
											</div>
										</li>
									</ul>
								</div>
							</div>

							{/* CTA Section */}
							<div className="mt-12 p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 text-center">
								<h2 className="font-display text-2xl font-bold mb-4">Ready to Create Something Unique?</h2>
								<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
									Let's work together to create custom illustrations and artwork that bring your brand to life.
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
					{portfolioImages.length > 1 && (
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
							alt={portfolioImages[currentImageIndex].alt}
							fill
							className="object-contain"
							priority
						/>
					</div>
					
					{/* Next Button */}
					{portfolioImages.length > 1 && (
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
					{portfolioImages.length > 1 && (
						<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 rounded-full px-4 py-2 text-sm z-10">
							{currentImageIndex + 1} / {portfolioImages.length}
						</div>
					)}
				</div>
			)}
		</div>
	);
}
