import React from 'react';
import { Card, Row, Col } from 'antd';
import './Features.css';

const features = [
  { title: 'Compose', description: 'Select files and folders for your prompt\'s context.', index: 0 },
  { title: 'Chat', description: 'Talk to the AI about your files and let it modify them.', index: 1 },
  { title: 'Review', description: 'Analyze all created, modified, and deleted files.', index: 2 },
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
                            onClick={() => onFeatureClick(feature.index)}
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