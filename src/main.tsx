import React from 'react';
import ReactDOM from 'react-dom/client';

import ProjectSelectionContextProvider from './contexts/ProjectSelectionContext.tsx';
import ProjectContextProvider from './contexts/ProjectContext.js';
import MobileMenuProvider from './contexts/MobileMenuContext.tsx';
import App from './App.js';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root') as HTMLDivElement).render(
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
