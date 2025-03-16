import "@/app/globals.css"
import { Inter } from "next/font/google"
import { CartProvider } from "./context/cart"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Wavy Dog Design",
	description: "Design and marketing solutions for your business",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<CartProvider>{children}</CartProvider>
			</body>
		</html>
	)
}
