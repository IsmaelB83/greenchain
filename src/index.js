// Node imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// Own components
import App from './components/App';
// Own modules
import GreenchainContextProvider from './context/Context';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GreenchainContextProvider>
            <App />
        </GreenchainContextProvider>
    </React.StrictMode>
);