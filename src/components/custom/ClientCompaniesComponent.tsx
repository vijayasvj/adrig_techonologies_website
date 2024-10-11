import React from "react"
import Image from "next/image"
import Marquee from "react-fast-marquee"
import { partnerShipCompaniesData } from "@/lib/eng/partnerShipCompaniesData"

const ClientCompaniesComponent = () => {
  return (
    <section className="w-[100%] mx-auto  ">
      <Marquee
        gradient={true}
        gradientColor="rgba(229, 243, 255, 0.22)"
        gradientWidth={16}
        className="h-[240px]"
      >
        {partnerShipCompaniesData.map((company) => (
          <Image
            key={company.id}
            src={company.image}
            alt={"company.id"}
            className="w-fit h-[72px] lg:h-[88px] mx-4 lg:mx-6"
          />
        ))}
      </Marquee>
    </section>
  )
}

export default ClientCompaniesComponent
