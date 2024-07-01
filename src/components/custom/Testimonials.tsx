import React from "react"
import Marquee from "react-fast-marquee"

const testimonialsData = [
  {
    id: 1,
    comment:
      "Working with [Your Company] was a fantastic experience. Their team demonstrated exceptional skill and creativity, delivering a project that perfectly aligned with our vision. The end product exceeded our expectations in every way, and we have seen significant improvements in our business operations as a result. Highly recommend their services!",
    name: "Prabhu Chandra",
    company: "CEO of Datadrone",
  },
  {
    id: 2,
    comment:
      "From start to finish, the team at [Your Company] was professional, responsive, and dedicated to our project's success. They took the time to understand our needs and delivered a solution that was both innovative and practical. The positive feedback from our stakeholders has been overwhelming, and we couldn’t be happier with the outcome.",
    name: "Geetha S",
    company: "VIT",
  },
  {
    id: 3,
    comment:
      "As an advisor to many businesses, I&apos;ve seen a wide range of projects, but the work done by [Your Company] truly stands out. Their ability to combine strategic insight with creative execution is impressive. Their projects not only meet the clients' needs but also inspire and set new benchmarks in the industry. Their dedication and passion are truly inspiring.",
    name: "Girija Ragavan",
    company: "Advisor",
  },
  {
    id: 4,
    comment:
      "I had the privilege of advising on a project handled by [Your Company], and I was thoroughly impressed by their professionalism and innovative approach. Their commitment to excellence and client satisfaction is evident in every aspect of their work. It&apos;s rare to see such a high level of dedication and talent, and it&apos;s clear why they are leaders in their field.",
    name: "Debasish Das",
    company: "Senior Advisor",
  },
  {
    id: 5,
    comment:
      "At [Your Company], we pride ourselves on delivering exceptional value to our clients, and this is reflected in the outstanding feedback we consistently receive. Our team&apos;s dedication to excellence and innovation ensures that every project not only meets but exceeds client expectations. It's incredibly rewarding to see our clients achieve their goals and grow their businesses with our support.",
    name: "N.k Bansali",
    company: " CFO of Bansali and Co",
  },
]

const Testimonials = () => {
  return (
    <section className="flex flex-col space-y-10 items-center">
      <span className="text-3xl font-serif font-semibold">
        Hear What They Say About Us
      </span>
      <div className="w-full py-8 lg:py-10 px-2 flex flex-col space-y-10">
        <Marquee pauseOnHover={true} direction="left" delay={-10}>
          {testimonialsData.map((person) => (
            <section key={person.id} className="px-4 w-96 flex flex-col">
              <p className="text-justify">{person.comment}</p>
              <div className="flex flex-col items-end">
                <span>{person.name}</span>
                <span>{person.company}</span>
              </div>
            </section>
          ))}
        </Marquee>
        <Marquee pauseOnHover={true} direction="right">
          {testimonialsData.map((person) => (
            <section key={person.id} className="px-4 w-96 flex flex-col">
              <p className="text-justify">{person.comment}</p>
              <div className="flex flex-col items-end">
                <span>{person.name}</span>
                <span>{person.company}</span>
              </div>
            </section>
          ))}
        </Marquee>
        <Marquee pauseOnHover={true} direction="left" delay={10}>
          {testimonialsData.map((person) => (
            <section key={person.id} className="px-4 w-96 flex flex-col">
              <p className="text-justify">{person.comment}</p>
              <div className="flex flex-col items-end">
                <span>{person.name}</span>
                <span>{person.company}</span>
              </div>
            </section>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Testimonials
