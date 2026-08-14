import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "@/components/MobileMenu";
import { navLinks } from "@/constants/navigation";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-white">
			<div className="max-w-[1400px] mx-auto px-6 md:px-10 flex h-20 items-center justify-between">
				<Link href="/" className="flex items-center">
					<Image
						src="/wavydoglogo.svg"
						width={180}
						height={36}
						alt="Wavy Dog Design"
						priority
					/>
				</Link>
				<div className="flex items-center gap-6">
					<nav className="hidden md:flex items-center gap-8 text-sm">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-foreground hover:text-primary transition-colors"
							>
								{link.label}
							</Link>
						))}
					</nav>
					<Link
						href="/#contact"
						className="hidden md:inline-flex bg-navy text-white text-sm font-medium px-5 py-2.5 hover:opacity-90 transition-opacity"
					>
						Start a project
					</Link>
					<MobileMenu links={navLinks} />
				</div>
			</div>
		</header>
	);
}

export default SiteHeader;
