import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');

// Create a root - https://github.com/reactwg/react-18/discussions/5
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root
root.render(
  <App />
);