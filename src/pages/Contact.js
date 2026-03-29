import React, { useEffect, useMemo, useState } from 'react';
import './Contact.css';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

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

  const isConfigured = useMemo(
    () => Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY),
    []
  );

  useEffect(() => {
    if (!status.message) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setStatus({ type: '', message: '' });
    }, 3200);

    return () => window.clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isConfigured) {
      setStatus({
        type: 'error',
        message: 'EmailJS is not configured yet. Add your EmailJS keys to enable this form.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
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

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Unable to send message right now.');
      }

      setFormData({ name: '', email: '', message: '' });
      setStatus({
        type: 'success',
        message: 'Message sent successfully.',
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown EmailJS error';
      console.error('EmailJS send failed:', errorMessage);
      setStatus({
        type: 'error',
        message: `Message could not be sent. ${errorMessage}`,
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
            <p className="contact-note">Messages are sent directly to my inbox through EmailJS.</p>
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
                {isSubmitting ? 'Sending...' : 'Send via Email'}
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
