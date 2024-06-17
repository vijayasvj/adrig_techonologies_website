"use client"

import React, { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import CountUpAnimationContainer from "@/components/custom/CountUpAnimationContainer"
import ClientCompaniesComponent from "../ClientCompaniesComponent"
import ConversationForm from "../ConversationForm"
import HeroContent from "../HeroContent"
import { ServiceCard } from "../homepage"
import InsightsComponent from "../InsightsComponent"
import MainContent from "../MainContent"

const MDXRemote = dynamic(() =>
  import("next-mdx-remote").then((mod) => mod.MDXRemote)
)
type Props = {
  content: string
}

type MDXComponents = {
  [key: string]: React.ComponentType<any>
}

const formSubmitHandler = (data: any) => {
  console.log(data)
}

const components: MDXComponents = {
  CountUpAnimationContainer: (props) => <CountUpAnimationContainer />,
  ClientCompaniesComponent: (props) => <ClientCompaniesComponent />,
  ConversationForm: (props) => (
    <ConversationForm {...props} onFormSubmit={formSubmitHandler} />
  ),
  InsightsComponent: (props) => <InsightsComponent />,
  MainContent: (props) => <MainContent {...props} />,
  ServiceCard: (props) => <ServiceCard {...props} />,
  HeroContent: (props) => <HeroContent {...props} />,
}

const ServicePageContainer = ({ content }: Props) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  > | null>(null)

  useEffect(() => {
    const fetchMDXSource = async () => {
      const { serialize } = await import("next-mdx-remote/serialize")
      const serialized = await serialize(content)
      setMdxSource(serialized)
    }

    fetchMDXSource()
  }, [content])

  return (
    <div className="prose prose-base max-w-[80%] container py-10">
      <React.Suspense fallback={<div>Loading...</div>}>
        {mdxSource && <MDXRemote {...mdxSource} components={components} />}
      </React.Suspense>
    </div>
  )
}

export default ServicePageContainer
