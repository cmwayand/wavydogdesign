import "@/app/globals.css";
import { Inter, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import { CartProvider } from "./context/cart";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-serif",
});
const cormorant = Cormorant_Garamond({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	variable: "--font-accent",
});

export const metadata = {
	title: "Wavy Dog Design",
	description: "Independent brand and web studio — logos, identity systems, and websites designed by hand.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${inter.className} min-h-screen flex flex-col bg-white antialiased`}
			>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
