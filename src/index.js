import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css'
const el = <App />
//ReactDOM.render(el, document.getElementById('root'))
const container = document.getElementById('root');
ReactDOM.render(el, container);