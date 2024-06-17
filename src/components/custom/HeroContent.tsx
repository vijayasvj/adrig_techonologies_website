import React, { PropsWithChildren } from "react"
import Image from "next/image"
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
  imgSrc?: string
  buttonLabel?: string
  navigateTo: string
}>) => {
  return (
    <div className="flex flex-col md:flex-row not-prose">
      <div className="prose p-4 md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-md font-normal mb-4">{children}</p>
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
