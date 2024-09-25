// src/components/Features.js

import React from 'react';
import { Card, Row, Col } from 'antd';
import './Features.css';

const features = [
  { title: 'Compose', description: 'Select files and folders for your prompt\'s context. Use saved prompts and a repository map to guide the AI\'s output', index: 0 },
  { title: 'Chat', description: 'Iterate on your files, or learn about how they work, with full control over the context.', index: 1 },
  { title: 'Review', description: 'Review all AI made changes, file by file, and approve changes, piecemeal or in bulk.', index: 2 },
];

function Features({ onFeatureClick }) {
    return (
        <div id="features" className="features">
            <Row gutter={[16, 16]} className="feature-row">
                {features.map((feature) => (
                    <Col xs={24} sm={12} md={8} key={feature.index}>
                        <Card
                            title={feature.title}
                            headStyle={{ cursor: 'pointer' }}
                            className="feature-card"
                            onClick={() => onFeatureClick && onFeatureClick(feature.index)}
                        >
                            <p>{feature.description}</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Features;