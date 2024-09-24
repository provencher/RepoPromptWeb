// File: src/App.js

import React from 'react';
import { Layout } from 'antd';
import Toolbar from './components/Toolbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Toolbar />
      <Hero />
      <Features />
      <Screenshots />
      <Footer style={{ textAlign: 'center' }}>
        Some Footer Content Here
      </Footer>
    </Layout>
  );
}

export default App;