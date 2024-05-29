import React from "react"
import Link from "next/link"
import { navbarLinks } from "@/lib/eng/navbarLinks"

const Navbar = () => {
  return (
    <section className="flex sticky top-0 w-full bg-white/40 z-50 backdrop-blur-lg justify-between items-center py-4 px-16 ease-in-out duration-500">
      <div>
        <Link href="/">ADRIG</Link>
      </div>
      <div className="flex items-center space-x-10 text-md font-semibold">
        <ul className="flex space-x-10 items-center">
          {navbarLinks.map((navList) => (
            <li key={navList.id} className="group">
              <Link
                className="flex flex-col items-center uppercase"
                href={navList.url}
              >
                {navList.label}
                <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </li>
          ))}
        </ul>
        <button className="uppercase bg-blue-700 text-white px-4 py-2 font-medium">
          Contact Us
        </button>
      </div>
    </section>
  )
}

export default Navbar
