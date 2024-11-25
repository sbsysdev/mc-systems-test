// react
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// app
import { App } from './app';
// styles
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
