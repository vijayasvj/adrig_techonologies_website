import React from "react"
import CountUpAnimationContainer from "../CountUpAnimationContainer"

const CompanyExperience = () => {
  return (
    <div className="w-full sm:w-3/4 flex flex-col px-4 sm:px-0 py-12 space-y-24">
      <CountUpAnimationContainer />
      <div className="w-full flex flex-col space-y-4 items-center mx-auto">
        <p className="text-2xl sm:text-3xl font-semibold font-serif w-full text-center leading-snug">
          Building Innovative and Creative Solutions for the Fast-paced Digital
          World
        </p>
        <p className="text-sm sm:text-md text-center w-full">
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
