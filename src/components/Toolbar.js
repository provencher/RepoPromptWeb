// src/components/Toolbar.js

import React, { useState, useEffect } from 'react';
import './Toolbar.css';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars } from 'react-icons/fa';
import { Drawer, Button } from 'antd';

const Toolbar = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;

      // Set isScrolled to true if scrolled down more than 50px
      if (position > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check in case the user refreshes the page while scrolled
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <>
      <nav className={`toolbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="toolbar-content">
          {/* Hamburger menu is visible on mobile */}
          <Button
            type="text"
            className="hamburger-button"
            onClick={showDrawer}
            icon={<FaBars size={24} />}
            aria-label="Open navigation menu"
          />

          {/* Title and Logo */}
          <div className="logo-title">
            <img src="/images/RepoPromptLogo_NoBG.png" alt="Repo Prompt Logo" className="logo" />
            <h1 className="title">Repo Prompt</h1>
          </div>

          {/* Navigation Links */}
          <div className="nav-items-container">
            <ul className="nav-items">
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>

          {/* Theme Switcher and Hamburger Menu */}
          <div className="theme-and-hamburger">
            {/* ThemeSwitcher is visible on desktop */}
            <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </nav>

      {/* Drawer for Mobile Navigation */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onCloseDrawer}
        visible={isDrawerVisible}
        bodyStyle={{ padding: '1rem' }}
      >
        <ul className="drawer-nav-items">
          <li><a href="#features" onClick={onCloseDrawer}>Features</a></li>
          <li><a href="#screenshots" onClick={onCloseDrawer}>Screenshots</a></li>
          <li><a href="#download" onClick={onCloseDrawer}>Download</a></li>
        </ul>
        {/* Theme Switcher inside Drawer */}
        <div className="drawer-theme-switcher">
          <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </Drawer>
    </>
  );
};

export default Toolbar;