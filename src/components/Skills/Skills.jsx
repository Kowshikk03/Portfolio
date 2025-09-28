"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiBootstrap,
} from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" size={50} /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" size={50} /> },
    { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" size={50} /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" size={50} /> },
    { name: "React", icon: <FaReact color="#61DAFB" size={50} /> },
    { name: "Python", icon: <FaPython color="#3776AB" size={50} /> },
    { name: "Django", icon: <SiDjango color="#092E20" size={50} /> },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={50} /> },
    { name: "SQLite", icon: <SiSqlite color="#003B57" size={50} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={50} /> },
    { name: "Git", icon: <FaGit color="#F05032" size={50} /> },
    { name: "GitHub", icon: <FaGithub color="#181717" size={50} /> },
    { name: "Firebase", icon: <SiFirebase color="#FFCA28" size={50} /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I use to bring ideas to life
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
