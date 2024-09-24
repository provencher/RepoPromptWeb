// src/components/Toolbar.js

import React, { useState } from 'react';
import { Menu } from 'antd';
import { RocketOutlined } from '@ant-design/icons'; // Import desired icon
import './Toolbar.css';

function Toolbar() {
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="toolbar">
      <div className="logo">Repo Prompt</div>
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="nav-menu"
        theme="dark"
      >
        <Menu.Item key="home">
          <a href="#home">Home</a>
        </Menu.Item>
        <Menu.Item key="features">
          <a href="#features">Features</a>
        </Menu.Item>
        <Menu.Item key="screenshots">
          <a href="#screenshots">Screenshots</a>
        </Menu.Item>
        {/* Add more menu items as needed */}
      </Menu>
      <a href="/testflight" className="testflight-button">
        <RocketOutlined className="icon" />
        Join TestFlight
      </a>
    </div>
  );
}

export default Toolbar;