import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";
import { ArrowLeft } from "lucide-react";

export default function HenleysOrchardPage() {
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
									Marketing and Growth
								</span>
								<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">
									Henleys Orchard
								</h1>
								<p className="text-xl text-muted-foreground leading-relaxed">
									Comprehensive marketing strategy focused on wedding venue growth, awareness, 
									and increasing bookings through strategic social media and event promotion.
								</p>
							</div>

							<div className="relative aspect-video rounded-2xl overflow-hidden mb-12 border border-border/50">
								<Image
									src="/henleysorchard.png"
									alt="Henleys Orchard"
									fill
									className="object-cover"
								/>
							</div>

							<div className="prose prose-invert max-w-none space-y-8">
								<div>
									<h2 className="text-2xl font-bold mb-4">What the Client Wanted</h2>
									<p className="text-muted-foreground leading-relaxed">
										Henleys Orchard Estate Cidery needed to grow awareness of their wedding venue 
										and increase bookings. They wanted to reach more couples looking for a 
										picturesque wedding location and ensure their upcoming events were well-promoted 
										to drive attendance. The goal was to establish their venue as a premier 
										destination for weddings and special events.
									</p>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Services Provided</h2>
									<ul className="space-y-4 text-muted-foreground">
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Wedding Venue Growth & Awareness:</strong>
												<p className="mt-1">Developed comprehensive marketing strategies to increase visibility of their wedding venue. Created targeted campaigns to reach engaged couples and showcase the beautiful ceremony settings, reception tent, and catering facilities.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Social Media Posts:</strong>
												<p className="mt-1">Designed and created engaging social media content including beautiful imagery of the venue, behind-the-scenes content, client testimonials, and promotional posts. Developed a consistent posting schedule to maintain engagement and reach new audiences.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Increasing Venue Bookings:</strong>
												<p className="mt-1">Created marketing materials and strategies specifically focused on converting inquiries into bookings. Developed compelling content that highlights the unique features of the venue and makes it easy for couples to envision their special day at Henleys Orchard.</p>
											</div>
										</li>
										<li className="flex items-start gap-3">
											<span className="text-primary font-bold mt-1">•</span>
											<div>
												<strong className="text-foreground">Event Promotion:</strong>
												<p className="mt-1">Designed promotional materials and social media campaigns to tell people about upcoming events including their Fall Festival, seasonal activities, and special cidery events. Created eye-catching graphics and content that drive attendance and engagement.</p>
											</div>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="text-2xl font-bold mb-4">Results</h2>
									<p className="text-muted-foreground leading-relaxed">
										Through our focused marketing strategy, Henleys Orchard saw increased awareness 
										of their wedding venue and a significant boost in booking inquiries. The strategic 
										social media posts helped them reach a wider audience of engaged couples, while 
										the event promotion campaigns successfully drove attendance to their seasonal events 
										and festivals. The cohesive marketing approach established Henleys Orchard as a 
										premier wedding destination and helped them connect with their ideal clients.
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
