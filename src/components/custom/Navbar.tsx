import React from "react"
import Link from "next/link"
import { navbarLinks } from "@/lib/eng/navbarLinks"

const Navbar = () => {
  return (
    <section className="flex w-full justify-between items-center py-8 px-16 border border-black/60 hover:bg-black hover:text-white ease-in-out duration-500">
      <div>
        <Link href="/">ADRIG</Link>
      </div>
      <ul className="flex space-x-10 items-center">
        {navbarLinks.map((navList) => (
          <li key={navList.id} className="text-sm font-semibold group">
            <Link
              className="flex flex-col items-center"
              href={
                navList.url.startsWith("/") ? navList.url : `#${navList.url}`
              }
            >
              {navList.label}{" "}
              <div className="bg-white h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Navbar
