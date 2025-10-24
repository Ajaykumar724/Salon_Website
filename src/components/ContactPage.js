// src/components/ContactPage.js
import React from 'react';
// Import icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css'; // We will create this

function ContactPage() {
//  const handleSubmit = (e) => {
//    e.preventDefault();
//    // Handle form submission logic here
//    alert('Message sent! (Form logic not yet implemented)');
//  };

  return (
    <div className="contact-page">
      <h1 className="contact-page-title">Contact Us</h1>
      <p className="contact-page-subtitle">
        We're here to help. Send us a message or give us a call.
      </p>

      {/* This container holds the two columns */}
      <div className="contact-container">
        {/* Column 1: Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Visit us at our salon or use the contact details below to book
            an appointment or ask a question.
          </p>
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <span>B_6, Surya Nagar, Prabhat Nagar, Meerut, Uttar Pradesh 250001</span>
          </div>
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <span>+91 7247854901</span>
          </div>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>np3439230@gmail.com</span>
          </div>
        </div>

        {/* Column 2: Contact Form
        <div className="contact-form-container">
          <h2>Send a Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                aria-label="Your Message"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        */}
      </div>
    </div>
  );
}

export default ContactPage;