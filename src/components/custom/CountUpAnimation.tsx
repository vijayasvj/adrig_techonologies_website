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
  const duration = 2000
  const containerRef = useRef<HTMLDivElement | null>(null)
  const scrollThreshold = 360

  useEffect(() => {
    const handleScroll = () => {
      const xy = containerRef.current?.getBoundingClientRect()
      if (!animationStarted && xy && window.scrollY - xy.top > -10) {
        setAnimationStarted(true)
        console.log(window.scrollY - xy.top)
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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [initialValue, targetValue, animationStarted, scrollThreshold])

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-2 items-center w-full"
    >
      <span className="text-blue-600 text-5xl font-bold">
        {count >= targetValue ? `${count}+` : count}
      </span>
      <span className="text-lg font-bold text-center">{text}</span>
    </div>
  )
}

export default CountUpAnimation
