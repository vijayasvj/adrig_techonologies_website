import React from "react"
import Image from "next/image"
import { HomepageHeroImage } from "@/assets"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const HeroSection = () => {
  return (
    <div className="w-full bg-pantone">
      <div className="grid grid-cols-2 gap-10 sm:gap-0 mx-auto py-16 px-10 sm:pt-24 xl:pt-20 sm:pb-24 sm:px-24 lg:px-32">
        <section className="col-span-2 xl:col-span-1 w-full flex flex-col justify-center items-start space-y-4 sm:space-y-8 lg:space-y-10">
          <span className="text-2xl sm:text-4xl lg:text-5xl font-normal font-serif text-white leading-tight">
            AI development company enabling innovation and rapid development
          </span>
          <p className="text-md lg:text-2xl w-full font-semibold text-slate-100">
            We build cutting-edge AI solutions for startups and enterprises
          </p>
          <RightArrowTransitionButton
            buttonText="Get in touch"
            navigateTo="#getInTouchNavigateTo"
          />
        </section>
        <section className="col-span-2 xl:col-span-1 w-full flex justify-center relative">
          <div className="w-[360px] lg:w-[480px] xl:w-[440px]">
            <Image
              src={HomepageHeroImage}
              alt="Adrig Technologies - AI Company"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default HeroSection
