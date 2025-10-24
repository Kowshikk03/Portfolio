import React from "react";
import { FaGithub } from "react-icons/fa";
import projectImg_1 from "../../../assets/Images/Projects/pro-7.jpg";
import projectImg_2 from "../../../assets/Images/Projects/pro-1.webp";
import projectImg_3 from "../../../assets/Images/Projects/pro-8.jpg";
import projectImg_4 from "../../../assets/Images/Projects/pro-3.jpg";
import projectImg_5 from "../../../assets/Images/Projects/pro-4.webp";
import projectImg_6  from "../../../assets/Images/Projects/pro-5.jpg";
import projectImg_7 from "../../../assets/Images/Projects/pro-6.webp";
import projectImg_8 from "../../../assets/Images/Projects/pro-2.png";
import projectImg_9 from "../../../assets/Images/Projects/pro-9.jpg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MoreProjects = () => {
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

        {/* Project 4 */}
        <div className="project-card">
          <img src={projectImg_4} alt="Weather App" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">Weather App</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> HTML, CSS, JavaScript, Django, SQLite
            </p>
            <p className="project-about">
              A weather forecasting app that provides real-time weather updates using an external API.
            </p>
            <a
              href="https://github.com/Kowshikk03"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <img src={projectImg_5} alt="Another E-Commerce Website" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">Budget Tracker</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> HTML, Bootstrap, JavaScript
            </p>
            <p className="project-about">
              Developed an expense tracker with functionality to add, update, and track daily expenses.
            </p>
            <a
              href="https://github.com/Kowshikk03"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Project 6 */}
        <div className="project-card">
          <img src={projectImg_6} alt="Portfolio Website" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">Smart Home  Website</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> HTML, CSS, JavaScript
            </p>
            <p className="project-about">
              Developed a Smart Home website with structured sections including navigation, hero, services, about, device management, and product gallery with cart options.
            </p>
            <a
              href="https://github.com/Kowshikk03"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Project 7 */}
        <div className="project-card">
          <img src={projectImg_7} alt="Weather App" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">Students Record Management</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> React, Bootstrap, Firebase
            </p>
            <p className="project-about">
              Developed a Student Record Management application with features for adding, editing, and deleting student information.
            </p>
            <a
              href="https://github.com/Kowshikk03/Form-Validation"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Project 8 */}
        <div className="project-card">
          <img src={projectImg_8} alt="Weather App" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">Form Validation</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> HTML, Bootstrap, JavaScript
            </p>
            <p className="project-about">
              Developed and integrated form validation to verify user inputs, preventing invalid data submissions.
            </p>
            <a
              href="https://github.com/Kowshikk03/E-commerce-Product-Page"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

        {/* Project 9 */}
        <div className="project-card">
          <img src={projectImg_9} alt="Weather App" className="project-image" />
          <div className="project-content">
            <h3 className="project-name">E-commerce-Product-Page</h3>
            <p className="project-tools">
              <strong>Tools Used:</strong> HTML, CSS, Bootstrap, JavaScript
            </p>
            <p className="project-about">
             Built an E-commerce Product Page enabling users to browse, and add products to the cart with dynamic UI updates.
            </p>
            <a
              href="https://github.com/Kowshikk03"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          </div>
        </div>

      </div>
      <HashLink smooth to="/#projects" >
      <button className="projects-btn" onClick={() => navigate(-1)}>
        Back
      </button>
      </HashLink>
    </section>
  );
};

export default MoreProjects;
