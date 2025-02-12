"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/assets"
import { ChevronDown, Menu, X } from "lucide-react"
import { navbarLinks } from "@/lib/eng/navbarLinks"
import { NavbarLinksTypes } from "@/lib/types"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "../ui/button"
import InnerNavbar from "./InnerNavbar"

const Navbar = () => {
  const [selectedNavBar, setSelectedNavBar] = useState<NavbarLinksTypes | null>(
    null
  )
  const [isSelectedNavBarOpen, setIsSelectedNavBarOpen] =
    useState<boolean>(false)
  const [isMenubarOpened, setIsMenubarOpened] = useState<boolean>(false)
  const allowedNavBar = ["AI Products", "Services", "Industries"]

  const handleNavBarChange = (navItem: NavbarLinksTypes) => {
    setSelectedNavBar(navItem)
    setIsSelectedNavBarOpen((prevState) => !prevState)
  }

  const handleNavBarLeave = () => {
    setSelectedNavBar(null)
  }

  return (
    <section className="sticky py-2 lg:py-0 top-0 w-full bg-white/40 z-50 backdrop-blur-lg sm:px-16 ease-in-out duration-500 border-b border-slate-300">
      <div className="relative flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="Adrig Technologies | AI Company"
            className="w-10 h-10 xl:w-14 xl:h-14"
          />
          <span className="text-2xl lg:text-3xl font-serif uppercase text-blue-800 font-semibold">
            Adrig
          </span>
        </Link>
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium">
          <ul className="flex space-x-10 items-center">
            {navbarLinks.map((navList) => (
              <li
                key={navList.id}
                className="group"
                onMouseEnter={() => handleNavBarChange(navList)}
              >
                <Link
                  href={navList.url}
                  className="flex items-center uppercase space-x-2 cursor-pointer"
                >
                  <span>{navList.label}</span>
                  {allowedNavBar.includes(navList.label) && (
                    <ChevronDown className="w-4 stroke-1.5" />
                  )}
                </Link>
                {!allowedNavBar.includes(navList.label) && (
                  <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                )}
              </li>
            ))}
          </ul>
          {selectedNavBar && allowedNavBar.includes(selectedNavBar.label) && (
            <InnerNavbar
              navItem={selectedNavBar}
              handleSelectedNavBarLeave={handleNavBarLeave}
              selectedNavBar={setSelectedNavBar}
            />
          )}
          <Link
            href={"/case-study"}
            className="flex items-center uppercase space-x-2 cursor-pointer"
          >Case Studies</Link>
          <Link href="/contact-us">
            <Button className="uppercase bg-blue-700 hover:bg-blue-800 text-white px-4 py-1 lg:py-2 font-medium">
              Contact Us
            </Button>
          </Link>
        </div>
        <div className="w-full flex sm:hidden relative justify-end">
          {isMenubarOpened ? (
            <>
              <Button
                onClick={() => setIsMenubarOpened(false)}
                className="bg-pantone rounded-full w-6 h-6 p-0 mx-2"
              >
                <X className="w-4 h-4 stroke-[3px]" />
              </Button>
              <div className="w-[100vw] text-sm mx-auto absolute h-fit max-h-[90vh] overflow-y-scroll bg-gray-100 top-10 p-4 flex flex-col space-y-4">
                <ul className="flex flex-col space-y-4 items-center">
                  {navbarLinks.map((navList) => (
                    <li key={navList.id} className="group w-full">
                      <div
                        onClick={() => handleNavBarChange(navList)}
                        className="flex items-center font-semibold justify-between w-full uppercase space-x-2 cursor-pointer"
                      >
                        <span>{navList.label}</span>
                        {allowedNavBar.includes(navList.label) && (
                          <ChevronDown className="w-4 stroke-1.5" />
                        )}
                      </div>
                      {selectedNavBar &&
                        selectedNavBar.label === navList.label &&
                        isSelectedNavBarOpen && (
                          <ul className="flex flex-col w-5/6 mx-auto space-y-2 font-medium items-center">
                            {selectedNavBar.assets?.map((item) => {
                              return (
                                <React.Fragment key={item.id}>
                                  {item.image ? (
                                    <span>{item.label}</span>
                                  ) : (
                                    <Accordion
                                      type="single"
                                      collapsible
                                      className="w-full"
                                    >
                                      <AccordionItem value={item.label}>
                                        <AccordionTrigger>
                                          {item.label}
                                        </AccordionTrigger>
                                        <AccordionContent className="flex flex-col space-y-2">
                                          {item.assets?.map((asset) => (
                                            <div
                                              key={asset.id}
                                              className="col-span-1 flex flex-col items-start"
                                            >
                                              <span>{asset.label}</span>
                                            </div>
                                          ))}
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  )}
                                </React.Fragment>
                              )
                            })}
                          </ul>
                        )}
                    </li>
                  ))}
                </ul>
                <Link href="/contact-us" className="w-full">
                  <Button className="uppercase bg-blue-700 w-full text-white px-4 py-1 lg:py-2 font-medium">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <Menu
              className="stroke-[3px] stroke-pantone mx-2"
              onClick={() => setIsMenubarOpened(true)}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Navbar
