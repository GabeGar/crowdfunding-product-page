import React from 'react';
import ReactDOM from 'react-dom/client';

import MobileMenuProvider from './contexts/MobileMenuContext.jsx';
import App from './App.jsx';
import './index.css';
import ProjectSelectionContextProvider from './contexts/ProjectSelectionContext.jsx';
import PledgeContextProvider from './contexts/PledgeContext.jsx';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <ProjectSelectionContextProvider>
            <PledgeContextProvider>
                <MobileMenuProvider>
                    <App />
                </MobileMenuProvider>
            </PledgeContextProvider>
        </ProjectSelectionContextProvider>
    </React.StrictMode>,
);
