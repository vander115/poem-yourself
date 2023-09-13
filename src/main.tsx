import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { PoemProvider } from './hooks/poem';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <PoemProvider>
            <Home />
            <GlobalStyle />
        </PoemProvider>
    </React.StrictMode>,
);
