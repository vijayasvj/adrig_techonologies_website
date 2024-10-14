"use client"

import React from "react"
import Image from "next/image"
import { HomepageClientGraph } from "@/assets"
import { engagementModelData } from "@/lib/eng/engagementModelsData"
import { formSubmitHandler } from "@/lib/formSubmitHandler"
import {
  CompanyExperience,
  HeroSection,
  IndustriesSolutionComponent,
  Services,
  StepsToFollowComponent,
} from "."
import ClientCompaniesComponent from "../ClientCompaniesComponent"
import ConversationForm from "../ConversationForm"
import InsightsComponent from "../InsightsComponent"

const HomePageContainer = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-12 pb-10">
      <HeroSection />
      <ClientCompaniesComponent />
      <CompanyExperience />
      <Services />
      {/* <section className="w-full py-10 flex flex-col space-y-6 items-center">
        <span className="text-2xl sm:text-3xl font-serif font-bold">
          Big Brands Trust Us
        </span>
        <Image
          src={HomepageClientGraph}
          alt="Client Yearly Graph"
          className="xl:h-[640px] object-contain xl:object-fill"
        />
      </section> */}
      <IndustriesSolutionComponent />
      <section className="xl:w-5/6 px-10 xl:px-0 py-10 flex flex-col space-y-10 sm:space-y-16 items-center">
        <span className="text-2xl sm:text-3xl font-serif font-bold">
          Our Engagement Models
        </span>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto">
          {engagementModelData.map((model) => (
            <section key={model.id} className="w-full col-span-1">
              <div className="flex flex-col space-y-2 sm:space-y-4 items-start">
                <Image
                  src={model.image}
                  alt={model.title}
                  className="h-10 sm:h-16"
                />
                <span className="text-lg font-bold">{model.title}</span>
                <p className="leading-loose text-sm sm:text-md">
                  {model.description}
                </p>
              </div>
            </section>
          ))}
        </div>
      </section>
      <div className="w-full xl:w-5/6">
        <StepsToFollowComponent />
      </div>
      <div className="xl:w-2/3 flex flex-col xl:space-y-24 items-center px-4 sm:px-10 xl:px-0 py-6 sm:py-10">
        <ConversationForm
          title="What Can We Build for You?"
          description="Let's discuss your ideas. We will send you an NDA before we talk. All the information is kept confidential."
          onFormSubmit={formSubmitHandler}
        />
        <InsightsComponent />
      </div>
    </div>
  )
}

export default HomePageContainer
