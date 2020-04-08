import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world! vrajesh!!!');
ReactDOM.render(element, document.getElementById('root'));
serviceWorker.unregister();