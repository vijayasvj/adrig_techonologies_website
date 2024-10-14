import React from "react"
import Image from "next/image"
import Link from "next/link"
import { NavbarLinksTypes, SubLink } from "@/lib/types"

type Props<T> = {
  navItem: T
  count: number
  selectedNavBar: any
}

const NavItemCardsContainer = <T extends SubLink | NavbarLinksTypes>({
  navItem,
  count,
  selectedNavBar,
}: Props<T>) => {
  return (
    <React.Fragment>
      {navItem.assets &&
        navItem.assets.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="col-span-1 flex flex-col p-2 space-y-2 hover:bg-slate-300 hover:rounded-lg"
            onClick={() => {
              selectedNavBar(true)
            }}
          >
            <div className="col-span-1 flex flex-col items-center  space-y-2">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.label}
                  className="w-[100px] xl:w-[180px] xl:h-[140px] object-contain "
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
