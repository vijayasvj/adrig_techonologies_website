import React from "react"
import Image from "next/image"
import { industriesData } from "@/lib/eng/industriesData"

const IndustriesSolutionComponent = () => {
  return (
    <section className="flex flex-col items-center xl:w-2/3 px-10 xl:px-0 space-y-10 sm:space-y-16  xl:pb-24">
      <span className="text-2xl sm:text-3xl font-serif font-bold text-center sm:text-start">
        Redefining Industries with Creative Software Solutions
      </span>
      <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-10 mx-auto">
        {industriesData.map((industry) => (
          <section
            key={industry.id}
            className="w-full col-span-1 cursor-pointer"
          >
            {/* <Link href={`${domain}${industry.urlPath}`}> */}
            <div className="flex flex-col space-y-4 items-center">
              <Image
                src={industry.image}
                alt={industry.title}
                className="h-16 sm:h-20"
              />
              <span className="text-md lg:text-xl font-bold text-center">
                {industry.title}
              </span>
            </div>
            {/* </Link> */}
          </section>
        ))}
      </div>
    </section>
  )
}

export default IndustriesSolutionComponent
