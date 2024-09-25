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
              <li><a href="#features">Features</a></li>
              <li><a href="#screenshots">Screenshots</a></li>
              <li><a href="#download">Download</a></li>
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
          <li><a href="#features" onClick={onCloseDrawer}>Features</a></li>
          <li><a href="#screenshots" onClick={onCloseDrawer}>Screenshots</a></li>
          <li><a href="#download" onClick={onCloseDrawer}>Download</a></li>
        </ul>
      </Drawer>
    </>
  );
};

export default Toolbar;