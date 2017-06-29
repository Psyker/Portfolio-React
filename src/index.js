import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory();
ReactDOM.render(
    <Router history={customHistory}>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
