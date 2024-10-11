"use client"

import React from "react"
import { InlineWidget } from "react-calendly"
import { CALENDLY_URL } from "@/lib/eum"
import ConversationForm from "./ConversationForm"

const ContactUs = () => {
  const formSubmitHandler = async (data: any) => {
    const formData = {
      "entry.1095599635": data.name,
      "entry.1329565917": data.phoneNumber,
      "entry.1958757335": data.company,
      "entry.1115218693": data.email,
      "entry.1622533492": data.description,
    }

    try {
      const response = await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-rM-SulZYT08We1wsknccRpdnEku-btF9HrbZybYhkqAJKw/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        }
      )

      if (response.ok) {
        console.log("Form submitted successfully!")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    }
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

export default ContactUs
