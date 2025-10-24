import React, { useState } from "react";
import "./More-Certificates.css";
import cert1 from "../../../assets/Images/Certificates/cer-1.jpg";
import cert2 from "../../../assets/Images/Certificates/cer-2.jpg";
import cert3 from "../../../assets/Images/Certificates/cer-3.jpg";
import cert4 from "../../../assets/Images/Certificates/cer-4.png";
import cert5 from "../../../assets/Images/Certificates/cer-5.jpg";
import cert6 from "../../../assets/Images/Certificates/cer-6.jpg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MoreCertificates = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    { 
      id: 1, 
      image: cert1,
      name: "Sustainability Hackathon Certification", 
      date: "Awarded: December 2023" 
    },
    {
      id: 2, 
      image: cert2, 
      name: "HTML Certification", 
      date: "Completed: June 2024" 
    },
    { 
      id: 3, 
      image: cert3, 
      name: "CSS Certification", 
      date: "Completed: June 2024" 
    },
    { 
      id: 4, 
      image: cert4, 
      name: "JavaScript Certification", 
      date: "Completed: June 2024" 
    },
    { 
      id: 5, 
      image: cert5, 
      name: "English Typewriting Certification", 
      date: "Completed: February 2024" 
    },
    { 
      id: 6, 
      image: cert6, 
      name: "Excel for Beginners Certification", 
      date: "Completed: June 2024" 
    },
    { 
      id: 6, 
      image: cert6, 
      name: "Python Full Stack Certification", 
      date: "Completed: October 2025" 
    },
  ];

  return (
    <section className="certificates-section" id="more-certificates">
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
              onClick={() => setSelectedImage(cert.image)}
            />
            <h3 className="certificate-name">{cert.name}</h3>
            <p className="certificate-date">{cert.date}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Full size" className="full-image" />
        </div>
      )}
      <HashLink smooth to="/#certificates">
      <button className="certificate-btn" onClick={() => navigate(-1)}>
        Back
      </button>
      </HashLink>
    </section>
  );
};

export default MoreCertificates;
  