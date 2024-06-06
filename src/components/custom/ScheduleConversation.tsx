"use client"

import React, { useEffect, useState } from "react"
import { PopupWidget } from "react-calendly"
import { CALENDLY_URL } from "@/lib/eum"

const ScheduleConversation = () => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    const root = document.getElementById("root")
    if (root) {
      setRootElement(root)
    }
  }, [])

  return (
    rootElement && (
      <PopupWidget
        url={CALENDLY_URL}
        rootElement={rootElement!}
        text="Schedule a no obligation consultation"
        color="#1d4ed8"
        textColor="#ffffff"
      />
    )
  )
}

export default ScheduleConversation
