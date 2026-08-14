"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ProjectPageLayout } from "@/components/project-page-layout";

const portfolioImages = [
	{ src: "/manatee.jpg", alt: "Manatee illustration", title: "Manatee", tags: ["Illustration", "Ink"] },
	{ src: "/drawing.jpg", alt: "Custom drawing", title: "Custom Drawing", tags: ["Hand-drawn", "Character"] },
	{ src: "/drawing1.png", alt: "Custom drawing detail", title: "Line Work Study", tags: ["Illustration", "Detail"] },
];

export default function IllustrationsAndArtPage() {
	const [expandedImage, setExpandedImage] = useState<string | null>(null);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") setExpandedImage(null);
		};
		if (expandedImage) {
			document.addEventListener("keydown", handleEscape);
			document.body.style.overflow = "hidden";
		}
		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.body.style.overflow = "";
		};
	}, [expandedImage]);

	return (
		<ProjectPageLayout
			category="Art & Design"
			title="Illustrations & Art"
			description="Hand-drawn logos, custom illustrations, and artistic designs that bring unique character and personality to your brand. From whimsical characters to elegant line work, we create art that tells your story."
		>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
				{portfolioImages.map((item) => (
					<button
						key={item.src}
						type="button"
						onClick={() => setExpandedImage(item.src)}
						className="group text-left"
					>
						<div className="relative aspect-square overflow-hidden rounded-sm bg-muted mb-4 border border-border/40">
							<Image
								src={item.src}
								alt={item.alt}
								fill
								className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
							/>
						</div>
						<h3 className="font-serif text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
							{item.title}
						</h3>
						<p className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
							{item.tags.join(" · ")}
						</p>
					</button>
				))}
			</div>

			{expandedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
					onClick={() => setExpandedImage(null)}
				>
					<button
						type="button"
						onClick={() => setExpandedImage(null)}
						className="absolute top-4 right-4 text-white z-10"
						aria-label="Close"
					>
						<X className="w-8 h-8" />
					</button>
					<div className="relative w-full max-w-4xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
						<Image src={expandedImage} alt="Expanded view" fill className="object-contain" />
					</div>
				</div>
			)}
		</ProjectPageLayout>
	);
}
