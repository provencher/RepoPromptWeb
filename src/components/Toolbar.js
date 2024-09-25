// src/components/Toolbar.js

import React, { useState, useEffect, useRef } from 'react';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import ThemeSwitcher from './ThemeSwitcher';
import './Toolbar.css';

function Toolbar() {
  const [visible, setVisible] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const heroRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight || 500; // Fallback to 500px if hero not found
      const scrollPosition = window.scrollY;
      const newOpacity = Math.min(scrollPosition / heroHeight, 1);
      setOpacity(newOpacity);
    };
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroRef.current = heroElement;
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const handleMenuClick = (e) => {
    // Scroll to the section smoothly
    const section = document.getElementById(e.key);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setVisible(false); // Close the drawer on mobile after clicking
  };

  return (
    <header className={`toolbar ${opacity > 0 ? 'visible' : ''}`} style={{ backgroundColor: `rgba(248, 184, 78, ${opacity})` }}>
      <div className="logo">
        <img src="/images/RepoPromptLogo_NoBG.png" alt="Repo Prompt Logo" className="toolbar-logo" />
        Repo Prompt
      </div>
      <nav className="desktop-menu">
        <Menu mode="horizontal" className="nav-menu" onClick={handleMenuClick}>
          <Menu.Item key="hero">Home</Menu.Item>
          <Menu.Item key="features">Features</Menu.Item>
          <Menu.Item key="screenshots">Screenshots</Menu.Item>
          <Menu.Item key="footer">Contact</Menu.Item>
        </Menu>
      </nav>
      <div className="mobile-menu">
        <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" onClick={handleMenuClick}>
            <Menu.Item key="hero">Home</Menu.Item>
            <Menu.Item key="features">Features</Menu.Item>
            <Menu.Item key="screenshots">Screenshots</Menu.Item>
            <Menu.Item key="footer">Contact</Menu.Item>
          </Menu>
        </Drawer>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

export default Toolbar;