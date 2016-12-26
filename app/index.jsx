// index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

require('./scss/index.scss');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);