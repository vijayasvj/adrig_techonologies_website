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
    <div className="w-4/5 mx-auto flex items-center my-16 space-x-4">
      <section className="w-1/2">
        <ConversationForm
          title="Contact Us"
          description="Complete the form below and we will contact you to discuss your project.
            Your information will be kept confidential."
          onFormSubmit={formSubmitHandler}
        />
      </section>
      <section className="w-1/2">
        <InlineWidget url={CALENDLY_URL} />
      </section>
    </div>
  )
}

export default ContactPageContainer
