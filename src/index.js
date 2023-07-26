import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import ColorProvider from './Context/ColorProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);


