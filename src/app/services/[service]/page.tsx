import React from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import path from "path"
import { remark } from "remark"
import html from "remark-html"
import { ServicePagePostType } from "@/lib/types"

const components = {
  a: (props: any) => (
    <Link {...props} passHref>
      <a className="text-blue-500 hover:text-blue-700 hover:underline" />
    </Link>
  ),
  b: (props: any) => <strong {...props} className="font-bold" />,
  p: (props: any) => <p {...props} className="text-base" />,
  h1: (props: any) => <h1 {...props} className="mt-4 text-4xl font-bold" />,
  h2: (props: any) => <h2 {...props} className="text-3xl font-bold" />,
  h3: (props: any) => <h3 {...props} className="text-2xl font-bold" />,
  h4: (props: any) => <h4 {...props} className="text-xl font-bold" />,
  h5: (props: any) => <h5 {...props} className="text-lg font-bold" />,
  h6: (props: any) => <h6 {...props} className="text-base font-bold" />,
  hr: (props: any) => <hr {...props} className="my-4 border-gray-200" />,
  img: (props: any) => (
    <Image {...props} className="object-contain mx-auto" loading="lazy" />
  ),
  code: (props: any) => <code {...props} className="font-mono text-sm" />,
}

const servicesPageDirectory = path.join(
  process.cwd(),
  "/src/assets/mdContent/services"
)

export function getAllSortedServicesData() {
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

export async function getDynamicServiceData(service: string) {
  const fullPath = path.join(servicesPageDirectory, `${service}.mdx`)
  const fileContent = fs.readFileSync(fullPath, "utf8")

  const matterResult = matter(fileContent)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  const serviceDataWithHtml: ServicePagePostType & { contentHtml: string } = {
    id: service,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
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

  const mdxSource = await serialize(contentHtml, { scope: {} })

  return (
    <div className="w-full">
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}

export default Page
