// src/components/Education.jsx
import React from 'react';
import SectionTitle from './SectionTitle';

// Education data
const educationData = [
  {
    institution: "Rajasthan Technical University",
    degree: "B.Tech in Computer Science",
    year: "2023 - 2027",
    details: ["Graduated with distinction", "Current CGPA: 7.5"]
  },
  {
    institution: "Government Senior Secondary School, Jhalrapatan",
    degree: "High School",
    year: "2021 - 2022",
    details: ["Science Stream", "Percentage: 89%"]
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-[#1F1F1F] py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Education</SectionTitle>

        <div className="relative border-l-2 border-[#1DB954] ml-4">
          {educationData.map((edu, idx) => (
            <div key={idx} className="mb-10 ml-6 relative">
              {/* Timeline circle */}
              <span className="absolute -left-6 top-0 w-4 h-4 bg-[#1DB954] rounded-full border-2 border-gray-800"></span>

              {/* Card */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-1">{edu.degree}</h3>
                <p className="text-gray-300 font-medium mb-2">{edu.institution} | {edu.year}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="hover:text-white transition-colors duration-200">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;