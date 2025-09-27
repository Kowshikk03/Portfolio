import React, { useRef } from "react";
import "./Contact.css";
import { Mail, MapPin, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_a9639ne",   // service ID
        "template_inmzz0m",  // template ID
        form.current,
        "Ov1r6vxPj4olCrTSO"    // public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Ready to start your next project? Let's create something amazing together.
      </p>

      <div className="contact-container">
        <div className="contact-left">
          <h3>Let's Talk</h3>
          <p>
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you're a company looking to hire, or someone looking to collaborate, 
            I'd love to hear from you.
          </p>

          <div className="contact-info">
            <div className="info-box">
              <Mail className="icon" />
              <div>
                <p>Email</p>
                <span>shrikowshikkraja2703@gmail.com</span>
              </div>
            </div>

            <div className="info-box">
              <Linkedin className="icon" />
              <div>
                <p>LinkedIn</p>
                <span>
                  <a
                    href="https://www.linkedin.com/in/shrikowshikkraja03"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#cbd5e1" }}
                  >
                    Shri Kowshikk Raja V
                  </a>
                </span>
              </div>
            </div>

            <div className="info-box">
              <MapPin className="icon" />
              <div>
                <p>Location</p>
                <span>Erode, Tamil Nadu, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <h3 className="card-title">Send Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input name="user_name" id="name" type="text" placeholder="Your Name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input name="user_email" id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="subject">Subject</label>
                <input name="subject" id="subject" type="text" placeholder="What's this about?" required />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Tell me about your project..." rows="5" required></textarea>
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <div className="scroll-top-wrapper">
        <a href="#home" className="footer-btn">↑</a>
      </div>
    </section>
  );
};

export default Contact;
