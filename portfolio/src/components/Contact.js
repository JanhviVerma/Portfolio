import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>I'm always excited to connect with fellow developers, potential collaborators, or anyone interested in technology. Feel free to reach out!</p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="https://github.com/JanhviVerma" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/janhvi-verma" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;