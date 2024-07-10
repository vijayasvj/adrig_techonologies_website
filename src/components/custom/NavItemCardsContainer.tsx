import React from "react"
import Image from "next/image"
import Link from "next/link"
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
    <React.Fragment>
      {navItem.assets &&
        navItem.assets.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="col-span-1 flex flex-col items-start space-y-2"
          >
            <div
              key={item.id}
              className="col-span-1 flex flex-col items-center  space-y-2"
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.label}
                  className="w-[120px] xl:w-[240px] xl:h-[140px] object-cover"
                />
              )}
              <span className="text-center">{item.label}</span>
            </div>
          </Link>
        ))}
    </React.Fragment>
  )
}

export default NavItemCardsContainer
