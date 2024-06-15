"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
import CountUpAnimationContainer from "@/components/custom/CountUpAnimationContainer"

type Props = {
  content: string
}

type MDXComponents = {
  [key: string]: React.ComponentType<any>
}

const components: MDXComponents = {
  CountUpAnimationContainer: (props) => <CountUpAnimationContainer />,
  a: ({ href, ...props }) => (
    <Link href={href}>
      <a
        {...props}
        className="text-blue-500 hover:text-blue-700 hover:underline"
      />
    </Link>
  ),
  b: (props) => <strong {...props} className="font-bold" />,
  p: (props) => <p {...props} className="text-base" />,
  h1: (props) => <h1 {...props} className="mt-4 text-5xl font-bold" />,
  h2: (props) => <h2 {...props} className="text-3xl font-bold" />,
  h3: (props) => <h3 {...props} className="text-2xl font-bold" />,
  h4: (props) => <h4 {...props} className="text-xl font-bold" />,
  h5: (props) => <h5 {...props} className="text-lg font-bold" />,
  h6: (props) => <h6 {...props} className="text-base font-bold" />,
  hr: (props) => <hr {...props} className="my-4 border-gray-200" />,
  li: (props) => <li {...props} className="text-md" />,
  img: (props) => (
    <Image {...props} className="object-contain mx-auto" loading="lazy" />
  ),
  code: (props) => <code {...props} className="font-mono text-sm" />,
}

const ServicePageContainer = ({ content }: Props) => {
  const [mdxSource, setMdxSource] = useState<MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  > | null>(null)

  useEffect(() => {
    const fetchMDXSource = async () => {
      const serialized = await serialize(content)
      setMdxSource(serialized)
    }

    fetchMDXSource()
  }, [content])

  return (
    <div className="prose prose-2xl w-4/5 mx-auto py-24">
      <React.Suspense fallback={<div>Loading...</div>}>
        {mdxSource && <MDXRemote {...mdxSource} components={components} />}
      </React.Suspense>
    </div>
  )
}

export default ServicePageContainer
