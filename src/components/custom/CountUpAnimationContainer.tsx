import React from "react"
import { companyExperienceData } from "@/lib/eng/companyExperienceData"
import CountUpAnimation from "./CountUpAnimation"

const CountUpAnimationContainer = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 w-full mx-auto lg:py-10">
      {companyExperienceData.map((item) => (
        <CountUpAnimation
          key={item.id}
          initialValue={item.initialValue}
          targetValue={item.totalCount}
          text={item.label}
        />
      ))}
    </section>
  )
}

export default CountUpAnimationContainer
