import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Leveraging technology to enhance transparency, accountability, and operational efficiency.</h1>
        <p className="mt-4 text-xl text-gray-600"></p>
      </header>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Hero Image */}
        {/* <img
          src=""
          alt=""
          className="w-full h-64 sm:h-96 object-cover"
        /> */}

        {/* Content */}
        <div className="p-6 sm:p-12">
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-700 leading-relaxed">Barron Tech Serv Pvt Ltd, a leading service provider, faced persistent challenges in managing employee travel reimbursements. The company reimbursed employees at a rate of ₹3 per kilometer traveled. However, the absence of a robust tracking mechanism led to widespread discrepancies. Employees frequently reported inflated travel distances, leading to fraudulent claims and unnecessary financial drain on the company.</p>
            <p className="text-gray-700 leading-relaxed mt-4">The lack of real-time tracking not only affected financial accuracy but also created inefficiencies in overall employee management. Manual processes were time-consuming and prone to errors, making it difficult for management to maintain transparency and accountability.</p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution with ADRIG AI Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">To address these challenges, ADRIG AI Technologies developed a comprehensive application tailored to Barron Tech's needs. The solution combined real-time GPS tracking with an advanced employee management system, ensuring accurate travel data and streamlined administrative processes.</p>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">Key Features of the Solution:</h3>
                <ul className="text-gray-700 mt-2 list-disc pl-5">
                  <li>Real-Time GPS Tracking: The application tracks employees' movements in real time, providing precise data on distances traveled.</li>
                  <li>Automated Reimbursement Calculations: The system calculates reimbursements based on actual distances traveled, eliminating the potential for fraudulent claims.</li>
                  <li>Comprehensive Employee Management: Integrated features for tracking attendance, leaves, and performance metrics.</li>
                  <li>User-Friendly Interface: A responsive web application that offers easy navigation for both employees and management.</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">Technological Stack:</h3>
                <ul className="text-gray-700 mt-2 list-disc pl-5">
                  <li>Frontend: Next.js for a seamless and interactive user experience.</li>
                  <li>Backend: Node.js and Python for robust data handling and real-time processing.</li>
                  <li>Database: MongoDB for efficient data storage and retrieval.</li>
                  <li>Security: JWT Authentication to ensure secure access and data integrity.</li>
                </ul>
              </div>
              {/* Empty div to maintain grid structure */}
              <div></div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600">Eliminated</p>
                <p className="text-gray-700"> Fraudulent Claims: Real-time tracking ensured that only legitimate travel distances were reimbursed.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600">Enhanced </p>
                <p className="text-gray-700">Financial Accuracy: Automated calculations reduced manual errors, leading to precise financial management.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600">Improved</p>
                <p className="text-gray-700">Operational Efficiency: Streamlined employee management processes saved time and resources.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
            <blockquote className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 italic">"The employee tracking and management system developed by ADRIG AI Technologies has revolutionized our internal operations. It has not only curbed fraudulent claims but also streamlined our entire reimbursement and management process."</p>
              <p className="mt-4 font-semibold text-gray-900">— Barron Tech Management</p>
            </blockquote>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">This project demonstrates ADRIG AI Technologies' ability to deliver tailored solutions that address specific operational challenges. By leveraging advanced tracking technologies and automation, we helped Barron Tech Serv Pvt Ltd enhance transparency, improve financial accuracy, and achieve greater operational efficiency.</p>
          </section>
        </div>
      </div>

      
    </div>
  );
};

export default BlogPage;