import React from 'react';
import ReactDOM from 'react-dom';
import ProfileStore from './store'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App profile={new ProfileStore()} />
, document.getElementById('root'));
registerServiceWorker();
