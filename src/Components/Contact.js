import React, { useState } from "react";
import "../styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to your email using Formspree
    fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => alert("Message Sent Successfully👍"))
      .catch(() => alert("Error sending message😯"));
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      
      {/* Contact Details */}
      <p>Email: <a href="mailto:priyaadp25@gmail.com">priyaadp25@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/dhanapriyaa-s-a-8849b2257" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/dhanapriyaa-s-a-8849b2257</a></p>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Location📍"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.52869972657!2d-74.25986779092922!3d40.6976700654941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bca5896fd7%3A0xa0b3d86df38bb5a0!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1617696346559!5m2!1sen!2sin"

          width="500"
          height="500"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;