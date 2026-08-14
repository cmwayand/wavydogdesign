"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ProjectPageLayout } from "@/components/project-page-layout";

const galleryImages = [
	{ src: "/gardenlogo.jpg", alt: "Garden Logo", title: "Garden Logo", tags: ["Logo Design", "Identity"] },
	{ src: "/jjlogo.png", alt: "JJ Logo", title: "JJ Logo", tags: ["Logo Design", "Typography"] },
	{ src: "/jjlogo2.png", alt: "JJ Logo Variation", title: "JJ Logo Variation", tags: ["Logo Design", "Identity"] },
	{ src: "/rrlogo.jpg", alt: "RR Logo", title: "RR Logo", tags: ["Logo Design", "Brand Mark"] },
	{ src: "/jmu.png", alt: "JMU Logo", title: "JMU Logo", tags: ["Logo Design", "Institutional"] },
	{ src: "/hamilton1.png", alt: "Hamilton Legal Logo", title: "Hamilton Legal", tags: ["Logo Design", "Legal"] },
	{ src: "/hamilton2.png", alt: "Hamilton Legal Logo Variation", title: "Hamilton Legal Variation", tags: ["Logo Design", "Legal"] },
	{ src: "/rapidanriverlabel.jpg", alt: "Rapidan River Label", title: "Rapidan River Label", tags: ["Packaging", "Label Design"] },
	{ src: "/winebottle.png", alt: "Wine Bottle Label", title: "Wine Bottle Label", tags: ["Packaging", "Brand Identity"] },
];

const capabilities = [
	{ letter: "A", title: "Logo Design", description: "Custom logos that capture your brand's essence and make a lasting impression.", tags: ["Custom Logos", "Refreshes", "Variations"] },
	{ letter: "B", title: "Color & Typography", description: "Strategic color palettes and font systems that reinforce your brand personality.", tags: ["Color Systems", "Typography", "Guidelines"] },
	{ letter: "C", title: "Brand Identity", description: "Comprehensive visual identity systems for consistency across every touchpoint.", tags: ["Brand Guidelines", "Visual Identity", "Packaging"] },
];

export default function LogosAndBrandingPage() {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	const navigate = (dir: 1 | -1) => {
		setExpandedIndex((current) => {
			if (current === null) return null;
			return (current + dir + galleryImages.length) % galleryImages.length;
		});
	};

	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setExpandedIndex(null);
			if (expandedIndex === null) return;
			if (e.key === "ArrowLeft") { e.preventDefault(); navigate(-1); }
			if (e.key === "ArrowRight") { e.preventDefault(); navigate(1); }
		};
		if (expandedIndex !== null) {
			document.addEventListener("keydown", onKey);
			document.body.style.overflow = "hidden";
		}
		return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
	}, [expandedIndex]);

	return (
		<ProjectPageLayout
			category="Brand Identity"
			title="Logos & Branding"
			description="Creating distinctive visual identities that make your brand memorable. From logo design to complete brand identity systems, we help businesses establish a strong, cohesive presence."
		>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-20 md:mb-28">
				{galleryImages.map((item, index) => (
					<button
						key={item.src}
						type="button"
						onClick={() => setExpandedIndex(index)}
						className="group relative aspect-square overflow-hidden rounded-sm bg-muted border border-border/40 cursor-pointer"
					>
						<Image
							src={item.src}
							alt={item.alt}
							fill
							className="object-cover transition-transform duration-500 group-hover:scale-105"
							sizes="(max-width: 768px) 50vw, 25vw"
						/>
						<div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/75 transition-colors duration-300 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100">
							<h3 className="font-serif text-base md:text-lg font-semibold text-white text-center mb-1">
								{item.title}
							</h3>
							<p className="text-[10px] tracking-[0.12em] uppercase text-white/70 text-center">
								{item.tags.join(" · ")}
							</p>
						</div>
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

			{expandedIndex !== null && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setExpandedIndex(null)}>
					<button type="button" onClick={() => setExpandedIndex(null)} className="absolute top-4 right-4 text-white z-10" aria-label="Close"><X className="w-8 h-8" /></button>
					<button type="button" onClick={(e) => { e.stopPropagation(); navigate(-1); }} className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10" aria-label="Previous"><ChevronLeft className="w-6 h-6" /></button>
					<button type="button" onClick={(e) => { e.stopPropagation(); navigate(1); }} className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 z-10" aria-label="Next"><ChevronRight className="w-6 h-6" /></button>
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
						{expandedIndex + 1} / {galleryImages.length}
					</div>
					<div className="relative w-full max-w-6xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
						<Image src={galleryImages[expandedIndex].src} alt={galleryImages[expandedIndex].alt} fill className="object-contain" />
					</div>
				</div>
			)}
		</ProjectPageLayout>
	);
}
