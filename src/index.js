import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import Routes from './routes';

const app = (
  <Router>
    <Routes />
  </Router>
);

ReactDOM.render(app, document.getElementById('root'));
