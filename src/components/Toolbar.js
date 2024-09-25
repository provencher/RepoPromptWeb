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
      setIsScrolled(position > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showDrawer = () => setIsDrawerVisible(true);
  const onCloseDrawer = () => setIsDrawerVisible(false);

  const testflightUrl = "https://docs.google.com/forms/d/e/1FAIpQLSc6_MPoiCtlJ8vdCZ_w6Mg2yC7CI7RtlMNinG82nbM14dJ9Dg/viewform";

  return (
    <>
      <nav className={`toolbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="toolbar-content">
          <Button
            type="text"
            className="hamburger-button"
            onClick={showDrawer}
            icon={<FaBars size={24} />}
            aria-label="Open navigation menu"
          />

          <div className="logo-title">
            <img src="/images/RepoPromptLogo_NoBG.png" alt="Repo Prompt Logo" className="logo" />
            <h1 className="title">Repo Prompt</h1>
          </div>

          <div className="nav-items-container">
            <ul className="nav-items">
              <li><a href="#demo">Demo</a></li> {/* Moved Demo link to top */}
              <li><a href="#features">Features</a></li>
              <li><a href={testflightUrl} target="_blank" rel="noopener noreferrer">Join Testflight</a></li>
            </ul>
          </div>

          <ThemeSwitcher isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </nav>

      <Drawer
        title="Menu"
        placement="right"
        onClose={onCloseDrawer}
        open={isDrawerVisible}
        bodyStyle={{ padding: '1rem' }}
      >
        <ul className="drawer-nav-items">
          <li><a href="#demo" onClick={onCloseDrawer}>Demo</a></li> {/* Ensure Demo link is present */}
          <li><a href="#features" onClick={onCloseDrawer}>Features</a></li>
          <li><a href={testflightUrl} target="_blank" rel="noopener noreferrer" onClick={onCloseDrawer}>Join Testflight</a></li>
        </ul>
      </Drawer>
    </>
  );
};

export default Toolbar;