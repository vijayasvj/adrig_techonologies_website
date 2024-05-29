import React from "react"
import Image from "next/image"
import { industriesData } from "@/lib/eng/industriesData"

const IndustriesSolutionComponent = () => {
  return (
    <section className="flex flex-col items-center w-full space-y-16 pb-24">
      <span className="text-3xl font-serif font-bold">
        Redefining Industries with Creative Software Solutions
      </span>
      <div className="w-2/3 grid grid-cols-4 gap-10 mx-auto">
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
                className="h-20"
              />
              <span className="text-xl font-bold">{industry.title}</span>
            </div>
            {/* </Link> */}
          </section>
        ))}
      </div>
    </section>
  )
}

export default IndustriesSolutionComponent
