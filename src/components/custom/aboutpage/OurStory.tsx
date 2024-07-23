import React from "react"
import Image from "next/image"
import Link from "next/link"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const OurStory = () => {
  return (
    <section className="flex flex-col space-y-10 items-center">
      <span className="text-3xl font-serif font-semibold">Our Story</span>
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="h-full w-full relative col-span-1">
          <Image
            src="/about-us-banner.jpg"
            alt="Our Story"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-1 flex flex-col space-y-4 text-justify">
          <p className="leading-loose">
            At <strong>ADRIG AI Technologies</strong>, our primary mission is to
            provide immense value to our customers. While revenue is important,
            our true vision is to offer exceptional solutions and services at{" "}
            <strong>zero cost for any consultation</strong>. If you are seeking
            expert advice on <strong>AI</strong>, <strong>Automation</strong>,{" "}
            <strong>Chatbots</strong>, <strong>LLMs</strong>,{" "}
            <strong>Game Development</strong>, or{" "}
            <strong>Software Development</strong>, please{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 hover:underline hover:underline-offset-4"
            >
              schedule a no-obligation consultation
            </Link>{" "}
            with us by clicking the button at the bottom right corner of your
            screen.
          </p>

          <p className="leading-loose">
            Founded in 2022 and legally registered in November 2023,{" "}
            <strong>ADRIG AI Technologies</strong> originated from a group of
            college students winning numerous international hackathons such as
            the <strong>&quot;IBM Z Datathon&quot;</strong> and the{" "}
            <strong>&quot;OpenAI GPT-3 Hackathon&quot;</strong>. Our founder and
            CEO, <strong>Vijay Murugadoss</strong>, led the team as a skilled AI
            Engineer and developer.
          </p>

          <p className="leading-loose">
            The initial name of our company was <strong>MUSTARD</strong>,
            reflecting our hackathon team&apos;s name. As team members began to
            drift apart, Vijay sought a co-founder, and the company evolved into{" "}
            <strong>ADRIG AI Technologies</strong>. Today, both Vijay Murugadoss
            and our co-founder <strong>Jerome Ignatius</strong> are dedicated to
            propelling our company to global standards.
          </p>

          <p className="leading-loose">
            We have successfully delivered over{" "}
            <strong>50+ software projects</strong>, developed AI Agents and
            frameworks for multiple companies to automate their processes, and
            specialized in automation solutions. Our expertise lies in
            understanding and implementing <strong>AI</strong> and{" "}
            <strong>Automation</strong> to enhance business operations.
          </p>

          <p className="leading-loose">
            Under the visionary leadership of Vijay Murugadoss and Jerome
            Ignatius, we are committed to achieving exponential growth and
            success. Our goal is to provide <strong>high-value</strong>{" "}
            solutions to our clients while maintaining a focus on innovation and
            customer satisfaction.
          </p>

          <p className="leading-loose">
            If you are looking for expert consultations related to{" "}
            <strong>AI</strong>, <strong>Automation</strong>,{" "}
            <strong>Chatbots</strong>, <strong>LLMs</strong>,{" "}
            <strong>Game Development</strong>, or{" "}
            <strong>Software Development</strong>, please{" "}
            <Link
              href="/contact-us"
              className="text-blue-600 hover:underline hover:underline-offset-4"
            >
              schedule a no-obligation consultation
            </Link>{" "}
            with us.
          </p>
          <RightArrowTransitionButton
            buttonText="Click here to book a free consultation"
            navigateTo="/contact-us"
          />
        </div>
      </div>
    </section>
  )
}

export default OurStory
