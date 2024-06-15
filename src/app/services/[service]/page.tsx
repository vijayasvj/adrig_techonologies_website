import React from "react"
import { notFound } from "next/navigation"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { ServicePagePostType } from "@/lib/types"
import { ServicePageContainer } from "@/components/custom/serivcepage"

const servicesPageDirectory = path.join(
  process.cwd(),
  "/src/assets/mdContent/services"
)

const getAllSortedServicesData = () => {
  const fileNames = fs.readdirSync(servicesPageDirectory)
  const allServicesData = fileNames.map((name) => {
    const id = name.replace(/\.mdx$/, "")

    const fullPath = path.join(servicesPageDirectory, name)
    const content = fs.readFileSync(fullPath, "utf8")

    const matterResult = matter(content)

    const servicePagePost: ServicePagePostType = {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
    }

    return servicePagePost
  })

  return allServicesData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

async function getDynamicServiceData(service: string) {
  const fullPath = path.join(servicesPageDirectory, `${service}.mdx`)
  const fileContent = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContent)

  const serviceDataWithHtml: ServicePagePostType & { contentHtml: string } = {
    id: service,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml: matterResult.content,
  }

  return serviceDataWithHtml
}

const Page = async ({ params }: { params: { service: string } }) => {
  const allServicesData = getAllSortedServicesData()
  const { service } = params

  if (!allServicesData.find((serviceData) => serviceData.id === service)) {
    return notFound()
  }

  const { title, date, contentHtml } = await getDynamicServiceData(service)

  return <ServicePageContainer content={contentHtml} />
}

export default Page
