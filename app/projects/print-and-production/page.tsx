"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectPageLayout } from "@/components/project-page-layout";

const wineGalleryImages = [
	{ src: "/printcover.png", alt: "Wine & Country Magazine Cover" },
	{ src: "/magazinespread.png", alt: "Wine & Country Magazine Spread" },
	{ src: "/covers.png", alt: "Wine & Country Magazine Covers" },
];

const geGalleryImages = [
	{ src: "/ge1.jpg", alt: "Print Design 1" },
	{ src: "/ge.jpg", alt: "Print Design 2" },
];

const portfolioItems = [
	{
		title: "Wine & Country Magazine",
		description: "Editorial design and magazine production for Wine & Country.",
		image: "/printcover.png",
		carouselType: "wine" as const,
		tags: ["Editorial", "Magazine", "Production"],
	},
	{
		title: "Print Collateral",
		description: "Business cards, marketing materials, and high-quality printed pieces.",
		image: "/ge1.jpg",
		carouselType: "ge" as const,
		tags: ["Print Design", "Collateral", "Production"],
	},
];

const capabilities = [
	{ letter: "A", title: "Editorial Design", description: "Magazines, brochures, and long-form print pieces designed with precision and care.", tags: ["Magazines", "Brochures", "Editorial"] },
	{ letter: "B", title: "Marketing Collateral", description: "Business cards, flyers, and promotional materials that represent your brand in print.", tags: ["Business Cards", "Flyers", "Signage"] },
	{ letter: "C", title: "Production", description: "From file prep to press-ready deliverables — we handle the full production pipeline.", tags: ["File Prep", "Press Ready", "Quality Control"] },
];

export default function PrintAndProductionPage() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [carouselType, setCarouselType] = useState<"wine" | "ge" | null>(null);

	const gallery = carouselType === "wine" ? wineGalleryImages : carouselType === "ge" ? geGalleryImages : null;

	const openCarousel = (type: "wine" | "ge", index = 0) => {
		setCarouselType(type);
		setCurrentImageIndex(index);
		setExpandedImage(type === "wine" ? wineGalleryImages[index].src : geGalleryImages[index].src);
	};

	const navigate = (dir: 1 | -1) => {
		if (!gallery) return;
		const next = (currentImageIndex + dir + gallery.length) % gallery.length;
		setCurrentImageIndex(next);
		setExpandedImage(gallery[next].src);
	};

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") { setExpandedImage(null); setCarouselType(null); }
			if (!expandedImage || !gallery) return;
			if (e.key === "ArrowLeft") { e.preventDefault(); navigate(-1); }
			if (e.key === "ArrowRight") { e.preventDefault(); navigate(1); }
		};
		if (expandedImage) {
			document.addEventListener("keydown", onKey);
			document.body.style.overflow = "hidden";
		}
		return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
	}, [expandedImage, currentImageIndex, carouselType]);

	return (
		<ProjectPageLayout
			category="Print & Production"
			title="Print & Production"
			description="Professional print and production services including business cards, marketing materials, magazines, and high-quality printed collateral — designed with the same care as your digital presence."
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-20 md:mb-28">
				{portfolioItems.map((item) => (
					<button
						key={item.title}
						type="button"
						onClick={() => openCarousel(item.carouselType)}
						className="group text-left"
					>
						<div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-muted mb-4 border border-border/40">
							<Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-[1.01] transition-transform duration-500" />
						</div>
						<h3 className="font-serif text-xl md:text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
						<p className="text-xs tracking-[0.12em] uppercase text-muted-foreground mb-2">{item.tags.join(" · ")}</p>
						<p className="text-muted-foreground text-sm">{item.description}</p>
					</button>
				))}
			</div>

			<div className="border-t border-border pt-16 divide-y divide-border">
				{capabilities.map((item) => (
					<div key={item.letter} className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 py-10 md:py-12 items-start">
						<span className="font-accent text-5xl text-primary italic leading-none">{item.letter}</span>
						<div className="space-y-3 max-w-lg">
							<h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
							<p className="text-muted-foreground leading-relaxed">{item.description}</p>
						</div>
						<ul className="md:text-right space-y-1">
							{item.tags.map((tag) => (
								<li key={tag} className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{tag}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			{expandedImage && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => { setExpandedImage(null); setCarouselType(null); }}>
					<button type="button" onClick={() => { setExpandedImage(null); setCarouselType(null); }} className="absolute top-4 right-4 text-white z-10" aria-label="Close"><X className="w-8 h-8" /></button>
					{gallery && gallery.length > 1 && (
						<>
							<button type="button" onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></button>
							<button type="button" onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10" aria-label="Next"><ChevronRight className="w-6 h-6" /></button>
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">{currentImageIndex + 1} / {gallery.length}</div>
						</>
					)}
					<div className="relative w-full max-w-6xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
						<Image src={expandedImage} alt="Expanded view" fill className="object-contain" />
					</div>
				</div>
			)}
		</ProjectPageLayout>
	);
}
