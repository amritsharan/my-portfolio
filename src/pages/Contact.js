import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    // You could also send this data to an email API or Firebase later
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="container">
        <h2 className="center">📬 Contact Me</h2>
        <div className="contact-card card animate-up" style={{animationDelay:'80ms'}}>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
            <textarea name="message" rows="5" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
            <button type="submit">Send Message</button>
          </form>
          <p className="contact-note">Or reach me via GitHub: <a href="https://github.com/amritsharan" target="_blank" rel="noreferrer">@amritsharan</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
