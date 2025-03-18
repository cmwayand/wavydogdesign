import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
					</div>
				</div>
			</header>

			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2 max-w-[900px]">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Meet our team
								</h1>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									We are a dynamic trio with various skillsets and experience,
									passionate about building products that make an impact and
									solve problems for the greater good.
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
							<div className="flex flex-col items-center space-y-4">
								<div className="relative w-48 h-48 rounded-full overflow-hidden">
									<Image
										src="/claire.png"
										alt="Claire Wayand"
										fill
										className="object-cover"
									/>
								</div>
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
								<div className="relative w-48 h-48 rounded-full overflow-hidden">
									<Image
										src="/corbin.png"
										alt="Corbin Kems"
										fill
										className="object-cover"
									/>
								</div>
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
								<div className="relative w-48 h-48 rounded-full overflow-hidden">
									<Image
										src="/alborz.png"
										alt="Alborz"
										fill
										className="object-cover"
									/>
								</div>
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
					</div>
				</section>
			</main>
		</div>
	);
}
