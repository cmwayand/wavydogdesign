"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft, X, Monitor, Smartphone, Search, Layout, ChevronLeft, ChevronRight } from "lucide-react";

export default function UXAndWebsitesPage() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const websiteDesignGalleryImages = [
		{ src: "/websitedesign.png", alt: "Website Design" },
		{ src: "/cvilleorganizing.png", alt: "Charlottesville Organizing" },
		{ src: "/madisonauto.png", alt: "Madison Automotive" },
	];

	const openCarousel = (index: number, isWebsiteDesign: boolean = false) => {
		if (isWebsiteDesign) {
			setCurrentImageIndex(index);
			setExpandedImage(websiteDesignGalleryImages[index].src);
		} else {
			setExpandedImage(portfolioItems[1].image); // App UX/UI
		}
	};

	const nextImage = () => {
		const nextIndex = (currentImageIndex + 1) % websiteDesignGalleryImages.length;
		setCurrentImageIndex(nextIndex);
		setExpandedImage(websiteDesignGalleryImages[nextIndex].src);
	};

	const previousImage = () => {
		const prevIndex = (currentImageIndex - 1 + websiteDesignGalleryImages.length) % websiteDesignGalleryImages.length;
		setCurrentImageIndex(prevIndex);
		setExpandedImage(websiteDesignGalleryImages[prevIndex].src);
	};

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setExpandedImage(null);
			}
		};
		const handleArrowKeys = (e: KeyboardEvent) => {
			if (expandedImage && websiteDesignGalleryImages.some(img => img.src === expandedImage)) {
				if (e.key === "ArrowLeft") {
					e.preventDefault();
					setCurrentImageIndex((prev) => {
						const prevIndex = (prev - 1 + websiteDesignGalleryImages.length) % websiteDesignGalleryImages.length;
						setExpandedImage(websiteDesignGalleryImages[prevIndex].src);
						return prevIndex;
					});
				} else if (e.key === "ArrowRight") {
					e.preventDefault();
					setCurrentImageIndex((prev) => {
						const nextIndex = (prev + 1) % websiteDesignGalleryImages.length;
						setExpandedImage(websiteDesignGalleryImages[nextIndex].src);
						return nextIndex;
					});
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
	}, [expandedImage]);

	const uxServices = [
		{
			icon: Search,
			title: "UX Audits",
			description: "Comprehensive user experience audits that identify pain points and opportunities for improvement in your digital products.",
		},
		{
			icon: Monitor,
			title: "Web Design",
			description: "Beautiful, responsive website designs that engage users and drive conversions while maintaining brand consistency.",
		},
		{
			icon: Smartphone,
			title: "App Design",
			description: "Intuitive mobile and web app interfaces designed with user-centered principles and modern design patterns.",
		},
		{
			icon: Layout,
			title: "Digital Design",
			description: "End-to-end digital design solutions from wireframes to high-fidelity prototypes and final implementations.",
		},
	];

	const portfolioItems = [
		{
			title: "Website Design",
			description: "Professional website designs that create intuitive user experiences and beautiful interfaces.",
			image: "/websitedesign.png",
			isCarousel: true,
		},
		{
			title: "App UX/UI",
			description: "Mobile app design featuring intuitive user interfaces and seamless user experiences for room design and planning.",
			image: "/iphoneslanding.png",
			isCarousel: false,
		},
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
									Web Design and Development
								</span>
								<h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
									UX/UI, Websites, Apps
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Creating intuitive user experiences and beautiful interfaces that drive engagement and conversions. 
									From UX audits to complete web and app designs, we deliver digital solutions that users love.
								</p>
							</div>

							{/* Services Grid */}
							<div className="mb-12">
								<h2 className="font-display text-2xl font-bold mb-6">Services</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{uxServices.map((service, index) => {
										const Icon = service.icon;
										return (
											<div
												key={index}
												className="rounded-xl border border-border/50 bg-card p-6 hover:border-primary/50 transition-all duration-300"
											>
												<div className="flex items-start gap-4">
													<div className="rounded-lg bg-primary/10 p-3">
														<Icon className="h-6 w-6 text-primary" />
													</div>
													<div className="flex-1">
														<h3 className="font-display text-xl font-semibold mb-2">{service.title}</h3>
														<p className="text-muted-foreground text-sm leading-relaxed">
															{service.description}
														</p>
													</div>
												</div>
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
												if (item.isCarousel) {
													openCarousel(0, true); // Open carousel for Website Design
												} else {
													setExpandedImage(item.image); // Open single image for App UX/UI
												}
											}}
											className="group relative overflow-hidden rounded-xl border border-border/50 bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 text-left"
										>
											<div className="relative aspect-video overflow-hidden">
												<Image
													src={item.image}
													alt={item.title}
													fill
													className="object-cover group-hover:scale-105 transition-transform duration-500"
												/>
											</div>
											<div className="p-6">
												<h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
												<p className="text-muted-foreground text-sm">{item.description}</p>
											</div>
										</button>
									))}
								</div>
							</div>

							{/* Call to Action */}
							<div className="rounded-2xl border border-border/50 bg-card p-8 text-center">
								<h2 className="font-display text-2xl font-bold mb-4">Ready to improve your digital experience?</h2>
								<p className="text-muted-foreground mb-6">
									Let's discuss how we can create a user-centered design that drives results for your business.
								</p>
								<Link
									href="/#contact"
									className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white hover:bg-primary/90 transition-colors"
								>
									Get in Touch
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

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
							alt={websiteDesignGalleryImages.find(img => img.src === expandedImage)?.alt || "Expanded view"}
							fill
							className="object-contain"
							priority
						/>
						{websiteDesignGalleryImages.some(img => img.src === expandedImage) && websiteDesignGalleryImages.length > 1 && (
							<>
								<button
									onClick={previousImage}
									className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
									aria-label="Previous image"
								>
									<ChevronLeft className="h-6 w-6" />
								</button>
								<button
									onClick={nextImage}
									className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors z-10"
									aria-label="Next image"
								>
									<ChevronRight className="h-6 w-6" />
								</button>
								<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
									{currentImageIndex + 1} / {websiteDesignGalleryImages.length}
								</div>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
