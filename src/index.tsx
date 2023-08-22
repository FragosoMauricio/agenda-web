import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import Form from './components/Form/Form';
import Tabela from './components/Table/Tabela';
import './index.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Tabela />
  </React.StrictMode>
);

