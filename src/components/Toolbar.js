// src/components/Toolbar.js

import React, { useState, useEffect } from 'react';
import './Toolbar.css';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars } from 'react-icons/fa';
import { Drawer, Button } from 'antd';

const Toolbar = ({ isDarkMode, toggleTheme }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);

      // Define the scroll threshold for fade-in effect
      const fadeStart = 50; // Start fading in after 50px scroll
      const fadeEnd = 150;  // Complete fade-in by 150px scroll

      if (position <= fadeStart) {
        setOpacity(0);
      } else if (position >= fadeEnd) {
        setOpacity(1);
      } else {
        // Calculate opacity based on scroll position between fadeStart and fadeEnd
        const opacityValue = (position - fadeStart) / (fadeEnd - fadeStart);
        setOpacity(opacityValue);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showTitle = true; // Always show the title

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setIsDrawerVisible(false);
  };

  return (
    <nav
      className={`toolbar ${isDarkMode ? 'dark' : ''}`}
      style={{ opacity: opacity, transition: 'opacity 0.5s ease-in-out' }}
    >
      <div className="toolbar-content">
        <div className="logo-title">
          <img src="/images/RepoPromptLogo_NoBG.png" alt="Repo Prompt Logo" className="logo" />
          {showTitle && <h1 className="title">Repo Prompt</h1>}
        </div>
        <ul className="nav-items">
          <li><a href="#features">Features</a></li>
          <li><a href="#screenshots">Screenshots</a></li>
          <li><a href="#download">Download</a></li>
        </ul>
        <div className="theme-and-hamburger">
          {/* ThemeSwitcher is hidden on mobile via CSS */}
          <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          {/* Hamburger menu is visible only on mobile via CSS */}
          <Button
            type="text"
            className="hamburger-button"
            onClick={showDrawer}
            icon={<FaBars size={24} />}
            aria-label="Open navigation menu"
          />
        </div>
      </div>
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
          <li className="drawer-theme-switcher">
            <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </li>
        </ul>
      </Drawer>
    </nav>
  );
};

export default Toolbar;