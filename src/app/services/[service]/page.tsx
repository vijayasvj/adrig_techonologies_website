import React from "react"
import { notFound } from "next/navigation"
import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import path from "path"
import { HomepageCompaniesServicesType, ServicePagePostType } from "@/lib/types"
import ClientCompaniesComponent from "@/components/custom/ClientCompaniesComponent"
import ConversationForm from "@/components/custom/ConversationForm"
import CountUpAnimationContainer from "@/components/custom/CountUpAnimationContainer"
import HeroContent from "@/components/custom/HeroContent"
import {
  ServiceCard,
  StepsToFollowComponent,
} from "@/components/custom/homepage"
import InsightsComponent from "@/components/custom/InsightsComponent"
import MainContent from "@/components/custom/MainContent"

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

  const serviceDataWithHtml: ServicePagePostType & { content: string } = {
    id: service,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: matterResult.content,
  }

  return serviceDataWithHtml
}
type MDXComponents = {
  [key: string]: React.ComponentType<any>
}
const components: MDXComponents = {
  CountUpAnimationContainer: (props: any) => <CountUpAnimationContainer />,
  StepsToFollowComponent: () => <StepsToFollowComponent />,
  ConversationForm: (props: any) => <ConversationForm {...props} />,
  ClientCompaniesComponent: (props: any) => <ClientCompaniesComponent />,
  InsightsComponent: (props: any) => <InsightsComponent />,
  MainContent: (
    props: React.JSX.IntrinsicAttributes & {
      mainPara: string
      subPara: string
      getInTouchIncluded?: boolean
    }
  ) => <MainContent {...props} />,
  ServiceCard: (
    props: React.JSX.IntrinsicAttributes & {
      service: HomepageCompaniesServicesType
    }
  ) => <ServiceCard {...props} />,
  HeroContent: (
    props: React.JSX.IntrinsicAttributes & {
      navigateTo: string
      title: string
      imgSrc?: string
      buttonLabel?: string
    } & { children?: React.ReactNode | undefined }
  ) => <HeroContent {...props} />,
  h1: (props: any) => <h1 style={{ textAlign: "center" }} {...props} />,
  h2: (props: any) => <h2 style={{ textAlign: "center" }} {...props} />,
  h3: (props: any) => <h3 style={{ textAlign: "center" }} {...props} />,
  h4: (props: any) => <h4 style={{ textAlign: "center" }} {...props} />,
  h5: (props: any) => <h5 style={{ textAlign: "center" }} {...props} />,
  h6: (props: any) => <h6 style={{ textAlign: "center" }} {...props} />,
  p: (props: any) => <p style={{ textAlign: "start" }} {...props} />,
}

const Page = async ({ params }: { params: { service: string } }) => {
  const allServicesData = getAllSortedServicesData()
  const { service } = params

  if (!allServicesData.find((serviceData) => serviceData.id === service)) {
    return notFound()
  }

  const { title, date, content } = await getDynamicServiceData(service)

  return <MDXRemote source={content} components={components} />
}

export default Page
