import React from "react"
import Link from "next/link"
import RightArrowTransitionButton from "../RightArrowTransitionButton"

const EyeQContainer = () => {
  return (
    // Sample - 1
    <div>
      <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-bold">EyeQ</h1>
        <RightArrowTransitionButton
          buttonText="Book a Free Demo"
          navigateTo="/contact-us"
        />
      </header>

      <section id="about" className="container mx-auto my-10 text-center">
        <h2 className="text-blue-600 text-4xl font-bold">About EyeQ</h2>
        <img
          src="https://via.placeholder.com/800x400"
          alt="EyeQ Overview"
          className="mx-auto my-6 rounded-lg"
        />
        <p className="text-lg">
          <strong>EyeQ</strong> is an advanced AI-powered forensic image and
          video enhancement software developed by{" "}
          <strong>ADRIG AI Technologies</strong>. EyeQ is designed to improve
          clarity and identify truthfulness in forensic analysis by leveraging
          features such as motion deblur, denoising, exposure correction, and
          facial restoration.
        </p>
      </section>

      <section id="features" className="container mx-auto my-10 text-center">
        <h2 className="text-blue-600 text-4xl font-bold">Features</h2>
        <div className="flex flex-wrap justify-around mt-6">
          {[
            {
              src: "https://via.placeholder.com/400x300",
              title: "Motion Deblur",
              desc: "Significantly reduce motion blur in images and videos for clearer analysis.",
            },
            {
              src: "https://via.placeholder.com/400x300",
              title: "Denoising",
              desc: "Remove noise from images and videos to enhance visual clarity.",
            },
            {
              src: "https://via.placeholder.com/400x300",
              title: "Exposure Correction",
              desc: "Adjust exposure levels to reveal more details in underexposed or overexposed images.",
            },
            {
              src: "https://via.placeholder.com/400x300",
              title: "Facial Restoration",
              desc: "Restore facial features for improved identification and analysis.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md w-80 m-4 hover:transform hover:-translate-y-2 transition-transform"
            >
              <img
                src={feature.src}
                alt={feature.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-blue-600 text-2xl font-bold mb-2">
                {feature.title}
              </h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="container mx-auto my-10 text-center"
      >
        <h2 className="text-blue-600 text-4xl font-bold">Applications</h2>
        <div className="flex flex-wrap justify-around mt-6">
          {[
            {
              src: "https://via.placeholder.com/200x200",
              title: "Forensic Analysis",
              desc: "Enhance forensic images and videos for better analysis and object recognition.",
            },
            {
              src: "https://via.placeholder.com/200x200",
              title: "Criminal Identification",
              desc: "Improve the quality of evidence to aid in criminal investigations.",
            },
            {
              src: "https://via.placeholder.com/200x200",
              title: "Surveillance Enhancement",
              desc: "Enhance surveillance footage for clearer monitoring and identification.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-md w-80 m-4 hover:transform hover:-translate-y-2 transition-transform"
            >
              <img
                src={step.src}
                alt={step.title}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-blue-600 text-2xl font-bold mb-2">
                {step.title}
              </h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="demo" className="container mx-auto my-10 text-center">
        <h2 className="text-blue-600 text-4xl font-bold">Book a Free Demo</h2>
        <img
          src="https://via.placeholder.com/800x400"
          alt="Free Demo"
          className="mx-auto my-6 rounded-lg"
        />
        <p className="text-lg">
          Experience the advanced features of EyeQ for yourself.{" "}
          <Link
            href="/contact-us"
            className="text-blue-600 hover:underline hover:underline-offset-4"
          >
            Book a Free Demo
          </Link>{" "}
          today and discover how EyeQ can enhance your forensic analysis
          capabilities.
        </p>
      </section>
    </div>

    // Sample - 2
    // <div>
    //   <header className="bg-pantone text-white py-6 text-center flex flex-col items-center space-y-6">
    //     <h1 className="text-4xl font-bold">EyeQ</h1>
    //     <RightArrowTransitionButton
    //       buttonText="Book a Free Demo"
    //       navigateTo="/contact-us"
    //     />
    //   </header>

    //   <section
    //     id="about"
    //     className="container mx-auto my-10 flex flex-col items-center space-y-6"
    //   >
    //     <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl text-center">
    //       <h2 className="text-blue-900 text-3xl font-bold mb-4">About EyeQ</h2>
    //       <img
    //         src="https://via.placeholder.com/800x400"
    //         alt="EyeQ Forensic Image Enhancement"
    //         className="mx-auto rounded-lg mb-4"
    //       />
    //       <p className="text-lg">
    //         <strong>EyeQ</strong> is an advanced AI-powered forensic image and
    //         video enhancement software developed by{" "}
    //         <strong>ADRIG AI Technologies</strong>. EyeQ is designed to improve
    //         clarity and identify truthfulness in forensic analysis by leveraging
    //         features such as motion deblur, denoising, exposure correction, and
    //         facial restoration.
    //       </p>
    //     </div>
    //     <div className="bg-blue-800 text-white p-6 rounded-lg shadow-md w-full max-w-3xl text-center">
    //       <p className="mb-4">
    //         See the difference EyeQ can make in your forensic analysis.
    //       </p>
    //       <a
    //         href="#demo"
    //         className="cta-button bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition-colors"
    //       >
    //         Book a Free Demo
    //       </a>
    //     </div>
    //   </section>

    //   <section id="features" className="container mx-auto my-10 text-center">
    //     <h2 className="text-blue-900 text-3xl font-bold mb-6">Features</h2>
    //     <div className="flex flex-wrap justify-around gap-6">
    //       {[
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Motion Deblur",
    //           desc: "Significantly reduce motion blur in images and videos for clearer analysis.",
    //         },
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Denoising",
    //           desc: "Remove noise from images and videos to enhance visual clarity.",
    //         },
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Exposure Correction",
    //           desc: "Adjust exposure levels to reveal more details in underexposed or overexposed images.",
    //         },
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Facial Restoration",
    //           desc: "Restore facial features for improved identification and analysis.",
    //         },
    //       ].map((feature, index) => (
    //         <div
    //           key={index}
    //           className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left"
    //         >
    //           <img
    //             src={feature.src}
    //             alt={feature.title}
    //             className="rounded-lg mb-4"
    //           />
    //           <p className="text-lg">
    //             <strong>{feature.title}:</strong> {feature.desc}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   <section
    //     id="applications"
    //     className="container mx-auto my-10 text-center"
    //   >
    //     <h2 className="text-blue-900 text-3xl font-bold mb-6">Applications</h2>
    //     <div className="flex flex-wrap justify-around gap-6">
    //       {[
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Forensic Analysis",
    //           desc: "Enhance forensic images and videos for better analysis and object recognition.",
    //         },
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Criminal Identification",
    //           desc: "Improve the quality of evidence to aid in criminal investigations.",
    //         },
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Surveillance Enhancement",
    //           desc: "Enhance surveillance footage for clearer monitoring and identification.",
    //         },
    //         {
    //           src: "https://via.placeholder.com/400x300",
    //           title: "Image Enhancement",
    //           desc: "Improve overall image quality for various forensic applications.",
    //         },
    //       ].map((application, index) => (
    //         <div
    //           key={index}
    //           className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/4 text-left"
    //         >
    //           <img
    //             src={application.src}
    //             alt={application.title}
    //             className="rounded-lg mb-4"
    //           />
    //           <p className="text-lg">
    //             <strong>{application.title}:</strong> {application.desc}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   <section id="demo" className="container mx-auto my-10 text-center">
    //     <h2 className="text-blue-900 text-3xl font-bold mb-6">
    //       Book a Free Demo
    //     </h2>
    //     <img
    //       src="https://via.placeholder.com/800x400"
    //       alt="Free Demo"
    //       className="mx-auto rounded-lg mb-6"
    //     />
    //     <p className="text-lg">
    //       Experience the advanced features of EyeQ for yourself.{" "}
    //       <Link
    //         href="/contact-us"
    //         className="text-blue-600 hover:underline hover:underline-offset-4"
    //       >
    //         Book a Free Demo
    //       </Link>{" "}
    //       today and discover how EyeQ can enhance your forensic analysis
    //       capabilities.
    //     </p>
    //   </section>
    // </div>
  )
}

export default EyeQContainer
