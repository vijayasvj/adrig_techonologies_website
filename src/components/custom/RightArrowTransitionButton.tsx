import React from "react"
import { MoveRight } from "lucide-react"

type Props = {
  buttonText: string
}

const RightArrowTransitionButton = ({ buttonText }: Props) => {
  return (
    <button className="w-fit bg-blue-700 text-white px-4 py-2 font-normal group text-lg flex items-center">
      <span>{buttonText}</span>
      <MoveRight className="w-0 group-hover:w-6 ml-2 transition-all duration-300" />
    </button>
  )
}

export default RightArrowTransitionButton
