// File: src/components/Features.js

import React from 'react';
import { Card, Row, Col } from 'antd';
import './Features.css';

const features = [
  { title: 'Compose', description: 'Select files and folders for your prompt\'s context.' },
  { title: 'Chat', description: 'Talk to the AI about your files and let it modify them.' },
  { title: 'Review', description: 'Analyze all created, modified, and deleted files.' },
];

function Features() {
  return (
    <div className="features">
      <Row gutter={[16, 16]}>
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} lg={6} xl={4} key={index}>
            <Card title={feature.title} headStyle={{ color: '#FFFDD0' }}>
              <p>{feature.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Features;