"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
// Update to the correct path for the new image
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
import { formSubmitHandler } from "@/lib/formSubmitHandler"
import { HoverEffect } from "@/components/ui/Card-hover-effect"
import ConversationForm from "../ConversationForm"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const SalesBotsContainer = () => {
  const items = [
    {
      title: "Product Recommendations",
      description:
        "Using AI, the Sales Bot can suggest products or services based on customer behavior and preferences, creating a tailored shopping experience.",
      link: "#",
      image: image1, // Replace with your actual icon image path
    },
    {
      title: "Promotions & Offers",
      description:
        "Automatically pop up special offers, discounts, or new product announcements to visitors at the right time, increasing urgency and sales.",
      link: "#",
      image: image2,
    },
    {
      title: "Order Placement Assistance",
      description:
        "Sales Bots streamline the purchasing process by guiding customers through order placement, reducing cart abandonment and improving conversion rates.",
      link: "#",
      image: image3,
    },
  ]

  const items2 = [
    {
      title: "Engage Visitors in Real-Time",
      description:
        "Our bots greet visitors instantly, answer their questions, suggest products, and guide them through their purchase journey, ensuring no opportunity is missed.",
      link: "#",
      image: image4,
    },
    {
      title: "Personalized Interactions",
      description:
        "By learning from visitor behavior, the bot provides recommendations that match their interests, increasing the likelihood of a sale.",
      link: "#",
      image: image5,
    },
    {
      title: "Streamlined Checkout",
      description:
        "Customers can place orders directly through the bot, making the buying process simple and fast, improving customer satisfaction and driving more sales.",
      link: "#",
      image: image6,
    },
  ]

  const items3 = [
    {
      title: "Increased Conversions",
      description:
        "With real-time product recommendations and special offers, Sales Bots can significantly boost your conversion rates.",
      link: "#",
      image: image7,
    },
    {
      title: "24/7 Availability",
      description:
        "Your bot never takes a break, ensuring sales and support continue even outside of business hours.",
      link: "#",
      image: image8,
    },
    {
      title: "Reduced Cart Abandonment",
      description:
        "By providing immediate assistance during the checkout process, the bot reduces friction, ensuring customers complete their purchases.",
      link: "#",
      image: image9,
    },
  ]

  return (
    <div className="overflow-x-hidden">
      <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6 pb-12">
        <h1 className="mt-10 text-6xl font-bold">Sales Bots</h1>
        <p className="font-sans">
          Boost Your Conversions with Intelligent Sales Bots That Engage,
          Convert, and Sell
        </p>
        <RightArrowTransitionButton
          buttonText="Schedule a Demo"
          navigateTo="/contact-us"
        />
      </header>

      <section
        id="about"
        className="container mx-auto my-10 text-center flex flex-col space-y-4"
      >
        <h2 className="text-blue-800 text-3xl font-bold mb-6">What We Do</h2>
        <p className="text-lg m-auto max-w-[80rem]">
          Our AI-driven Sales Bots are more than just customer support
          assistants—they’re designed to actively drive sales by engaging with
          your website visitors, recommending products, highlighting special
          offers, and even assisting with order placement. These bots act as
          your 24/7 sales team, ensuring every visitor gets personalized, timely
          support that leads them to conversion.
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
          Supercharge Your Sales
        </h2>
        <p className="text-lg text-center mb-6">
          Supercharge Your Sales with AI-Driven Sales Bots – Schedule a Demo!
        </p>
        <div className="mx-auto max-w-4xl ">
          <Image
            src={image}
            alt="Chatbot Interface"
            width={500}
            height={300}
            className="rounded-md shadow-md"
          />
        </div>
      </section>
      <div className="my-10 mx-auto max-w-[590px]">
        <Link
          href={"/contact-us"}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
        transition-all duration-200 ease-in-out"
        >
          Supercharge Your Sales with AI-Driven Sales Bots – Schedule a Demo!
        </Link>
      </div>
    </div>
  )
}

export default SalesBotsContainer
