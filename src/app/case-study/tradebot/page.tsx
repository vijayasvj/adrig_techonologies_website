import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Empowering Automated Trading at TradingGenie</h1>
        <p className="mt-4 text-xl text-gray-600">Transforming trading strategies with AI-driven indicators and automated algorithms.</p>
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
            <p className="text-gray-700 leading-relaxed">TradingGenie, an innovative trading startup, amassed extensive historical market data and developed proprietary trading indicators. However, they faced challenges in building a comprehensive platform that could integrate these indicators, allow users to train models based on personal inputs, and automate trading processes. Manual strategy testing and execution were time-consuming, inefficient, and prone to human error, limiting the scalability of their trading operations.</p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution with ADRIG AI Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">ADRIG AI Technologies partnered with TradingGenie to design and develop an end-to-end SaaS platform that integrates advanced AI and machine learning algorithms for trading strategy optimization and automation. The platform provides users with tools to backtest and forward-test their strategies, connect to live trading accounts, and automate trade executions based on optimized models.</p>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">Key Features of the Solution:</h3>
                <ul className="text-gray-700 mt-2 list-disc pl-5">
                  <li>Custom Indicator Integration: Developed a flexible architecture that integrates TradingGenie's proprietary indicators with AI models for enhanced strategy formulation.</li>
                  <li>AI-Driven Strategy Optimization: Users can train models using historical data and personal inputs to optimize their trading strategies.</li>
                  <li>Backtesting and Walk-Forward Testing: The platform provides comprehensive backtesting and forward-testing tools, enabling users to validate their strategies before live execution.</li>
                  <li>Automated Algo Trading: Seamlessly connects to users' trading accounts, automating trade executions based on optimized strategies.</li>
                  <li>Performance Analytics: Real-time monitoring and detailed analytics help users track their trading performance and refine strategies.</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900">Technological Stack:</h3>
                <ul className="text-gray-700 mt-2 list-disc pl-5">
                  <li>Frontend: Built with Next.js for a responsive and intuitive user interface.</li>
                  <li>Backend: Python for AI model development and Node.js for robust API management.</li>
                  <li>Database: MongoDB for efficient data storage and retrieval.</li>
                  <li>Trading Integration: Connected to APIs of popular trading platforms for real-time execution.</li>
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
                <p className="text-4xl font-bold text-indigo-600">Enhanced Trading Efficiency</p>
                <p className="text-gray-700">Automated strategies reduced manual intervention, improving execution speed and accuracy.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600">Optimized Profitability</p>
                <p className="text-gray-700">AI-driven strategy optimization led to higher returns on investment and minimized trading risks.</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-indigo-600">Scalable Trading Operations</p>
                <p className="text-gray-700">The platform enabled traders to scale their operations without increasing manual workload.</p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h2>
            <blockquote className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 italic">"ADRIG AI Technologies has revolutionized our approach to trading. The AI-driven platform not only optimized our proprietary indicators but also provided our users with powerful tools to automate and enhance their trading strategies. This partnership has been pivotal in our growth."</p>
              <p className="mt-4 font-semibold text-gray-900">— TradingGenie Team</p>
            </blockquote>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-gray-700 leading-relaxed">This project showcases ADRIG AI Technologies' expertise in merging AI with fintech solutions to create powerful, automated trading platforms. By addressing TradingGenie's unique challenges, we delivered a solution that enhances trading efficiency, optimizes profitability, and empowers users to take full control of their trading strategies.</p>
          </section>
        </div>
      </div>

      
    </div>
  );
};

export default BlogPage;