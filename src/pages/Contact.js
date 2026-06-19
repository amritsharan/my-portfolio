import React, { useEffect, useState } from 'react';
import './Contact.css';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_lqbw94v';
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_q5ynllp';
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '36CwI-o8XNcVcQ9m5';
const USE_API_PROXY = process.env.REACT_APP_USE_API_PROXY === 'true';

function Contact() {
  const email = 'amritsr2005@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!status.message) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      let response;
      const hasClientKeys = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

      if (hasClientKeys && !USE_API_PROXY) {
        response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: EMAILJS_SERVICE_ID,
            template_id: EMAILJS_TEMPLATE_ID,
            user_id: EMAILJS_PUBLIC_KEY,
            template_params: {
              name: formData.name,
              email: formData.email,
              title: `Portfolio inquiry from ${formData.name}`,
              time: new Date().toLocaleString(),
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: email,
              reply_to: formData.email,
              subject: `Portfolio inquiry from ${formData.name}`,
            },
          }),
        });
      } else {
        response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Server responded with an error status.');
      }

      setFormData({ name: '', email: '', message: '' });
      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon!',
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus({
        type: 'error',
        message: 'Message delivery failed. Please verify your Vercel Dashboard env vars are configured, or email me directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="container">
        <div className="contact-layout">
          <div className="contact-copy animate-up" style={{ animationDelay: '40ms' }}>
            <span className="eyebrow">Send Message</span>
            <h2>Let&apos;s talk about internships, projects, or collaboration.</h2>
            <p>
              If you&apos;re hiring, building, or just want to connect with another developer who enjoys learning by
              making things, I&apos;d be glad to hear from you.
            </p>
            <div className="contact-links">
              <a className="contact-link-card card" href={`mailto:${email}`}>
                <span>Email</span>
                <strong>{email}</strong>
              </a>
              <a className="contact-link-card card" href="https://github.com/amritsharan" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <strong>@amritsharan</strong>
              </a>
              <a className="contact-link-card card" href="https://www.linkedin.com/in/amrit-s-r-17a515309/" target="_blank" rel="noreferrer">
                <span>LinkedIn</span>
                <strong>Connect professionally</strong>
              </a>
            </div>
          </div>

          <div className="contact-card card animate-up" style={{ animationDelay: '100ms' }}>
            <h3>Send a quick message</h3>
            <p className="contact-note">Form automatically routes to my inbox through EmailJS.</p>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me a little about your idea or opportunity"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {status.message && (
        <div className={`contact-toast ${status.type}`} role="status" aria-live="polite">
          {status.message}
        </div>
      )}
    </div>
  );
}

export default Contact;
