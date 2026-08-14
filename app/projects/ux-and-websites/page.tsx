"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { ProjectPageLayout } from "@/components/project-page-layout";

const featuredItems = [
	{
		src: "/projects/ux-and-websites/room-design-app.png",
		alt: "AI-powered room design app — login and dashboard screens",
		title: "Room Design App",
		tags: ["App Design", "UX/UI", "Mobile"],
	},
	{
		src: "/projects/ux-and-websites/ux-flow.png",
		alt: "End-to-end UX flow for interior design application",
		title: "Full App User Flow",
		tags: ["User Flow", "Wireframes", "Product Design"],
	},
];

const exampleItems = [
	{
		src: "/projects/ux-and-websites/vera-app.png",
		alt: "Vera safety app — map, guide booking, and profile screens",
		title: "Vera Safety App",
		tags: ["App Design", "UX/UI", "Marketplace"],
	},
	{
		src: "/projects/ux-and-websites/hamilton-legal.png",
		alt: "Hamilton Legal Services website homepage",
		title: "Hamilton Legal Services",
		tags: ["Website Design", "Web Development"],
	},
	{
		src: "/projects/ux-and-websites/payment-modal.png",
		alt: "Payment details modal UI component",
		title: "Payment Modal",
		tags: ["UI Design", "Component Design"],
	},
	{
		src: "/projects/ux-and-websites/pricing-plans.png",
		alt: "Pricing plans page with three-tier layout",
		title: "Pricing Page",
		tags: ["Web Design", "UI Design"],
	},
];

const launchProcess = [
	"Asking the right questions to understand your needs",
	"Brainstorming",
	"Creating MVPs",
	"Research and gather feedback",
	"Build prototype",
	"Iterate",
	"Launch",
	"Monitor",
	"Guide you along the way",
];

const capabilities = [
	{
		letter: "A",
		title: "UX Audits & Strategy",
		description: "We evaluate existing products, identify friction points, and map a clear path forward.",
		tags: ["User Research", "Audits", "Information Architecture"],
	},
	{
		letter: "B",
		title: "Web Design",
		description: "Responsive websites built around your brand — from landing pages to full multi-page sites.",
		tags: ["Website Design", "Responsive Layout", "Brand Integration"],
	},
	{
		letter: "C",
		title: "App & Product Design",
		description: "Mobile and web app interfaces with complete user flows, from wireframe to high-fidelity prototype.",
		tags: ["App Design", "Prototyping", "Design Systems"],
	},
];

function ShowcaseCard({
	item,
	onExpand,
	compact = false,
}: {
	item: (typeof featuredItems)[0];
	onExpand: (src: string) => void;
	compact?: boolean;
}) {
	return (
		<button
			type="button"
			onClick={() => onExpand(item.src)}
			className="group text-left w-full"
		>
			<div
				className={`relative overflow-hidden rounded-sm bg-muted mb-3 border border-border/40 ${
					compact ? "aspect-[16/11] max-h-[220px] md:max-h-[260px]" : "aspect-[16/10] md:aspect-[16/9]"
				}`}
			>
				<Image
					src={item.src}
					alt={item.alt}
					fill
					className="object-cover object-top group-hover:scale-[1.01] transition-transform duration-500"
					sizes={compact ? "(max-width: 768px) 100vw, 320px" : "(max-width: 768px) 100vw, 50vw"}
				/>
			</div>
			<h3
				className={`font-serif font-semibold mb-1 group-hover:text-primary transition-colors ${
					compact ? "text-lg md:text-xl" : "text-xl md:text-2xl"
				}`}
			>
				{item.title}
			</h3>
			<p className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
				{item.tags.join(" · ")}
			</p>
		</button>
	);
}

export default function UXAndWebsitesPage() {
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
			category="Web & Digital"
			title="UX/UI, Websites & Apps"
			description="We scope your project right from the start. Whether building full app and website workflows from scratch, incorporating your brand, or integrating with your existing systems, we bring your vision to life."
		>
			{/* How we create and launch */}
			<div className="mb-16 md:mb-24 pb-16 md:pb-20 border-b border-border">
				<h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 md:mb-12">
					How we create and launch
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
					{launchProcess.map((step, index) => (
						<div key={step} className="flex gap-4 items-start">
							<span className="font-accent text-2xl text-primary italic shrink-0 leading-none pt-0.5">
								{String(index + 1).padStart(2, "0")}
							</span>
							<p className="text-muted-foreground leading-relaxed">{step}</p>
						</div>
					))}
				</div>
			</div>

			{/* Featured — smaller first two */}
			<div className="mb-16 md:mb-20">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl">
					{featuredItems.map((item) => (
						<ShowcaseCard
							key={item.src}
							item={item}
							onExpand={setExpandedImage}
							compact
						/>
					))}
				</div>
			</div>

			{/* Examples */}
			<div className="mb-20 md:mb-28">
				<h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 md:mb-14">
					Some examples of what we can do:
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
					{exampleItems.map((item) => (
						<ShowcaseCard
							key={item.src}
							item={item}
							onExpand={setExpandedImage}
						/>
					))}
				</div>
			</div>

			{/* Capabilities */}
			<div className="border-t border-border pt-16 md:pt-20">
				<h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 md:mb-16">
					What we deliver
				</h2>
				<div className="divide-y divide-border">
					{capabilities.map((item) => (
						<div
							key={item.letter}
							className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 py-10 md:py-12 items-start"
						>
							<span className="font-accent text-5xl text-primary italic leading-none">
								{item.letter}
							</span>
							<div className="space-y-3 max-w-lg">
								<h3 className="font-serif text-2xl font-semibold">{item.title}</h3>
								<p className="text-muted-foreground leading-relaxed">{item.description}</p>
							</div>
							<ul className="md:text-right space-y-1">
								{item.tags.map((tag) => (
									<li
										key={tag}
										className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground"
									>
										{tag}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			{expandedImage && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
					onClick={() => setExpandedImage(null)}
					role="dialog"
					aria-modal="true"
				>
					<button
						type="button"
						onClick={() => setExpandedImage(null)}
						className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
						aria-label="Close"
					>
						<X className="w-8 h-8" />
					</button>
					<div
						className="relative w-full max-w-6xl h-[85vh]"
						onClick={(e) => e.stopPropagation()}
					>
						<Image
							src={expandedImage}
							alt="Expanded project view"
							fill
							className="object-contain"
							sizes="100vw"
						/>
					</div>
				</div>
			)}
		</ProjectPageLayout>
	);
}
