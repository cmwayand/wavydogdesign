"use client"

import { useCart } from "@/app/context/cart"
import { ShoppingCart } from "lucide-react"

export function CartDisplay() {
  const { state } = useCart()
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="flex items-center gap-2">
      <ShoppingCart className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
          {itemCount}
        </span>
      )}
    </div>
  )
}
