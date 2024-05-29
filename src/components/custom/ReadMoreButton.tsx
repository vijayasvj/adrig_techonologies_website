import React from "react"
import Link from "next/link"
import { Button } from "../ui/button"

type Props = {
  url: string
}

const ReadMoreButton = ({ url }: Props) => {
  return (
    <Link href={url}>
      <Button className="border-2 border-blue-700 hover:border-white bg-white hover:bg-blue-700 text-blue-700 hover:text-white shadow-none rounded-none ease-in-out duration-300">
        Read More
      </Button>
    </Link>
  )
}

export default ReadMoreButton
