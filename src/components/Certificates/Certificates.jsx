import React from "react";
import "./Certificates.css";
import cert1 from "../../assets/Images/Certificates/cer-1.jpg";
import cert2 from "../../assets/Images/Certificates/cer-2.jpg";
import cert3 from "../../assets/Images/Certificates/cer-3.jpg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Certificates = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      id: 1,
      image: cert1,
      name: "Sustainability Hackathon Certification",
      date: "Awarded: December 2023",
    },
    {
      id: 2,
      image: cert2,
      name: "HTML Certification",
      date: "Completed: June 2024",
    },
    {
      id: 3,
      image: cert3,
      name: "CSS Certification",
      date: "Completed: June 2024",
    },
  ];

  return (
    <section className="certificates-section" id="certificates">
      <h2 className="certificates-title">Certificates</h2>
      <p className="certificates-subtitle">
        Recognitions that showcase my journey of learning.
      </p>
      <div className="certificates-container">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.name}
              className="certificate-image"
            />
            <h3 className="certificate-name">{cert.name}</h3>
            <p className="certificate-date">{cert.date}</p>
          </div>
        ))}
      </div>
      <button
        className="projects-btn"
        onClick={() => navigate("/more-certificates")}
      >
        View More
      </button>
    </section>
  );
};

export default Certificates;
