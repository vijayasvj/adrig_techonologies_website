"use client"

import React, { useState, useEffect } from "react"
import { ArrowBigUpDash } from "lucide-react"
import { Button } from "../ui/button"

const ScrollUpButton = () => {
  const [isBackToTopButtonIsVisible, setIsBackToTopButtonIsVisible] =
    useState<boolean>(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsBackToTopButtonIsVisible(true)
      } else {
        setIsBackToTopButtonIsVisible(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    isBackToTopButtonIsVisible && (
      <section className="sticky z-50 top-[80%] w-full flex justify-end pr-4">
        <Button
          onClick={scrollToTop}
          className="bg-slate-50 text-slate-950 hover:bg-slate-900 hover:text-slate-50 ease-in-out duration-300 shadow-black rounded-xl"
        >
          <ArrowBigUpDash />
        </Button>
      </section>
    )
  )
}

export default ScrollUpButton
