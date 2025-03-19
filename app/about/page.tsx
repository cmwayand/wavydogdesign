import Image from "next/image";
import Link from "next/link";
import { FlipCard } from "@/components/flip-card"
import { MobileMenu } from "@/components/MobileMenu";

export default function AboutPage() {
	const navLinks = [
		{ href: "/#services", label: "Services" },
		{ href: "/about", label: "About" },
		{ href: "/#pricing", label: "Pricing" },
	];

	return (
		<div className="flex min-h-screen flex-col">
			<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
					<div className="flex gap-2 items-center text-xl font-bold">
						<Link href="/">
							<Image
								src="/wavydog long logo.svg"
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
								className="transition-colors hover:text-foreground/80"
							>
								Services
							</Link>
							{/* Hidden for now
							<Link
								href="/work"
								className="transition-colors hover:text-foreground/80"
							>
								Work
							</Link>
							*/}
							<Link
								href="/about"
								className="transition-colors hover:text-foreground/80"
							>
								About
							</Link>
							<Link
								href="/#pricing"
								className="transition-colors hover:text-foreground/80"
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
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-8 max-w-[1200px]">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									About
								</h1>
							</div>
						</div>

						{/* Team Section */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
							<div className="flex flex-col items-center space-y-4">
								<FlipCard
									frontImage="/claire.png"
									backImage="/claireback.png"
									alt="Claire Wayand"
								/>
								<div className="text-center">
									<h3 className="text-xl font-bold">Claire Wayand</h3>
									<p className="text-muted-foreground">
										Founder & Creative Director
									</p>
									<p className="mt-2 text-sm">
										With over a decade of experience in design and marketing,
										Claire leads our creative vision and strategy. She consults
										with clients giving them a personal experience.
									</p>
								</div>
							</div>

							<div className="flex flex-col items-center space-y-4">
								<FlipCard
									frontImage="/corbin.png"
									backImage="/corbinback.png"
									alt="Corbin Kems"
								/>
								<div className="text-center">
									<h3 className="text-xl font-bold">Corbin Kems</h3>
									<p className="text-muted-foreground">Senior Developer</p>
									<p className="mt-2 text-sm">
										Corbin brings an exceptional background in development and
										has worked on successful SaaS products. He makes sure your
										site runs smoothly and is developed quickly.
									</p>
								</div>
							</div>

							<div className="flex flex-col items-center space-y-4">
								<FlipCard
									frontImage="/alborz.png"
									backImage="/placeholder-fun.jpg"
									alt="Alborz"
								/>
								<div className="text-center">
									<h3 className="text-xl font-bold">Alborz Mesbahi</h3>
									<p className="text-muted-foreground">Senior Developer</p>
									<p className="mt-2 text-sm">
										Alborz brings 8+ years of experience to our team and is
										fascinated by AI and new technologies. He guides our
										practices to make sure code health is clean and functional.
									</p>
								</div>
							</div>
						</div>

						{/* Detailed About Section */}
						<div className="mx-auto max-w-[1000px] text-muted-foreground text-sm md:text-base leading-relaxed space-y-6 mt-24">
							<p>
								We are Wavy Dog Design, a dynamic team of seasoned professionals dedicated to transforming your digital vision into reality. With a combined experience of over 10 years in design and development, we offer a comprehensive suite of services to power your online success.
							</p>

							<p>
								Our design expertise spans 8 years of graphic design, honing our ability to create visually stunning and impactful brand identities, marketing materials, and digital assets. This foundation seamlessly transitions into 4 years of specialized product design, where we focus on crafting intuitive and user-centered experiences that drive engagement and achieve business goals. We specialize in UX/UI design, ensuring that every interaction is seamless and delightful.
							</p>

							<p>
								Our development team brings 8 years of deep expertise in modern web technologies, specializing in NodeJS and React. We excel in building robust, scalable, and high-performance SaaS products, web applications, and websites. Our proficiency extends to API development, database management, and cloud-based solutions, ensuring your project is built on a solid technical foundation.
							</p>

							<ul className="space-y-2 list-none">
								<li><strong>Comprehensive Skillset:</strong> We offer a full spectrum of services, from initial concept and design to development, deployment, and marketing.</li>
								<li><strong>Efficient Team:</strong> Our streamlined process and collaborative approach ensure fast and efficient project delivery.</li>
								<li><strong>Proven Expertise:</strong> Our collective experience and portfolio demonstrate our ability to deliver high-quality, impactful results.</li>
								<li><strong>Client-Centric Approach:</strong> We prioritize clear communication, transparency, and a deep understanding of your business objectives.</li>
								<li><strong>Modern Technologies:</strong> We utilize the latest tools and technologies, including NodeJS, React, and AI-powered solutions.</li>
								<li><strong>SaaS and Social Management Expertise:</strong> We have experience building and managing SaaS products, and social media management tools.</li>
							</ul>

							<p>
								Whether you're looking to build a groundbreaking SaaS product, enhance your social media presence, redesign your website, or develop a custom application, we have the expertise and dedication to bring your vision to life. Let's collaborate and create something extraordinary.
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
