import type { Metadata } from "next";
import localFont from "next/font/local";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Wavy Dog Design | Custom Web Design & Marketing Solutions",
	description: "Professional web design, branding, and marketing solutions in Virginia. Custom designs that help businesses grow with modern websites, logos, and social media management.",
	keywords: "web design, branding, marketing, social media management, logo design, Virginia",
	authors: [{ name: "Wavy Dog Design" }],
	creator: "Wavy Dog Design",
	metadataBase: new URL('https://wavydogdesign.com'),
	openGraph: {
		type: "website",
		title: "Wavy Dog Design | Custom Web Design & Marketing Solutions",
		description: "Professional web design, branding, and marketing solutions in Virginia. Custom designs that help businesses grow with modern websites, logos, and social media management.",
		images: [
			{
				url: "/wavydog long logo.svg",
				width: 1200,
				height: 630,
				alt: "Wavy Dog Design Logo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Wavy Dog Design | Custom Web Design & Marketing Solutions",
		description: "Professional web design, branding, and marketing solutions in Virginia. Custom designs that help businesses grow with modern websites, logos, and social media management.",
		images: ["/wavydog long logo.svg"],
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/wavydogblue.svg" />
				<link rel="canonical" href="https://wavydogdesign.com" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
