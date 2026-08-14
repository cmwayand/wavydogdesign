import Image from "next/image";
import Link from "next/link";
import { ProjectPageLayout } from "@/components/project-page-layout";

export default function AdsAndMarketingPage() {
	return (
		<ProjectPageLayout
			category="Marketing & Growth"
			title="Ads & Marketing"
			description="Strategic advertising and marketing campaigns that drive engagement, increase visibility, and grow your business through targeted social media, content creation, and promotional strategies."
		>
			<div>
				<h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 md:mb-14">
					Case studies
				</h2>
				<Link
					href="/projects/henleys-orchard"
					className="group block max-w-2xl"
				>
					<div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-muted mb-4 border border-border/40">
						<Image
							src="/henleysorchard.png"
							alt="Henleys Orchard"
							fill
							className="object-cover group-hover:scale-[1.01] transition-transform duration-500"
						/>
					</div>
					<h3 className="font-serif text-xl md:text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
						Henleys Orchard
					</h3>
					<p className="text-xs tracking-[0.12em] uppercase text-muted-foreground mb-2">
						Social Media · Event Promotion · Brand Growth
					</p>
					<p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
						Comprehensive marketing strategy focused on wedding venue growth, awareness,
						and increasing bookings through strategic social media and event promotion.
					</p>
				</Link>
			</div>
		</ProjectPageLayout>
	);
}
