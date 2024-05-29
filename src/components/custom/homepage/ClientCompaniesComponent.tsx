import React from "react"
import Image from "next/image"
import { HomepageClientCompanies } from "@/assets"

const ClientCompaniesComponent = () => {
  return (
    <section className="w-full">
      <Image
        src={HomepageClientCompanies}
        alt="Adrig Technologies client companies"
      />
    </section>
  )
}

export default ClientCompaniesComponent
