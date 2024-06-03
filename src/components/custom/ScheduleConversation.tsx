import React from "react"
import Link from "next/link"
import { Button } from "../ui/button"

const ScheduleConversation = () => {
  return (
    <section className="fixed z-50 top-[92%] w-full flex justify-end pr-8">
      <Link
        target="_blank"
        href="https://calendly.com/vj-as-entrepreneur/schedule-a-no-obligation-consultation"
      >
        <Button className="bg-blue-700 hover:bg-blue-900 text-sm font-bold shadow-md shadow-black w-fit px-10 py-6 rounded-3xl">
          Schedule a conversation
        </Button>
      </Link>
    </section>
  )
}

export default ScheduleConversation
