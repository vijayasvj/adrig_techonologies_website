import React from "react"
import RightArrowTransitionButton from "./RightArrowTransitionButton"

type Props = {
  mainPara: string
  subPara: string
  getInTouchIncluded?: boolean
}

const MainContent = ({
  mainPara,
  subPara,
  getInTouchIncluded = false,
}: Props) => {
  return (
    <section className="w-full py-10 flex flex-col space-y-8">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-semibold text-center py-3 !m-0">
          {mainPara}
        </p>
        <p className="text-md font-normal text-center py-3 !m-0 w-4/5">
          {subPara}
        </p>
      </div>
      {getInTouchIncluded && (
        <div className="flex items-center justify-center">
          <RightArrowTransitionButton
            buttonText="Get in Touch"
            navigateTo="#getInTouchNavigateTo"
          />
        </div>
      )}
    </section>
  )
}

export default MainContent
