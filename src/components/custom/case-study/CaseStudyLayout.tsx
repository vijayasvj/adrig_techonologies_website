"use client"

import { motion } from "framer-motion";

interface CaseStudyProps {
  client: string;
  title: string;
  industry: string;
  location: string;
  services: string;
  duration: string;
  challenge: string;
  approach: {
    rootCause: string;
    solution: string;
    execution: string;
  };
  results: {
    quantitative1: string;
    quantitative2: string;
    qualitative: string;
  };
  testimonial: {
    quote: string;
    author: string;
  };
}

export default function CaseStudyLayout({
  client,
  title,
  industry,
  location,
  services,
  duration,
  challenge,
  approach,
  results,
  testimonial,
}: CaseStudyProps) {
  return (
    <div className="p-8 max-w-[90%] mx-auto">
      {/* Title */}
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {client} Case Study: {title}
      </motion.h1>

      <motion.p 
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {industry} | {location}
      </motion.p>

      {/* Animated Sections */}
      {[
        { heading: "Services Provided", content: services },
        { heading: "Duration", content: duration },
        { heading: "The Challenge", content: challenge },
      ].map((section, index) => (
        <motion.div
          key={section.heading}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-2xl font-semibold mb-2">{section.heading}</h2>
          <p>{section.content}</p>
        </motion.div>
      ))}

      {/* Our Approach - Staggered Animation */}
      <motion.div 
        className="mb-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>

        {Object.entries(approach).map(([key, value]) => (
          <motion.div
            key={key}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mb-4"
          >
            <h3 className="text-xl font-medium mt-2 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
            <p>{value}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-semibold mb-2">The Results</h2>
        <ul className="list-disc list-inside">
          <li>{results.quantitative1}</li>
          <li>{results.quantitative2}</li>
          <li>{results.qualitative}</li>
        </ul>
      </motion.div>

      {/* Client Testimonial */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-semibold mb-2">Client Testimonial</h2>
        <blockquote className="italic text-gray-700 border-l-4 border-gray-300 pl-4">
          "{testimonial.quote}"  
          <br />— {testimonial.author}
        </blockquote>
      </motion.div>

      {/* Why It Matters */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-2">Why It Matters</h2>
        <p>
          This isn’t just a win for {client}—it’s proof of how our team brings real, tangible change. Whether you’re facing similar challenges or something entirely different, our approach is designed to dig deep, think smart, and deliver results.
        </p>
      </motion.div>
    </div>
  );
}
