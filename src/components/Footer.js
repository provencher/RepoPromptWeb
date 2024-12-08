import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Repo Prompt. All rights reserved.</p>
        <a href="mailto:contact@repoprompt.com" className="footer-contact">Contact Us</a>
      </div>
    </footer>
  );
}

export default Footer;