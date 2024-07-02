import React from "react"
import Link from "next/link"
import { MoveRight } from "lucide-react"

type Props = {
  buttonText: string
  navigateTo: string
}

const RightArrowTransitionButton = ({ buttonText, navigateTo }: Props) => {
  return (
    <Link
      href={navigateTo}
      style={{ textDecoration: "none" }}
      className="w-fit rounded-md bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 font-normal group text-sm sm:text-md lg:text-lg flex items-center"
    >
      <span>{buttonText}</span>
      <MoveRight className="w-0 group-hover:w-6 ml-2 transition-all duration-300" />
    </Link>
  )
}

export default RightArrowTransitionButton
