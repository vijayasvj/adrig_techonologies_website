import React from "react"
import Image from "next/image"
import Lottie from "lottie-react"
import { serviceProvidedData } from "@/lib/eng/serviceProvidedData"

const Services = () => {
  return (
    <section className="w-full flex flex-col items-center space-y-6 pt-24">
      <div className="flex flex-col items-center space-y-2">
        <span className="text-xl font-semibold">What we offer</span>
        <div className="w-fit flex space-x-2">
          <span className="inline-block w-6 h-1 ml-1 rounded-full bg-black"></span>
          <span className="inline-block w-24 h-1 rounded-full bg-black"></span>
          <span className="inline-block w-2 h-1 ml-1 rounded-full bg-black"></span>
        </div>
      </div>
      <p className="text-md text-slate-700 font-semibold">
        We offer a wide range of services to help you grow your business
      </p>
      <div className="w-2/3 grid grid-cols-3 gap-4">
        {serviceProvidedData.map((service) => (
          <div
            key={service.id}
            className="bg-white group rounded-lg h-72 mx-2 p-4 col-span-1 w-full flex flex-col items-center"
          >
            <div className="relative p-2 flex flex-col w-full rounded-lg border-slate-300 group-hover:border-slate-700  ease-in duration-200 justify-center space-y-6 items-center border-2 h-full">
              <div className="mt-2 text-slate-600">
                <Lottie
                  className="w-[40px] h-[40px]"
                  animationData={service.icon}
                  loop={true}
                />
              </div>
              <div className="flex flex-col font-semibold items-center space-y-1">
                <span className="text-sm text-slate-700">{service.label}</span>
                {/* <p className='text-center text-slate-500 text-xs'>{data.description}</p> */}
              </div>
              <span className="absolute tracking-normal -top-[26px] -left-[1.5px] py-1 px-4 rounded-tl-lg border-r-8  border-b-8 border-white bg-slate-950 font-medium text-slate-400 group-hover:text-slate-100 duration-200">
                0{service.id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
