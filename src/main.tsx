import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { AppProvider } from './hooks';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppProvider>
            <Home />
            <GlobalStyle />
        </AppProvider>
    </React.StrictMode>,
);
