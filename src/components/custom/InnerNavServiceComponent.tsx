import React, { useState } from "react"
import { ChevronRight } from "lucide-react"
import { NavbarLinksTypes, SubLink } from "@/lib/types"
import NavItemCardsContainer from "./NavItemCardsContainer"

type Props = {
  navItem: NavbarLinksTypes
}

const InnerNavServiceComponent = ({ navItem }: Props) => {
  const item = navItem.assets ? navItem.assets[0] : ({} as SubLink)

  const [selectedInnerNavBar, setSelectedInnerNavBar] =
    useState<Partial<SubLink>>(item)

  return (
    navItem.assets && (
      <section className="grid grid-cols-7 gap-4 px-4 pb-8 pt-6 text-sm font-bold top-0">
        <ul className="flex flex-col space-y-2 items-start col-span-2">
          {navItem.assets.map((navList) => (
            <li
              key={navList.id}
              className={`group w-full ${selectedInnerNavBar.label === navList.label ? "text-blue-700" : ""}`}
              onMouseEnter={() => setSelectedInnerNavBar(navList)}
            >
              {/* <Link className="w-full" href={navList.url}> */}
              <div className="flex w-full justify-start items-center space-x-2">
                <span>{navList.label}</span>
                <ChevronRight className="w-4 stroke-1.5" />
              </div>
              {/* </Link> */}
            </li>
          ))}
        </ul>
        <div className="col-span-5 w-full">
          {"id" in selectedInnerNavBar &&
          typeof selectedInnerNavBar.id === "number" ? (
            <NavItemCardsContainer
              count={4}
              navItem={selectedInnerNavBar as SubLink}
            />
          ) : null}
        </div>
      </section>
    )
  )
}

export default InnerNavServiceComponent
