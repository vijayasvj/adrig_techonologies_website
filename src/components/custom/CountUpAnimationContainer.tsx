import React from "react"
import { companyExperienceData } from "@/lib/eng/companyExperienceData"
import CountUpAnimation from "./CountUpAnimation"

const CountUpAnimationContainer = () => {
  return (
    <section className="flex items-start space-x-16 w-5/6 mx-auto">
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
