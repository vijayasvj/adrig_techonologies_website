"use client"

import React from "react"
import { InlineWidget } from "react-calendly"
import { CALENDLY_URL } from "@/lib/eum"
import ConversationForm from "../ConversationForm"

const ContactPageContainer = () => {
  const formSubmitHandler = (data: any) => {
    console.log(data)
  }

  return (
    <div className="w-full px-2 sm:px-0 sm:w-4/5 grid grid-cols-2 mx-auto items-center my-16 space-x-4">
      <section className="col-span-2 xl:col-span-1">
        <ConversationForm
          title="Contact Us"
          description="Complete the form below and we will contact you to discuss your project.
            Your information will be kept confidential."
          onFormSubmit={formSubmitHandler}
        />
      </section>
      <section className="col-span-2 xl:col-span-1 w-5/6 sm:w-full h-full">
        <InlineWidget
          styles={{ maxWidth: "100%", height: "100%" }}
          url={CALENDLY_URL}
        />
      </section>
    </div>
  )
}

export default ContactPageContainer
