import React from "react"
import Image, { StaticImageData } from "next/image"
import { Bansali, DebashisDas, Geetha, GirijaRaghavan, Prabhu } from "@/assets"

const wellWishersData: {
  id: number
  name: string
  image: StaticImageData
  company: string
}[] = [
  {
    id: 1,
    name: "Debashis Das",
    image: DebashisDas,
    company: "VP Apexon",
  },
  {
    id: 2,
    name: "Bansali NK",
    image: Bansali,
    company: "Founder of Bansali and Co",
  },
  {
    id: 3,
    name: "Girija Raghavan",
    image: GirijaRaghavan,
    company: "CEO, Ladies Special",
  },
  {
    id: 4,
    name: "Prabhu Chandramoulesshwaran",
    image: Prabhu,
    company: "CEO, DataDrone",
  },
  {
    id: 5,
    name: "Dr. Geetha S",
    image: Geetha,
    company: "Associate DEAN, VIT",
  },
]

const WellWishers = () => {
  return (
    <section className="flex flex-col items-center space-y-10 w-5/6">
      <span className="text-3xl font-serif font-semibold">
        Our Well-Wishers / Honorary Advisory Board
      </span>
      <section className="flex flex-wrap items-center justify-center gap-10">
        {wellWishersData.map((person) => (
          <div key={person.id} className="flex flex-col items-center space-y-2">
            <div className="w-56 h-56 overflow-hidden group rounded-sm">
              <Image
                src={person.image}
                alt={person.name}
                className="w-full h-full group-hover:scale-125 object-center ease-in-out duration-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-semibold font-serif">
                {person.name}
              </span>
              <span className="text-md font-medium">{person.company}</span>
            </div>
          </div>
        ))}
      </section>
    </section>
  )
}

export default WellWishers
