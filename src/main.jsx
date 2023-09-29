import React from 'react';
import ReactDOM from 'react-dom/client';

import MobileMenuProvider from './contexts/MobileMenuContext.jsx';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <MobileMenuProvider>
            <App />
        </MobileMenuProvider>
    </React.StrictMode>,
);
