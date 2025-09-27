import React from "react";
import "./About.css";
import profileImg from "../../assets/Images/cartoon.png"; 
import {
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const About = () => {
  return (
    <section className="about-container" id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-subtitle">
        Turning ideas into code and challenges into opportunities.
      </p>

      <div className="about-content">
        <div className="about-profile">
          <div className="avatar-circle">
            <img src={profileImg} alt="Profile" className="avatar-img" />
          </div>

          <h3 className="name">Shri Kowshikk Raja</h3>
          <p className="role">Python Full-Stack Developer</p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/kowshikk_03?igsh=ZmltMHB5amQyMmZv"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-pill instagram"
            >
              <Instagram className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/share/16CHshAVhp/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-pill facebook"
            >
              <Facebook className="social-icon" />
            </a>
            <a
              href="https://github.com/Kowshikk03"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-pill github"
            >
              <Github className="social-icon" />
            </a>
            <a
              href="https://x.com/kowshikk__03?t=aZ7HQmBCC3e3y75i-s42UQ&s=08"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="social-pill twitter"
            >
              <Twitter className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/shrikowshikkraja03"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-pill linkedin"
            >
              <Linkedin className="social-icon" />
            </a>
          </div>
        </div>

        <div className="about-details">
          <p className="intro">
            I'm a passionate full-stack developer dedicated to crafting digital
            solutions that seamlessly connect design and technology. I enjoy
            building applications that are not only functional but also deliver
            outstanding user experiences.
          </p>
          <p className="intro">
            Outside of coding, I love exploring emerging technologies,
            contributing to open-source projects, and sharing insights with the
            developer community. I’m committed to continuous learning and
            staying at the cutting edge of web development.
          </p>

          <div className="features">
            <div className="feature-card">
              <Code className="icon" />
              <div>
                <h4>Clean Code</h4>
                <p>
                  Writing maintainable, scalable, and efficient code is my
                  passion.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <Palette className="icon" />
              <div>
                <h4>Creative Design</h4>
                <p>
                  Blending technical skills with creative vision to build
                  beautiful interfaces.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <Zap className="icon" />
              <div>
                <h4>Performance</h4>
                <p>
                  Optimizing for speed and user experience in every project I
                  build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
