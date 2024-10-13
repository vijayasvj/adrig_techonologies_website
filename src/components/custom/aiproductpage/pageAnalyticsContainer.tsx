"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import image1 from "@/assets/images/cloud-service.png"
import image9 from "@/assets/images/customer.png"
import image7 from "@/assets/images/efficacy.png"
import image3 from "@/assets/images/mediator.png"
import image4 from "@/assets/images/rating.png"
import image from "@/assets/images/sass.png"
import image8 from "@/assets/images/scalability.png"
import image2 from "@/assets/images/scale.png"
import image6 from "@/assets/images/server.png"
import image5 from "@/assets/images/settings.png"
// Update this to the suggested image for Page Analytics
import { formSubmitHandler } from "@/lib/formSubmitHandler"
import { HoverEffect } from "@/components/ui/Card-hover-effect"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const PageAnalyticsContainer = () => {
  const items = [
    {
      title: "Heatmaps",
      description:
        "Visually track where users are clicking, scrolling, and spending time on your pages, so you can optimize your layout for better engagement.",
      link: "#", // Replace with the appropriate URL if available
      image: image1, // Replace with your actual icon image path
    },
    {
      title: "Conversion Funnels",
      description:
        "Analyze the steps users take before converting, identifying any drop-off points in the process.",
      link: "#",
      image: image2,
    },
    {
      title: "Visitor Behavior",
      description:
        "Track detailed data on user journeys, including session duration, bounce rates, and navigation paths.",
      link: "#",
      image: image3,
    },
  ]

  const items2 = [
    {
      title: "Optimize User Experience",
      description:
        "With data-driven insights, you can make informed decisions about website design, content placement, and user flow, leading to a better user experience.",
      link: "#",
      image: image4,
    },
    {
      title: "Boost Conversions",
      description:
        "Understand where users drop off in the conversion process and make changes to streamline their journey, increasing sales and leads.",
      link: "#",
      image: image5,
    },
    {
      title: "Continuous Improvement",
      description:
        "With ongoing analytics, you can test, refine, and improve your website’s performance over time, ensuring constant growth and success.",
      link: "#",
      image: image6,
    },
  ]

  const items3 = [
    {
      title: "Actionable Insights",
      description:
        "Instead of guessing, you’ll have real data showing you exactly what works and what doesn’t on your site.",
      link: "#",
      image: image7,
    },
    {
      title: "Improved Engagement",
      description:
        "By placing key content where it matters most, you’ll increase user interaction and time spent on your site.",
      link: "#",
      image: image8,
    },
    {
      title: "Higher Conversions",
      description:
        "Optimizing conversion funnels based on user behavior will help you turn more visitors into paying customers.",
      link: "#",
      image: image9,
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6 pb-12">
        <h1 className="mt-10 text-6xl font-bold">Page Analytics</h1>
        <p className="font-sans">
          Unlock Deep Insights into User Behavior & Optimize Your Website for
          Maximum Performance
        </p>
        <RightArrowTransitionButton
          buttonText="Get a Free Audit"
          navigateTo="/contact-us"
        />
      </header>

      <section
        id="about"
        className="container mx-auto my-10 text-center flex flex-col space-y-4"
      >
        <h2 className="text-blue-800 text-3xl font-bold mb-6">
          About Page Analytics
        </h2>
        <p className="text-lg m-auto max-w-[80rem]">
          Our Page Analytics tools give you a comprehensive view of how users
          are interacting with your website. From user behavior tracking to
          conversion funnel analysis, we provide you with actionable data that
          helps you optimize your site for better engagement and higher
          conversions. Using heatmaps, session replays, and detailed metrics,
          you’ll be able to pinpoint the exact areas of your site that need
          improvement.
        </p>
      </section>

      <section
        id="features"
        className="container mx-auto my-10 text-center px-6"
      >
        <h2 className="text-blue-800 text-3xl font-bold">Key Features</h2>
        <div className="mx-20 ">
          <HoverEffect items={items} />
        </div>
      </section>

      <section id="how-we-help" className="container mx-auto text-center px-6">
        <h2 className="text-blue-800 text-3xl font-bold mb-6">How We Help</h2>
        <div className="mx-20 ">
          <HoverEffect items={items2} />
        </div>
      </section>

      <section id="benefits" className="container mx-auto text-center px-6">
        <h2 className="text-blue-800 text-3xl font-bold mb-6">Benefits</h2>
        <div className="mx-20 ">
          <HoverEffect items={items3} />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Optimize Your Website
        </h2>
        <p className="text-lg text-center mb-6">
          Optimize Your Website with Page Analytics – Get a Free Audit!
        </p>
        <div className="mx-auto max-w-4xl ">
          <Image
            src={image} // Update this to the suggested image for Page Analytics
            alt="Page analytics dashboard"
            width={500}
            height={300}
            className="rounded-md shadow-md"
          />
        </div>
      </section>
      <div className="my-10 mx-auto max-w-[520px]">
        <Link
          href={"/contact-us"}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
        transition-all duration-200 ease-in-out"
        >
          Optimize Your Website with Page Analytics – Get a Free Audit!
        </Link>
      </div>
    </div>
  )
}

export default PageAnalyticsContainer
