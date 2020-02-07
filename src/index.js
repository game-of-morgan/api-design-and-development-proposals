import React from 'react';
import ReactDOM from 'react-dom';
import App from './ui/containers/App/App';

// Load markdown files into asset manifest
try {
    require('./markdown/' + /^.*$/);
} catch (err) {}

ReactDOM.render(<App />, document.getElementById('root'));
