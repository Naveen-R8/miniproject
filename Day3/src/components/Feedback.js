import React from 'react';
import './feedback.css';
import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <div className="contact">
      <h2>Tell your feedback</h2>
      <p>Have a question, feedback, or need assistance? Reach out to us using the contact details or the form below, and our friendly team will be happy to assist you.</p>
      <div className="contact-info">
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Feedback;