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
// Update this to the suggested image for Custom AI Solutions
import { formSubmitHandler } from "@/lib/formSubmitHandler"
import { HoverEffect } from "@/components/ui/Card-hover-effect"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const CustomAISolutionsContainer = () => {
  const items = [
    {
      title: "Predictive Analytics",
      description:
        "AI algorithms that forecast customer behavior, market trends, or sales performance based on historical data.",
      link: "#", // Replace with the appropriate URL if available
      image: image1, // Replace with your actual icon image path
    },
    {
      title: "Process Automation",
      description:
        "Automate time-consuming tasks such as data entry, customer segmentation, or inventory management.",
      link: "#",
      image: image2,
    },
    {
      title: "Custom Machine Learning Models",
      description:
        "Our AI tools learn from your data, improving over time to deliver more accurate results and smarter recommendations.",
      link: "#",
      image: image3,
    },
  ]

  const items2 = [
    {
      title: "Tailored Solutions",
      description:
        "Every business is different, which is why we design AI tools that specifically fit your operational needs.",
      link: "#",
      image: image4,
    },
    {
      title: "Improved Decision Making",
      description:
        "Use real-time AI insights to make smarter, faster decisions, giving your business a competitive edge.",
      link: "#",
      image: image5,
    },
    {
      title: "Increased Efficiency",
      description:
        "Automating complex workflows with AI frees up your team to focus on strategic initiatives and long-term growth.",
      link: "#",
      image: image6,
    },
  ]

  const items3 = [
    {
      title: "Faster, Smarter Decisions",
      description:
        "Predictive analytics and AI insights help you make data-driven decisions with confidence.",
      link: "#",
      image: image7,
    },
    {
      title: "Cost Savings",
      description:
        "By automating repetitive tasks, you can save both time and money, reducing operational overhead.",
      link: "#",
      image: image8,
    },
    {
      title: "Scalable Solutions",
      description:
        "As your business grows, our AI tools can be adjusted and scaled to meet new demands and challenges.",
      link: "#",
      image: image9,
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <header className="bg-indigo-600 text-white py-6 text-center flex flex-col items-center space-y-6 pb-12">
        <h1 className="mt-10 text-6xl font-bold">Custom AI Solutions</h1>
        <p className="font-sans">
          Revolutionize Your Business Operations with Tailored AI Solutions
        </p>
        <RightArrowTransitionButton
          buttonText="Unlock the Power of AI"
          navigateTo="/contact-us"
        />
      </header>

      <section
        id="about"
        className="container mx-auto my-10 text-center flex flex-col space-y-4"
      >
        <h2 className="text-blue-800 text-3xl font-bold mb-6">
          About Custom AI Solutions
        </h2>
        <p className="text-lg m-auto max-w-[80rem]">
          Our Custom AI Solutions are built specifically to address the unique
          challenges of your business. Whether you need AI to predict sales
          trends, automate data processing, or improve decision-making, we
          create AI-driven tools that are tailored to your exact needs. From
          machine learning models to predictive analytics, we’ll help you
          harness the power of AI to streamline operations, improve accuracy,
          and drive innovation.
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
          Schedule a Custom AI Consultation
        </h2>
        <p className="text-lg text-center mb-6">
          Unlock the Power of AI – Schedule a Custom AI Consultation!
        </p>
        <div className="mx-auto max-w-4xl ">
          <Image
            src={image} // Update this to the suggested image for Custom AI Solutions
            alt="Custom AI solutions dashboard"
            width={500}
            height={300}
            className="rounded-md shadow-md"
          />
        </div>
      </section>
      <div className="my-10 mx-auto max-w-[510px]">
        <Link
          href={"/contact-us"}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
        transition-all duration-200 ease-in-out"
        >
          Unlock the Power of AI – Schedule a Custom AI Consultation!
        </Link>
      </div>
    </div>
  )
}

export default CustomAISolutionsContainer
