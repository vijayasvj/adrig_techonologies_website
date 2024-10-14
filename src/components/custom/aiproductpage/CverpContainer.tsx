"use client"

import React from "react"
import { formSubmitHandler } from "@/lib/formSubmitHandler"
import ConversationForm from "../ConversationForm"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const CverpContainer = () => {
  return (
    <div className="overflow-x-hidden">
      <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold">CV-ERP</h1>
        <RightArrowTransitionButton
          buttonText="Book a Free Demo"
          navigateTo="/contact-us"
        />
      </header>

      <section
        id="about"
        className="container mx-auto my-10 text-center flex flex-col space-y-4"
      >
        <h2 className="text-blue-900 text-3xl font-bold mb-6">About CV-ERP</h2>
        <p className="text-lg">
          <strong>CV-ERP</strong> is a state-of-the-art computer vision-based
          ERP module designed for educational institutions, specifically
          focusing on staff-side enterprise resource planning. It offers
          comprehensive surveillance by connecting to the institution&apos;s
          cameras, tracking staff attendance, and automating payroll processes.
          With facial detection and recognition accuracy exceeding 98%, CV-ERP
          ensures efficient and accurate staff management.
        </p>
      </section>

      <section
        id="features"
        className="container mx-auto my-10 text-center px-6"
      >
        <h2 className="text-blue-900 text-3xl font-bold mb-6">Features</h2>
        <div className="flex flex-wrap justify-around gap-6">
          <div className="feature bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left transition-transform transform hover:translate-y-[-10px]">
            <img
              src="/aboutPage/facialrecognition.jpg"
              alt="Facial Recognition"
              className="rounded-lg mb-4"
            />
            <h3 className="text-blue-900 text-xl font-bold mb-2">
              Facial Recognition
            </h3>
            <p className="text-lg">
              High-accuracy facial detection and recognition technology ensures
              reliable tracking of staff attendance and movements within the
              institution.
            </p>
          </div>
          <div className="feature bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left transition-transform transform hover:translate-y-[-10px]">
            <img
              src="/aboutPage/realtimesurvillence.jpg"
              alt="Real-time Surveillance"
              className="rounded-lg mb-4"
            />
            <h3 className="text-blue-900 text-xl font-bold mb-2">
              Real-time Surveillance
            </h3>
            <p className="text-lg">
              Monitors staff entry and exit times, including half-day leaves,
              through a network of connected cameras, providing real-time
              updates to the ERP module.
            </p>
          </div>
          <div className="feature bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left transition-transform transform hover:translate-y-[-10px]">
            <img
              src="/aboutPage/automatedpayroll.jpg"
              alt="Automated Payroll"
              className="rounded-lg mb-4"
            />
            <h3 className="text-blue-900 text-xl font-bold mb-2">
              Automated Payroll
            </h3>
            <p className="text-lg">
              Seamlessly integrates attendance data with payroll systems,
              automating salary calculations and other attendance-related
              processes.
            </p>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="container mx-auto my-10 text-center px-6"
      >
        <h2 className="text-blue-900 text-3xl font-bold mb-6">How It Works</h2>
        <div className="flex space-x-10">
          <div className="step bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center transition-transform transform hover:translate-y-[-10px]">
            <img
              src="/aboutPage/installation.jpg"
              alt="Step 1"
              className="mx-auto rounded-full mb-4 h-[160px]"
            />
            <h3 className="text-blue-900 text-xl font-bold mb-2">
              Step 1: Installation
            </h3>
            <p className="text-lg">
              Set up the local server and connect it to the institution&apos;s
              cameras for comprehensive surveillance.
            </p>
          </div>
          <div className="step bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center transition-transform transform hover:translate-y-[-10px]">
            <img
              src="/aboutPage/monitoring.jpg"
              alt="Step 2"
              className="mx-auto rounded-full mb-4 h-[160px]"
            />
            <h3 className="text-blue-900 text-xl font-bold mb-2">
              Step 2: Monitoring
            </h3>
            <p className="text-lg">
              Continuously monitor staff movements, recording entry and exit
              times with high-accuracy facial recognition.
            </p>
          </div>
          <div className="step bg-white p-6 rounded-lg shadow-md w-full md:w-1/3 text-center transition-transform transform hover:translate-y-[-10px]">
            <img
              src="/aboutPage/automation.jpg"
              alt="Step 3"
              className="mx-auto rounded-full mb-4 h-[160px]"
            />
            <h3 className="text-blue-900 text-xl font-bold mb-2">
              Step 3: Automation
            </h3>
            <p className="text-lg">
              Automatically update the ERP module with attendance data,
              streamlining payroll and other administrative processes.
            </p>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col xl:space-y-24 items-center px-4 sm:px-10 xl:px-0 py-6 sm:py-10">
        <ConversationForm
          title="What Can We Build for You?"
          description="Let's discuss your ideas. We will send you an NDA before we talk. All the information is kept confidential."
          onFormSubmit={formSubmitHandler}
        />
      </div>
    </div>
  )
}

export default CverpContainer
