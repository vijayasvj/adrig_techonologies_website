import CaseStudyLayout from "@/components/custom/case-study/CaseStudyLayout";

export default function SouthernRailwaysCaseStudy() {
  return (
    <CaseStudyLayout
      client="Southern Railways"
      title="Optimizing Rail Management with AI"
      industry="Transportation"
      location="India"
      services="AI-driven Scheduling, Predictive Maintenance"
      duration="6 months"
      challenge="Southern Railways struggled with outdated scheduling systems, causing delays and inefficiencies."
      approach={{
        rootCause: "We analyzed existing workflows and identified bottlenecks in scheduling and maintenance.",
        solution: "Implemented AI-driven predictive scheduling and real-time maintenance alerts.",
        execution: "Deployed the system in phases, trained staff, and optimized performance based on feedback."
      }}
      results={{
        quantitative1: "Reduced delays by 40%",
        quantitative2: "Saved $200,000 in annual maintenance costs",
        qualitative: "Enhanced passenger experience and operational efficiency"
      }}
      testimonial={{
        quote: "The AI-driven system transformed our operations. Delays have dropped significantly!",
        author: "John Doe, Operations Manager, Southern Railways"
      }}
    />
  );
}
