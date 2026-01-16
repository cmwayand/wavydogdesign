import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft } from "lucide-react";

export default function FitnessBrandPage() {
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
									Branding & Marketing
								</span>
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
									Fitness Brand Identity
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Brand identity development and marketing strategy for a growing fitness brand. 
									Resulted in significant brand recognition and customer growth.
								</p>
							</div>

							<div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-border/50">
								<Image
									src="/headerimage.png"
									alt="Fitness Brand Identity"
									fill
									className="object-cover"
								/>
							</div>

							<div className="prose prose-invert max-w-none space-y-6">
								<div>
									<h2 className="text-2xl font-bold mb-4">Project Overview</h2>
									<p className="text-muted-foreground leading-relaxed">
										A growing fitness brand needed a complete brand identity refresh and marketing 
										strategy to stand out in a competitive market. We developed a cohesive brand 
										identity that resonated with their target audience and created marketing 
										materials that effectively communicated their unique value proposition.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Services Provided</h2>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Brand Identity Development:</strong> Created a complete visual identity including logo, color palette, typography, and brand guidelines.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Marketing Strategy:</strong> Developed comprehensive marketing strategies to increase brand awareness and customer engagement.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Brand Materials:</strong> Designed marketing materials including business cards, promotional materials, and digital assets.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Website Design:</strong> Created a modern website that reflects the new brand identity and effectively showcases their services.</span>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Results</h2>
									<p className="text-muted-foreground leading-relaxed">
										The new brand identity and marketing strategy resulted in significant brand 
										recognition and customer growth. The cohesive visual identity helped the 
										fitness brand establish a strong presence in their market and connect with 
										their target audience more effectively.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
