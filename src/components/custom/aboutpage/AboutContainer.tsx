import React from "react"
import { AboutUsBanner } from "@/assets"
import { WhoWeAre } from "."
import ClientCompaniesComponent from "../ClientCompaniesComponent"
import ContactUs from "../ContactUs"
import CountUpAnimationContainer from "../CountUpAnimationContainer"
import HeroContent from "../HeroContent"
import Testimonials from "../Testimonials"
import OurStory from "./OurStory"
import WellWishers from "./WellWishers"

const AboutContainer = () => {
  return (
    <div className="w-5/6 mx-auto flex flex-col items-center space-y-4 py-10">
      <HeroContent
        title="At ADRIG, We Keep Pushing Boundaries with Unyielding Innovation
"
        buttonLabel="Contact Us"
        navigateTo="/contact-us"
        imgSrc={AboutUsBanner}
      >
        We develop advanced AI and Web3 solutions for tech-savvy startups,
        scale-ups, and enterprises, utilizing the latest technologies. With
        numerous awards and a wealth of experience, our software development
        company excels in creating AI and Web3 solutions for a variety of
        industries.
      </HeroContent>
      <ClientCompaniesComponent />
      <CountUpAnimationContainer />
      <div className="w-full flex flex-col items-center space-y-24">
        <WhoWeAre />
        <OurStory />
        <WellWishers />
        <Testimonials />
        <ContactUs />
      </div>
    </div>
  )
}

export default AboutContainer
