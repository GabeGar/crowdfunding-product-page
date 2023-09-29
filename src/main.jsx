import React from 'react';
import ReactDOM from 'react-dom/client';

import MobileMenuProvider from './contexts/MobileMenuContext.jsx';
import App from './App.jsx';
import './index.css';
import ProjectSelectionContextProvider from './contexts/ProjectSelectionContext.jsx';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <ProjectSelectionContextProvider>
            <MobileMenuProvider>
                <App />
            </MobileMenuProvider>
        </ProjectSelectionContextProvider>
    </React.StrictMode>,
);
