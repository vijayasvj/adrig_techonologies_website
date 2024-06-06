import React from "react"
import Image from "next/image"
import { HomepageClientCompanies } from "@/assets"
import Marquee from "react-fast-marquee"
import { partnerShipCompaniesData } from "@/lib/eng/partnerShipCompaniesData"

const ClientCompaniesComponent = () => {
  return (
    <section className="w-full py-10">
      <Marquee>
        {partnerShipCompaniesData.map((company) => (
          <Image
            key={company.id}
            src={company.image}
            alt={"company.id"}
            className="w-fit h-[88px] mx-6"
          />
        ))}
      </Marquee>
    </section>
  )
}

export default ClientCompaniesComponent
