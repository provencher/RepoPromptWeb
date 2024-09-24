// File: src/App.js

import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import './App.css';

const { Footer } = Layout;

function App() {
  return (
    <Layout>
      <Toolbar />
      <Hero />
      <Features />
      <Screenshots />
      <Footer style={{ textAlign: 'center' }}>
        Repo Prompt ©2023 Created by YourName
      </Footer>
    </Layout>
  );
}

export default App;