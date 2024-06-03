import React from "react"
import Link from "next/link"
import { footerContactUsData, footerData } from "@/lib/eng/footerData"

const Footer = () => {
  const contactData = footerContactUsData
  return (
    <section className="w-full bg-pantone pt-16 pb-10 flex flex-col items-center space-y-10">
      <div className="w-2/3 mx-auto grid grid-cols-5 text-white">
        <div className="w-full col-span-4 grid grid-cols-2 gap-6">
          {footerData.map((section) => (
            <section
              className="col-span-1 w-full flex flex-col space-y-2"
              key={section.id}
            >
              <span className="text-md font-bold uppercase">
                {section.label}
              </span>
              <ul>
                {section.subcategories.map((subcategory) => (
                  <li
                    key={subcategory.id}
                    className="text-xs leading-loose hover:text-slate-400 ease-in-out duration-300"
                  >
                    <Link href={subcategory.url}>
                      <span>{subcategory.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="w-full col-span-1 flex flex-col items-start space-y-2">
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
              ADRIG - Algorithmic Descent Result in Growth | ADRIG AI Pvt. Ltd.{" "}
              <br /> Chennai, India
            </p>
            <div className="flex items-center space-x-2">
              {contactData.socialMedia.map((link) => (
                <Link href={link.url} key={link.id}>
                  <link.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <span className="col-span-5 text-white w-full flex items-center justify-center text-xs">
        ©2024 Adrig Technologies. All Rights Reserved.
      </span>
    </section>
  )
}

export default Footer
