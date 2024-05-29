import React from "react"
import Image from "next/image"
import { HomepageHeroImage } from "@/assets"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const HeroSection = () => {
  return (
    <div className="w-full bg-[#051c2c]">
      <div className="grid grid-cols-2 mx-auto pt-20 pb-24 px-32">
        <section className="col-span-1 w-full flex flex-col justify-center space-y-10">
          <span className="text-5xl font-normal font-serif text-white leading-tight">
            AI development company enabling innovation and rapid development
          </span>
          <p className="text-2xl w-full font-semibold text-slate-100">
            We build cutting-edge AI solutions for startups and enterprises
          </p>
          <RightArrowTransitionButton buttonText="Get in touch" />
        </section>
        <section className="col-span-1 w-full flex justify-center relative">
          <div className="w-[440px]">
            {/* <Lottie
          className="w-[360px] h-[360px]"
          animationData={HeroAnimation}
          loop={true}
        /> */}
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
