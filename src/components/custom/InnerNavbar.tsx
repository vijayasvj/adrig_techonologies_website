import React from "react"
import { NavbarLinksTypes } from "@/lib/types"
import InnerNavServiceComponent from "./InnerNavServiceComponent"
import NavItemCardsContainer from "./NavItemCardsContainer"

type Props = {
  navItem: NavbarLinksTypes
  handleSelectedNavBarLeave: () => void
}

const InnerNavbar = ({ navItem, handleSelectedNavBarLeave }: Props) => {
  return (
    navItem.assets && (
      <div
        onMouseLeave={handleSelectedNavBarLeave}
        className="absolute flex w-full xl:w-5/6 h-fit bg-gray-100 right-0 top-14"
      >
        {navItem.assets[0].image ? (
          <section className="px-12 pb-10 pt-6 w-full grid grid-cols-3 gap-4 text-xs xl:text-md font-bold`">
            <NavItemCardsContainer count={3} navItem={navItem} />
          </section>
        ) : (
          <InnerNavServiceComponent navItem={navItem} />
        )}
      </div>
    )
  )
}

export default InnerNavbar
