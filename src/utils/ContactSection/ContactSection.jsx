import React, { useState } from "react";
import "./ContactSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/{form_id}", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setStatus("Thank you for your message! We’ll be in touch soon.");
    } else {
      setStatus("Oops! There was an error submitting the form.");
    }
  };

  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>Any Questions or remarks? Just write us a message</p>
      <div className="contact-container">
        {/* Left side: Contact Information */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            Fill up the form and our team will get back to you within 24 hours
          </p>
          <div className="contact-details">
            <p>
              <FontAwesomeIcon icon={faPhone} /> +1234567890
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> example@email.com
            </p>
          </div>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Instagram" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Right side: Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Write your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send Message</button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
