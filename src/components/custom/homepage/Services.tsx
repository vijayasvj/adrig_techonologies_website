import Link from "next/link"
import { homepageCompaniesServices } from "@/lib/eng/homepageCompaniesServices"
import { domain } from "@/lib/eum"
import ServiceCard from "./ServiceCard"

const Services = () => {
  console.log(domain)
  return (
    <section className="px-16 grid grid-cols-3 gap-10 w-full">
      {homepageCompaniesServices.map((service) => (
        <section key={service.id} className="w-full col-span-1 cursor-pointer">
          {/* <Link href={`${domain}${service.urlPath}`}> */}
          <ServiceCard service={service} />
          {/* </Link> */}
        </section>
      ))}
    </section>
  )
}

export default Services
