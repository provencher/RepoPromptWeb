import React from 'react';
import { Layout, Menu, Button } from 'antd';
function Toolbar() {
  return (
    <header className="toolbar">
      <div className="logo">Repo Prompt</div>
      <nav>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <a href="#home">Home</a>
          </Menu.Item>
          <Menu.Item key="features">
            <a href="#features">Features</a>
          </Menu.Item>
          <Menu.Item key="screenshots">
            <a href="#screenshots">Screenshots</a>
          </Menu.Item>
          <Menu.Item key="download">
            <a href="#download" className="testflight-button">Join TestFlight</a>
          </Menu.Item>
        </Menu>
      </nav>
    </header>
  );
}

export default Toolbar;