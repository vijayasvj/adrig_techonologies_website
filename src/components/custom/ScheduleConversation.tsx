import React from "react"
import { Button } from "../ui/button"

const ScheduleConversation = () => {
  return (
    <section className="sticky z-50 top-[92%] w-full flex justify-end pr-8">
      <Button className="bg-blue-700 hover:bg-blue-900 text-sm font-bold shadow-md shadow-black w-fit px-10 py-6 rounded-3xl">
        Schedule a conversation
      </Button>
    </section>
  )
}

export default ScheduleConversation
