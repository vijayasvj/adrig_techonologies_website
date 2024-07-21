import React from "react"
import { stepsToFollowData } from "@/lib/eng/stepsToFollowData"

const StepsToFollowComponent = () => {
  return (
    <section className="w-full px-10 xl:px-0 py-10 flex flex-col space-y-10 sm:space-y-16 items-center">
      <span className="text-2xl sm:text-3xl font-serif font-bold">
        Get Started Today
      </span>
      <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-10 mx-auto">
        {stepsToFollowData.map((steps) => (
          <section key={steps.id} className="w-full col-span-1">
            <div className="flex flex-col space-y-4 items-start">
              <div className="border-2 border-blue-600 rounded-md">
                {/* <Lottie
          className="w-[64px] h-[64px]"
          animationData={steps.image}
          loop={true}
        /> 
         */}
                <steps.image />
              </div>
              <span className="text-lg font-bold">{steps.title}</span>
              <p className="leading-loose text-sm sm:text-md">
                {steps.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </section>
  )
}

export default StepsToFollowComponent
