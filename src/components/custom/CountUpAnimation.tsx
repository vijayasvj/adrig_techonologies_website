import { useEffect, useState } from "react"
import { CountUpAnimationType } from "@/lib/types"

export const CountUpAnimation = ({
  initialValue,
  targetValue,
  text,
}: CountUpAnimationType) => {
  const [count, setCount] = useState(initialValue)
  const duration = 2000

  useEffect(() => {
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
  }, [targetValue, initialValue])

  return (
    <div className="flex flex-col space-y-2 items-center w-full">
      <span className="text-blue-600 text-5xl font-bold">
        {count >= targetValue ? `${count}+` : count}
      </span>
      <span className="text-lg font-bold text-center">{text}</span>
    </div>
  )
}

export default CountUpAnimation