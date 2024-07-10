import React from "react"
import Link from "next/link"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const PredicisContainer = () => {
  return (
    // Sample - 1
    <div className="overflow-x-hidden">
      <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold">Predicis</h1>
        <RightArrowTransitionButton
          buttonText="Book a Free Demo"
          navigateTo="/contact-us"
        />
      </header>

      <section id="about" className="container mx-auto my-10 text-center px-6">
        <h2 className="text-blue-800 text-3xl font-bold mb-6">
          About Predicis
        </h2>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Medical Assistance"
          className="mx-auto rounded-lg mb-6"
        />
        <p className="text-lg">
          <strong>Predicis</strong> is an advanced medical assistance software
          developed by <strong>ADRIG AI Technologies</strong>. Designed
          specifically for medical institutions, Predicis leverages cutting-edge
          AI and computer vision technologies to assist patients by detecting
          and diagnosing over 10+ diseases, including pneumonia, COVID-19,
          breast cancer, and diabetic retinopathy.
        </p>
      </section>

      <section
        id="features"
        className="container mx-auto my-10 text-center px-6"
      >
        <h2 className="text-blue-800 text-3xl font-bold mb-6">Features</h2>
        <div className="flex flex-wrap justify-around gap-6">
          {[
            {
              src: "https://via.placeholder.com/400x300",
              title: "Disease Detection",
              desc: "Utilizes advanced computer vision to accurately detect more than 10 diseases, including pneumonia, COVID-19, breast cancer, and diabetic retinopathy.",
            },
            {
              src: "https://via.placeholder.com/400x300",
              title: "Patient Assistance",
              desc: "Integrates with a large language model (LLM) to guide and assist patients with next steps and treatment options after diagnosis.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left transition-transform transform hover:translate-y-[-10px]"
            >
              <img
                src={feature.src}
                alt={feature.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-blue-800 text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-lg">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="accuracy"
        className="container mx-auto my-10 text-center px-6"
      >
        <h2 className="text-blue-800 text-3xl font-bold mb-6">Accuracy</h2>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Accuracy"
          className="mx-auto rounded-lg mb-6"
        />
        <p className="text-lg">
          Predicis boasts an impressive accuracy rate of over 98%, making it one
          of the most reliable tools available for medical diagnosis and patient
          assistance. Our extensive testing and validation processes ensure that
          Predicis delivers accurate and trustworthy results every time.
        </p>
      </section>

      <section id="demo" className="container mx-auto my-10 text-center px-6">
        <h2 className="text-blue-800 text-3xl font-bold mb-6">
          Book a Free Demo
        </h2>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Free Demo"
          className="mx-auto rounded-lg mb-6"
        />
        <p className="text-lg">
          Experience the power and accuracy of Predicis for yourself.{" "}
          <Link
            href="/contact-us"
            className="text-blue-600 hover:underline hover:underline-offset-4"
          >
            Book a Free Demo
          </Link>{" "}
          today and see how our advanced medical assistance software can benefit
          your institution and improve patient care.
        </p>
      </section>
    </div>

    // Sample - 2
    // <div className="overflow-x-hidden">
    //   <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6">
    //     <h1 className="text-4xl font-bold">Predicis</h1>
    //     <RightArrowTransitionButton
    //       buttonText="Book a Free Demo"
    //       navigateTo="/contact-us"
    //     />
    //   </header>

    //   <section id="about" className="container mx-auto my-10 text-center px-6">
    //     <h2 className="text-blue-800 text-3xl font-bold mb-6">
    //       About Predicis
    //     </h2>
    //     <img
    //       src="https://via.placeholder.com/800x400"
    //       alt="Medical Assistance"
    //       className="mx-auto rounded-lg mb-6"
    //     />
    //     <p className="text-lg">
    //       <strong>Predicis</strong> is an advanced medical assistance software
    //       developed by <strong>ADRIG AI Technologies</strong>. Designed
    //       specifically for medical institutions, Predicis leverages cutting-edge
    //       AI and computer vision technologies to assist patients by detecting
    //       and diagnosing over 10+ diseases, including pneumonia, COVID-19,
    //       breast cancer, and diabetic retinopathy.
    //     </p>
    //   </section>

    //   <section
    //     id="features"
    //     className="container mx-auto my-10 text-center px-6"
    //   >
    //     <h2 className="text-blue-800 text-3xl font-bold mb-6">Features</h2>
    //     <div className="flex flex-wrap justify-around gap-6">
    //       <div className="feature bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left transition-transform transform hover:translate-y-[-10px]">
    //         <img
    //           src="https://via.placeholder.com/400x300"
    //           alt="Disease Detection"
    //           className="rounded-lg mb-4"
    //         />
    //         <h3 className="text-blue-800 text-xl font-bold mb-2">
    //           Disease Detection
    //         </h3>
    //         <p className="text-lg">
    //           Utilizes advanced computer vision to accurately detect more than
    //           10 diseases, including pneumonia, COVID-19, breast cancer, and
    //           diabetic retinopathy.
    //         </p>
    //       </div>
    //       <div className="feature bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left transition-transform transform hover:translate-y-[-10px]">
    //         <img
    //           src="https://via.placeholder.com/400x300"
    //           alt="Patient Assistance"
    //           className="rounded-lg mb-4"
    //         />
    //         <h3 className="text-blue-800 text-xl font-bold mb-2">
    //           Patient Assistance
    //         </h3>
    //         <p className="text-lg">
    //           Integrates with a large language model (LLM) to guide and assist
    //           patients with next steps and treatment options after diagnosis.
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section
    //     id="accuracy"
    //     className="container mx-auto my-10 text-center px-6"
    //   >
    //     <h2 className="text-blue-800 text-3xl font-bold mb-6">Accuracy</h2>
    //     <img
    //       src="https://via.placeholder.com/800x400"
    //       alt="Accuracy"
    //       className="mx-auto rounded-lg mb-6"
    //     />
    //     <p className="text-lg">
    //       Predicis boasts an impressive accuracy rate of over 98%, making it one
    //       of the most reliable tools available for medical diagnosis and patient
    //       assistance. Our extensive testing and validation processes ensure that
    //       Predicis delivers accurate and trustworthy results every time.
    //     </p>
    //   </section>

    //   <section id="demo" className="container mx-auto my-10 text-center px-6">
    //     <h2 className="text-blue-800 text-3xl font-bold mb-6">
    //       Book a Free Demo
    //     </h2>
    //     <img
    //       src="https://via.placeholder.com/800x400"
    //       alt="Free Demo"
    //       className="mx-auto rounded-lg mb-6"
    //     />
    //     <p className="text-lg">
    //       Experience the power and accuracy of Predicis for yourself.{" "}
    //       <Link
    //         href="/contact-us"
    //         className="text-blue-600 hover:underline hover:underline-offset-4"
    //       >
    //         Book a Free Demo
    //       </Link>{" "}
    //       today and see how our advanced medical assistance software can benefit
    //       your institution and improve patient care.
    //     </p>
    //   </section>
    // </div>
  )
}

export default PredicisContainer
