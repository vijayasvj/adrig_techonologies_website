"use client"

import React from "react"
import { InlineWidget } from "react-calendly"
import { CALENDLY_URL } from "@/lib/eum"
import ContactUs from "../ContactUs"
import ConversationForm from "../ConversationForm"

const ContactPageContainer = () => {
  const formSubmitHandler = (data: any) => {
    console.log(data)
  }

  return <ContactUs />
}

export default ContactPageContainer
