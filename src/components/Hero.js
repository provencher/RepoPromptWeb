import React from 'react';
import { Row, Col, Button } from 'antd';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <Row justify="center" align="middle">
        <Col xs={24} sm={20} md={16} lg={12}>
          <h1>Repo Prompt</h1>
          <p>Augment your AI-assisted coding flow, without replacing your IDE</p>
          <Button type="primary" size="large" href="#join">Join TestFlight</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Hero;