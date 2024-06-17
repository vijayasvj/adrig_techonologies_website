import React from "react"
import Image from "next/image"
import { HomepageCompaniesServicesType } from "@/lib/types"
import { GPT_Insight } from "../../../assets"

type Props = {
  service: HomepageCompaniesServicesType
}

const ServiceCard = ({ service }: Props) => {
  return (
    <section className="hover:shadow-md hover:shadow-slate-200 hover:border-t hover:border-slate-200 w-full h-fit flex flex-col space-y-4 p-6 rounded-md transition-all duration-200">
      <div className="h-12 w-12 relative">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover !m-0"
        />
      </div>
      <span className="text-lg font-bold">{service.title}</span>
      <p className="leading-loose text-md">{service.description}</p>
    </section>
  )
}

export default ServiceCard
