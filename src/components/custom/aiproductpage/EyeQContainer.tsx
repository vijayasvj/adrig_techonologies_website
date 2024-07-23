"use client"

import React from "react"
import ConversationForm from "../ConversationForm"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const EyeQContainer = () => {
  return (
    // Sample - 1
    <div>
      <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold">EyeQ</h1>
        <RightArrowTransitionButton
          buttonText="Book a Free Demo"
          navigateTo="/contact-us"
        />
      </header>

      <section
        id="about"
        className="container mx-auto my-10 text-center flex flex-col space-y-4"
      >
        <h2 className="text-blue-600 text-4xl font-bold">About EyeQ</h2>
        <p className="text-lg">
          <strong>EyeQ</strong> is an advanced AI-powered forensic image and
          video enhancement software developed by{" "}
          <strong>ADRIG AI Technologies</strong>. EyeQ is designed to improve
          clarity and identify truthfulness in forensic analysis by leveraging
          features such as motion deblur, denoising, exposure correction, and
          facial restoration.
        </p>
      </section>

      <section id="features" className="container mx-auto my-10 text-center">
        <h2 className="text-blue-600 text-4xl font-bold">Features</h2>
        <div className="mt-6 w-[80%] mx-auto grid grid-cols-4">
          {[
            {
              src: "/aboutPage/motiondeblur.png",
              title: "Motion Deblur",
              desc: "Significantly reduce motion blur in images and videos for clearer analysis.",
            },
            {
              src: "/aboutPage/denoising.png",
              title: "Denoising",
              desc: "Remove noise from images and videos to enhance visual clarity.",
            },
            {
              src: "/aboutPage/exposurecorrection.png",
              title: "Exposure Correction",
              desc: "Adjust exposure levels to reveal more details in underexposed or overexposed images.",
            },
            {
              src: "/aboutPage/facialrestoration.png",
              title: "Facial Restoration",
              desc: "Restore facial features for improved identification and analysis.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 flex flex-col justify-around rounded-lg shadow-md col-span-1 m-4 hover:transform hover:-translate-y-2 transition-transform"
            >
              <img
                src={feature.src}
                alt={feature.title}
                className="rounded-lg mb-4 h-[100px] object-contain"
              />
              <h3 className="text-blue-600 text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="container mx-auto my-10 text-center"
      >
        <h2 className="text-blue-600 text-4xl font-bold">Applications</h2>
        <div className="flex flex-wrap justify-around mt-6">
          {[
            {
              src: "/aboutPage/forensicanalysis.jpg",
              title: "Forensic Analysis",
              desc: "Enhance forensic images and videos for better analysis and object recognition.",
            },
            {
              src: "/aboutPage/criminalidentification.jpg",
              title: "Criminal Identification",
              desc: "Improve the quality of evidence to aid in criminal investigations.",
            },
            {
              src: "/aboutPage/survillence.jpg",
              title: "Surveillance Enhancement",
              desc: "Enhance surveillance footage for clearer monitoring and identification.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md w-80 m-4 hover:transform hover:-translate-y-2 transition-transform"
            >
              <img
                src={step.src}
                alt={step.title}
                className="rounded-full mx-auto mb-4 h-[160px]"
              />
              <h3 className="text-blue-600 text-2xl font-bold mb-2">
                {step.title}
              </h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full flex flex-col xl:space-y-24 items-center px-4 sm:px-10 xl:px-0 py-6 sm:py-10">
        <ConversationForm
          title="What Can We Build for You?"
          description="Let's discuss your ideas. We will send you an NDA before we talk. All the information is kept confidential."
          onFormSubmit={() => {}}
        />
      </div>
    </div>
  )
}

export default EyeQContainer
