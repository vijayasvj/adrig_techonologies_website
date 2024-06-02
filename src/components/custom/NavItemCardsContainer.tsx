import React from "react"
import Image from "next/image"
import Link from "next/link"
import { AICopilotForSales } from "@/assets"
import { NavbarLinksTypes, SubLink } from "@/lib/types"

type Props<T> = {
  navItem: T
}

const NavItemCardsContainer = <T extends SubLink | NavbarLinksTypes>({
  navItem,
}: Props<T>) => {
  return (
    <section className="grid grid-cols-4 gap-4 text-sm font-bold">
      {navItem.assets &&
        navItem.assets.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="col-span-1 flex flex-col items-start space-y-2"
          >
            <Image
              src={AICopilotForSales}
              alt={item.label}
              className="w-[240px] h-[140px] object-cover"
            />
            <span>{item.label}</span>
          </Link>
        ))}
    </section>
  )
}

export default NavItemCardsContainer
