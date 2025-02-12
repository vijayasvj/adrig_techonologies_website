import React from "react";

const projects = [
  { name: "SS Pack Care", url: "https://sspackcare.com/" },
  { name: "Vedic Essentials", url: "https://vedicessentials.com/" },
  { name: "Temple and Town", url: "https://templeandtowns.in/" },
  { name: "Chargcom", url: "https://chargcom.in/" },
  { name: "Elan Enterprises", url: "https://elanenterprises.in" },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-900 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Web Development Clients</h1>
      <h3 className="text-center mb-8">Explore the websites we’ve crafted for our valued clients.</h3>
      <div className="space-y-10">
        {projects.map((project, index) => (
          <div key={index} className="w-full max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-3">{project.name}</h2>
            <div className="w-full h-[500px] overflow-hidden rounded-lg border border-gray-300 shadow-md transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
              <iframe
                src={project.url}
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
