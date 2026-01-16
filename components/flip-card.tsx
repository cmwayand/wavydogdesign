"use client"

import Image from "next/image"
import { useState } from "react"

interface FlipCardProps {
  frontImage: string
  backImage: string
  alt: string
}

export function FlipCard({ frontImage, backImage, alt }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative w-40 h-40 cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="absolute w-full h-full rounded-full overflow-hidden backface-hidden">
          <Image
            src={frontImage}
            alt={alt}
            fill
            className="object-cover"
          />
        </div>
        {/* Back */}
        <div className="absolute w-full h-full rounded-full overflow-hidden backface-hidden rotate-y-180">
          <Image
            src={backImage}
            alt={`Fun photo of ${alt}`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  )
} 