import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WavyDivider } from "@/components/wavy-divider";
import { projects } from "@/constants/projects";

const tickerItems = [
	"Brand Identity",
	"Website Design & Launch",
	"App Design",
	"Print Design",
	"Marketing Collateral",
	"Social Systems",
];

const services = [
	{
		letter: "A",
		title: "Brand Identity",
		description:
			"Logos, color systems, typography, and brand guidelines — everything a growing business needs to look like itself everywhere it shows up.",
		tags: ["Logo Systems", "Brand Guidelines", "Visual Identity", "Packaging"],
	},
	{
		letter: "B",
		title: "Web & Digital",
		description:
			"Custom websites and digital products designed for clarity and conversion. From first wireframe to launch day.",
		tags: ["Website Design", "UX/UI", "App Design", "Web Development"],
	},
	{
		letter: "C",
		title: "Print & Production",
		description:
			"Business cards, menus, magazines, and marketing collateral — designed with the same care as your digital presence.",
		tags: ["Editorial Design", "Print Collateral", "Production", "Signage"],
	},
];

const processSteps = [
	{
		step: "01",
		title: "Discovery",
		description: "We learn your business, audience, and goals before anything gets designed.",
	},
	{
		step: "02",
		title: "Design",
		description: "Concepts, revisions, and refinement until the work feels unmistakably yours.",
	},
	{
		step: "03",
		title: "Delivery",
		description: "Final files, guidelines, and launch support — built to hold up long after we're done.",
	},
];

const pricingTiers = [
	{
		badge: "Brand Essentials",
		title: "For the first real launch",
		price: "Custom",
		features: [
			"Logo design or refresh",
			"Color & typography system",
			"Basic brand guidelines",
			"Social media templates",
		],
		highlighted: false,
	},
	{
		badge: "Most Requested",
		title: "Full Identity + Site",
		price: "Custom",
		features: [
			"Complete brand identity",
			"Website design & build",
			"Marketing collateral set",
			"30-day post-launch support",
		],
		highlighted: true,
	},
	{
		badge: "Complete System",
		title: "For a full brand launch",
		price: "Custom",
		features: [
			"Full identity system",
			"Website + app design",
			"Print & production suite",
			"Ongoing monthly support",
		],
		highlighted: false,
	},
];

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col bg-white">
			<SiteHeader />
			<main className="flex-1">
				{/* Hero */}
				<section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-16 pb-12 md:pt-24 md:pb-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
						<div>
							<p className="text-primary text-xs tracking-[0.2em] uppercase mb-8">
								— Independent brand &amp; web studio
							</p>
							<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
								Identity, designed{" "}
								<span className="text-primary">by hand.</span>
							</h1>
						</div>
						<div className="lg:pt-16 space-y-8">
							<p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
								Wavy Dog Design builds logos, identity systems, and websites for businesses
								that want to look as good in print as they do on screen. One studio, one point
								of contact — from first sketch to launch day.
							</p>
							<div className="flex flex-wrap gap-4">
								<Link
									href="#contact"
									className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
								>
									Start a project
									<span aria-hidden>→</span>
								</Link>
								<Link
									href="#work"
									className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 text-sm font-medium hover:bg-foreground hover:text-white transition-colors"
								>
									See the work
								</Link>
							</div>
						</div>
					</div>
				</section>

				<WavyDivider className="max-w-[1400px] mx-auto px-6 md:px-10 mb-0" />

				{/* Service ticker */}
				<div className="bg-ticker border-y border-border/60 overflow-hidden">
					<div className="max-w-[1400px] mx-auto px-6 md:px-10 py-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
						{tickerItems.map((item, i) => (
							<span key={item} className="flex items-center gap-6 text-[11px] tracking-[0.15em] uppercase text-foreground/70">
								{item}
								{i < tickerItems.length - 1 && (
									<span className="text-primary text-[8px]" aria-hidden>◆</span>
								)}
							</span>
						))}
					</div>
				</div>

				{/* Work grid */}
				<section id="work" className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 scroll-mt-20">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16 md:gap-x-14 md:gap-y-24">
						{projects.map((project) => (
							<Link
								key={project.slug}
								href={`/projects/${project.slug}`}
								className="group block"
							>
								<div
									className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden rounded-sm mb-6"
									style={{ backgroundColor: project.bgColor }}
								>
									<Image
										src={project.image}
										alt={project.title}
										fill
										className="object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-500"
										sizes="(max-width: 768px) 100vw, 680px"
									/>
									<div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors">
										<ArrowUpRight className="w-5 h-5 text-white" />
									</div>
								</div>
								<h3 className="font-serif text-2xl md:text-3xl font-semibold mb-2 group-hover:text-primary transition-colors">
									{project.title}
								</h3>
								<p className="text-xs tracking-[0.12em] uppercase text-muted-foreground">
									{project.tags.join(" · ")}
								</p>
							</Link>
						))}
					</div>
				</section>

				{/* Services */}
				<section id="services" className="border-t border-border scroll-mt-20">
					<div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
							<h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight">
								Full-service,
								<br />
								start to finish.
							</h2>
							<p className="text-muted-foreground text-base md:text-lg leading-relaxed lg:pt-2 max-w-sm lg:ml-auto">
								One studio, one point of contact, from first sketch to launch day.
							</p>
						</div>

						<div className="divide-y divide-border">
							{services.map((service) => (
								<div
									key={service.letter}
									className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 py-10 md:py-14 items-start"
								>
									<span className="font-accent text-5xl md:text-6xl text-primary italic leading-none">
										{service.letter}
									</span>
									<div className="space-y-3 max-w-lg">
										<h3 className="font-serif text-2xl md:text-3xl font-semibold">{service.title}</h3>
										<p className="text-muted-foreground leading-relaxed">{service.description}</p>
									</div>
									<ul className="md:text-right space-y-1">
										{service.tags.map((tag) => (
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
				</section>

				{/* Process */}
				<section id="process" className="bg-ticker border-y border-border/60 scroll-mt-20">
					<div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
						<h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight mb-16">
							How we work
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
							{processSteps.map((step) => (
								<div key={step.step}>
									<p className="text-primary font-accent text-3xl italic mb-4">{step.step}</p>
									<h3 className="font-serif text-xl font-semibold mb-3">{step.title}</h3>
									<p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Pricing */}
				<section id="pricing" className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28 scroll-mt-20">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 md:mb-20">
						<h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight leading-tight">
							Packages built for
							<br />
							growing brands.
						</h2>
						<p className="text-muted-foreground text-base md:text-lg leading-relaxed lg:pt-2 max-w-sm lg:ml-auto">
							Fixed scope, fixed price, no surprise invoices. Custom scopes available on request.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{pricingTiers.map((tier) => (
							<div
								key={tier.badge}
								className={`flex flex-col p-8 md:p-10 border ${
									tier.highlighted
										? "bg-navy text-white border-navy"
										: "bg-white border-border"
								}`}
							>
								<span
									className={`inline-block self-start text-[10px] tracking-[0.15em] uppercase px-3 py-1 mb-8 ${
										tier.highlighted
											? "bg-primary text-white"
											: "bg-primary/10 text-primary"
									}`}
								>
									{tier.badge}
								</span>
								<h3
									className={`font-serif text-xl font-semibold mb-2 ${
										tier.highlighted ? "text-white/80" : "text-muted-foreground"
									}`}
								>
									{tier.title}
								</h3>
								<p className={`font-serif text-4xl md:text-5xl font-bold mb-8 ${tier.highlighted ? "" : ""}`}>
									{tier.price}
								</p>
								<ul className="flex-1 space-y-0 divide-y divide-border/30 mb-10">
									{tier.features.map((feature) => (
										<li
											key={feature}
											className={`py-3 text-sm flex gap-3 ${
												tier.highlighted ? "border-white/10" : ""
											}`}
										>
											<span className={tier.highlighted ? "text-primary" : "text-primary"}>—</span>
											{feature}
										</li>
									))}
								</ul>
								<Link
									href="#contact"
									className={`inline-flex items-center justify-center py-3 text-sm border transition-colors ${
										tier.highlighted
											? "border-white/30 hover:bg-white/10"
											: "border-foreground hover:bg-foreground hover:text-white"
									}`}
								>
									Start here
								</Link>
							</div>
						))}
					</div>
				</section>
			</main>

			<SiteFooter />
		</div>
	);
}
