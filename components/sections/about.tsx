"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
  "Docker",
  "Kubernetes",
  "Distributed Systems",
];

const experiences = [
  {
    role: "Software Engineer",
    company: "Azure PostgreSQL",
    period: "July 2023 - Present",
    description:
      "Working on the reliability and security of the offering, improving both Control Plane and Data Plane.",
  },
  {
    role: "Software Engineer Intern",
    company: "PagarBook",
    period: "Jan 2023 - May 2023",
    description:
      "Developed and maintained REST APIs for backend services. Worked with NestJS, TypeScript, PostgreSQL, AWS.",
  }
];

const bio = "I am passionate about building scalable and efficient systems. I am working as Software Engineer at Azure PostgreSQL, working on improving the reliability and security of the offering. My primary interests include backend design, distributed systems, databases and AI. I also have experience building robust web apps, working as freelance developer for multiple happy clients.";

export function About() {
  const [activeTab, setActiveTab] = useState<"skills" | "experience">("skills");

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[30%_2px_1fr] gap-12 items-center">
        {/* Title Column (Left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-200 mb-6">
            About
          </h2>
        </motion.div>

        {/* Vertical Separator */}
        <div className="hidden lg:block w-0.5 h-full min-h-[500px] bg-slate-700/50" />

        {/* Content Column (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-12">
            {bio}
          </p>

          <div className="flex w-full gap-8 mb-12 border-b border-slate-700/50">
            <button
              onClick={() => setActiveTab("skills")}
              className={cn(
                "pb-4 text-xl font-semibold transition-all relative hover:cursor-pointer",
                activeTab === "skills"
                  ? "text-gray-200"
                  : "text-gray-500 hover:text-gray-300"
              )}
            >
              Skills
              {activeTab === "skills" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={cn(
                "pb-4 text-xl font-semibold transition-all relative hover:cursor-pointer",
                activeTab === "experience"
                  ? "text-gray-200"
                  : "text-gray-500 hover:text-gray-300"
              )}
            >
              Experience
              {activeTab === "experience" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                />
              )}
            </button>
          </div>

          <div className="min-h-[400px]">
            {activeTab === "skills" ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-center rounded-full border border-slate-700/50 bg-slate-800/30 p-4 text-center text-base font-medium text-gray-300 transition-colors hover:border-cyan-500/50 hover:bg-slate-800/50 hover:text-cyan-400"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative border-l-2 border-slate-700/50 ml-3 space-y-12"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8"
                  >
                    <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-500" />
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-200">{exp.role}</h3>
                      <span className="text-sm font-mono text-cyan-400">{exp.period}</span>
                    </div>
                    
                    <div className="text-lg font-semibold text-gray-400 mb-4">
                      {exp.company}
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
