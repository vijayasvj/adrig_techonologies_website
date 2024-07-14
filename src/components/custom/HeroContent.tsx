import React, { PropsWithChildren } from "react"
import Image, { StaticImageData } from "next/image"
import RightArrowTransitionButton from "./RightArrowTransitionButton"

const defaultButtonLabel = "Learn More"

const HeroContent = ({
  title,
  buttonLabel,
  children,
  imgSrc,
  navigateTo,
}: PropsWithChildren<{
  title: string
  imgSrc?: string | StaticImageData
  buttonLabel?: string
  navigateTo: string
}>) => {
  return (
    <div className="flex flex-col md:flex-row not-prose space-x-10 w-full">
      <div className="prose p-4 md:w-1/2 flex flex-col items-start text-black space-y-4">
        <h1 className="text-3xl font-serif font-bold mb-4 leading-tight">
          {title}
        </h1>
        <div className="text-lg font-normal leading-loose mb-4 text-justify">
          {children}
        </div>
        <RightArrowTransitionButton
          buttonText={buttonLabel ?? defaultButtonLabel}
          navigateTo={navigateTo}
        />
      </div>
      <div className="md:w-1/2">
        <div className="h-full w-full relative">
          <Image
            src={imgSrc ?? "/GPT_Insight.png"}
            alt="Image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroContent
