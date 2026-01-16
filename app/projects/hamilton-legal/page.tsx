import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft } from "lucide-react";

export default function HamiltonLegalPage() {
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
									Branding and Web Design
								</span>
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
									Hamilton Legal Services
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Complete brand identity and website design for a legal services firm. 
									Developed a professional, trustworthy brand that reflects their expertise 
									and helps them connect with clients effectively.
								</p>
							</div>

							{/* Before and After Section */}
							<div className="mb-12 space-y-8">
								<div className="text-center mb-8">
									<h2 className="text-2xl font-bold mb-2">Before & After</h2>
									<p className="text-muted-foreground">Website transformation</p>
								</div>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div className="space-y-3">
										<h3 className="text-lg font-semibold text-muted-foreground">BEFORE</h3>
										<div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 bg-muted/20">
											<Image
												src="/hamiltonold.png"
												alt="Hamilton Legal Services - Before"
												fill
												className="object-cover"
											/>
										</div>
									</div>
									<div className="space-y-3">
										<h3 className="text-lg font-semibold text-primary">AFTER</h3>
										<div className="relative aspect-video rounded-2xl overflow-hidden border border-primary/30 bg-muted/20">
											<Image
												src="/hamiltonnew.png"
												alt="Hamilton Legal Services - After"
												fill
												className="object-cover"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="prose prose-invert max-w-none space-y-6">
								<div>
									<h2 className="text-2xl font-bold mb-4">Project Overview</h2>
									<p className="text-muted-foreground leading-relaxed">
										Hamilton Legal Services needed a complete brand refresh and modern website 
										to establish a professional, trustworthy presence in the legal services 
										market. We worked with them to create a cohesive brand identity and 
										website that reflects their expertise and helps potential clients feel 
										confident in their services.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Services Provided</h2>
									<ul className="space-y-3 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Brand Identity Development:</strong> Created a professional brand identity including logo, color palette, typography, and brand guidelines that convey trust and expertise.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Website Design:</strong> Designed and developed a modern, user-friendly website that effectively showcases their services and makes it easy for clients to contact them.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">Brand Materials:</strong> Created professional marketing materials including business cards, letterhead, and digital assets that maintain brand consistency.</span>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<span><strong className="text-foreground">User Experience Optimization:</strong> Ensured the website provides an excellent user experience with clear navigation and easy-to-find information.</span>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Results</h2>
									<p className="text-muted-foreground leading-relaxed">
										The new brand identity and website design helped Hamilton Legal Services 
										establish a strong, professional presence online. The cohesive branding 
										and user-friendly website have made it easier for potential clients to 
										find and connect with their services, resulting in increased inquiries 
										and client engagement.
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
