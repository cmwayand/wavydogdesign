"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/app/context/cart"
import { Button } from "@/components/ui/button"

export function CartDisplay() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <Button variant="ghost" size="icon" className="relative">
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  )
}
