"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useCart } from "@/app/context/cart"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  const { state, dispatch } = useCart()
  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 md:px-6">
          <Link href="/shop" className="flex items-center text-sm font-medium">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </div>
      </nav>

      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Button asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">${item.price}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch({
                                type: "UPDATE_QUANTITY",
                                payload: { id: item.id, quantity: item.quantity - 1 }
                              })
                            } else {
                              dispatch({
                                type: "REMOVE_ITEM",
                                payload: { id: item.id }
                              })
                            }
                          }}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            dispatch({
                              type: "UPDATE_QUANTITY",
                              payload: { id: item.id, quantity: item.quantity + 1 }
                            })
                          }}
                        >
                          +
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_ITEM",
                            payload: { id: item.id }
                          })
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button className="w-full mt-4" size="lg">
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
