import React from "react";
import SectionTitle from "./SectionTitle";

const programmingSkills = [
  { name: "JavaScript", icon: "https://www.svgrepo.com/show/349419/javascript.svg" },
  { name: "Java", icon: "https://www.svgrepo.com/show/452234/java.svg" }
];

const frontendSkills = [
  { name: "React.js", icon: "https://www.svgrepo.com/show/452092/react.svg" },
  { name: "Redux", icon: "https://www.svgrepo.com/show/303557/redux-logo.svg" },
  { name: "HTML5", icon: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" },
  { name: "CSS3", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  { name: "Bootstrap", icon: "https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" }
];

const backendSkills = [
  { name: "Node.js", icon: "https://www.svgrepo.com/show/354119/nodejs-icon.svg" },
  { name: "Express.js", icon: "https://www.svgrepo.com/show/330398/express.svg" },
  { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
  { name: "JWT Authentication", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" }
];

const databaseSkills = [
  { name: "MongoDB", icon: "https://www.svgrepo.com/show/331488/mongodb.svg" },
  { name: "SQL", icon: "https://www.svgrepo.com/show/331760/sql-database-generic.svg" }
];

const technologies = [
  { name: "Socket.io", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkW2Tigbsqm4S-LtA94VWzJ7OiqbGD41tXEQ&s" },
  { name: "WebRTC", icon: "https://webrtc.github.io/webrtc-org/assets/images/webrtc-logo-vert-retro-255x305.png" }
];

const csFundamentals = [
  { name: "Data Structures", icon: "https://cdn-icons-png.flaticon.com/512/2721/2721292.png" },
  { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" }
];

const tools = [
  { name: "Git", icon: "https://www.svgrepo.com/show/452210/git.svg" },
  { name: "GitHub", icon: "https://www.svgrepo.com/show/452211/github.svg" },
  { name: "Docker", icon: "https://www.svgrepo.com/show/452192/docker.svg" },
  { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" }
];

const deployment = [
  { name: "Vercel", icon: "https://images.ctfassets.net/crb83veve8xb/2YfNwMlyl1U0DLVXRgL8TB/9e8474e083f2ba01a296343d84f2282d/vercel_thumbnail.webp" },
  { name: "Render", icon: "https://pbs.twimg.com/profile_images/2002125723621060608/nxgDW055.jpg" }
];

const SkillGrid = ({ skills }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center mb-10">
    {skills.map((skill) => (
      <div
        key={skill.name}
       className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-3 hover:scale-105"      >
        <img src={skill.icon} alt={skill.name} className="h-12 mx-auto mb-4" />
        <p className="font-semibold text-white">{skill.name}</p>
      </div>
    ))}
  </div>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-[#191414]">
    <div className="container mx-auto px-4">
      <SectionTitle>My Skills</SectionTitle>

      <h3 className="text-white text-2xl font-bold mb-6">Programming Languages</h3>
      <SkillGrid skills={programmingSkills} />

      <h3 className="text-white text-2xl font-bold mb-6">Frontend Development</h3>
      <SkillGrid skills={frontendSkills} />

      <h3 className="text-white text-2xl font-bold mb-6">Backend Development</h3>
      <SkillGrid skills={backendSkills} />

      <h3 className="text-white text-2xl font-bold mb-6">Database</h3>
      <SkillGrid skills={databaseSkills} />

      <h3 className="text-white text-2xl font-bold mb-6">Technologies</h3>
      <SkillGrid skills={technologies} />

      <h3 className="text-white text-2xl font-bold mb-6">Computer Science Fundamentals</h3>
      <SkillGrid skills={csFundamentals} />

      <h3 className="text-white text-2xl font-bold mb-6">Developer Tools</h3>
      <SkillGrid skills={tools} />

      <h3 className="text-white text-2xl font-bold mb-6">Deployment & Cloud</h3>
      <SkillGrid skills={deployment} />
    </div>
  </section>
);

export default Skills;