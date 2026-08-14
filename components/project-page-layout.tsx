import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

type ProjectPageLayoutProps = {
	category: string;
	title: string;
	description: string;
	children: React.ReactNode;
};

export function ProjectPageLayout({
	category,
	title,
	description,
	children,
}: ProjectPageLayoutProps) {
	return (
		<div className="flex min-h-screen flex-col bg-white">
			<SiteHeader />
			<main className="flex-1">
				<section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-12 pb-8 md:pt-20 md:pb-12">
					<Link
						href="/#work"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-12 transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to work
					</Link>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16 md:mb-24">
						<div>
							<p className="text-primary text-xs tracking-[0.2em] uppercase mb-6">
								— {category}
							</p>
							<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
								{title}
							</h1>
						</div>
						<div className="lg:pt-10">
							<p className="text-muted-foreground text-base md:text-lg leading-relaxed">
								{description}
							</p>
						</div>
					</div>

					{children}
				</section>

				<section className="border-t border-border">
					<div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 text-center">
						<h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
							Ready to start your project?
						</h2>
						<p className="text-muted-foreground mb-8 max-w-md mx-auto">
							Let&apos;s talk about what you&apos;re building and how we can help.
						</p>
						<Link
							href="/#contact"
							className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
						>
							Get in touch
							<span aria-hidden>→</span>
						</Link>
					</div>
				</section>
			</main>
			<SiteFooter />
		</div>
	);
}
