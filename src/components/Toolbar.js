import React from 'react';
import { Layout, Menu } from 'antd';
import './Toolbar.css';

const { Header } = Layout;

function Toolbar() {
  return (
    <Header className="toolbar">
      <div className="logo">Repo Prompt</div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><a href="#home">Home</a></Menu.Item>
        <Menu.Item key="2"><a href="#features">Features</a></Menu.Item>
        <Menu.Item key="3"><a href="#screenshots">Screenshots</a></Menu.Item>
        <Menu.Item key="4"><a href="#join">Join TestFlight</a></Menu.Item>
      </Menu>
    </Header>
  );
}

export default Toolbar;