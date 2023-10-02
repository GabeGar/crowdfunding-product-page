import React from 'react';
import ReactDOM from 'react-dom/client';

import MobileMenuProvider from './contexts/MobileMenuContext.jsx';
import App from './App.jsx';
import './index.css';
import ProjectSelectionContextProvider from './contexts/ProjectSelectionContext.jsx';
import ProjectContextProvider from './contexts/ProjectContext.jsx';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <ProjectSelectionContextProvider>
            <ProjectContextProvider>
                <MobileMenuProvider>
                    <App />
                </MobileMenuProvider>
            </ProjectContextProvider>
        </ProjectSelectionContextProvider>
    </React.StrictMode>,
);
