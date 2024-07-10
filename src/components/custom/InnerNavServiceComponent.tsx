import React, { useState } from "react"
import Link from "next/link"
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
      <section className="flex items-start px-4 pb-8 space-x-4 pt-6 font-bold top-0">
        <ul className="flex flex-col space-y-6 items-start w-1/5">
          {navItem.assets.map((navList) => (
            <li
              key={navList.id}
              className={`group w-full ${selectedInnerNavBar.label === navList.label ? "text-blue-700" : ""}`}
              onMouseEnter={() => setSelectedInnerNavBar(navList)}
            >
              <Link className="w-full" href={navList.url}>
                <div className="flex w-full justify-start items-center space-x-2">
                  <span className="text-xs xl:text-md">{navList.label}</span>
                  <ChevronRight className="w-[10px] xl:w-[20px] stroke-1.5" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className={`w-4/5 grid grid-cols-4 gap-4 text-xs xl:text-sm font-bold`}
        >
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
