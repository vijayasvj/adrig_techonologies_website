import React from "react"
import { companyExperienceData } from "@/lib/eng/companyExperienceData"
import CountUpAnimation from "../CountUpAnimation"

const CompanyExperience = () => {
  return (
    <div className="w-3/4 flex flex-col py-16 space-y-24">
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
      <div className="w-full flex flex-col space-y-4 items-center mx-auto">
        <p className="text-3xl font-semibold font-serif w-full text-center leading-snug">
          Building Innovative and Creative Solutions for the Fast-paced Digital
          World
        </p>
        <p className="text-center w-full">
          With over 15 years of industry experience under our belt, we have
          helped startups as well as Fortune 500 companies innovate and grow in
          the dynamic business landscape. Whether it’s crafting custom solutions
          or ensuring their seamless integration into business workflows, our
          expertise has consistently delivered results.
        </p>
      </div>
    </div>
  )
}

export default CompanyExperience
