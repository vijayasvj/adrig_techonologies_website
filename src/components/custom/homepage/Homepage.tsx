"use client"

import React from "react"
import Navbar from "../Navbar"
import HeroSection from "./HeroSection"
import Services from "./Services"

const Homepage = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-24">
      <Navbar />
      <HeroSection />
      <Services />
    </div>
  )
}

export default Homepage
