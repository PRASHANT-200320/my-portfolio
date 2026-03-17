// src/components/Projects.jsx
import React from "react";
import SectionTitle from "./SectionTitle";

import aigpt from "./aigpt.png";
import videocall from "./videocall.png";
import zerodha from "./zerodha.png";
import airbnb from "./airbnb.png";

const projectsData = [
  {
    title: "AI GPT Chat Application",
    description:
      "A full-stack AI chat application with authentication and chat history using MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    image: aigpt,
    github: "https://github.com/PRASHANT-200320/AIGPT",
    live: "https://aigpt-sigma.vercel.app/chat",
  },
  {
    title: "Real-Time Video Calling App",
    description:
      "A peer-to-peer video calling app using WebRTC and Socket.io for real-time communication.",
    tech: ["React", "Node.js", "WebRTC", "Socket.io"],
    image: videocall,
    github: "https://github.com/PRASHANT-200320/My-Video-Call",
    live: "",
  },
  {
    title: "Zerodha Trading Dashboard",
    description:
      "A simulated trading dashboard for portfolio tracking and order management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: zerodha,
    github: "https://github.com/PRASHANT-200320/ZERODHA-CLONE",
    live: "",
  },
  {
    title: "Airbnb (Wanderlust)",
    description:
      "A property booking platform with authentication and listing management.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: airbnb,
    github: "https://github.com/PRASHANT-200320/Wanderlust",
    live: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#282828] py-20">
      <div className="container mx-auto px-4">
        <SectionTitle>Projects</SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full  object-cover "
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#1DB954] text-black text-xs px-3 py-1 rounded-full font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1DB954] font-semibold hover:underline"
                  >
                    GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1DB954] font-semibold hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

{/* Yaha button add karo */}
<div className="text-center mt-12">
  <a
    href="https://github.com/PRASHANT-200320"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1DB954] text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition"
  >
    View More Projects
  </a>
</div>
      </div>
    </section>
  );
};

export default Projects;