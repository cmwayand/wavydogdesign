import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
	return (
		<>
			<section id="contact" className="bg-navy text-white scroll-mt-16">
				<div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
					<p className="text-primary text-xs tracking-[0.2em] uppercase mb-6">
						— Start a project
					</p>
					<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto mb-10">
						Let&apos;s build something worth remembering.
					</h2>
					<a
						href="mailto:claire@wavydogdesign.com"
						className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 text-sm tracking-wide hover:bg-primary/90 transition-colors"
					>
						claire@wavydogdesign.com
						<span aria-hidden>→</span>
					</a>
				</div>
			</section>

			<footer className="bg-white border-t border-border">
				<div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					<div className="space-y-4">
						<Link href="/" className="flex items-center gap-2">
							<Image src="/wavydoglogo.svg" width={160} height={32} alt="Wavy Dog Design" />
						</Link>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
							An independent brand and web studio. Logos, identity systems, and websites — designed by hand, built to hold up.
						</p>
					</div>

					<div>
						<p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Studio</p>
						<ul className="space-y-2 text-sm">
							<li><Link href="/#work" className="hover:text-primary transition-colors">Work</Link></li>
							<li><Link href="/#services" className="hover:text-primary transition-colors">Services</Link></li>
							<li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
						</ul>
					</div>

					<div>
						<p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Connect</p>
						<ul className="space-y-2 text-sm">
							<li>
								<Link href="https://www.linkedin.com/company/wavydogdesign/about/" target="_blank" className="hover:text-primary transition-colors">
									LinkedIn
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-4">Contact</p>
						<ul className="space-y-2 text-sm">
							<li><a href="mailto:claire@wavydogdesign.com" className="hover:text-primary transition-colors">claire@wavydogdesign.com</a></li>
							<li><a href="mailto:lmwayand@gmail.com" className="hover:text-primary transition-colors">lmwayand@gmail.com</a></li>
						</ul>
					</div>
				</div>

				<div className="max-w-[1400px] mx-auto px-6 md:px-10 pb-8">
					<p className="text-xs text-muted-foreground">
						&copy; {new Date().getFullYear()} Wavy Dog Design LLC. All rights reserved.
					</p>
				</div>
			</footer>
		</>
	);
}
