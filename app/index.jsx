// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

require('./scss/index.scss');

ReactDOM.render(
  <App title="My React Starter App" />,
  document.getElementById('root')
);