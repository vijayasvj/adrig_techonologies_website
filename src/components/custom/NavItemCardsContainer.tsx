import React from "react"
import Image from "next/image"
import { NavbarLinksTypes, SubLink } from "@/lib/types"

type Props<T> = {
  navItem: T
  count: number
}

const NavItemCardsContainer = <T extends SubLink | NavbarLinksTypes>({
  navItem,
  count,
}: Props<T>) => {
  return (
    <section className={`grid grid-cols-${count} gap-4 text-sm font-bold`}>
      {navItem.assets &&
        navItem.assets.map((item) => (
          // <Link
          //   key={item.id}
          //   href={item.url}
          //   className="col-span-1 flex flex-col items-start space-y-2"
          // >
          <div
            key={item.id}
            className="col-span-1 flex flex-col items-center  space-y-2"
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.label}
                className="w-[240px] h-[140px] object-cover"
              />
            )}
            <span>{item.label}</span>
          </div>
          // </Link>
        ))}
    </section>
  )
}

export default NavItemCardsContainer
