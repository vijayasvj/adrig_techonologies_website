import React from "react"
import Image from "next/image"
import { HomepageCompaniesServicesType } from "@/lib/types"
import ReadMoreButton from "./ReadMoreButton"

type Props = {
  item: HomepageCompaniesServicesType
}

const InsightCard = ({ item }: Props) => {
  return (
    <section className="col-span-1 w-full h-fit flex flex-col items-start space-y-4 lg:space-y-6">
      <Image
        src={item.image}
        alt={item.title}
        className="w-full h-fit sm:h-96 lg:h-fit object-contain xl:object-cover"
      />
      <span className="text-xl lg:text-2xl font-serif font-bold">
        {item.title}
      </span>
      <p className="leading-loose text-sm sm:text-md">{item.description}</p>
      <ReadMoreButton url="/" />
    </section>
  )
}

export default InsightCard
