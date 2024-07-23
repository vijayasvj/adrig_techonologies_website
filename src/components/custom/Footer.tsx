import React from "react"
import Link from "next/link"
import { footerContactUsData, footerData } from "@/lib/eng/footerData"

const Footer = () => {
  const contactData = footerContactUsData
  return (
    <section className="w-full bg-pantone px-10 xl:px-0 pt-16 pb-10">
      <div className="xl:w-2/3 flex flex-col items-center space-y-10 mx-auto">
        <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-5 text-white gap-16 sm:gap-0">
          <div className="w-full col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {footerData.map((section) => (
              <section
                className="col-span-1 w-full flex flex-col items-center sm:items-start space-y-2"
                key={section.id}
              >
                <span className="text-md font-bold uppercase">
                  {section.label}
                </span>
                <ul className="w-full flex flex-col items-center sm:items-start">
                  {section.subcategories.map((subcategory) => (
                    <li
                      key={subcategory.id}
                      className="text-xs leading-loose hover:text-slate-400 ease-in-out duration-300"
                    >
                      <Link href={subcategory.url}>
                        <span className="text-start">{subcategory.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <div className="w-full col-span-4 sm:col-span-1 flex flex-col items-center sm:items-start space-y-2">
            <span className="text-md font-bold uppercase">Contact Us</span>
            <div className="w-full flex flex-col space-y-12 text-xs">
              <div className="flex flex-col space-y-2">
                <span className="text-sm">Get in touch</span>
                <span className="text-blue-300 font-semibold">
                  {contactData.phone}
                </span>
                <Link
                  href={`mailto:${contactData.contactWebsites[0]}`}
                  className="text-blue-300 font-semibold"
                >
                  {contactData.contactWebsites[0]}
                </Link>
              </div>
              <p className="leading-loose">
                ADRIG - Algorithmic Descent Result in Growth | ADRIG AI Pvt.
                Ltd. <br /> Chennai, India
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-2">
                {contactData.socialMedia.map((link) => (
                  <a href={link.url} key={link.id}>
                    <link.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <span className="col-span-5 text-white w-full flex items-center justify-center text-xs">
          ©2024 Adrig Technologies. All Rights Reserved.
        </span>
      </div>
    </section>
  )
}

export default Footer
