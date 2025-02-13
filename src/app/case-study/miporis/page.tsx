import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Leveraging AI to redefine compliance and risk management in a dynamic regulatory environment.</h1>
        <p className="mt-4 text-xl text-gray-600"></p> {/* You can add a subtitle here if needed */}
      </header>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Hero Image */}
        {/* <img
          src="" // Add your hero image URL here
          alt="Railway Operations"
          className="w-full h-64 sm:h-96 object-cover"
        /> */}

        {/* Content */}
        <div className="p-6 sm:p-12">
          {/* Section 1: The Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">MIPORIS, a leader in corporate governance solutions, faced mounting challenges in maintaining compliance with rapidly evolving regulatory standards like the UK Corporate Governance Code. Traditional governance methods, heavily reliant on manual processes, struggled to keep pace with increasing complexity, disconnected data systems, and rising control risks.</p>
            <p className="text-gray-700 leading-relaxed mt-4">Attorneys and compliance officers spent countless hours manually reviewing evidence and verifying compliance, leading to inefficiencies, delayed decision-making, and potential compliance risks. MIPORIS recognized the need for an AI-driven solution that could streamline these processes, enhance oversight, and provide real-time insights into corporate performance.</p>
          </section>

          {/* Section 2: The Solution with ADRIG AI Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution with ADRIG AI Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">ADRIG AI Technologies partnered with MIPORIS to develop a comprehensive SaaS application that leverages advanced AI and Machine Learning (ML) to automate compliance verification and risk management processes. The platform was designed to integrate seamlessly with existing systems, providing a unified view of compliance status across multiple jurisdictions and industries.</p>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6"> {/* Changed grid to single column */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">Key Features of the Solution:</h3>
                <ul className="text-gray-700 mt-2 list-disc pl-6">
                  <li><b>Automated Compliance Verification:</b>Attorneys upload compliance evidence, and the AI analyzes these inputs to ensure alignment with UK regulatory standards.</li>
                  <li><b>Risk Identification & Mitigation:</b> Advanced AI algorithms detect potential risks, simulate various scenarios, and recommend effective mitigation strategies.</li>
                  <li><b>Real-Time Monitoring & Reporting: </b> The platform continuously monitors compliance status and generates comprehensive, AI-powered reports for executives and boards.</li>
                  <li><b>Unified Data Integration: </b>  Consolidates data from fragmented systems, providing a holistic view of organizational control and performance.</li>
                </ul>
              </div>
            </div>
            {/* Added tech stack section */}
            <div className="mt-6 bg-gray-100 p-6 rounded-lg"> 
              <h3 className="font-semibold text-gray-900">Technological Stack:</h3>
              <ul className="text-gray-700 mt-2 list-disc pl-6">
                <li><b>Frontend:</b> Built using Next.js for a seamless and responsive user interface.</li>
                <li><b>Backend:</b> Python for robust AI and ML model integration.</li>
                <li><b>Security:</b> Implemented top-tier encryption protocols to protect sensitive corporate data.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
            <p className="text-gray-700 leading-relaxed">The implementation of our AI-powered governance platform brought transformative results to MIPORIS:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600">75%</p>
                <p className="text-gray-700">Reduction in Manual Compliance Efforts: Automating compliance verification significantly reduced the time and effort required from attorneys.</p>
              </div>
              <div className="text-center">
                {/* You might want to add a quantifiable metric here if available */}
                <p className="text-4xl font-bold text-indigo-600">Increased</p> 
                <p className="text-gray-700"> Accuracy in Compliance Reporting: AI-driven analysis minimized human errors and ensured precise compliance assessments.</p>
              </div>
              <div className="text-center">
                {/* You might want to add a quantifiable metric here if available */}
                <p className="text-4xl font-bold text-indigo-600">Enhanced</p>
                <p className="text-gray-700">Decision-Making: Real-time insights and predictive analytics empowered executives to make informed, proactive decisions.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Client Testimonial */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
            <blockquote className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 italic">"MIPORIS has been transformed by ADRIG AI Technologies' innovative approach. Their AI-driven platform has streamlined our compliance processes, reduced manual workload, and provided unparalleled insights into our governance framework. We are now more agile and proactive in managing corporate risks."</p>
              <p className="mt-4 font-semibold text-gray-900">— MIPORIS Team</p>
            </blockquote>
          </section>

          {/* Section 5: Why It Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">This project highlights ADRIG AI Technologies' ability to revolutionize traditional corporate governance practices through cutting-edge AI solutions. By automating compliance verification and enhancing risk management, we helped MIPORIS not only meet regulatory standards but also achieve a new level of operational efficiency and strategic oversight. </p>
          </section>


        </div>
      </div>

      
    </div>
  );
};

export default BlogPage;