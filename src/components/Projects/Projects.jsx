import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import projectImg_1 from "../../assets/Images/Projects/pro-7.jpg";
import projectImg_2 from "../../assets/Images/Projects/pro-1.webp";
import projectImg_3 from "../../assets/Images/Projects/pro-8.jpg";

import { useNavigate } from "react-router-dom"; 

const Project = () => {
  const navigate = useNavigate(); 

  return (
    <section className="project-section" id="projects">
      <h2 className="projects-title">Featured Projects</h2>
      <p className="projects-subtitle-">
        A showcase of my recent work and personal projects
      </p>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img src={projectImg_1} alt="Portfolio Website" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">LibraryHub</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> React, CSS, Django, SQLite
            </p>
            <p className="project-about">
              Developed a full-stack digital library platform for borrowing and reserving books with chatbot assistance.
            </p>
            <a
              href="https://github.com/Kowshikk03/LibraryHub"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>
        
        {/* Project 2 */}
        <div className="project-card">
          <img src={projectImg_2} alt="E-Commerce Website" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">E-Commerce Website</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> HTML, CSS, Bootstrap, JavaScript, Django, MySQL
            </p>
            <p className="project-about">
              A full-stack food ordering application with user authentication and cart management.
            </p>
            <a
              href="https://github.com/Kowshikk03/E-Commerce/tree/master"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src={projectImg_3} alt="Blog Platform" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">Food Ordering Website</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> React, CSS, Bootstrap
            </p>
            <p className="project-about">
              Built responsive food ordering system with real-time cart and order placement features..
            </p>
            <a
              href="https://github.com/Kowshikk03/Food-Delight"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>
      </div>

      <button className="projects-btn" onClick={() => navigate("/more-projects")}>
        View More
      </button>
    </section>
  );
};

export default Project;
