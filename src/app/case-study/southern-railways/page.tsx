import React from 'react';
import Image from 'next/image';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">A Transformative Journey in Optimizing Railway Operations, Improving Efficiency, and Boosting Profitability.</h1>
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
            <p className="text-gray-700 leading-relaxed">Southern Railways is a cornerstone of transportation in Southern India, responsible for connecting millions of passengers and facilitating the movement of goods across vast distances. However, the organization faced persistent challenges in its maintenance scheduling processes. Maintenance tasks were traditionally scheduled during midnight hours to minimize disruptions to passenger services. Unfortunately, securing labor for these late-night operations proved difficult for field engineers. This led to irregular maintenance timings that, while often approved by management due to practical realities, resulted in frequent, unplanned train stoppages.</p>
            <p className="text-gray-700 leading-relaxed mt-4">These unscheduled disruptions caused cascading effects, delaying not only passenger services but also the lucrative freight operations that Southern Railways relies on for revenue. The inefficiencies in maintenance scheduling not only impacted operational reliability but also posed significant financial losses. Recognizing the critical need for a solution, Southern Railways approached VIT University, which facilitated a collaboration with ADRIG AI Technologies to develop a comprehensive solution.</p>
          </section>

          {/* Section 2: The Solution with ADRIG AI Technologies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution with ADRIG AI Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">To address these challenges, ADRIG AI Technologies designed and implemented a cutting-edge end-to-end application tailored specifically to the needs of Southern Railways. The goal was to streamline the maintenance scheduling process, improve operational efficiency, and maximize revenue from freight operations.</p>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6"> {/* Changed grid to single column */}
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">Key Features of the Solution:</h3>
                <ul className="text-gray-700 mt-2 list-disc pl-6">
                  <li><b>Request & Approval Workflow:</b> Field engineers can now submit maintenance requests specifying their preferred times. These requests are reviewed and approved by managers, ensuring that operational feasibility and on-the-ground realities are both considered.</li>
                  <li><b>Optimization Algorithm:</b> Once a request is approved, the admin triggers our advanced optimization algorithm. This algorithm leverages Natural Language Processing (NLP) to analyze work descriptions, assess task priorities, and identify the most efficient scheduling windows.</li>
                  <li><b>Intelligent Scheduling:</b> The system factors in multiple parameters, including train-free windows, the timing of existing maintenance activities, and priority levels of different tasks. For example, if maintenance is scheduled from Station A to B, the algorithm ensures that subsequent maintenance from B to C is coordinated efficiently to minimize disruptions. This holistic approach significantly reduces the likelihood of unplanned train stoppages.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-gray-100 p-6 rounded-lg"> {/* Added tech stack section */}
              <h3 className="font-semibold text-gray-900">Technological Stack:</h3>
              <ul className="text-gray-700 mt-2 list-disc pl-6">
                <li><b>Frontend:</b> Built using Next.js for a seamless and responsive user interface.</li>
                <li><b>Backend:</b> Powered by Node.js and Python, ensuring robust data processing and algorithm execution.</li>
                <li><b>Database:</b> MongoDB for efficient data management and retrieval.</li>
                <li><b>Security:</b> Implemented JWT Authentication to ensure secure access and data integrity.</li>
              </ul>
            </div>
          </section>

          {/* Section 3: Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
            <p className="text-gray-700 leading-relaxed">The implementation of our solution yielded remarkable results, transforming the operational landscape of Southern Railways:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600">250%</p>
                <p className="text-gray-700">Increase in Freight Train Profits: Optimized scheduling freed up more slots for freight operations, significantly boosting revenue.</p>
              </div>
              <div className="text-center">
                {/* You might want to add a quantifiable metric here if available */}
                <p className="text-4xl font-bold text-indigo-600">Improved</p> 
                <p className="text-gray-700">Reduced Passenger Train Disruptions: The intelligent scheduling system minimized unplanned halts, improving punctuality and passenger satisfaction.</p>
              </div>
              <div className="text-center">
                {/* You might want to add a quantifiable metric here if available */}
                <p className="text-4xl font-bold text-indigo-600">Streamlined</p>
                <p className="text-gray-700">Streamlined Maintenance Processes: The new system enhanced transparency, accountability, and overall operational efficiency.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Client Testimonial */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
            <blockquote className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 italic">"The new scheduling system developed by ADRIG AI Technologies has revolutionized our maintenance operations. It has not only improved efficiency but also significantly increased our freight revenues. The collaboration with ADRIG AI has been a game-changer for Southern Railways."</p>
              <p className="mt-4 font-semibold text-gray-900">— Southern Railways Management</p>
            </blockquote>
          </section>

          {/* Section 5: Why It Matters */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">This project underscores ADRIG AI Technologies' commitment to transforming operational challenges into streamlined, profitable solutions. By leveraging advanced AI algorithms and optimization techniques, we addressed Southern Railways' immediate pain points and laid the foundation for broader implementation across the Indian Railways network. Our solution demonstrates how technology can drive efficiency, enhance service reliability, and unlock new revenue streams in the transportation sector.</p>
          </section>


        </div>
      </div>

      {/* Gallery Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Gallery</h2>
        Here are some moments from our meetings with the Southern Railways team, capturing the collaborative spirit and dedication that made this project a success:

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-3">
          {[1, 2, 3].map((item) => (
            <Image
              key={item}
              src={`/images/${item}.png`}
              alt={`Meeting with Southern Railways - ${item}`}
              className="w-full h-64 object-cover rounded-lg"
            />

          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;