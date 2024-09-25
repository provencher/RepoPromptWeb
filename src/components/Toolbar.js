// src/components/Toolbar.js
import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Toolbar.css';

const Toolbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="toolbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
      <div className="logo">
        <img src="/images/RepoPromptLogoFull.png" alt="Repo Prompt Logo" className="h-8" />
      </div>
      <div className="toolbar-buttons hidden md:flex space-x-4">
        <button className="cta-button">Home</button>
        <button className="cta-button">Features</button>
        <button className="cta-button">Screenshots</button>
        <button className="cta-button">Reviews</button>
        {/* Add more buttons as needed */}
      </div>
      <div className="hidden md:flex">
        <ThemeSwitcher />
      </div>
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <button className="cta-button">Home</button>
          <button className="cta-button">Features</button>
          <button className="cta-button">Screenshots</button>
          <button className="cta-button">Reviews</button>
          <ThemeSwitcher />
        </div>
      )}
    </div>
  );
};

export default Toolbar;