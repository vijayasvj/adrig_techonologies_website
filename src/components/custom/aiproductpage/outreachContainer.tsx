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
// Update this to the suggested image for Outreach Automation
import { formSubmitHandler } from "@/lib/formSubmitHandler"
import { HoverEffect } from "@/components/ui/Card-hover-effect"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const OutreachAutomationContainer = () => {
  const items = [
    {
      title: "Automated Email Sequences",
      description:
        "Craft personalized email sequences that nurture leads and follow up with prospects automatically.",
      link: "#", // Replace with the appropriate URL if available
      image: image1, // Replace with your actual icon image path
    },
    {
      title: "Lead Scoring",
      description:
        "Use AI to score leads based on engagement, ensuring your sales team focuses on the most promising prospects.",
      link: "#",
      image: image2,
    },
    {
      title: "Multi-Channel Campaigns",
      description:
        "Automate your outreach across email, social media, and SMS, maximizing your chances of engaging with potential customers.",
      link: "#",
      image: image3,
    },
  ]

  const items2 = [
    {
      title: "Save Time",
      description:
        "Automating routine outreach tasks frees up your team to focus on closing deals and building relationships.",
      link: "#",
      image: image4,
    },
    {
      title: "Increase Engagement",
      description:
        "With personalized messaging and timely follow-ups, your outreach efforts will resonate more with prospects, improving response rates.",
      link: "#",
      image: image5,
    },
    {
      title: "Multi-Channel Efficiency",
      description:
        "By managing campaigns across multiple channels, we ensure no opportunity is missed, maximizing your potential reach.",
      link: "#",
      image: image6,
    },
  ]

  const items3 = [
    {
      title: "Streamlined Sales Processes",
      description:
        "Automation ensures that every lead is nurtured consistently without your team needing to lift a finger.",
      link: "#",
      image: image7,
    },
    {
      title: "Higher Conversion Rates",
      description:
        "AI-driven personalization increases the relevance of your messages, leading to more conversions.",
      link: "#",
      image: image8,
    },
    {
      title: "Scalable Growth",
      description:
        "As your business grows, outreach automation scales with you, allowing for continuous lead generation without extra effort.",
      link: "#",
      image: image9,
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <header className="bg-green-600 text-white py-6 text-center flex flex-col items-center space-y-6 pb-12">
        <h1 className="mt-10 text-6xl font-bold">Outreach Automation</h1>
        <p className="font-sans">
          Scale Your Sales & Marketing Outreach Efforts with AI-Driven
          Automation
        </p>
        <RightArrowTransitionButton
          buttonText="Get a Free Demo"
          navigateTo="/contact-us"
        />
      </header>

      <section
        id="about"
        className="container mx-auto my-10 text-center flex flex-col space-y-4"
      >
        <h2 className="text-blue-800 text-3xl font-bold mb-6">
          About Outreach Automation
        </h2>
        <p className="text-lg m-auto max-w-[80rem]">
          Our Outreach Automation tools are designed to help you scale your
          sales and marketing efforts without the manual labor. Using AI, we
          automate lead generation, email campaigns, and follow-ups, ensuring
          that every prospect gets the right message at the right time. Whether
          you’re running multi-channel campaigns or need personalized drip
          sequences, our automation tools streamline the entire process.
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
          Scale Your Outreach
        </h2>
        <p className="text-lg text-center mb-6">
          Scale Your Outreach with Automation – Get a Free Demo!
        </p>
        <div className="mx-auto max-w-4xl ">
          <Image
            src={image} // Update this to the suggested image for Outreach Automation
            alt="Outreach automation dashboard"
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
          Scale Your Outreach with Automation – Get a Free Demo!
        </Link>
      </div>
    </div>
  )
}

export default OutreachAutomationContainer
