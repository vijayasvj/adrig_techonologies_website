import CaseStudyLayout from "@/components/custom/case-study/CaseStudyLayout";

export default function BarronTechCaseStudy() {
  return (
    <CaseStudyLayout
      client="Barron Tech"
      title="Scaling IT Infrastructure for Growth"
      industry="Technology"
      location="USA"
      services="Cloud Migration, DevOps Implementation"
      duration="4 months"
      challenge="Barron Tech's infrastructure was not scalable, causing frequent outages and slow deployments."
      approach={{
        rootCause: "We identified inefficiencies in their CI/CD pipeline and outdated cloud architecture.",
        solution: "Migrated workloads to AWS, introduced containerized deployments.",
        execution: "Implemented DevOps best practices and automated infrastructure scaling."
      }}
      results={{
        quantitative1: "Deployment speed increased by 75%",
        quantitative2: "Reduced server costs by 30%",
        qualitative: "Improved developer productivity and system reliability"
      }}
      testimonial={{
        quote: "Our development cycles are now much faster and smoother thanks to their expertise.",
        author: "Jane Smith, CTO, Barron Tech"
      }}
    />
  );
}
