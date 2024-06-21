import React from "react"
import Image from "next/image"
import { HomepageCompaniesServicesType } from "@/lib/types"
import ReadMoreButton from "./ReadMoreButton"

type Props = {
  item: HomepageCompaniesServicesType
}

const InsightCard = ({ item }: Props) => {
  return (
    <section className="col-span-1 w-full flex flex-col items-start space-y-6">
      <Image src={item.image} alt={item.title} />
      <span className="text-2xl font-serif font-bold">{item.title}</span>
      <p className="leading-loose">{item.description}</p>
      <ReadMoreButton url='/' />
    </section>
  )
}

export default InsightCard
