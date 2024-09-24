import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Repo Prompt. All rights reserved.</p>
    </footer>
  );
}

export default Footer;