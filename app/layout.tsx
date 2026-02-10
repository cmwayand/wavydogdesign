import "@/app/globals.css";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import { CartProvider } from "./context/cart";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ 
	subsets: ["latin"], 
	weight: ["400", "500", "600", "700"],
	variable: "--font-display" 
});
const outfit = Outfit({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-hero"
});

export const metadata = {
	title: "Wavy Dog Design",
	description: "Design and marketing solutions for your business",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<body className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} ${inter.className} min-h-screen flex flex-col dark`}>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	);
}
