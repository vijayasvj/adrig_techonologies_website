const partnerships = [
  { name: "VIT Chennai", program: "VIT Chennai Workshop" },
  { name: "SRM Kattankulathur", program: "SRM Kattankulathur Mentorship Program" },
  { name: "St. Joseph’s Group of Institutions", program: "St. Joseph’s College Workshop" },
  { name: "Sairam College of Engineering", program: "Sairam College Judging Session" },
  { name: "DMI Group of Institutions", program: "DMI Group Educational Partnership" },
];

export default function EdTechPartnerships() {
  return (
    <div className="p-6 flex flex-col items-center gap-6 min-h-screen bg-gray-50 justify-center">
      {partnerships.map((partner, index) => (
        <div key={index} className="shadow-xl border border-gray-300 rounded-2xl p-6 text-center flex flex-col items-center bg-white w-full max-w-md">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900">{partner.name}</h3>
          <span className="bg-blue-500 text-white px-6 py-2 text-sm rounded-full text-center">
            {partner.program}
          </span>
        </div>
      ))}
    </div>
  );
}
