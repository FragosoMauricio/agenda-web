import React from 'react';

import Form from '../Form/Form';
import Tabela from '../Table/Tabela';
import './App.css';

function App() {
  return (
    <div className='row'>
      <div className="col-4">
      <Form />
      </div>
      <div className="col-8">
      <Tabela />
      </div>
    </div>
  );
}

export default App;
