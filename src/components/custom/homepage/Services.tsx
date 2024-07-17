import Link from "next/link"
import { homepageCompaniesServices } from "@/lib/eng/homepageCompaniesServices"
import { DOMAIN } from "@/lib/eum"
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <section className="px-4 sm:px-16 grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-8 xl:gap-10 w-full">
      {homepageCompaniesServices.map((service) => (
        <section key={service.id} className="w-full col-span-1 cursor-pointer">
          {/* <Link href={`${DOMAIN}${service.urlPath}`}> */}
          <ServiceCard service={service} />
          {/* </Link> */}
        </section>
      ))}
    </section>
  )
}

export default Services
