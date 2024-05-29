import React from "react"
import { HeroAnimation } from "@/assets"
import Lottie from "lottie-react"

const HeroSection = () => {
  return (
    <div className="w-3/4 gap-6 grid grid-cols-2 mx-auto">
      <section className="col-span-1 w-full flex flex-col justify-center space-y-10">
        <span className="text-5xl font-black">
          Grow Your Business with AI Automation
        </span>
        <p className="text-md w-full font-semibold text-slate-600 text-justify">
          Revolutionize your business growth with AI automation from{" "}
          <strong className="text-blue-700">ADRIG AI TECHNOLOGIES</strong>. Our
          tailored solutions empower you to optimize operations, drive
          innovation, and outpace the competition. Experience exponential growth
          as we seamlessly integrate cutting-edge technology into your workflow,
          unlocking new possibilities for success.
        </p>
        <button className="bg-black w-fit py-2 px-4 text-white rounded-md text-sm font-semibold">
          Get started today!
        </button>
      </section>
      <section className="col-span-1 w-full flex justify-end">
        <Lottie
          className="w-[360px] h-[360px]"
          animationData={HeroAnimation}
          loop={true}
        />
      </section>
    </div>
  )
}

export default HeroSection
