import React from "react"
import Image from "next/image"
import { Bansali, DebashisDas, Geetha, GirijaRaghavan, Prabhu } from "@/assets"
import Marquee from "react-fast-marquee"

const testimonialsData = [
  {
    id: 1,
    comment:
      "Working with [Your Company] was a fantastic experience. Their team demonstrated exceptional skill and creativity, delivering a project that perfectly aligned with our vision. The end product exceeded our expectations in every way, and we have seen significant improvements in our business operations as a result. Highly recommend their services!",
    name: "Prabhu Chandra",
    image: Prabhu,
    company: "CEO of Datadrone",
  },
  {
    id: 2,
    comment:
      "From start to finish, the team at [Your Company] was professional, responsive, and dedicated to our project's success. They took the time to understand our needs and delivered a solution that was both innovative and practical. The positive feedback from our stakeholders has been overwhelming, and we couldn’t be happier with the outcome.",
    name: "Geetha S",
    image: Geetha,
    company: "VIT",
  },
  {
    id: 3,
    comment:
      "As an advisor to many businesses, I've seen a wide range of projects, but the work done by [Your Company] truly stands out. Their ability to combine strategic insight with creative execution is impressive. Their projects not only meet the clients' needs but also inspire and set new benchmarks in the industry. Their dedication and passion are truly inspiring.",
    name: "Girija Ragavan",
    image: GirijaRaghavan,
    company: "Advisor",
  },
  {
    id: 4,
    comment:
      "I had the privilege of advising on a project handled by [Your Company], and I was thoroughly impressed by their professionalism and innovative approach. Their commitment to excellence and client satisfaction is evident in every aspect of their work. It's rare to see such a high level of dedication and talent, and it's clear why they are leaders in their field.",
    name: "Debasish Das",
    image: DebashisDas,
    company: "Senior Advisor",
  },
  {
    id: 5,
    comment:
      "At [Your Company], we pride ourselves on delivering exceptional value to our clients, and this is reflected in the outstanding feedback we consistently receive. Our team's dedication to excellence and innovation ensures that every project not only meets but exceeds client expectations. It's incredibly rewarding to see our clients achieve their goals and grow their businesses with our support.",
    name: "N.k Bansali",
    image: Bansali,
    company: " CFO of Bansali and Co",
  },
]

const Testimonials = () => {
  return (
    <section className="flex flex-col space-y-10 items-center w-full">
      <span className="text-3xl font-serif font-semibold">
        Hear What They Say About Us
      </span>
      <div className="w-full py-8 lg:py-10 px-10 flex flex-col space-y-10">
        <Marquee
          pauseOnHover={true}
          direction="left"
          delay={-10}
          gradient={true}
          gradientColor="rgba(229, 243, 255, 0.22)"
          gradientWidth={16}
          className="h-[420px] !overflow-y-visible"
        >
          {testimonialsData.map((person) => (
            <section
              key={person.id}
              className="flex flex-col justify-between items-center mx-6 px-4 py-6 border border-slate-100 rounded-lg shadow-md shadow-slate-200 h-[372px] w-96"
            >
              <p className="text-md leading-relaxed text-slate-600 font-medium text-justify">
                {person.comment}
              </p>
              <div className="flex flex-col items-end w-full space-y-2">
                <Image
                  src={person.image}
                  alt={person.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-slate-500">
                    {person.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {person.company}
                  </span>
                </div>
              </div>
            </section>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          direction="right"
          gradient={true}
          gradientColor="rgba(229, 243, 255, 0.22)"
          gradientWidth={16}
          className="h-[420px] !overflow-y-visible"
        >
          {testimonialsData.map((person) => (
            <section
              key={person.id}
              className="flex flex-col justify-between items-center mx-6 px-4 py-6 border border-slate-100 rounded-lg shadow-md shadow-slate-200 h-[372px] w-96"
            >
              <p className="text-md leading-relaxed text-slate-600 font-medium text-justify">
                {person.comment}
              </p>
              <div className="flex flex-col items-end w-full space-y-2">
                <Image
                  src={person.image}
                  alt={person.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-slate-500">
                    {person.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {person.company}
                  </span>
                </div>
              </div>
            </section>
          ))}
        </Marquee>
        <Marquee
          pauseOnHover={true}
          direction="left"
          delay={10}
          gradient={true}
          gradientColor="rgba(229, 243, 255, 0.22)"
          gradientWidth={16}
          className="h-[420px] !overflow-y-visible"
        >
          {testimonialsData.map((person) => (
            <section
              key={person.id}
              className="flex flex-col justify-between items-center mx-6 px-4 py-6 border border-slate-100 rounded-lg shadow-md shadow-slate-200 h-[372px] w-96"
            >
              <p className="text-md leading-relaxed text-slate-600 font-medium text-justify">
                {person.comment}
              </p>
              <div className="flex flex-col items-end w-full space-y-2">
                <Image
                  src={person.image}
                  alt={person.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col items-end">
                  <span className="text-sm font-medium text-slate-500">
                    {person.name}
                  </span>
                  <span className="text-xs text-slate-400">
                    {person.company}
                  </span>
                </div>
              </div>
            </section>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Testimonials
