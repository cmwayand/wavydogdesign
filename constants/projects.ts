export type Project = {
	slug: string;
	title: string;
	tags: string[];
	image: string;
	bgColor: string;
};

/** Swap in your project list here — images, titles, and tags are all editable. */
export const projects: Project[] = [
	{
		slug: "logos-and-branding",
		title: "Logos & Branding",
		tags: ["Identity", "Packaging", "Brand Guidelines"],
		image: "/gardenlogo.jpg",
		bgColor: "#1a2744",
	},
	{
		slug: "ux-and-websites",
		title: "UX & Websites",
		tags: ["Website", "App Design", "UX Audit"],
		image: "/projects/ux-and-websites/room-design-app.png",
		bgColor: "#1a3a2a",
	},
	{
		slug: "ads-and-marketing",
		title: "Ads & Marketing",
		tags: ["Social Media", "Campaigns", "Content"],
		image: "/henleypost3.png",
		bgColor: "#3d2a1a",
	},
	{
		slug: "print-and-production",
		title: "Print & Production",
		tags: ["Editorial", "Collateral", "Production"],
		image: "/printcover.png",
		bgColor: "#2a1a3d",
	},
];
