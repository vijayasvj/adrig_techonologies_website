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
    <PopupWidget
      url={CALENDLY_URL}
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure the modal is inserted into the correct domNode.
       */
      rootElement={rootElement!}
      text="Schedule a no obligation consultation"
      color="#1d4ed8"
      textColor="#ffffff"
    />
  )
}

export default ScheduleConversation
