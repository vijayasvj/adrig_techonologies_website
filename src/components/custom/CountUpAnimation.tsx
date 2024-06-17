"use client"

import { useEffect, useState, useRef } from "react"
import { CountUpAnimationType } from "@/lib/types"

const CountUpAnimation = ({
  initialValue,
  targetValue,
  text,
}: CountUpAnimationType) => {
  const [count, setCount] = useState(initialValue)
  const [animationStarted, setAnimationStarted] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const duration = 2000
  const containerRef = useRef<HTMLDivElement | null>(null)

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

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [initialValue, targetValue, animationStarted])

  return (
    <div
      ref={containerRef}
      className={`flex flex-col space-y-2 items-center w-full transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <span className="text-blue-600 text-5xl font-bold">
        {count >= targetValue ? `${count}+` : count}
      </span>
      <span className="text-lg font-bold text-center">{text}</span>
    </div>
  )
}

export default CountUpAnimation
