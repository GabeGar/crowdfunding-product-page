import React from 'react';
import ReactDOM from 'react-dom/client';

import ProjectSelectionContextProvider from './contexts/ProjectSelectionContext.tsx';
import ProjectContextProvider from './contexts/ProjectContext.js';
import MobileMenuProvider from './contexts/MobileMenuContext.tsx';
import App from './App.js';
import './index.css';

const root = document.querySelector('#root');

if (root) {
    ReactDOM.createRoot(root as HTMLDivElement).render(
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
} else {
    throw new Error('Root with the id of root, was not found.');
}
