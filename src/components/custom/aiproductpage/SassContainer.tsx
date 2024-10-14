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
import { formSubmitHandler } from "@/lib/formSubmitHandler"
import { HoverEffect } from "@/components/ui/Card-hover-effect"
import ConversationForm from "../ConversationForm"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const SassContainer = () => {
  const items = [
    {
      title: "Tailored SaaS Solutions",
      description:
        "We create SaaS platforms that cater to your unique business needs, from subscription management to user dashboards and beyond.",
      link: "#", // Replace with the appropriate URL if available
      image: image1, // Replace with your actual icon image path
    },
    {
      title: "Cloud-Based Scalability",
      description:
        "Your platform is built in the cloud, ensuring seamless scalability as your business and user base grow.",
      link: "#",
      image: image2,
    },
    {
      title: "Third-Party Integrations",
      description:
        "We ensure your SaaS integrates with all the essential tools your business relies on, such as payment gateways, CRM systems, and marketing platforms.",
      link: "#",
      image: image3,
    },
  ]

  const items2 = [
    {
      title: "Seamless User Experience",
      description:
        "We design platforms with user-friendly interfaces that make navigating the software intuitive for both you and your clients.",
      link: "#",
      image: image4,
    },
    {
      title: "Automated Processes",
      description:
        "Our SaaS platforms can automate critical business functions such as invoicing, client management, and data collection, improving operational efficiency.",
      link: "#",
      image: image5,
    },
    {
      title: "Secure Data Management",
      description:
        "Built with the highest security standards, your SaaS solution will protect sensitive data, ensuring compliance with industry regulations.",
      link: "#",
      image: image6,
    },
  ]

  const items3 = [
    {
      title: "Increased Efficiency",
      description:
        "Automating everyday tasks and processes allows your team to focus on more strategic goals, saving time and reducing errors.",
      link: "#",
      image: image7,
    },
    {
      title: "Scalability on Demand",
      description:
        "Whether you're adding new users, features, or expanding into new markets, our SaaS platforms grow seamlessly with your business.",
      link: "#",
      image: image8,
    },
    {
      title: "Improved Customer Experience",
      description:
        "A well-designed SaaS platform allows your customers to self-manage their accounts, track services, and access their data anytime, improving satisfaction and retention.",
      link: "#",
      image: image9,
    },
  ]
  return (
    <div className="overflow-x-hidden">
      <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6 pb-12">
        <h1 className="mt-10 text-6xl font-bold">Sass Develeopment</h1>
        <p className="font-sans">
          Empower Your Business with Custom SaaS Solutions that Scale with You
        </p>
        <RightArrowTransitionButton
          buttonText="Book a Free Demo"
          navigateTo="/contact-us"
        />
      </header>

      <section
        id="about"
        className="container mx-auto my-10 text-center flex flex-col space-y-4"
      >
        <h2 className="text-blue-800 text-3xl font-bold mb-6">
          About Sass Developement At Adrig
        </h2>
        <p className="text-lg m-auto max-w-[80rem]">
          We specialise in building powerful, custom{" "}
          <strong> SaaS (Software as a Service)</strong> platforms that are
          designed to streamline your business operations, improve user
          experience, and scale with your growth. Whether it’s a
          subscription-based software, CRM, or an internal management tool, our
          SaaS development team ensures your platform is optimized for
          functionality, security, and performance.
        </p>
      </section>
      <section className="m-20"></section>
      <section
        id="features"
        className="container mx-auto my-10 text-center px-6"
      >
        <h2 className="text-blue-800 text-3xl font-bold">Features</h2>
        {/* <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              src: "/aboutPage/diseasedetection.jpg",
              title: "Disease Detection",
              desc: "Utilizes advanced computer vision to accurately detect more than 10 diseases, including pneumonia, COVID-19, breast cancer, and diabetic retinopathy.",
            },
            {
              src: "/aboutPage/patientassistance.jpg",
              title: "Patient Assistance",
              desc: "Integrates with a large language model (LLM) to guide and assist patients with next steps and treatment options after diagnosis.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg flex flex-col items-center shadow-md w-full md:w-1/2 lg:w-1/4 text-left transition-transform transform hover:translate-y-[-10px]"
            >
              <img
                src={feature.src}
                alt={feature.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-blue-800 text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-lg text-center">{feature.desc}</p>
            </div>
          ))}
        </div> */}
        <div className="mx-20 ">
          <HoverEffect items={items} />
        </div>
      </section>
      <section id="accuracy" className="container mx-auto text-center px-6">
        <h2 className="text-blue-800 text-3xl font-bold mb-6">How We Help</h2>
        <div className="mx-20 ">
          <HoverEffect items={items2} />
        </div>
      </section>
      <section id="accuracy" className="container mx-auto text-center px-6">
        <h2 className="text-blue-800 text-3xl font-bold mb-6">Benefits</h2>
        <div className="mx-20 ">
          <HoverEffect items={items3} />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center p-6 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Transform Your Operations
        </h2>
        <p className="text-lg text-center mb-6">
          Transform Your Operations with a Custom SaaS Solution – Get a Free
          Consultation!
        </p>
        <div className="mx-auto max-w-4xl ">
          <Image
            src={image}
            alt="Cloud-based SaaS dashboard"
            width={500}
            height={300}
            className="rounded-md shadow-md"
          />
        </div>
      </section>
      <div className="my-10 mx-auto max-w-[680px]">
        <Link
          href={"/contact-us"}
          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
        transition-all duration-200 ease-in-out"
        >
          Transform Your Operations with a Custom SaaS Solution – Get a Free
          Consultation!
        </Link>
      </div>
    </div>
  )
}

export default SassContainer
