// src/components/InteractiveDemo.js
import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';
import './InteractiveDemo.css';

const customTreeTheme = {
  tree: {
    base: {
      listStyle: 'none',
      backgroundColor: '#f8f9fa',
      margin: 0,
      padding: '10px',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
    },
    node: {
      base: {
        position: 'relative',
        padding: '5px 0', // Adjusted padding
      },
      link: {
        cursor: 'pointer',
        position: 'relative',
        padding: '0px 5px',
        display: 'block',
        color: '#333',
        textDecoration: 'none',
      },
      activeLink: {
        background: '#e0f7fa'
      },
      toggle: {
        base: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'top',
          marginLeft: '-5px',
          height: '24px',
          width: '24px'
        },
        wrapper: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '-7px 0 0 -7px',
          height: '14px'
        },
        height: 14,
        width: 14,
        arrow: {
          fill: '#333',
          strokeWidth: 0
        }
      },
      header: {
        base: {
          display: 'inline-block',
          verticalAlign: 'top',
          color: '#333'
        },
        connector: {
          width: '2px',
          height: '12px',
          borderLeft: 'solid 2px #ccc',
          borderBottom: 'solid 2px #ccc',
          position: 'absolute',
          top: '0px',
          left: '-21px'
        },
        title: {
          lineHeight: '24px',
          verticalAlign: 'middle',
          fontSize: '1rem',
        }
      },
      subtree: {
        listStyle: 'none',
        paddingLeft: '19px'
      }
    }
  }
};

const fileTreeData = {
  name: 'RepoPromptWeb',
  toggled: true,
  children: [
    { name: 'build', toggled: true },
    {
      name: 'public',
      toggled: true,
      children: [{ name: 'index.html' }, { name: 'manifest.json' }]
    },
    {
      name: 'src',
      toggled: true,
      children: [
        { name: 'App.js' },
        { name: 'App.css' },
        { name: 'index.js' },
        {
          name: 'components',
          toggled: true,
          children: [
            { name: 'Toolbar.css' },
            { name: 'HowItWorks.js' },
            { name: 'Features.js' }
          ]
        }
      ]
    },
    { name: 'package.json' },
    { name: 'README.md' }
  ]
};

function InteractiveDemo() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [instructions, setInstructions] = useState('');
  const [tokenUsage, setTokenUsage] = useState(0);

  const onToggle = (node, toggled) => {
    if (node.children) {
      node.toggled = toggled;
    }
  };

  const handleFileClick = (node) => {
    if (!node.children) {
      const isAlreadySelected = selectedFiles.some(file => file.name === node.name);
      if (!isAlreadySelected) {
        setSelectedFiles((prev) => [...prev, { name: node.name, size: '~0.3KB', percentage: '5%' }]);
      }
    }
  };

  const updateTokenUsage = (text) => {
    const wordCount = text.trim().split(/\s+/).length;
    setTokenUsage(Math.round(wordCount * 1.3));
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
    updateTokenUsage(e.target.value);
  };

  return (
    <section id="interactive-demo" className="interactive-demo">
      <h2>Try It Out</h2>
      <div className="demo-container">
        <div className="sidebar">
          <Treebeard
            data={fileTreeData}
            onToggle={onToggle}
            onClick={handleFileClick}
            style={customTreeTheme}
          />
        </div>
        <div className="main-content">
          <div className="editor">
            <h3>Instructions</h3>
            <textarea
              value={instructions}
              onChange={handleInstructionsChange}
              placeholder="Enter your instructions here..."
            />
          </div>
          <div className="selected-files">
            <h3>Selected Files</h3>
            <div className="file-list">
              {selectedFiles.map((file, index) => (
                <div className="file-card" key={index}>
                  <h4>{file.name}</h4>
                  <p>Size: {file.size} ({file.percentage})</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="demo-footer">
        <div className="token-usage">
          <span>Token Usage: ~{tokenUsage} Tokens</span>
        </div>
        <button className="ai-chat-button">Start AI Chat</button>
      </div>
    </section>
  );
}

export default InteractiveDemo;