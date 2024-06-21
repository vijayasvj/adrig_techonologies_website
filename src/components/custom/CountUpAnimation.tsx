"use client"

import { useEffect, useState, useRef } from "react"
import { CountUpAnimationType } from "@/lib/types"

const CountUpAnimation = ({
  initialValue,
  targetValue,
  text,
}: CountUpAnimationType) => {
  const [count, setCount] = useState<number>(initialValue)
  const [animationStarted, setAnimationStarted] = useState<boolean>(false)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const duration = 2000

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            setAnimationStarted(true)
            setIsVisible(true)
            let startValue = initialValue
            const interval = Math.floor(duration / (targetValue - initialValue))

            const counter = setInterval(() => {
              startValue += 1
              setCount(startValue)
              if (startValue >= targetValue) {
                clearInterval(counter)
              }
            }, interval)

            return () => {
              clearInterval(counter)
            }
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [initialValue, targetValue, animationStarted])

  return (
    <div
      ref={containerRef}
      className={`col-span-1 flex flex-col space-y-2 items-center w-full transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="text-blue-600 text-2xl md:text-5xl font-bold">
        {count >= targetValue ? `${count}+` : count}
      </span>
      <span className="text-sm md:text-lg font-bold text-center">{text}</span>
    </div>
  )
}

export default CountUpAnimation
